import React, { useState } from 'react';
import { OFFICIAL_GALLERY_IMAGES } from '../data/projectData';
import { Camera, X, Maximize2 } from 'lucide-react';

export const GalleryExperience: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [lightboxItem, setLightboxItem] = useState<{ title: string; category: string; url: string; tag: string } | null>(null);

  const categories = ['ALL', 'EXTERIOR & PORTALS', 'TOWER ARCHITECTURE', 'SKY DECK PROMENADE', 'GRAND INTERIORS', 'SUITES & BEDROOMS', 'CLUB ROYALE'];

  const filteredItems = OFFICIAL_GALLERY_IMAGES.filter(item => {
    return activeCategory === 'ALL' || item.category === activeCategory;
  });

  return (
    <section id="gallery" className="py-20 bg-white relative overflow-hidden border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-[0.25em] text-pristine-orange font-bold block mb-2 font-google">
            VISUAL TOUR
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
            OFFICIAL ARCHITECTURAL GALLERY
          </h2>
          <div className="w-16 h-[2px] bg-pristine-orange mx-auto mb-4" />
          <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
            EXPLORE HIGH-DEFINITION ARCHITECTURAL RENDERS OF THE LORD’S BY PRISTINE DEVELOPER.
          </p>
        </div>

        <div className="flex items-center justify-center flex-wrap gap-2 mb-10 font-google">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat
                  ? 'btn-pristine-orange shadow-pristine-orange'
                  : 'bg-gray-100 text-gray-700 hover:text-gray-900 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => setLightboxItem(item)}
              className="group relative h-64 rounded-2xl overflow-hidden border border-gray-200 hover:border-pristine-orange cursor-pointer shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              <div className="absolute top-3 left-3">
                <span className="px-2.5 py-0.5 rounded bg-white/90 backdrop-blur-md text-[10px] font-mono text-pristine-orange font-bold">
                  {item.tag}
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3">
                <span className="text-[10px] text-gray-300 uppercase font-mono block">
                  {item.category}
                </span>
                <h4 className="font-serif font-bold text-white text-sm mt-0.5 line-clamp-1 group-hover:text-pristine-orange transition-colors">
                  {item.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightboxItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
          <button
            onClick={() => setLightboxItem(null)}
            className="absolute top-6 right-6 z-10 w-11 h-11 rounded-full bg-black/70 text-white flex items-center justify-center"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="relative max-w-5xl w-full">
            <div className="rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-white">
              <img
                src={lightboxItem.url}
                alt={lightboxItem.title}
                className="w-full max-h-[75vh] object-contain bg-black"
              />
              <div className="p-4 bg-white flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono uppercase text-pristine-orange font-bold">
                    {lightboxItem.category}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-gray-900 mt-0.5">
                    {lightboxItem.title}
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-lg bg-pristine-orange/15 text-pristine-orange text-xs font-mono font-bold">
                  {lightboxItem.tag}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
