import React, { useState } from 'react';

// Automatically import all images from the quang folder
const imageModules = import.meta.glob('../assets/quang/*.{JPG,jpg,jpeg,HEIC,heic}', { eager: true });
const images = Object.values(imageModules).map(module => module.default);

const GallaryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (img) => setSelectedImage(img);
  const closeModal = () => setSelectedImage(null);

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumbs */}
      <nav className="border-b border-gray-100 bg-[#f9f9f9] py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
            <span className="text-gray-400">Southwestern Denver Landscaping</span>
            <span className="text-gray-400">-</span>
            <span className="text-[#5aa142]">&gt; GALLERY</span>
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-black text-[#89b434] mb-4">Portfolio</h1>
          <div className="w-full border-b border-dashed border-gray-300"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => openModal(img)}
              className="overflow-hidden bg-gray-100 rounded-sm shadow-sm hover:shadow-lg transition-all duration-300 cursor-zoom-in"
            >
              <img
                src={img}
                alt={`Portfolio item ${index + 1}`}
                className="w-full h-80 object-cover transition-transform duration-700 hover:scale-110"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Image Modal (Lightbox) */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-300"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button
            className="absolute top-6 right-6 text-white text-5xl font-light hover:text-[#5aa142] transition-colors z-[110]"
            onClick={closeModal}
          >
            &times;
          </button>

          <div className="relative w-full h-full flex items-center justify-center p-2">
            <img
              src={selectedImage}
              alt="Full size view"
              className="max-w-[95vw] max-h-[95vh] object-contain rounded-sm shadow-2xl animate-in zoom-in-95 duration-300"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default GallaryPage;
