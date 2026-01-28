import React from 'react';
import { motion } from 'framer-motion';
import videoSource from '../assets/video/animacion_puntajes.mov';

const EliteProgress = () => {
    return (
        <motion.div
            className="w-full h-full bg-brand-midnight/50 backdrop-blur-md rounded-3xl border border-white/10 overflow-hidden relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            {/* Background Gradient/Grid overlay if needed, currently kept clean for video focus */}

            <div className="absolute inset-0 z-0">
                <video
                    src={videoSource}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                    style={{
                        maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                        WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
                    }}
                />
            </div>

            {/* Content overlay if any text is needed on top of video. 
                The user didn't specify keeping title/text, but typically "Trayectoria de Impacto" title might be desired.
                The prompt said "Elimina la imagen estática o el gráfico SVG actual".
                It didn't explicitly say "Remove title text", but usually replacing the whole component implies replacing the visual representation.
                However, looking at the previous file, it had a title. 
                If I remove the title, the user might not know what this section is. 
                But the prompt says "Elevar la sección... con una integración de video".
                Usually video backgrounds have some overlay.
                Let's check the previous code of Solution.jsx or similar to see how it fits.
                EliteProgress is used inside Solution.jsx.
                Solution.jsx has the text on the left column. EliteProgress is the right column.
                So EliteProgress itself seemed to contain some internal titles like "Trayectoria de Impacto".
                If I remove them, the right side will be just a video. 
                Let's stick to the prompt: "Elimina la lógica anterior... Implementa el video".
                I will keep it clean as requested, just the video container. 
                If the user wants the title back overlaying the video, they can ask. 
                Actually, Solution.jsx has the description on the left. The right side "EliteProgress" had its own title "Trayectoria de Impacto".
                I'll assume the video itself might have text or is self-explanatory, or I should keep a minimal overlay?
                Prompt: "Elimina la imagen estática o el gráfico SVG actual... Implementa el video...".
                I will simply render the video container.
            */ }

        </motion.div>
    );
};

export default EliteProgress;
