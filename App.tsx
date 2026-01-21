
import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Gallery from './components/Gallery.tsx';
import Description from './components/Description.tsx';
import ContactForm from './components/ContactForm.tsx';
import DownloadSource from './components/DownloadSource.tsx';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-slate-50">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section (Presentazione) */}
      <Hero />

      {/* Amenities & Detailed Description (Descrizione) */}
      <Description />

      {/* Gallery Section (Immagini) */}
      <Gallery />

      {/* Contact & Booking (Contatti) */}
      <ContactForm />

      {/* Source Download Feature */}
      <DownloadSource />

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-white text-2xl font-serif font-bold mb-4">Salsedine Milazzo</h3>
          <p className="max-w-md mx-auto mb-8">
            Vivi l'essenza della Sicilia in una dimora esclusiva sul mare di Milazzo.
          </p>
          <div className="flex justify-center space-x-6 mb-8">
            <a href="#presentazione" className="hover:text-white transition-colors">Home</a>
            <a href="#descrizione" className="hover:text-white transition-colors">Dettagli</a>
            <a href="#immagini" className="hover:text-white transition-colors">Galleria</a>
            <a href="#contatti" className="hover:text-white transition-colors">Contatti</a>
          </div>
          <p className="text-sm">
            © {new Date().getFullYear()} Salsedine Milazzo. Tutti i diritti riservati. <br/>
            Realizzato con <i className="fas fa-heart text-red-500"></i> in Sicilia.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
