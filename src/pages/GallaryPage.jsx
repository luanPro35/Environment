import React from 'react';

// Automatically import all images from the quang folder
const imageModules = import.meta.glob('../assets/quang/*.{JPG,jpg,jpeg,HEIC,heic}', { eager: true });
const images = Object.values(imageModules).map(module => module.default);

const GallaryPage = () => {

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
            <div key={index} className="overflow-hidden bg-gray-100 rounded-sm shadow-sm hover:shadow-lg transition-shadow duration-300">
              <img 
                src={img} 
                alt={`Portfolio item ${index + 1}`} 
                className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default GallaryPage;
