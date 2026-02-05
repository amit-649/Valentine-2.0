import React from 'react';
import { motion } from 'framer-motion';
import { MEMORIES } from '../constants';

const PhotoGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 p-4">
      {MEMORIES.map((photo, index) => (
        <motion.div
          key={photo.id}
          className="relative bg-white p-3 shadow-lg rounded-sm"
          initial={{ opacity: 0, y: 50, rotate: 0 }}
          whileInView={{ opacity: 1, y: 0, rotate: photo.rotation }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: index * 0.2, duration: 0.8 }}
          whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
        >
          <div className="overflow-hidden rounded-sm aspect-[4/5] bg-gray-100">
            <img 
                src={photo.url} 
                alt={photo.caption} 
                className="w-full h-full object-cover" 
                loading="lazy"
            />
          </div>
          <p className="mt-3 text-center font-handwriting text-romantic-500 text-lg">
            {photo.caption}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default PhotoGrid;