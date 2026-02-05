import React from 'react';
import { motion } from 'framer-motion';
import { Bike, ChefHat, Tv, Gamepad2, Trees, UtensilsCrossed } from 'lucide-react';

const dates = [
    { icon: Bike, text: "Go for a long bike ride", color: "bg-blue-100 text-blue-500" },
    { icon: ChefHat, text: "Cook dinner together", color: "bg-orange-100 text-orange-500" },
    { icon: Tv, text: "Netflix and chill at home", color: "bg-red-100 text-red-500" },
    { icon: Gamepad2, text: "Let's have some outdoor games at a mall", color: "bg-purple-100 text-purple-500" },
    { icon: Trees, text: "Go for a picnic in a park", color: "bg-green-100 text-green-500" },
    { icon: UtensilsCrossed, text: "Try some random street foods", color: "bg-yellow-100 text-yellow-600" },
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