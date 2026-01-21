
import React from 'react';
import { Amenity } from '../types';

const AMENITIES: Amenity[] = [
  { icon: 'fa-wifi', label: 'Wi-Fi 1Gbps' },
  { icon: 'fa-snowflake', label: 'Aria Condizionata' },
  { icon: 'fa-tv', label: 'Smart TV 4K' },
  { icon: 'fa-utensils', label: 'Cucina Completa' },
  { icon: 'fa-parking', label: 'Posto Auto' },
  { icon: 'fa-umbrella-beach', label: 'Kit Spiaggia' },
  { icon: 'fa-coffee', label: 'Macchina Espresso' },
  { icon: 'fa-bed', label: 'Lenzuola Premium' },
];

const Description: React.FC = () => {
  return (
    <section id="descrizione" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Text Side */}
          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8">Un rifugio di luce e relax</h2>
            <div className="space-y-6 text-lg text-slate-700 leading-relaxed">
              <p>
                Situata in una posizione privilegiata a Milazzo, la casa **Salsedine** offre tutto il necessario per una vacanza senza pensieri. Gli spazi sono ampi e luminosi, arredati con uno stile minimalista che richiama le sfumature del mare.
              </p>
              <p>
                La **spiaggia di Ponente**, famosa per i suoi tramonti mozzafiato sulle Isole Eolie, si trova a soli 50 metri dal portone. Il centro cittadino e il porto per le imbarcazioni verso Stromboli, Vulcano e Lipari sono raggiungibili in meno di 10 minuti.
              </p>
              <div className="grid grid-cols-2 gap-y-4 pt-4">
                {AMENITIES.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                      <i className={`fas ${item.icon}`}></i>
                    </div>
                    <span className="font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Feature Card */}
          <div className="lg:w-1/2 w-full">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-600 rounded-full -z-10 opacity-20 animate-pulse"></div>
              <div className="bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 relative z-10">
                <div className="mb-6 flex items-center space-x-4">
                  <div className="p-3 bg-blue-600 rounded-xl text-white">
                    <i className="fas fa-map-marker-alt text-2xl"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">Posizione Strategica</h4>
                    <p className="text-slate-500">Via Marina Ponente, Milazzo</p>
                  </div>
                </div>
                
                <ul className="space-y-4">
                  <li className="flex justify-between items-center border-b border-slate-50 pb-3">
                    <span className="text-slate-600">Spiaggia di Ponente</span>
                    <span className="font-bold text-blue-600">1 min a piedi</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-slate-50 pb-3">
                    <span className="text-slate-600">Porto (Aliscafi Eolie)</span>
                    <span className="font-bold text-blue-600">12 min a piedi</span>
                  </li>
                  <li className="flex justify-between items-center border-b border-slate-50 pb-3">
                    <span className="text-slate-600">Castello di Milazzo</span>
                    <span className="font-bold text-blue-600">5 min in auto</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-slate-600">Piscina di Venere (Capo)</span>
                    <span className="font-bold text-blue-600">8 min in auto</span>
                  </li>
                </ul>

                <button className="w-full mt-8 bg-slate-900 text-white py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors">
                  Vedi su Google Maps
                </button>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-400 rounded-full -z-10 opacity-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Description;
