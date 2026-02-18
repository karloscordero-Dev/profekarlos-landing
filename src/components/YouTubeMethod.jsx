import React from 'react';
import { motion } from 'framer-motion';
import { Youtube, ExternalLink } from 'lucide-react';

const YouTubeMethod = () => {
    const videos = [
        {
            id: "nxDDamDDVj8",
            title: "Estrategias de Comprensión Lectora",
            url: "https://youtu.be/nxDDamDDVj8"
        },
        {
            id: "8R95qJarrmI",
            title: "Análisis de Textos PAES",
            url: "https://youtu.be/8R95qJarrmI"
        },
        {
            id: "fUU7CbOHFuo",
            title: "Tips para la Competencia Lectora",
            url: "https://youtu.be/fUU7CbOHFuo"
        }
    ];

    return (
        <section className="py-24 bg-brand-dark/50 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-serif font-black text-3xl md:text-5xl text-white mb-6">
                        Conoce mi método con mis clases grabadas en YouTube.
                    </h2>
                    <p className="font-sans text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Domina las habilidades lectoras. Repasa conmigo las estrategias para la PAES de competencia lectora y prepárate con contenido de alto nivel.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {videos.map((video, index) => (
                        <motion.a
                            key={video.id}
                            href={video.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative block rounded-2xl overflow-hidden bg-white/5 border border-white/10 shadow-lg hover:shadow-2xl hover:border-brand-accent-gold/50 transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02]"
                        >
                            <div className="aspect-video relative overflow-hidden">
                                <img
                                    src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                                    alt={video.title}
                                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
                                    onError={(e) => {
                                        e.target.src = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;
                                    }}
                                />
                                <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-red-600/90 flex items-center justify-center group-hover:scale-110 group-hover:bg-red-600 transition-all duration-300 shadow-xl">
                                        <Youtube className="text-white w-8 h-8 fill-current" />
                                    </div>
                                </div>
                            </div>
                            <div className="p-4 bg-white/5 backdrop-blur-sm">
                                <h3 className="text-white font-serif font-bold group-hover:text-brand-accent-gold transition-colors flex items-center justify-between">
                                    {video.title}
                                    <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </h3>
                            </div>
                        </motion.a>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <a
                        href="https://www.youtube.com/@ProfeKarlos86"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-brand-accent-gold text-brand-dark font-black hover:bg-brand-neon hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-brand-accent-gold/20"
                    >
                        Ver más clases en mi canal
                        <Youtube className="w-5 h-5" />
                    </a>
                </motion.div>
            </div>

            {/* Background elements */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-brand-accent-gold/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-brand-neon/5 rounded-full blur-[120px] pointer-events-none" />
        </section>
    );
};

export default YouTubeMethod;
