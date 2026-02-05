import React from 'react';
import { Play } from 'lucide-react';

const songs = [
    {
        title: "Saiyaara Reprise - Female",
        artist: "Shreya Ghoshal",
        color: "bg-red-500",
        link: "https://open.spotify.com/track/1uRTH9LeFh40tFYlq48vcy"
    },
    {
        title: "Dil Ko Karaar Aaya",
        artist: "Neha Kakkar & Yasser Desai",
        color: "bg-purple-500",
        link: "https://open.spotify.com/track/2jjMtTEvyuAqfGNJJiVspi"
    },
    {
        title: "Thoda Thoda Pyaar",
        artist: "Stebin Ben",
        color: "bg-blue-500",
        link: "https://open.spotify.com/track/7q0XU83dlXOzoAor3sulOM"
    },
    {
        title: "Sitaare (From \"Ikkis\")",
        artist: "Arijit Singh",
        color: "bg-orange-500",
        link: "https://open.spotify.com/track/6WlARP6h4CDVOcY386wW0W"
    },
];

const Soundtrack: React.FC = () => {
    return (
        <div className="space-y-4 w-full max-w-lg">
            {songs.map((song, i) => (
                <a
                    key={i}
                    href={song.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-3 rounded-lg shadow-sm flex items-center gap-4 border border-gray-100 transition-transform hover:scale-102 cursor-pointer group"
                >
                    <div className={`w-12 h-12 rounded-md ${song.color} flex items-center justify-center text-white font-bold text-xs shadow-sm`}>
                        ♪
                    </div>
                    <div className="flex-1 text-left">
                        <h4 className="font-bold text-gray-800">{song.title}</h4>
                        <p className="text-xs text-gray-500">{song.artist}</p>
                    </div>
                    <button className="p-2 rounded-full bg-gray-50 text-gray-400 group-hover:text-romantic-500 group-hover:bg-romantic-50 transition-colors">
                        <Play size={20} fill="currentColor" />
                    </button>
                </a>
            ))}
        </div>
    );
};

export default Soundtrack;