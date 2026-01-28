import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Target, Zap } from 'lucide-react';
import EliteProgress from './EliteProgress';

const Solution = () => {
    return (
        <section id="metodologia" className="relative py-32 bg-brand-dark border-t border-white/5">

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-[35%_65%] gap-12 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-brand-neon font-bold tracking-widest uppercase text-xs mb-4 block">Mi Metodología</span>
                        <h2 className="font-serif font-black text-3xl md:text-5xl text-white mb-6 leading-tight">
                            No hago clases. <br />
                            Hago <span className="text-brand-accent-gold">Entrenamiento Estratégico</span>.
                        </h2>
                        <p className="text-gray-400 text-base font-light mb-8">
                            Ayudo a construir una estructura mental a prueba de balas. Preparo a las futuras élites universitarias con un sistema probado.
                        </p>

                        <ul className="space-y-6">
                            {[
                                { icon: Layers, title: "Análisis de Capas", text: "Desglosamos textos complejos capa por capa para revelar la estructura oculta." },
                                { icon: Target, title: "Habilidades de Élite", text: "Te entreno en rastreo, inferencia y evaluación avanzada." },
                                { icon: Zap, title: "Coaching Personalizado", text: "Trabajamos tu control de presión y toma de decisiones rápida." }
                            ].map((item, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + (i * 0.1) }}
                                    className="flex items-start gap-4"
                                >
                                    <div className="mt-1 w-8 h-8 rounded-lg bg-brand-gold/10 flex items-center justify-center text-brand-gold shrink-0">
                                        <item.icon size={18} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold">{item.title}</h4>
                                        <p className="text-gray-500 text-xs">{item.text}</p>
                                    </div>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative aspect-video w-full"
                    >
                        <EliteProgress />
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Solution;
