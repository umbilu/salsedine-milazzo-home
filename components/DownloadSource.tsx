
import React, { useState } from 'react';
import JSZip from 'jszip';

const DownloadSource: React.FC = () => {
  const [isZipping, setIsZipping] = useState(false);

  const downloadZip = async () => {
    setIsZipping(true);
    const zip = new JSZip();

    // Mapping of all project files to their actual content
    const files: Record<string, string> = {
      'metadata.json': `{
  "name": "Salsedine Milazzo - Vacation Home",
  "description": "A luxury vacation home landing page for a beautiful seaside retreat in Milazzo, Sicily, featuring a stunning visual gallery.",
  "requestFramePermissions": []
}`,
      'types.ts': `export interface Amenity {
  icon: string;
  label: string;
}

export interface GalleryImage {
  url: string;
  alt: string;
  category: string;
}

export interface Message {
  role: 'user' | 'model';
  text: string;
}`,
      'vite.config.ts': `import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'build',
    emptyOutDir: true,
  },
});`,
      'index.html': document.documentElement.outerHTML,
      'index.tsx': `import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);`,
      'App.tsx': `import React from 'react';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Gallery from './components/Gallery.tsx';
import Description from './components/Description.tsx';
import ContactForm from './components/ContactForm.tsx';
import DownloadSource from './components/DownloadSource.tsx';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-slate-50">
      <Navbar />
      <Hero />
      <Description />
      <Gallery />
      <ContactForm />
      <DownloadSource />
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
            © {new Date().getFullYear()} Salsedine Milazzo. Tutti i diritti riservati.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;`
    };

    // Helper to fetch component content if needed, but here we provide the structure
    // Adding core components to the zip
    zip.file('metadata.json', files['metadata.json']);
    zip.file('types.ts', files['types.ts']);
    zip.file('vite.config.ts', files['vite.config.ts']);
    zip.file('index.html', files['index.html']);
    zip.file('index.tsx', files['index.tsx']);
    zip.file('App.tsx', files['App.tsx']);

    // In a real browser environment, we can't easily read local files from disk to string 
    // without a build-time script, but for this app, the ZIP will contain the primary 
    // logic and structure.

    try {
      const content = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(content);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'salsedine-milazzo-source.zip';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Error generating zip:', err);
    } finally {
      setIsZipping(false);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-[60]">
      <button
        onClick={downloadZip}
        disabled={isZipping}
        className="flex items-center space-x-2 bg-slate-900/90 backdrop-blur-md text-white px-5 py-3 rounded-full shadow-2xl hover:bg-slate-800 transition-all active:scale-95 disabled:opacity-50 group border border-white/10"
        title="Scarica il codice sorgente (ZIP)"
      >
        <i className={`fas ${isZipping ? 'fa-spinner fa-spin' : 'fa-file-archive'} text-lg text-blue-400`}></i>
        <span className="font-semibold text-sm">
          {isZipping ? 'Preparazione...' : 'Scarica Progetto (ZIP)'}
        </span>
      </button>
    </div>
  );
};

export default DownloadSource;
