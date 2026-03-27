import React from 'react';
import sodImage from '../assets/quang/77368636993__EC02BA5F-3EAD-40F6-9A52-635B66BAF58A.jpg';
import mulchImage from '../assets/quang/IMG_9474.jpg';
import cleanupImage from '../assets/quang/IMG_6195.jpg';
import maintenanceImage from '../assets/quang/IMG_9476.jpg';

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

const HomeServicesGrid = () => {
  const services = [
    {
      title: "Sod Installation",
      description: "Tired of patchy grass? Our professional sod installation services offer a healthy, vibrant solution for your home. As trusted sod installers, we provide high-quality sod replacement that ensures instant beauty and lasting results.",
      image: sodImage,
      buttonText: "More About Sod Installation"
    },
    {
      title: "Mulching & Clean-Ups",
      description: "Is your yard looking a little tired or messy? Our expert mulching services enhance soil health, retain moisture, and suppress weeds for vibrant plant beds. Combined with our thorough yard clean-ups to remove debris and keep your property pristine.",
      image: mulchImage,
      buttonText: "More About Mulching & Clean-Ups"
    },
    {
      title: "Cleanup & Preparation",
      description: "When storms strike, trust our rapid cleanup and storm preparation services. We're your reliable partner for swift debris hauling and property safeguarding, dedicated to restoring your landscape back to beautiful!",
      image: cleanupImage,
      buttonText: "More About Cleanup"
    },
    {
      title: "Landscape Detailing",
      description: "Elevate your home's character with professional landscape detailing. From custom house number placements to pristine garden bed finishes and decorative stone accents, we ensure every detail of your exterior looks impeccable.",
      image: maintenanceImage,
      buttonText: "More About Detailing"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 mt-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default HomeServicesGrid;
