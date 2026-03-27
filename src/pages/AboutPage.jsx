import React from 'react';
import aboutHero from '../assets/quang/IMG_0195.jpg';
import CTA from '../components/CTA';

const InfoSection = ({ title, content }) => (
  <div className="flex gap-6 items-start">
    <div className="shrink-0">
      <div className="text-4xl font-black text-[#5aa142] italic">Q</div>
    </div>
    <div className="space-y-4">
      <h3 className="text-2xl font-black uppercase tracking-tight text-[#1d4f79]">{title}</h3>
      <p className="text-lg leading-relaxed text-[#1d4f79]/80 font-medium italic">
        {content}
      </p>
    </div>
  </div>
);

const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative h-[450px] md:h-[600px] flex items-center justify-center overflow-hidden">
        <img
          src={aboutHero}
          alt="About Us Hero"
          className="absolute inset-0 w-full h-full object-cover object-[center_35%] shadow-inner"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/15" />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-black text-white drop-shadow-lg tracking-tight">
            About Us
          </h1>
        </div>
      </section>

      {/* Breadcrumbs */}
      <nav className="border-b border-gray-100 bg-[#f9f9f9] py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest">
            <span className="text-gray-400">Home</span>
            <span className="text-[#5aa142]">&gt;</span>
            <span className="text-[#5aa142]">About Us</span>
          </div>
        </div>
      </nav>

      {/* Narrative Section */}
      <section className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="space-y-12 mb-32">
          <h2 className="text-4xl font-black text-[#1d4f79] uppercase tracking-tighter text-center">
            A Family Tradition <span className="text-[#5aa142]">Of Excellence in Southwestern Denver</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8 text-xl leading-relaxed text-[#1d4f79]/90 font-medium italic">
              <p>
                "At our company, landscaping is more than just a service — it’s a family tradition. With over 30 years of experience, our business was founded on hard work, reliability, and a passion for creating beautiful, functional outdoor spaces."
              </p>
              <p>
                "What started as a small, family-run operation has organically grown into a trusted, household name in lawn care and landscape services across our community."
              </p>
            </div>
            <div className="space-y-8 text-xl leading-relaxed text-[#1d4f79]/90 font-medium italic">
              <p>
                "I proudly took over the business from my father 10 years ago, continuing the high-standard values he built while bringing in new ideas, sustainable practices, and modern techniques. With more than a decade of personal, hands-on experience in landscaping and yard maintenance, I understand the critical importance of quality, consistency, and absolute attention to detail."
              </p>
            </div>
          </div>
        </div>

        {/* Services We Specialize In */}
        <div className="py-16 border-t border-gray-100 mb-16">
          <h2 className="text-2xl font-black text-center uppercase tracking-widest text-[#5aa142] mb-12">
            What We Specialize In
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { label: "Complete Landscape", detail: "Bringing visions to life with Custom Design, fresh Sod, Mulch, Rock Decoration, elegant Pavers, and durable Retaining Walls." },
              { label: "Irrigation", detail: "Saving water and money through prompt System Repairs and designing highly efficient New Builds." },
              { label: "Lawn Care", detail: "Keeping your grass pristine with weekly Mowing, Edging, Trimming, & thorough Cleanup." },
              { label: "Fence Construction", detail: "Securing your perimeter with Custom Design & Professional Installation." },
              { label: "Garden Maintenance", detail: "Preparing your property for changing seasons with deep Spring and Fall Clean Ups." },
            ].map((s, i) => (
              <div key={i} className="bg-[#f1efe1] rounded-sm p-6 border-l-4 border-[#5aa142] space-y-1 hover:shadow-md transition-shadow">
                <p className="font-black uppercase tracking-widest text-[#1d4f79] text-sm">{s.label}</p>
                <p className="text-sm text-[#1d4f79]/70 italic leading-relaxed">{s.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Info Details (Grid Style) */}
        <div className="grid md:grid-cols-2 gap-x-20 gap-y-16 py-16 border-t border-gray-100">
          <InfoSection
            title="Our Approach"
            content="We specialize in customized lawn care, yard maintenance, and landscaping services tailored to meet each customer's specific vision. Whether you need reliable weekly routine maintenance or a massive full-landscape transformation, we treat every single property as if it were our own home."
          />
          <InfoSection
            title="Our Commitment"
            content="Our ultimate goal is simple: to deliver dependable service, honest transparent pricing, and breathtaking results that make our customers incredibly proud of their outdoor spaces. We believe in building lifelong relationships through trust, clear communication, and dedicated hard work."
          />
        </div>

        {/* Note from Ryan */}
        <div className="mt-16 max-w-3xl mx-auto text-center space-y-8 p-12 bg-[#f1efe1] rounded-sm border-[6px] border-white shadow-xl italic transition-transform hover:scale-[1.01] duration-500">
          <p className="text-2xl font-medium text-[#1d4f79] leading-relaxed">
            "Thank you for considering our company — we look forward to partnering with you to create and maintain a landscape you'll absolutely love."
          </p>
          <p className="text-lg font-black uppercase tracking-widest text-[#5aa142]">
            — Ryan, Owner
          </p>
        </div>
      </section>

      {/* Bottom Ask Us Section */}
      <section className="py-24 border-t border-gray-100 bg-white text-center">
        <div className="space-y-4 px-4">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#1d4f79]">
            Ask <span className="text-[#5aa142]">Us A Question</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-500 font-medium">
            Have a specific vision in mind? Feel free to ask any landscaping or gardening questions by calling or texting our number on the Contact Us page. We will answer as quickly as we can!
          </p>
        </div>
      </section>

      <CTA />
    </div>
  );
};

export default AboutPage;
