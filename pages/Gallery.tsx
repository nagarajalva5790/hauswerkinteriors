
import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { X, Maximize2 } from 'lucide-react';

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const [selectedImage, setSelectedImage] = useState<{url: string, title: string} | null>(null);

  const categories = ['All', ...new Set(GALLERY_IMAGES.map(img => img.category))];

  const filteredImages = filter === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === filter);

  return (
    <div className="pt-24 animate-fadeIn">
      {/* Header */}
      <section className="bg-neutral-50 py-24 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-neutral-900 mb-6 font-serif">Our Portfolio</h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Take a look at some of our recent home interior Bangalore transformations. Each project reflects our commitment to functional and timeless design.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-12 bg-white sticky top-16 z-40 shadow-sm md:shadow-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase transition-all ${
                  filter === cat 
                    ? 'bg-amber-600 text-white shadow-lg' 
                    : 'bg-neutral-100 text-neutral-500 hover:bg-neutral-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-white pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <div 
                key={index} 
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-neutral-100 aspect-square sm:aspect-auto sm:h-[400px]"
                onClick={() => setSelectedImage(image)}
              >
                <img 
                  src={image.url} 
                  alt={image.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/40 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-6">
                    <Maximize2 className="text-white mx-auto mb-4" size={32} />
                    <h3 className="text-white text-xl font-bold font-serif">{image.title}</h3>
                    <p className="text-amber-400 text-sm uppercase tracking-widest mt-2">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-neutral-900/95 backdrop-blur-sm flex items-center justify-center p-4 md:p-12 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-8 right-8 text-white hover:text-amber-500 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={40} />
          </button>
          <div className="max-w-5xl w-full max-h-full overflow-hidden flex flex-col items-center">
            <img 
              src={selectedImage.url} 
              alt={selectedImage.title} 
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="mt-8 text-center" onClick={(e) => e.stopPropagation()}>
              <h2 className="text-3xl text-white font-bold font-serif">{selectedImage.title}</h2>
              <p className="text-amber-500 font-bold uppercase tracking-widest mt-2">HausWerk Signature Collection</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
