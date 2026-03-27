import React from 'react';
import { faqs } from '../../constants';
import project2 from "../../assets/quang/IMG_0194.jpg";

const icons = {
  landscape: (
    <svg className="w-12 h-12 text-[#5aa142]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a1.126 1.126 0 011.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  ),
  irrigation: (
    <svg className="w-12 h-12 text-[#5aa142]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
    </svg>
  ),
  lawn: (
    <svg className="w-12 h-12 text-[#5aa142]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
    </svg>
  ),
  fence: (
    <svg className="w-12 h-12 text-[#5aa142]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>
  ),
  garden: (
    <svg className="w-12 h-12 text-[#5aa142]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64" />
    </svg>
  ),
};

const serviceDetails = {
  landscape: "We handle your project from concept to completion. Our services include Custom 3D Design, fresh Sod installation for instant green, premium Mulch and Rock Decoration for aesthetic weed control, and hardscaping elements like custom Paver patios and structural Retaining Walls.",
  irrigation: "Water is precious. We offer rapid System Repairs to fix leaks and broken heads, as well as Brand New Installations using smart, water-saving technology to ensure perfectly even coverage.",
  lawn: "Keep your curb appeal at its peak. Our reliable service includes Weekly Mowing, precise Edging, string Trimming, and total debris Cleanup, leaving your yard immaculate.",
  fence: "Enhance your privacy and security. We offer Custom Fence Design and Professional Installation using high-quality materials built to withstand harsh Colorado weather.",
  garden: "Prepare your beds for the season. Our Spring & Fall Garden Cleanup includes leaf removal, garden bed clearing, debris hauling, targeted pruning, and comprehensive bed maintenance.",
};

const ServiceCard = ({ title, icon }) => (
  <div className="group flex flex-col items-center justify-center space-y-5 rounded-sm border-2 border-[#d8d0bb]/40 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-[#5aa142]/30">
    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#5aa142]/8 group-hover:bg-[#5aa142]/15 transition-colors duration-300">
      {icons[icon] || icons.landscape}
    </div>
    <div className="space-y-2">
      <h3 className="text-sm font-black uppercase tracking-tight text-[#1d4f79] group-hover:text-[#5aa142] transition-colors">{title}</h3>
      {serviceDetails[icon] && (
        <p className="text-xs text-[#1d4f79]/60 italic leading-relaxed">{serviceDetails[icon]}</p>
      )}
    </div>
  </div>
);

const Services = () => {
  const servicesList = [
    { title: "Complete Landscape", icon: "landscape" },
    { title: "Irrigation", icon: "irrigation" },
    { title: "Lawn Care", icon: "lawn" },
    { title: "Fence", icon: "fence" },
    { title: "Garden Clean Up", icon: "garden" },
  ];

  return (
    <div className="bg-[#f1efe1] py-20 pb-0">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mb-4 text-2xl font-black uppercase tracking-widest text-[#5aa142] sm:text-3xl font-heading">
            Comprehensive Landscaping Services
          </h2>
          <div className="relative mx-auto mb-16 h-1 w-24 bg-[#5aa142]/30">
            <div className="absolute left-1/2 top-0 h-1 w-8 -translate-x-1/2 bg-[#5aa142]" />
          </div>
          
          <h3 className="mb-12 text-sm font-bold uppercase tracking-[0.2em] text-[#1d4f79]">
            Everything your property needs to thrive in Colorado.
          </h3>

          <div className="mb-20 space-y-6">
            <div className="grid gap-6 sm:grid-cols-3">
              {servicesList.slice(0, 3).map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-6">
              {servicesList.slice(3).map((service, index) => (
                <div key={index} className="w-full sm:w-[calc(33.333%-1.5rem)]">
                  <ServiceCard {...service} />
                </div>
              ))}
            </div>
          </div>

          <div className="mb-20 flex justify-center">
            <div className="max-w-3xl overflow-hidden rounded-sm border-[6px] border-white shadow-xl">
              <img src={project2} alt="Professional Landscaping Work" className="h-auto w-full" loading="lazy" />
            </div>
          </div>

          <div className="py-20">
            <h2 className="mb-16 text-2xl font-black uppercase tracking-widest text-[#5aa142]">
              Frequently Asked Questions
            </h2>
            
            <div className="mx-auto max-w-4xl space-y-12 text-left text-sm font-medium italic">
              {faqs.map((faq, index) => (
                <div key={index} className="space-y-4 border-b border-[#d8d0bb] pb-8 last:border-0 border-opacity-40">
                  <h4 className="text-sm font-black uppercase tracking-widest text-[#5aa142]">
                    {faq.question}
                  </h4>
                  <p className="leading-relaxed text-[#1d4f79]/80">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
