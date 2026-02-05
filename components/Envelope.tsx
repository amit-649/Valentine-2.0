import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { LETTER_CONTENT } from '../constants';

const Envelope: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative w-full h-[400px] flex items-end justify-center pb-12 overflow-visible">
      <div 
        className="relative w-80 h-52 transition-transform hover:scale-105 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Envelope Back */}
        <div className="absolute inset-0 bg-romantic-600 rounded-sm shadow-lg" />

        {/* The Letter */}
        <motion.div
          className="absolute left-2 right-2 top-2 bg-white p-6 shadow-md rounded-sm text-gray-800 font-body text-sm leading-relaxed overflow-y-auto custom-scrollbar"
          style={{ height: '250px' }} // Height of letter
          initial={{ y: 0, zIndex: 5 }}
          animate={isOpen ? { 
            y: -200, 
            zIndex: 30 // Must be higher than front (20) and flap (25)
          } : { 
            y: 0, 
            zIndex: 5 // Inside envelope
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
             <div className="h-full overflow-y-auto">
                <p className="whitespace-pre-line font-medium text-romantic-900">{LETTER_CONTENT}</p>
            </div>
        </motion.div>

        {/* Envelope Front (Pocket) */}
        <div 
            className="absolute inset-0 z-20 pointer-events-none"
        >
            <svg viewBox="0 0 320 208" className="w-full h-full drop-shadow-sm">
                {/* Left Triangle */}
                <path d="M0,0 L160,110 L0,208 Z" fill="#fb7185" />
                {/* Right Triangle */}
                <path d="M320,0 L160,110 L320,208 Z" fill="#fb7185" />
                {/* Bottom Triangle */}
                <path d="M0,208 L160,110 L320,208 Z" fill="#e11d48" />
            </svg>
        </div>

        {/* Top Flap */}
        <motion.div
          className="absolute top-0 left-0 w-full z-25 origin-top"
          animate={isOpen ? { rotateX: 180, zIndex: 1 } : { rotateX: 0, zIndex: 25 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <svg viewBox="0 0 320 110" className="w-full h-full drop-shadow-md">
                 <path d="M0,0 L160,110 L320,0 Z" fill="#f43f5e" />
            </svg>
        </motion.div>
        
        {!isOpen && (
            <motion.div 
                className="absolute top-1/2 left-1/2 z-40 text-white font-bold drop-shadow-md whitespace-nowrap pointer-events-none"
                style={{ x: "-50%", y: "-50%" }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                OPEN ME
            </motion.div>
        )}
      </div>
    </div>
  );
};

export default Envelope;