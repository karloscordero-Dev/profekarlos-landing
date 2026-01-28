import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, Brain, XCircle } from 'lucide-react';

const LaRealidad = () => {
    const problems = [
        {
            icon: <XCircle className="w-8 h-8 text-brand-red" />,
            title: "La Trampa de la Masividad",
            desc: "La Realidad de la PAES: En un grupo de 5 personas, el feedback es constante. Cada vicio de lectura se identifica y corrige en el acto, algo imposible en la masividad."
        },
        {
            icon: <AlertTriangle className="w-8 h-8 text-brand-red" />,
            title: "El Abismo de la Complejidad",
            desc: "No leemos noticias ni posts de redes sociales. Analizamos papers, ensayos filosóficos y literatura compleja. Si entrenas suave, la prueba te aplastará."
        },
        {
            icon: <Brain className="w-8 h-8 text-brand-red" />,
            title: "El Mito del Tiempo",
            desc: "Te dicen que 'falta tiempo'. Falso. Lo que falta es estrategia. Cuando sabes qué buscar, el texto se vuelve transparente y rápido."
        }
    ];

    return (
        <section id="la-realidad" className="relative py-32 bg-brand-dark overflow-hidden">
            {/* Subtle Gradient Transition */}
            <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-brand-midnight/50 to-brand-dark pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="text-center mb-20"
                >
                    <h2 className="font-serif font-black text-4xl md:text-5xl text-white mb-6">
                        La Realidad de la PAES: <br />
                        Por qué el sistema tradicional <span className="text-brand-red decoration-brand-neon underline decoration-4 underline-offset-4">no funciona</span>.
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {problems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
                            className="bg-white/5 backdrop-blur border border-white/10 p-8 rounded-2xl hover:bg-white/[0.08] transition-colors group"
                        >
                            <div className="w-14 h-14 bg-brand-red/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-white font-serif font-bold text-xl mb-4 group-hover:text-brand-red transition-colors">{item.title}</h3>
                            <p className="text-gray-500 font-light leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default LaRealidad;
