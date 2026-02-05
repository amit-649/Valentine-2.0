import React, { useState, useRef, useEffect } from 'react';
import { Music, VolumeX } from 'lucide-react';
import { APP_CONFIG } from '../constants';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  // Track if we have successfully started playing at least once to avoid duplicate triggers
  const hasStartedRef = useRef(false);

  useEffect(() => {
    // Create audio instance only once
    const audio = new Audio(APP_CONFIG.musicUrl);
    audio.loop = true;
    audio.currentTime = 12; // Start from 12s
    audio.volume = 0.5;
    audioRef.current = audio;

    // Named function for the fallback listener so we can remove it easily
    const handleDocumentClick = () => {
      if (hasStartedRef.current) return; // Already playing? Don't try again.

      audio.play().then(() => {
        setIsPlaying(true);
        hasStartedRef.current = true;
      }).catch(e => console.log("Interaction play failed", e));

      // Remove listener immediately to prevent future triggers
      cleanupListeners();
    };

    const cleanupListeners = () => {
      document.removeEventListener('click', handleDocumentClick);
      document.removeEventListener('touchstart', handleDocumentClick);
      document.removeEventListener('keydown', handleDocumentClick);
    };

    // 1. Try Autoplay immediately
    const startAutoplay = async () => {
      try {
        await audio.play();
        setIsPlaying(true);
        hasStartedRef.current = true;
      } catch (err) {
        console.log("Autoplay blocked. Waiting for interaction.");
        // 2. If blocked, wait for ANY interaction
        document.addEventListener('click', handleDocumentClick);
        document.addEventListener('touchstart', handleDocumentClick);
        document.addEventListener('keydown', handleDocumentClick);
      }
    };

    startAutoplay();

    // Cleanup on unmount
    return () => {
      cleanupListeners();
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = (e: React.MouseEvent) => {
    // CRITICAL: Stop propagation so this click doesn't trigger the document listener
    e.stopPropagation();

    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause(); // Just pause, don't reset time
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(e => console.error("Manual play failed", e));
      setIsPlaying(true);
      hasStartedRef.current = true; // Mark as started so background listeners don't fire

      // If we manually toggled, we definitely don't need the fallback listeners anymore
      // (Function isn't accessible here directly, but the ref check in handleDocumentClick handles safety,
      // or we could move cleanupListeners to a ref if needed, but the hasStartedRef check is sufficient safety)
    }
  };

  return (
    <button
      onClick={togglePlay}
      className="fixed top-4 right-4 z-50 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-md text-romantic-500 hover:bg-romantic-100 transition-colors"
      aria-label={isPlaying ? "Mute music" : "Play music"}
    >
      {isPlaying ? <Music size={24} className="animate-pulse" /> : <VolumeX size={24} />}
    </button>
  );
};

export default MusicPlayer;