export interface MemoryPhoto {
  id: number;
  url: string;
  caption: string;
  rotation: number;
}

export interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}