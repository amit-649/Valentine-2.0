import { MemoryPhoto } from './types';

export const APP_CONFIG = {
  partnerName: "My Love", // Personalized name
  valentineDate: "2025-02-14",
  musicUrl: "https://cdn.pixabay.com/download/audio/2022/10/25/audio_d0825313a0.mp3?filename=romantic-piano-124558.mp3", // Royalty free placeholder
};

export const MEMORIES: MemoryPhoto[] = [
  {
    id: 1,
    url: "https://picsum.photos/400/500?random=1",
    caption: "Our first coffee date ☕",
    rotation: -2
  },
  {
    id: 2,
    url: "https://picsum.photos/400/500?random=2",
    caption: "That time we got lost 😂",
    rotation: 3
  },
  {
    id: 3,
    url: "https://picsum.photos/400/500?random=3",
    caption: "Sunset at the beach 🌅",
    rotation: -1
  },
  {
    id: 4,
    url: "https://picsum.photos/400/500?random=4",
    caption: "Just being silly 🤪",
    rotation: 2
  }
];

export const LETTER_CONTENT = `
My Dearest,

From the moment you came into my life, everything felt warmer. 
Your smile is my favorite sunrise, and your laugh is my favorite song.

I made this little space just for us, to remind you of how much you mean to me.
You are my best friend, my confidant, and my greatest adventure.

Forever yours,
Your Favorite Person
`;