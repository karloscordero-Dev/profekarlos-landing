import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Youtube, Video } from 'lucide-react'; // Simulating TikTok with Video icon if TikTok not avail

// Note: Lucide React might not have TikTok icon depending on version. 
// If TikTok is missing, I'll use a placeholder SVG or just a generic Video icon.
// I'll check available icons later or assume Video for now.

const Social = () => {
    return (
        <section className="bg-slate-900 border-t border-white/5 py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 text-center relative z-10">

                <h2 className="font-serif font-bold text-3xl text-white mb-4 italic">Conóceme más en mis redes sociales</h2>
                <p className="text-slate-400 mb-12 font-light">Sígueme para contenido estratégico y literatura diaria.</p>

                <div className="flex justify-center gap-8">
                    <a href="https://www.instagram.com/profekarlos86/" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3">
                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-gradient-to-tr group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-300 shadow-lg group-hover:scale-110">
                            <Instagram className="text-white w-8 h-8" />
                        </div>
                        <span className="text-sm text-slate-500 group-hover:text-white transition-colors">Instagram</span>
                    </a>

                    <a href="https://www.tiktok.com/@ficciones.australes" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3">
                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-black transition-all duration-300 shadow-lg group-hover:scale-110 group-hover:border-cyan-400">
                            {/* TikTok Icon SVG manually since Lucide sometimes misses it */}
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-white"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
                        </div>
                        <span className="text-sm text-slate-500 group-hover:text-white transition-colors">TikTok</span>
                    </a>

                    <a href="https://www.youtube.com/@ProfeKarlos86" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center gap-3">
                        <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-red-600 transition-all duration-300 shadow-lg group-hover:scale-110">
                            <Youtube className="text-white w-8 h-8" />
                        </div>
                        <span className="text-sm text-slate-500 group-hover:text-white transition-colors">YouTube</span>
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Social;
