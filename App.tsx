import React, { useState, useRef } from 'react';
import confetti from 'canvas-confetti';
import { Heart, X, Check, Music } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import FloatingHearts from './components/FloatingHearts';
import Envelope from './components/Envelope';
import PhotoGrid from './components/PhotoGrid';
import MusicPlayer from './components/MusicPlayer';
import Section from './components/Section';
import DateIdeas from './components/DateIdeas';
import Soundtrack from './components/Soundtrack';
import LoveNotes from './components/LoveNotes';
import Surprises from './components/Surprises';
import { APP_CONFIG } from './constants';

const App: React.FC = () => {
    const [stage, setStage] = useState<'ask' | 'yes_clicked'>('ask');
    const [contractStage, setContractStage] = useState<'initial' | 'too_late'>('initial');

    // Yes/No Game State
    const [noCount, setNoCount] = useState(0);
    const [noPosition, setNoPosition] = useState<{ top: string, left: string } | null>(null);

    // Constants for game
    const MAX_NO_ATTEMPTS = 4;
    const NO_PHRASES = [
        "No :(",
        "Are you sure?",
        "Really sure?",
        "Think again!",
        "Last chance!",
    ];

    const getNoText = () => NO_PHRASES[Math.min(noCount, NO_PHRASES.length - 1)];

    const handleNoAction = () => {
        if (noCount === MAX_NO_ATTEMPTS) return;

        // Generate random position
        // We use a safe area so it doesn't go off screen (10% to 80%)
        const top = Math.floor(Math.random() * 70) + 10;
        const left = Math.floor(Math.random() * 70) + 10;

        setNoPosition({ top: `${top}%`, left: `${left}%` });
        setNoCount(prev => prev + 1);
    };

    const handleYes = () => {
        setStage('yes_clicked');
        triggerConfetti();
    };

    const handleContractAction = () => {
        setContractStage('too_late');
    };

    const triggerConfetti = () => {
        const duration = 3000;
        const end = Date.now() + duration;
        const frame = () => {
            confetti({
                particleCount: 5,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#fda4af', '#f43f5e', '#ffe4e6']
            });
            confetti({
                particleCount: 5,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#fda4af', '#f43f5e', '#ffe4e6']
            });
            if (Date.now() < end) requestAnimationFrame(frame);
        };
        frame();
    };

    // Dynamic Scale for Yes Button
    const yesScale = 1 + (noCount * 0.4); // Increases size by 40% each step

    return (
        <div className="font-body text-gray-700 bg-romantic-50 min-h-screen selection:bg-romantic-200 overflow-x-hidden">
            <FloatingHearts />
            <MusicPlayer />

            {/* SECTION 1: HERO / QUESTION */}
            <div className="min-h-screen flex flex-col items-center justify-center text-center relative px-4 z-10 overflow-hidden">
                <AnimatePresence mode="wait">
                    {stage === 'ask' && (
                        <motion.div
                            key="ask"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 1.5, filter: "blur(10px)" }}
                            transition={{ duration: 0.5 }}
                            className="w-full max-w-4xl flex flex-col items-center"
                        >
                            <Heart className="w-20 h-20 text-romantic-500 mb-6 animate-pulse-slow fill-romantic-500" />
                            <h1 className="font-handwriting text-4xl md:text-7xl text-romantic-600 mb-6 drop-shadow-sm leading-tight">
                                Will you be my Valentine?
                            </h1>

                            <div className="flex flex-wrap gap-4 md:gap-8 justify-center items-center w-full h-[300px] relative">
                                {/* YES BUTTON */}
                                <motion.button
                                    onClick={handleYes}
                                    style={{
                                        transform: `scale(${yesScale})`,
                                        zIndex: 50
                                    }}
                                    className="bg-romantic-500 hover:bg-romantic-600 text-white font-bold py-3 px-8 rounded-full shadow-xl transition-all duration-300 transform origin-center whitespace-nowrap"
                                >
                                    YES! 💖
                                </motion.button>

                                {/* NO BUTTON */}
                                {noCount < MAX_NO_ATTEMPTS && (
                                    <motion.button
                                        onMouseEnter={handleNoAction} // Desktop
                                        onClick={handleNoAction} // Mobile
                                        style={noPosition ? {
                                            position: 'absolute',
                                            top: noPosition.top,
                                            left: noPosition.left,
                                        } : {}}
                                        className="bg-white text-romantic-500 border-2 border-romantic-200 font-medium py-3 px-8 rounded-full shadow-sm hover:bg-romantic-50 transition-all duration-200 whitespace-nowrap"
                                    >
                                        {getNoText()}
                                    </motion.button>
                                )}
                            </div>
                        </motion.div>
                    )}

                    {stage === 'yes_clicked' && (
                        <motion.div
                            key="success"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-full max-w-2xl bg-white/60 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/50"
                        >
                            {contractStage === 'initial' ? (
                                <>
                                    <h2 className="text-3xl md:text-5xl font-handwriting text-romantic-600 mb-6">
                                        Good choice babu 😌
                                    </h2>
                                    <p className="text-lg text-gray-600 mb-8">
                                        You just unlocked unlimited hugs, kisses, and cuddles
                                        <br />
                                        <span className="text-sm text-gray-400">(redeemable very soon I promise)</span>
                                    </p>

                                    <div className="flex justify-center gap-4 mb-8">
                                        <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" alt="Cute bears" className="w-32 h-32 rounded-xl shadow-md object-cover" />
                                        <img src="images/second-bear.jpg" alt="Cute bears 2" className="w-32 h-32 rounded-xl shadow-md object-cover" />
                                    </div>

                                    <p className="text-xl font-bold text-romantic-500 mb-8">
                                        Now you're stuck with me forever ∞
                                    </p>

                                    <div className="border-t border-gray-200 pt-6">
                                        <p className="text-sm text-gray-400 mb-3">Wait... do you want to change your mind?</p>
                                        <button
                                            onClick={handleContractAction}
                                            className="text-sm bg-gray-200 hover:bg-gray-300 text-gray-600 px-4 py-2 rounded-lg transition-colors flex items-center gap-2 mx-auto"
                                        >
                                            Actually... No 😈
                                        </button>
                                    </div>
                                </>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="text-center"
                                >
                                    <h2 className="text-4xl md:text-5xl font-handwriting text-red-500 mb-6">
                                        TOO LATE! 🤡
                                    </h2>
                                    <div className="bg-red-50 border-2 border-red-100 rounded-xl p-6 text-left space-y-3 mb-6">
                                        <p className="flex items-center gap-2 text-red-800">
                                            <X size={20} className="text-red-500" /> No take-backs allowed
                                        </p>
                                        <p className="flex items-center gap-2 text-red-800">
                                            <X size={20} className="text-red-500" /> You're legally mine now (I checked)
                                        </p>
                                        <p className="flex items-center gap-2 text-red-800">
                                            <X size={20} className="text-red-500" /> Every "no" from now on = 10 extra kisses
                                        </p>
                                        <p className="flex items-center gap-2 text-green-700 font-bold">
                                            <Check size={20} className="text-green-500" /> You're stuck with your chaotic girlfriend FOREVER 😈
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => {
                                            const element = document.getElementById('content-start');
                                            element?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className="bg-romantic-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-romantic-600 transition-all animate-bounce"
                                    >
                                        Deal with it 💖
                                    </button>
                                </motion.div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* REST OF CONTENT - Only shown after YES */}
            {stage === 'yes_clicked' && (
                <motion.div
                    id="content-start"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    {/* DATE IDEAS */}
                    <Section id="dates" className="bg-white/50 backdrop-blur-sm">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-handwriting text-romantic-500 mb-4">
                                Date ideas 📱
                            </h2>
                        </div>
                        <DateIdeas />
                    </Section>

                    {/* LETTER */}
                    <Section id="letter">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-handwriting text-romantic-500 mb-2">
                                A Secret Note For You 💖
                            </h2>
                            <p className="text-sm text-romantic-400 uppercase tracking-widest">
                                Tap the envelope to open...
                            </p>
                        </div>
                        <Envelope />
                    </Section>

                    {/* MEMORIES */}
                    <Section id="memories" className="bg-white/50 backdrop-blur-sm">
                        <div className="text-center mb-12">
                            <h2 className="text-3xl md:text-4xl font-handwriting text-romantic-500 mb-4">
                                Our Favorite Memories 📸
                            </h2>
                            <p className="text-gray-500 text-sm">Tap the cards to unlock our secrets 😉</p>
                        </div>
                        <div className="container mx-auto max-w-4xl">
                            <PhotoGrid />
                        </div>
                    </Section>

                    {/* SOUNDTRACK */}
                    <Section id="music">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-handwriting text-romantic-500 mb-4">
                                Our Soundtrack 🎵
                            </h2>
                        </div>
                        <Soundtrack />
                    </Section>

                    {/* LOVE NOTES */}
                    <Section id="reasons" className="bg-romantic-50">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-handwriting text-romantic-500 mb-4">
                                Things I Love About You
                            </h2>
                        </div>
                        <LoveNotes />
                    </Section>

                    <Section id="surprises" className="bg-white/50 backdrop-blur-sm pb-32">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl md:text-4xl font-handwriting text-romantic-500 mb-4">
                                Secret Surprises 🎁
                            </h2>
                            <p className="mb-8 text-gray-500 text-sm">Choose your secret surprise... choose carefully you get only one 😉</p>
                            <Surprises />
                        </div>
                    </Section>

                    <footer className="w-full py-8 text-center text-romantic-300 text-sm font-light bg-white/30">
                        Made with 💖💝 by your chaotic girlfriend
                    </footer>
                </motion.div>
            )}
        </div>
    );
};

export default App;