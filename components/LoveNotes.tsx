import React from 'react';
import { motion } from 'framer-motion';

const reasons = [
    "Your smile, like the way you laugh or smile is the cutest one have ever seen.",
    "You make me happy in a way no one else can.",
    "Your eyes are so beautiful, MANN KARTA HAI KI DEKHTE HI RAHU BSS.",
    "I love the way you take care of me.",
    "I love you because you always stay with me even after thousands of our fights.",
    "Whenever I feel stressed or anxiety you always being there for me.",
    "I love the way you handle my Anger issues and MERE NAKHRES.",
    "And else, I love everything about you.....You are my home who makes me comfortable alway....Love you Forever ♾️"
];

const LoveNotes: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl px-4">
            {reasons.map((note, i) => (
                <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, rotate: Math.random() * 4 - 2 }}
                    className={`p-6 rounded-lg shadow-sm flex items-center justify-center text-center min-h-[160px] cursor-default transition-shadow hover:shadow-md ${i % 2 === 0 ? 'bg-romantic-100 text-romantic-800' : 'bg-white text-gray-700 border border-romantic-100'
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