import React from 'react';
import { Play } from 'lucide-react';

const songs = [
    { title: "Haseen", artist: "Sharma G", color: "bg-red-500" },
    { title: "Raatan Lambiyan", artist: "Jubin Nautiyal", color: "bg-purple-500" },
    { title: "Perfect", artist: "Ed Sheeran", color: "bg-blue-500" },
    { title: "Tum Mile", artist: "Pritam", color: "bg-orange-500" },
];

const Soundtrack: React.FC = () => {
    return (
        <div className="space-y-4 w-full max-w-lg">
            {songs.map((song, i) => (
                <div key={i} className="bg-white p-3 rounded-lg shadow-sm flex items-center gap-4 border border-gray-100 transition-transform hover:scale-102">
                     <div className={`w-12 h-12 rounded-md ${song.color} flex items-center justify-center text-white font-bold text-xs shadow-sm`}>
                        ♪
                     </div>
                     <div className="flex-1 text-left">
                        <h4 className="font-bold text-gray-800">{song.title}</h4>
                        <p className="text-xs text-gray-500">{song.artist}</p>
                     </div>
                     <button className="p-2 rounded-full bg-gray-50 text-gray-400 hover:text-romantic-500 hover:bg-romantic-50 transition-colors">
                        <Play size={20} fill="currentColor" />
                     </button>
                </div>
            ))}
        </div>
    );
};

export default Soundtrack;