import React from 'react';
import { motion } from 'framer-motion';
import testimonios1 from '../assets/Testimonios.webp';
import testimonios2 from '../assets/Testimonios 2.webp';
import testimonios3 from '../assets/Testimonios 3.webp';

const Testimonials = () => {
    const images = [testimonios1, testimonios2, testimonios3];

    return (
        <section className="relative py-32 bg-brand-dark overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-serif font-black text-4xl md:text-5xl text-white mb-6">
                        Resultados Reales: <span className="text-brand-accent-gold">El impacto del entrenamiento</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center">
                    {/* First two images side by side */}
                    {images.slice(0, 2).map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            viewport={{ once: true }}
                            className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <img
                                src={img}
                                alt={`Testimonio ${index + 1}`}
                                className="w-full h-auto block"
                                loading="lazy"
                            />
                        </motion.div>
                    ))}

                    {/* Third image centered below */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="w-full md:col-span-2 md:w-1/2 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
                    >
                        <img
                            src={images[2]}
                            alt="Testimonio 3"
                            className="w-full h-auto block"
                            loading="lazy"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
