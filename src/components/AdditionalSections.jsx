import React from 'react';
import mulchPromotionImage from '../assets/quang/IMG_5385.jpg';

const WhyChooseUs = () => {
  return (
    <section className="relative py-24 bg-[#1d4f79] text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,rgba(90,161,66,0.3),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(90,161,66,0.2),transparent_25%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="space-y-4">
              <p className="text-sm font-black text-[#5aa142] uppercase tracking-[0.4em]">Why Choose Us</p>
              <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight leading-[1.1]">Trusted Lawn & Landscape Professionals</h2>
            </div>
            <p className="text-lg leading-relaxed text-white/80 font-medium italic">
              When you choose Hoang’s Landscape & Maintenance for your landscaping needs, you can expect a commitment to excellence that sets us apart. Our team takes pride in delivering top-quality results, ensuring that every project exceeds your expectations. As a family-owned business, we prioritize personalized service, treating every client like family and tailoring every aspect of your landscaping project to meet your unique requirements.
            </p>
            <p className="text-lg leading-relaxed text-white/80 font-medium italic">
              You can rely on us to be punctual, efficient, and transparent throughout the process, respecting your time and ensuring a smooth, stress-free experience.
            </p>
            <button className="bg-[#5aa142] text-white px-10 py-4 rounded-sm text-sm font-black uppercase tracking-[0.2em] hover:bg-[#4a8a35] transition-all shadow-xl hover:-translate-y-1 active:scale-95 border-b-4 border-[#3e722c]">
              Contact Us
            </button>
          </div>

          <div className="relative group">
            <div className="overflow-hidden rounded-2xl border-[12px] border-white/10 shadow-3xl">
              <img src={mulchPromotionImage} alt="Landscaping work" className="w-full h-auto object-cover" />
            </div>
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 lg:top-1/2 lg:left-0 lg:-translate-y-1/2 lg:-translate-x-1/4 bg-gradient-to-r from-[#5aa142] to-[#4c8d35] text-white pl-4 pr-6 py-3 rounded-full shadow-2xl border-[3px] border-white flex items-center gap-3 group-hover:-translate-x-[15%] transition-all duration-500 z-20 hover:scale-105">
              <div className="bg-white/20 p-2 rounded-full animate-pulse">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C10.15 21 3 13.85 3 5z" strokeWidth="2.5" /></svg>
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className="text-[10px] font-black uppercase tracking-widest text-white/80 mb-0.5">Quick Help</span>
                <a href="tel:7204455599" className="text-xl font-black tracking-tight whitespace-nowrap">720-445-5599</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BenefitsSection = () => {
  const benefits = [
    { title: "Seasonal Maintenance", icon: "🌱" },
    { title: "Enhanced Curb Appeal", icon: "🏡" },
    { title: "Healthy Lawns", icon: "🌿" },
    { title: "Time Savings", icon: "⏰" },
    { title: "Water Efficiency", icon: "💧" },
    { title: "Stress-Free Care", icon: "💆" }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <p className="text-sm font-black text-[#5aa142] uppercase tracking-[0.4em]">Benefits Of Working With Our Team</p>
          <h2 className="text-4xl md:text-5xl font-black text-[#1d4f79] tracking-tight">Reliable Service, Quality Results, Lasting Value</h2>
          <p className="max-w-3xl mx-auto text-lg text-[#1d4f79]/70 italic leading-relaxed font-medium">
            Unlock the full potential of your landscape with our dedicated services. We bring a host of benefits tailored to your needs, ensuring your lawn stays vibrant all year round.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className="flex items-center gap-6 p-8 bg-[#fdfaf1] rounded-xl border-l-[6px] border-[#5aa142] shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1">
              <span className="text-4xl">{b.icon}</span>
              <h3 className="text-xl font-black text-[#1d4f79] tracking-tight uppercase">{b.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export { WhyChooseUs, BenefitsSection };
