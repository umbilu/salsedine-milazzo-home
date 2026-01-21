
import React, { useState, useEffect, useCallback } from 'react';
import { GalleryImage } from '../types';

const IMAGES: GalleryImage[] = [
  { url: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=1200', alt: 'Interno Soggiorno Elegante', category: 'Interni' },
  { url: 'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&q=80&w=1200', alt: 'Terrazza Vista Tramonto', category: 'Esterni' },
  { url: 'https://images.unsplash.com/photo-1556911220-e150213ff177?auto=format&fit=crop&q=80&w=1200', alt: 'Cucina Gourmet Accessoriata', category: 'Interni' },
  { url: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1200', alt: 'Camera Master Suite', category: 'Interni' },
  { url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=1200', alt: 'Spiaggia di Ponente Milazzo', category: 'Milazzo' },
  { url: 'https://images.unsplash.com/photo-1544013583-1d9333f2824b?auto=format&fit=crop&q=80&w=1200', alt: 'Castello di Milazzo di Notte', category: 'Milazzo' },
];

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState('Tutti');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const categories = ['Tutti', 'Interni', 'Esterni', 'Milazzo'];

  const filteredImages = filter === 'Tutti'
    ? IMAGES
    : IMAGES.filter(img => img.category === filter);

  const openLightbox = (imgUrl: string) => {
    const index = IMAGES.findIndex(img => img.url === imgUrl);
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => setSelectedImageIndex(null);

  const showNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex + 1) % IMAGES.length);
    }
  }, [selectedImageIndex]);

  const showPrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedImageIndex !== null) {
      setSelectedImageIndex((selectedImageIndex - 1 + IMAGES.length) % IMAGES.length);
    }
  }, [selectedImageIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'ArrowLeft') showPrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, showNext, showPrev]);

  return (
    <section id="immagini" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">I Nostri Spazi</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-slate-600 max-w-xl mx-auto">
            Ogni dettaglio è stato pensato per rendere il tuo soggiorno indimenticabile. Clicca su un'immagine per vederla a tutto schermo.
          </p>
        </div>

        {/* Filter */}
        <div className="flex justify-center flex-wrap gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full transition-all border duration-300 font-medium ${
                filter === cat
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-blue-400 hover:text-blue-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((img, index) => (
            <div 
              key={index} 
              onClick={() => openLightbox(img.url)}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-zoom-in h-80 bg-slate-100"
            >
              <img
                src={img.url}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-8">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-semibold uppercase tracking-widest text-blue-400 mb-1">{img.category}</p>
                  <h3 className="text-xl font-bold text-white mb-2">{img.alt}</h3>
                  <div className="flex items-center text-blue-300 text-sm">
                    <i className="fas fa-search-plus mr-2"></i> Ingrandisci
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox / Preview Modal */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-sm flex items-center justify-center animate-fade-in p-4 md:p-10"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white text-3xl hover:text-blue-400 transition-colors z-[110]"
            onClick={closeLightbox}
          >
            <i className="fas fa-times"></i>
          </button>

          {/* Navigation Arrows */}
          <button 
            className="absolute left-4 md:left-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-[110]"
            onClick={showPrev}
          >
            <i className="fas fa-chevron-left"></i>
          </button>
          <button 
            className="absolute right-4 md:right-10 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-[110]"
            onClick={showNext}
          >
            <i className="fas fa-chevron-right"></i>
          </button>

          {/* Main Image Container */}
          <div 
            className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={IMAGES[selectedImageIndex].url}
              alt={IMAGES[selectedImageIndex].alt}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            <div className="mt-6 text-center text-white">
              <p className="text-blue-400 uppercase tracking-widest text-sm font-bold mb-2">
                {IMAGES[selectedImageIndex].category}
              </p>
              <h4 className="text-2xl font-serif">{IMAGES[selectedImageIndex].alt}</h4>
              <p className="text-slate-400 mt-2 text-sm">
                {selectedImageIndex + 1} di {IMAGES.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
