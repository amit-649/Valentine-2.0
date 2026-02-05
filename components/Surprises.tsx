import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Gift, Heart, Utensils, Smile } from 'lucide-react';

const surpriseContent = [
  {
    id: 1,
    color: 'bg-blue-400',
    icon: <Heart className="text-white w-8 h-8" />,
    title: "A Virtual Hug 🫂",
    text: "Since I can't be there to hug you right now, here is a massive virtual one! I miss you so much.",
    image: "https://media.tenor.com/kCZjTqCKIGAAAAAi/bear-hug-love.gif"
  },
  {
    id: 2,
    color: 'bg-purple-400',
    icon: <Utensils className="text-white w-8 h-8" />,
    title: "Dinner on Me 🍔",
    text: "This coupon is valid for one food delivery or dinner date completely paid for by me. No budget limit (okay maybe slight limit).",
    image: "https://media.tenor.com/n5aC1WJqA_0AAAAi/mocha-bear-eating.gif"
  },
  {
    id: 3,
    color: 'bg-yellow-400',
    icon: <Smile className="text-white w-8 h-8" />,
    title: "The Honest Truth",
    text: "I might be annoying sometimes, but you are literally the best thing that's ever happened to me. Thank you for putting up with me!",
    image: "https://media.tenor.com/bXjXj2sWdO0AAAAi/love-couple.gif"
  }
];

const Surprises: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center gap-6">
        {surpriseContent.map((item) => (
          <motion.button
            key={item.id}
            onClick={() => setActiveId(item.id)}
            whileHover={{ scale: 1.05, rotate: Math.random() * 4 - 2 }}
            whileTap={{ scale: 0.95 }}
            className={`${item.color} text-white font-bold py-6 px-8 rounded-2xl shadow-lg flex flex-col items-center gap-3 min-w-[140px] transition-all border-b-4 border-black/10 active:border-b-0 active:translate-y-1`}
          >
            <Gift size={32} />
            <span>Surprise #{item.id}</span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeId && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveId(null)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm cursor-pointer"
            />
            
            <motion.div
              layoutId={`surprise-${activeId}`}
              className="relative bg-white rounded-3xl p-6 md:p-8 max-w-sm w-full shadow-2xl z-50 flex flex-col items-center text-center"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <button 
                onClick={() => setActiveId(null)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 bg-gray-100 p-2 rounded-full transition-colors"
              >
                <X size={20} />
              </button>

              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${surpriseContent[activeId - 1].color} shadow-md`}>
                {surpriseContent[activeId - 1].icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-2 font-handwriting">
                {surpriseContent[activeId - 1].title}
              </h3>
              
              <div className="w-full h-48 bg-gray-100 rounded-xl mb-4 overflow-hidden border border-gray-100">
                  <img 
                    src={surpriseContent[activeId - 1].image} 
                    alt="Cute gif" 
                    className="w-full h-full object-cover"
                  />
              </div>

              <p className="text-gray-600 leading-relaxed mb-6 font-medium">
                {surpriseContent[activeId - 1].text}
              </p>

              <button
                onClick={() => setActiveId(null)}
                className="bg-romantic-500 text-white px-8 py-2 rounded-full font-bold shadow-md hover:bg-romantic-600 hover:shadow-lg transition-all"
              >
                Yay! 🥰
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Surprises;