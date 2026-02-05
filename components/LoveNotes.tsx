import React from 'react';
import { motion } from 'framer-motion';

const reasons = [
    "Your smile literally makes my entire day (you have no idea)",
    "You're funnier than my entire Instagram feed",
    "Your voice > any song",
    "You understand my weird humor and actually laugh at my terrible jokes",
    "You're beautiful and you don't even try (which is annoying honestly)",
    "Your chaotic energy matches mine perfectly ✨",
    "You make me want to be less of a gandu (that's true love) 🥺",
    "You're stuck with me now and there's no escape 😈",
];

const LoveNotes: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl px-4">
            {reasons.map((note, i) => (
                <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, rotate: Math.random() * 4 - 2 }}
                    className={`p-6 rounded-lg shadow-sm flex items-center justify-center text-center min-h-[160px] cursor-default transition-shadow hover:shadow-md ${
                        i % 2 === 0 ? 'bg-romantic-100 text-romantic-800' : 'bg-white text-gray-700 border border-romantic-100'
                    }`}
                >
                    <p className="font-medium text-sm leading-relaxed">
                        {note}
                    </p>
                </motion.div>
            ))}
        </div>
    );
};

export default LoveNotes;