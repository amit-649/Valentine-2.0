import React from 'react';
import { motion } from 'framer-motion';
import { Video, Pizza, Moon, Music, Camera, Gamepad2, Coffee } from 'lucide-react';

const dates = [
    { icon: Video, text: "Netflix party + video call (I'll let you pick... maybe)", color: "bg-red-100 text-red-500" },
    { icon: Pizza, text: "Order the same food together & judge each other's eating habits", color: "bg-orange-100 text-orange-500" },
    { icon: Moon, text: "Late night talks that somehow turn into sleeping together on call", color: "bg-indigo-100 text-indigo-500" },
    { icon: Music, text: "Playlist exchange & argue about music taste (you're wrong btw)", color: "bg-green-100 text-green-500" },
    { icon: Camera, text: "Send me your selfies so I can simp shamelessly 🤤", color: "bg-pink-100 text-pink-500" },
    { icon: Gamepad2, text: "Play games together & watch you absolutely destroy me", color: "bg-purple-100 text-purple-500" },
    { icon: Coffee, text: "Virtual coffee dates where we pretend we're fancy", color: "bg-yellow-100 text-yellow-600" },
];

const DateIdeas: React.FC = () => {
    return (
        <div className="grid gap-4 max-w-2xl w-full px-4">
            {dates.map((date, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-4 rounded-xl shadow-sm border border-romantic-100 flex items-center gap-4 hover:shadow-md transition-shadow"
                >
                    <div className={`p-3 rounded-full ${date.color}`}>
                        <date.icon size={24} />
                    </div>
                    <p className="font-medium text-gray-700 text-left">{date.text}</p>
                </motion.div>
            ))}
        </div>
    );
};

export default DateIdeas;