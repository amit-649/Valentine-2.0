import { MemoryPhoto } from './types';

export const APP_CONFIG = {
  partnerName: "My Love", // Personalized name
  valentineDate: "2025-02-14",
  musicUrl: "music/bg-music.mp3", // Local background music
};

export const MEMORIES: MemoryPhoto[] = [
  {
    id: 1,
    url: `https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=600&auto=format&fit=crop&v=${Math.random()}`, // Random couple photo
    caption: "Beautiful Moment ❤️",
    rotation: -2
  },
  {
    id: 2,
    url: `https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=600&auto=format&fit=crop&v=${Math.random()}`,
    caption: "Unforgettable Memory ✨",
    rotation: 3
  },
  {
    id: 3,
    url: `https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=600&auto=format&fit=crop&v=${Math.random()}`,
    caption: "Just Us 💑",
    rotation: -1
  },
  {
    id: 4,
    url: `https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=600&auto=format&fit=crop&v=${Math.random()}`,
    caption: "Forever & Always ♾️",
    rotation: 2
  }
];

export const LETTER_CONTENT = `
My Dearest,

From the moment you came into my life, everything felt warmer. 
Your smile is my favorite sunrise, and your laugh is my favorite song.

I made this little space just for us, to remind you of how much you mean to me.
You are my best friend, my confident, and my greatest adventure.

Forever yours,
Your Secret Admirer 🖤
`;