import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MEMORIES } from '../constants';
import { Lock, Sparkles } from 'lucide-react';

const PhotoCard: React.FC<{ photo: typeof MEMORIES[0]; index: number }> = ({ photo, index }) => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <motion.div
      className="relative bg-white p-3 shadow-lg rounded-sm cursor-pointer overflow-hidden transform transition-all duration-300 hover:rotate-1"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      onClick={() => setIsRevealed(true)}
      whileHover={{ scale: 1.02, zIndex: 10 }}
    >
      <div className="relative overflow-hidden rounded-sm aspect-[4/5] bg-gray-900">
        {/* The "Curtain" Overlay */}
        <AnimatePresence>
          {!isRevealed && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0 z-20 flex flex-col items-center justify-center p-4 bg-romantic-900 text-white"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <Lock size={32} className="mb-3 text-romantic-200" />
              </motion.div>
              <p className="font-handwriting text-xl text-romantic-100 font-bold mb-1">Top Secret</p>
              <p className="text-xs uppercase tracking-widest text-romantic-300">Tap to Reveal</p>

              {/* Decorative sparkles */}
              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-4 right-4"
              >
                <Sparkles size={16} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* The Photo */}
        <img
          src={photo.url}
          alt={photo.caption}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <motion.div
        animate={{ opacity: isRevealed ? 1 : 0, y: isRevealed ? 0 : 10 }}
        transition={{ duration: 0.5 }}
      >
        <p className="mt-3 text-center font-handwriting text-romantic-500 text-lg">
          {photo.caption}
        </p>
      </motion.div>
    </motion.div>
  );
};

const PhotoGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-4">
      {MEMORIES.map((photo, index) => (
        <PhotoCard key={photo.id} photo={photo} index={index} />
      ))}
    </div>
  );
};

export default PhotoGrid;