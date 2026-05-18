import React from 'react';
import { motion } from 'framer-motion';

const Programs = () => {
    const features = [
        "32 sesiones.",
        "Ensayos mensuales PAES.",
        "Material exclusivo PAES 2026.",
        "Bitácora de estudio ProfeKarlos."
    ];

    return (
        <section id="programas" className="relative py-32 bg-brand-dark">
            <div className="max-w-7xl mx-auto px-6">
                
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-serif font-black text-4xl md:text-5xl text-white">
                        Programas 2026
                    </h2>
                </motion.div>

                <div className="max-w-lg mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="relative p-10 md:p-14 lg:p-16 rounded-3xl border border-brand-accent-gold bg-[#0F0F0F] shadow-[0_0_40px_rgba(255,215,0,0.15)]"
                    >
                        <div className="text-center mb-10">
                            <h3 className="font-serif font-black text-3xl md:text-4xl text-white mb-4">
                                Plan intensivo PAES
                            </h3>
                            <p className="text-sm md:text-base text-emerald-400 font-medium tracking-wide uppercase">
                                RECUPERACIÓN Y MÁXIMO RENDIMIENTO | Agosto-Noviembre
                            </p>
                        </div>

                        <div className="text-center mb-10">
                            <span className="text-5xl md:text-6xl lg:text-7xl font-black text-brand-accent-gold tracking-tight drop-shadow-gold">
                                $300.000
                            </span>
                        </div>

                        <div className="flex justify-center mb-12">
                            <ul className="space-y-5">
                                {features.map((feat, index) => (
                                    <li key={index} className="flex items-start gap-4 text-base md:text-lg text-gray-300">
                                        <span className="text-brand-accent-gold font-light">—</span>
                                        <span className="font-light tracking-wide">{feat}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="text-center">
                            <a
                                href="https://www.flow.cl/btn.php?token=bc1388546d6dac96bb19cda8a4eb55a29635bfc5"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block w-full max-w-sm py-4 rounded-2xl bg-white text-black font-bold text-lg hover:bg-gray-200 transition-all duration-300"
                            >
                                MATRICULA Aquí
                            </a>
                            <p className="text-xs text-gray-500 mt-5 tracking-wide uppercase font-medium">
                                Pago procesado por Flow
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Programs;
