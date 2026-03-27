import React from 'react';
import backyardImage from '../assets/quang/IMG_6021.jpg';
import hardscapingImage from '../assets/quang/IMG_3463.jpg';
import lightingImage from '../assets/quang/IMG_6195.jpg';
import plantingImage from '../assets/quang/77368705736__38B70B24-49C3-4199-9A75-2653FA407953.jpg'
import bgImage from '../assets/quang/IMG_6006.jpg';

const ServiceCard = ({ title, description, image, buttonText }) => (
  <div className="flex flex-col overflow-hidden rounded-2xl bg-[#fdfaf1] shadow-lg border border-[#d8d0bb]/20 group">
    <div className="h-64 overflow-hidden">
      <img src={image} alt={title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" decoding="async" />
    </div>
    <div className="flex flex-col items-center p-8 text-center flex-1">
      <div className="mb-6 -mt-16 relative z-10 w-full bg-[#fdfaf1] rounded-xl p-6 shadow-md border border-[#d8d0bb]/10">
        <h3 className="text-2xl font-black text-[#1d4f79] mb-4 uppercase tracking-tight">{title}</h3>
        <p className="text-sm text-[#1d4f79]/70 leading-relaxed font-medium">
          {description}
        </p>
      </div>
    </div>
  </div>
);

const CompleteLandscapeGrid = () => {
  const services = [
    {
      title: "Frontyard Transformation",
      description: "Dreaming of the perfect outdoor sanctuary? We specialize in complete backyard renovations, from custom designs to full implementation, creating a space that perfectly suits your lifestyle.",
      image: backyardImage,
      buttonText: "More About Transformations"
    },
    {
      title: "Hardscaping & Pavers",
      description: "Enhance your landscape with durable and beautiful hardscaping. We provide professional installation for flagstone patios, stone walkways, and custom retaining walls that elevate your home's curb appeal.",
      image: hardscapingImage,
      buttonText: "More About Hardscaping"
    },
    {
      title: "Elevate your living space with a modern walkway",
      description: "A perfect combination of large-format concrete slabs and natural gravel. This design not only creates a spacious and modern feel for the front yard but also ensures excellent drainage. A great idea for those who love minimalist style.",
      image: lightingImage,
      buttonText: "More About Lighting"
    },
    {
      title: "Tree & Shrub Planting",
      description: "From ornamental trees to flowering shrubs, we're your experts in strategic planting. We choose the right species for your soil and climate, ensuring your garden stays vibrant and healthy year-round.",
      image: plantingImage,
      buttonText: "More About Planting"
    }
  ];

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      {/* Blurred Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img 
          src={bgImage} 
          alt="" 
          className="w-full h-full object-cover blur-[2px] opacity-35 scale-105" 
        />
        <div className="absolute inset-0 bg-white/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <p className="text-sm font-black text-[#5aa142] uppercase tracking-[0.3em]">Total Outdoor Solutions</p>
          <h2 className="text-4xl sm:text-5xl font-black text-[#1d4f79] uppercase tracking-tight">Complete Landscape Design & Installation</h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default CompleteLandscapeGrid;
