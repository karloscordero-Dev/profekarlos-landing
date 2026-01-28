import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6 }}
            className={`fixed top-0 w-full z-[100] transition-all duration-500 border-b ${scrolled ? 'bg-brand-dark/80 backdrop-blur-xl border-white/5 py-3' : 'bg-transparent border-transparent py-6'}`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center relative z-[100]">
                {/* Logo - 25% larger */}
                <div className="flex items-center gap-3 relative z-[101]">
                    <img src={logo} alt="ProfeKarlos Logo" className="h-[4.5rem] md:h-24 w-auto transition-all scale-125 origin-left" />
                    <span className="text-white font-serif font-bold text-2xl hidden sm:block tracking-tight ml-4">ProfeKarlos</span>
                </div>

                {/* Navigation & CTA */}
                <div className="flex items-center gap-8">
                    <div className="hidden md:flex gap-8 text-gray-300 text-sm font-medium tracking-wide">
                        {[
                            { name: 'La Realidad', link: '#la-realidad' },
                            { name: 'Metodología', link: '#metodologia' },
                            { name: 'Programas', link: '#programas' }
                        ].map((item) => (
                            <a key={item.name} href={item.link} className="relative group">
                                <span className="group-hover:text-brand-neon transition-colors duration-300">{item.name}</span>
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-neon transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="hidden md:block bg-white/5 hover:bg-white/10 text-white border border-white/20 font-medium py-2.5 px-6 rounded-lg transition-all text-sm backdrop-blur-md"
                    >
                        Acceso Alumnos
                    </motion.button>
                </div>
            </div>
        </motion.nav>
    );
};

export default Navbar;
