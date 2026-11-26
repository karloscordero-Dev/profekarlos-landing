import React from 'react';
import { motion } from 'framer-motion';

const FAQ = () => {
    const items = [
        {
            question: '¿Cómo son las clases, cuánto duran y cuáles son los horarios disponibles?',
            answer: (
                <>
                    <p>
                        Todas las clases son <strong className="text-white font-semibold">100% online en vivo y quedan grabadas</strong> para que las revises cuando quieras. Cada sesión dura entre <strong className="text-white font-semibold">70 y 90 minutos</strong>, según la temática a trabajar. El horario se define directamente al conversar conmigo entre los grupos disponibles:
                    </p>
                    <ul className="mt-4 space-y-2 pl-1">
                        <li className="flex items-start gap-3">
                            <span className="text-brand-accent-gold shrink-0">—</span>
                            <span><strong className="text-white font-semibold">Intensivo Grupo 1:</strong> Lunes y miércoles a las 11:30 hrs.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-brand-accent-gold shrink-0">—</span>
                            <span><strong className="text-white font-semibold">Intensivo Grupo 2:</strong> Lunes y miércoles a las 16:00 hrs.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-brand-accent-gold shrink-0">—</span>
                            <span><strong className="text-white font-semibold">Anual Grupo 1:</strong> Lunes a las 18:00 hrs.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-brand-accent-gold shrink-0">—</span>
                            <span><strong className="text-white font-semibold">Anual Grupo 2:</strong> Miércoles a las 18:00 hrs.</span>
                        </li>
                    </ul>
                </>
            )
        },
        {
            question: '¿Cuál es la diferencia entre el Plan Intensivo y el Plan Anual?',
            answer: (
                <>
                    <p>
                        En ambos planes trabajamos exactamente los mismos contenidos y estrategias de Competencia Lectora. La diferencia está en el ritmo y la duración:
                    </p>
                    <ul className="mt-4 space-y-2 pl-1">
                        <li className="flex items-start gap-3">
                            <span className="text-brand-accent-gold shrink-0">—</span>
                            <span><strong className="text-white font-semibold">Plan Intensivo:</strong> 2 clases semanales desde la semana del 1 de marzo hasta mediados de junio (dependiendo de la fecha oficial de la PAES de Invierno).</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-brand-accent-gold shrink-0">—</span>
                            <span><strong className="text-white font-semibold">Plan Anual:</strong> 1 clase semanal desde el 5 de abril hasta la semana del 22 de noviembre, lo que permite un entrenamiento progresivo durante todo el año y una mayor cantidad de ensayos acumulados rumbo a la PAES Regular.</span>
                        </li>
                    </ul>
                </>
            )
        },
        {
            question: '¿Cuántos estudiantes hay por grupo y por qué es realmente personalizado?',
            answer: (
                <p>
                    Cada grupo tiene un máximo estricto de <strong className="text-white font-semibold">10 alumnos</strong>. Ningún preuniversitario online tradicional trabaja con grupos tan reducidos. Esto me permite conocer a fondo a cada estudiante, identificar exactamente dónde están sus errores, acompañar su evolución clase a clase y trabajar paso a paso sus debilidades reales.
                </p>
            )
        },
        {
            question: '¿Cómo se entrega el material y cómo se revisan los ensayos?',
            answer: (
                <p>
                    Las guías de trabajo y el material exclusivo PAES 2027 se entregan clase a clase directamente a través del grupo de WhatsApp del curso (con opción de respaldo en carpeta digital), para que todo sea rápido y accesible. Además, los ensayos se rinden en mi <strong className="text-white font-semibold">aplicación propia de ensayos</strong>, donde al terminar cada estudiante recibe su revisión automática al instante y ve con exactitud en qué preguntas y en qué habilidades se equivocó.
                </p>
            )
        },
        {
            question: '¿Cuáles son los medios de pago disponibles?',
            answer: (
                <p>
                    Puedes matricularte directamente a través de <strong className="text-white font-semibold">Flow</strong> con tarjeta de crédito (en las cuotas que más te acomoden) o débito. Si prefieres puedes pagar mediante <strong className="text-white font-semibold">transferencia bancaria directa</strong>, solo escríbeme por{' '}
                    <a href="#redes" className="text-brand-accent-gold hover:underline underline-offset-4">
                        Instagram o mis redes sociales
                    </a>{' '}
                    y coordinamos tu cupo de inmediato.
                </p>
            )
        }
    ];

    return (
        <section
            id="faq"
            aria-labelledby="faq-heading"
            className="faq-accordion relative py-28 bg-brand-dark border-t border-white/5"
        >
            <div className="max-w-4xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <h2
                        id="faq-heading"
                        className="font-serif font-black text-3xl sm:text-4xl md:text-5xl text-white"
                    >
                        Preguntas Frecuentes
                    </h2>
                </motion.div>

                <div className="space-y-4">
                    {items.map((item, idx) => (
                        <details
                            key={idx}
                            className="group rounded-2xl border border-white/10 bg-[#0F0F0F] open:border-brand-accent-gold/40 transition-colors duration-300"
                        >
                            <summary className="flex items-center gap-4 p-5 sm:p-6 text-left text-base sm:text-lg font-medium text-white hover:text-brand-accent-gold transition-colors select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-accent-gold/60 rounded-2xl">
                                <span className="leading-snug">{item.question}</span>
                            </summary>
                            <div className="px-5 sm:px-6 pb-6 pt-1 pl-12 sm:pl-14 text-sm sm:text-base text-gray-300 font-light leading-relaxed">
                                {item.answer}
                            </div>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
