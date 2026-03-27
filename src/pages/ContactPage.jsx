import React from 'react';
import CTA from '../components/CTA';
import ServiceAreaMap from '../components/ServiceAreaMap';

const ContactPage = () => {
  return (
    <div className="bg-[#f1efe1] text-[#1d4f79]">
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 mb-16">
          <h2 className="text-2xl font-black uppercase tracking-widest text-[#5aa142] sm:text-3xl">
            Professional Landscaping Services
          </h2>
          <div className="relative mx-auto h-1 w-24 bg-[#5aa142]/30">
            <div className="absolute left-1/2 top-0 h-1 w-8 -translate-x-1/2 bg-[#5aa142]" />
          </div>
          <h1 className="text-2xl font-black uppercase tracking-widest text-[#5aa142]">
            Contact Information
          </h1>
        </div>

        <div className="mx-auto max-w-2xl space-y-12">
          {/* Contact Details Grid */}
          <div className="space-y-8 text-left">
            <div>
              <h3 className="text-sm font-black uppercase tracking-widest text-[#5aa142] mb-2">Telephone</h3>
              <a href="tel:7204455599" className="text-lg font-medium hover:text-[#5aa142] transition">720-445-5599</a>
            </div>

            <div>
              <h3 className="text-sm font-black uppercase tracking-widest text-[#5aa142] mb-2">Address</h3>
              <p className="text-lg font-medium">3564 W Alamo Dr, Littleton, CO 80123</p>
            </div>

            <div>
              <h3 className="text-sm font-black uppercase tracking-widest text-[#5aa142] mb-2">Email</h3>
              <a href="mailto:hoanglawnservices@gmail.com" className="text-lg font-medium hover:text-[#5aa142] transition lowercase">hoanglawnservices@gmail.com</a>
            </div>

            <div>
              <h3 className="text-sm font-black uppercase tracking-widest text-[#5aa142] mb-2">Hours of Operation</h3>
              <p className="text-lg font-medium italic">Monday - Sunday, 7:00 AM - 7:00 PM</p>
            </div>

            <div>
              <h3 className="text-sm font-black uppercase tracking-widest text-[#5aa142] mb-2">Areas Servicing</h3>
              <p className="text-lg font-medium">Littleton & Metro Denver Area</p>
              <div className="mt-4 flex flex-wrap gap-2 text-center lg:text-left">
                 {['Littleton', 'Lakewood', 'Wheat Ridge', 'Denver', 'Englewood', 'Highlands Ranch', 'Castle Rock'].map(area => (
                   <span key={area} className="px-3 py-1 bg-white text-[10px] font-black uppercase tracking-widest text-[#1d4f79] shadow-sm ring-1 ring-[#d8d0bb]/40">{area}</span>
                 ))}
              </div>
            </div>
          </div>

          <div className="pt-16 border-t border-[#d8d0bb]/50">
            <h3 className="text-sm font-black uppercase tracking-widest text-[#5aa142] mb-8 text-center">Service Area Map</h3>
            <div className="h-[400px] w-full overflow-hidden rounded-sm group relative">
              <ServiceAreaMap />
            </div>
          </div>
        </div>


        <div className="mt-20 pt-10 border-t border-[#d8d0bb]/40 text-center">


          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#5aa142]">
            Thank you again for visiting our website.
          </p>
        </div>
      </section>
      
      {/* Reusing existing CTA component for consistency */}
      <CTA />
    </div>
  );
};

export default ContactPage;
