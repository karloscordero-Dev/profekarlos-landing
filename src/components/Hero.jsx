import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex flex-col pt-40 pb-20 overflow-hidden">

            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-brand-dark">
                <div className="absolute inset-0 bg-gradient-to-b from-brand-midnight/50 to-brand-dark z-0"></div>
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand-neon/5 rounded-full blur-[120px] mix-blend-screen"></div>
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[100px] mix-blend-screen"></div>
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03]"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10 flex flex-col gap-12">

                {/* Top: Centered Title */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center max-w-5xl mx-auto"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-neon/20 bg-brand-neon/5 mb-6">
                        <span className="w-2 h-2 rounded-full bg-brand-neon animate-pulse"></span>
                        <span className="text-brand-neon text-xs font-bold uppercase tracking-widest">Admisión 2026 Abierta</span>
                    </div>

                    <h1 className="font-serif font-black text-4xl md:text-6xl lg:text-7xl leading-[1.1] text-white tracking-tight mb-2">
                        Perfecciona tu nivel para la PAES de Competencia Lectora con mi método y alcanza el puntaje que mereces.
                    </h1>
                </motion.div>

                {/* Bottom: 2 Columns Layout */}
                <div className="grid lg:grid-cols-10 gap-12 lg:gap-16 items-center">

                    {/* Left: Subtitle & Buttons */}
                    <div className="lg:col-span-4 space-y-8 flex flex-col justify-center h-full">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        >
                            <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed border-l-2 border-brand-red/50 pl-6 mb-8">
                                Preparación estratégica con el Profe Karlos (U. de Chile). Grupos de máximo 5 alumnos para un feedback personalizado que el sistema masivo es incapaz de darte.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-5">
                                <motion.a
                                    href="#programas"
                                    onClick={() => window.fbq('track', 'Lead')}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="group relative px-8 py-4 bg-brand-accent-gold text-brand-dark font-bold rounded-xl overflow-hidden hover:scale-105 transition-transform duration-300"
                                >
                                    <span className="relative">POSTULAR A UN CUPO</span>
                                    <ArrowRight className="w-5 h-5 relative group-hover:translate-x-1 transition-transform" />
                                </motion.a>

                                <a
                                    href="#metodologia"
                                    className="px-8 py-4 rounded-xl text-white border border-white/10 hover:bg-white/5 transition-colors font-medium backdrop-blur-sm flex items-center justify-center"
                                >
                                    Conocer Metodología
                                </a>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="flex items-center gap-4 text-sm text-gray-500 font-mono"
                        >
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => (
                                    <div key={i} className="w-8 h-8 rounded-full bg-gray-800 border border-brand-dark flex items-center justify-center text-[10px] text-gray-400">
                                        User
                                    </div>
                                ))}
                            </div>
                            <p>Solo <span className="text-brand-neon">15 cupos</span> por grupo.</p>
                        </motion.div>
                    </div>

                    {/* Right: Video Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-6 relative"
                    >
                        <div className="absolute -inset-4 bg-gradient-to-tr from-brand-neon/10 to-brand-red/10 rounded-[2.5rem] blur-3xl opacity-30"></div>

                        <div className="relative aspect-video bg-black rounded-[2rem] overflow-hidden border border-white/10 group shadow-2xl">
                            {/* YouTube Embed */}
                            <iframe
                                src="https://www.youtube.com/embed/5l4O5tQz0W0?autoplay=1&mute=1&controls=1&rel=0&modestbranding=1&playsinline=1"
                                title="Preparación PAES Profe Karlos"
                                className="w-full h-full border-none pointer-events-auto"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default Hero;
