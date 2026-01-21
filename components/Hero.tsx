
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="presentazione" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/id/164/1920/1080"
          alt="Vista mare Milazzo"
          className="w-full h-full object-cover brightness-[0.6]"
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl">
        <span className="text-blue-400 font-semibold tracking-widest uppercase mb-4 block animate-fade-in">Benvenuti in Sicilia</span>
        <h1 className="text-5xl md:text-7xl text-white font-serif font-bold mb-6 leading-tight animate-fade-in-up">
          Svegliati con il rumore delle onde a Milazzo
        </h1>
        <p className="text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed animate-fade-in-up delay-100">
          Un'elegante casa vacanze situata a pochi passi dalla spiaggia di Ponente. Comfort moderno, terrazza panoramica e l'ospitalità calorosa del Mediterraneo.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-200">
          <a href="#immagini" className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-100 transition-all shadow-xl">
            Esplora la Casa
          </a>
          <a href="#contatti" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all backdrop-blur-sm">
            Verifica Disponibilità
          </a>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#descrizione" className="text-white text-2xl">
          <i className="fas fa-chevron-down"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;
