import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<{ id: number; left: number; duration: number; delay: number }[]>([]);

  useEffect(() => {
    // Generate static hearts on mount to avoid hydration mismatch, then animate them
    const newHearts = Array.from({ length: 20 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // percentage
      duration: Math.random() * 5 + 10, // 10-15s duration
      delay: Math.random() * 10,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute bottom-[-50px] text-romantic-200 opacity-60"
          initial={{ y: 0, x: 0, opacity: 0 }}
          animate={{
            y: -1200, // Move up screen
            x: [0, 10, -10, 0], // Slight wobble
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            delay: heart.delay,
            ease: "linear",
          }}
          style={{ left: `${heart.left}%`, fontSize: `${Math.random() * 20 + 10}px` }}
        >
          ❤
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;