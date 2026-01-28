import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LaRealidad from './components/LaRealidad';
import Solution from './components/Solution';
import Testimonials from './components/Testimonials';
import Programs from './components/Programs';
import Social from './components/Social';

function App() {
    return (
        <div className="bg-brand-dark min-h-screen font-sans selection:bg-brand-neon selection:text-brand-dark overflow-x-hidden">
            <Navbar />

            <main>
                <Hero />
                <LaRealidad />
                <Solution />
                <Testimonials />
                <Programs />
                <Social />
            </main>

        </div>
    );
}

export default App;
