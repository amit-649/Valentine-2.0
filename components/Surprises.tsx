import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift, Lock } from 'lucide-react';

const surpriseOptions = [
  { id: 1, label: "Mystery Gift 1", content: "Bluetooth earbuds 🎧" },
  { id: 2, label: "Mystery Gift 2", content: "Any branded Shoes 👟" },
  { id: 3, label: "Mystery Gift 3", content: "Football spikes with Jessy set ⚽" },
  { id: 4, label: "Mystery Gift 4", content: "Whatever you want ✨" },
];

const Surprises: React.FC = () => {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleSelect = (id: number) => {
    if (selectedId !== null) return; // Prevent changing selection
    setSelectedId(id);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto px-4">
      {surpriseOptions.map((item) => (
        <motion.button
          key={item.id}
          onClick={() => handleSelect(item.id)}
          disabled={selectedId !== null}
          whileHover={selectedId === null ? { scale: 1.05 } : {}}
          whileTap={selectedId === null ? { scale: 0.95 } : {}}
          className={`relative h-40 rounded-2xl shadow-md flex flex-col items-center justify-center p-6 transition-all duration-500 border-b-4 ${selectedId === item.id
              ? 'bg-romantic-500 text-white border-romantic-700 transform scale-105 z-10'
              : selectedId !== null
                ? 'bg-gray-100 text-gray-400 border-transparent opacity-60 cursor-not-allowed'
                : 'bg-white text-romantic-500 border-romantic-100 hover:shadow-xl cursor-pointer'
            }`}
        >
          {selectedId === item.id ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <p className="font-bold text-lg md:text-xl drop-shadow-md">
                {item.content}
              </p>
              <p className="text-xs mt-2 text-romantic-100 uppercase tracking-widest">
                Your Choice!
              </p>
            </motion.div>
          ) : (
            <div className="text-center">
              {selectedId !== null ? (
                <Lock size={32} className="mx-auto mb-3 opacity-50" />
              ) : (
                <Gift size={32} className="mx-auto mb-3 animate-bounce" />
              )}
              <span className="font-medium text-lg block">{item.label}</span>
            </div>
          )}
        </motion.button>
      ))}
    </div>
  );
};

export default Surprises;