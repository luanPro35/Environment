import React, { useState, useEffect } from 'react';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-sm border-[4px] border-white shadow-md group">
      <div 
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="min-w-full flex-shrink-0">
            <img 
              src={image} 
              alt={`Project ${index + 1}`} 
              className="h-[450px] w-full object-cover sm:h-[550px]" 
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-all ${
              currentIndex === index ? 'bg-[#5aa142] scale-125' : 'bg-white/60 hover:bg-white'
            }`}
          />
        ))}
      </div>

      {/* Manual Navigation Arrows (Optional, let's add them for "wowed" factor) */}
      <button 
        onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white opacity-0 transition group-hover:opacity-100 hover:bg-black/50"
      >
        &#10094;
      </button>
      <button 
        onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white opacity-0 transition group-hover:opacity-100 hover:bg-black/50"
      >
        &#10095;
      </button>
    </div>
  );
};

export default ImageCarousel;
