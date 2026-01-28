import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const Programs = () => {
    const programs = [
        {
            title: "Egresados Élite: Intensivo",
            subtitle: "Recuperación y Máximo Rendimiento",
            price: "$612.000",
            discount: "60% OFF",
            features: [
                "Feedback Estratégico personalizado",
                "Coaching de Élite: Motivación y Ansiedad",
                "Personalización Profunda: Seguimiento individual",
                "Material exclusivo PAES 2026",
                "5 cupos por grupo"
            ],
            link: "https://encuadrado.com/p/carlos-cordero-lizana/s/programa-elite-intensivo-paes-de-invierno"
        },
        {
            title: "Premium Anual",
            subtitle: "El Camino Seguro a la Universidad",
            price: "$690.000",
            discount: "70% OFF",
            features: [
                "Personalización Profunda: Seguimiento individual",
                "Coaching Vocacional y manejo de estrés",
                "Feedback de Ensayos: Análisis exhaustivo",
                "Material exclusivo PAES 2026",
                "5 cupos por grupo"
            ],
            link: "https://encuadrado.com/p/carlos-cordero-lizana/s/plan-anual-premium-paes-competencia-lectora"
        },
        {
            title: "Plan Anual General PAES",
            subtitle: "Entrenamiento Técnico Eficiente",
            price: "$449.000",
            discount: "60% OFF",
            features: [
                "34 sesiones de entrenamiento técnico",
                "Ensayos mensuales PAES",
                "Acceso a bitácora de estrategias",
                "15 cupos por grupo"
            ],
            highlight: true,
            link: "https://encuadrado.com/p/carlos-cordero-lizana/s/plan-anual-general-paes-competencia-lectora"
        },
        {
            title: "Bases Lectoras: 1º y 2º Medio",
            subtitle: "Construcción de Cimientos Académicos",
            price: "$354.000",
            discount: "4 meses",
            features: [
                "Potenciar el NEM: Mejora tu promedio",
                "Práctica de redacción académica",
                "Base Técnica DEMRE: Entrenamiento temprano",
                "15 cupos por grupo"
            ],
            link: "https://encuadrado.com/p/carlos-cordero-lizana/s/bases-de-comprension-lectora-entrenamiento-estrategico-1deg-y-2deg-medio"
        }
    ];

    return (
        <section id="programas" className="relative py-32 bg-brand-dark">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="font-serif font-black text-4xl md:text-5xl text-white mb-4">Programas 2026</h2>
                    <p className="text-gray-400">Cupos extremadamente limitados. Solo para quienes toman esto en serio.</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {programs.map((prog, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className={`relative p-8 rounded-2xl border ${prog.highlight ? 'border-brand-accent-gold bg-brand-accent-gold/5' : 'border-white/10 bg-white/5'} backdrop-blur-sm group hover:border-brand-accent-gold hover:shadow-[0_0_30px_rgba(255,215,0,0.15)] transition-all duration-300 h-full flex flex-col`}
                        >
                            {prog.highlight && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-accent-gold text-brand-dark px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                    Más Popular
                                </div>
                            )}

                            <h3 className="font-serif font-bold text-xl md:text-2xl text-white mb-1 leading-tight min-h-[3.5rem] flex items-end">{prog.title}</h3>
                            <p className="text-xs text-brand-neon font-bold uppercase tracking-wide mb-4 min-h-[2rem] flex items-start">{prog.subtitle}</p>

                            <div className="flex items-baseline gap-2 mb-6 border-b border-white/10 pb-4">
                                <span className="text-2xl lg:text-3xl font-black text-brand-accent-gold">{prog.price}</span>
                                <span className="text-[10px] text-brand-neon font-bold px-2 py-1 bg-brand-neon/10 rounded-full">{prog.discount}</span>
                            </div>

                            <ul className="space-y-3 mb-8 grow">
                                {prog.features.map((feat, j) => (
                                    <li key={j} className="flex items-start gap-3 text-sm text-gray-300">
                                        <CheckCircle2 className="w-4 h-4 text-brand-accent-gold shrink-0 mt-0.5" />
                                        <span className="leading-snug">{feat}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={prog.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-4 rounded-xl bg-white text-brand-dark font-bold hover:bg-brand-accent-gold transition-colors flex items-center justify-center gap-2 group-hover:gap-4 duration-300 mt-auto"
                            >
                                POSTULAR AL CUPO
                                <ArrowRight className="w-4 h-4" />
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Programs;
