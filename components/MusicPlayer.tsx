import React, { useState, useRef, useEffect } from 'react';
import { Music, VolumeX } from 'lucide-react';
import { APP_CONFIG } from '../constants';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(APP_CONFIG.musicUrl);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((e) => console.log("Playback failed:", e));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <button
      onClick={togglePlay}
      className="fixed top-4 right-4 z-50 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-md text-romantic-500 hover:bg-romantic-100 transition-colors"
      aria-label="Toggle music"
    >
      {isPlaying ? <Music size={24} className="animate-pulse" /> : <VolumeX size={24} />}
    </button>
  );
};

export default MusicPlayer;