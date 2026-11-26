import React from 'react';
import { motion } from 'framer-motion';

const Programs = () => {
    const plans = [
        {
            id: 'intensivo',
            badge: 'PRECIOS CONGELADOS 2027',
            title: 'Plan Intensivo Personalizado',
            period: 'MARZO – JUNIO',
            periodDetail: 'Inicio semana del 1 de marzo · Rumbo a PAES de Invierno',
            normalPrice: null,
            price: '$339.000',
            monthlyEquivalent: 'Equivale a $84.750 / mes (4 meses)',
            features: [
                '2 sesiones en vivo por semana (70 a 90 min c/u · 30 a 32 sesiones).',
                'Clases 100% online y todas quedan grabadas.',
                'Ensayos mensuales PAES con app de corrección automática por habilidad.',
                'Material exclusivo PAES 2027 entregado clase a clase.',
                'Bitácora de estudio ProfeKarlos.'
            ],
            flowUrl: 'https://www.flow.cl/btn.php?token=r98cdbc3e02e7319ea5f4ffa0450d9dc32103132',
            featured: false
        },
        {
            id: 'anual',
            badge: 'OFERTA PREVENTA 2027',
            title: 'Plan Anual Personalizado',
            period: 'ABRIL – NOVIEMBRE',
            periodDetail: '5 de abril al 22 de noviembre · Rumbo a PAES Regular',
            normalPrice: '$690.000',
            price: '$449.000',
            monthlyEquivalent: 'Equivale a $56.125 / mes (8 meses)',
            features: [
                '1 sesión en vivo por semana (70 a 90 min c/u · aprox. 34 sesiones).',
                'Clases 100% online y todas quedan grabadas.',
                'Mayor cantidad de ensayos PAES con app de corrección automática por habilidad.',
                'Material exclusivo PAES 2027 entregado clase a clase.',
                'Bitácora de estudio ProfeKarlos.'
            ],
            flowUrl: 'https://www.flow.cl/btn.php?token=u639ea6d98790f6c8cf75675f8b9acc05fa7be16',
            featured: true
        }
    ];

    return (
        <section id="programas" className="relative py-28 md:py-32 bg-brand-dark">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-10"
                >
                    <h2 className="font-serif font-black text-4xl md:text-5xl text-white mb-4">
                        Programas 2027
                    </h2>
                    <p className="text-gray-400 text-base md:text-lg font-light max-w-2xl mx-auto">
                        Clases <span className="text-white font-medium">100% online en vivo y todas quedan grabadas</span>. Entrenamiento real con máximo 10 alumnos por grupo.
                    </p>
                </motion.div>

                {/* Promo & capacity ribbon */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center mb-14"
                >
                    <div className="inline-flex items-center justify-center text-center px-5 py-2.5 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-sm">
                        <p className="text-xs sm:text-sm text-gray-300 tracking-wide">
                            Valores promocionales válidos hasta el 31 de diciembre{' '}
                            <span className="text-brand-accent-gold mx-1">·</span>{' '}
                            Cupos limitados (máx. 10 alumnos por grupo)
                        </p>
                    </div>
                </motion.div>

                {/* 2-column centered cards grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto items-stretch">
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.12 }}
                            className="relative p-8 sm:p-10 md:p-12 rounded-3xl bg-[#0F0F0F] flex flex-col h-full transition-all duration-300 border-2 border-brand-accent-gold shadow-[0_0_45px_rgba(255,215,0,0.18)]"
                        >
                            {/* Top Badge */}
                            <div className="flex justify-center mb-6">
                                <span
                                    className="inline-block px-4 py-1.5 rounded-full text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-center bg-brand-accent-gold text-brand-dark shadow-[0_0_20px_rgba(255,215,0,0.3)]"
                                >
                                    {plan.badge}
                                </span>
                            </div>

                            {/* Plan Header */}
                            <div className="text-center mb-8">
                                <h3 className="font-serif font-black text-2xl sm:text-3xl text-white mb-3 leading-tight">
                                    {plan.title}
                                </h3>
                                <p className="text-sm sm:text-base text-emerald-400 font-semibold tracking-wider uppercase mb-1.5">
                                    {plan.period}
                                </p>
                                <p className="text-xs sm:text-sm text-gray-400 font-light">
                                    {plan.periodDetail}
                                </p>
                            </div>

                            {/* Pricing Block */}
                            <div className="text-center pb-8 mb-8 border-b border-white/10 flex flex-col items-center justify-end min-h-[124px]">
                                {plan.normalPrice ? (
                                    <span className="text-lg sm:text-xl font-bold text-gray-400 line-through decoration-brand-red decoration-2 mb-1">
                                        {plan.normalPrice}
                                    </span>
                                ) : (
                                    <span className="text-lg sm:text-xl font-bold invisible select-none mb-1" aria-hidden="true">
                                        $000.000
                                    </span>
                                )}

                                <span
                                    className={`text-4xl sm:text-5xl md:text-6xl font-black tracking-tight ${
                                        plan.featured
                                            ? 'text-brand-accent-gold drop-shadow-gold underline decoration-brand-accent-gold/75 decoration-2 underline-offset-8'
                                            : 'text-white'
                                    }`}
                                >
                                    {plan.price}
                                </span>

                                <p className="text-xs sm:text-sm text-gray-400 font-light mt-4">
                                    {plan.monthlyEquivalent}
                                </p>
                            </div>

                            {/* Benefits List */}
                            <ul className="space-y-4 mb-10 grow">
                                {plan.features.map((feat, index) => (
                                    <li key={index} className="flex items-start gap-3.5 text-sm sm:text-base text-gray-300">
                                        <span className="text-brand-accent-gold font-light shrink-0 mt-0.5">—</span>
                                        <span className="font-light leading-relaxed">{feat}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTAs aligned at base */}
                            <div className="text-center mt-auto pt-2">
                                <a
                                    href={plan.flowUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => {
                                        if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
                                            window.fbq('track', 'InitiateCheckout', { content_name: plan.title });
                                        }
                                    }}
                                    className={`inline-block w-full py-4 px-6 rounded-2xl font-bold text-base sm:text-lg tracking-wide transition-all duration-300 ${
                                        plan.featured
                                            ? 'bg-brand-accent-gold text-brand-dark hover:bg-yellow-300 shadow-[0_0_25px_rgba(255,215,0,0.2)]'
                                            : 'bg-white text-black hover:bg-gray-200'
                                    }`}
                                >
                                    MATRICULA AQUÍ
                                </a>

                                <p className="text-[11px] text-gray-500 mt-4 tracking-widest uppercase font-medium">
                                    PAGO PROCESADO POR FLOW
                                </p>

                                <a
                                    href="#redes"
                                    className="inline-block mt-4 text-xs sm:text-sm text-gray-400 hover:text-brand-accent-gold transition-colors underline decoration-white/20 hover:decoration-brand-accent-gold underline-offset-4"
                                >
                                    Si tienes dudas, puedes contactarme por mis redes sociales.
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Programs;
