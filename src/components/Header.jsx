import React, { useState } from "react";
import envHeaderBg from "../assets/env-header-bg.png";
import logoImage from "../assets/Logo.png";
import headerDecor from "../assets/header-decor.png";
import { menuItems } from "../constants";
import { NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const getPath = (item) => {
    const normalizedItem = item.toLowerCase();
    if (normalizedItem.includes("home")) return "/";
    if (normalizedItem.includes("about")) return "/about-us";
    if (normalizedItem.includes("gall")) return "/gallery";
    if (normalizedItem.includes("service")) return "/services";
    if (normalizedItem.includes("contact")) return "/contact-us";
    return "#";
  };

  // Primary links for the main navigation bar as requested
  const primaryLinks = ["HOME", "ABOUT US", "GALLERY", "SERVICES", "CONTACT US"];

  return (
    <header className="relative w-full shadow-sm z-50">
      {/* Top Utility Bar */}
      <div className="bg-[#1d4f79] py-2 text-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex justify-between items-center text-[10px] font-black uppercase tracking-[0.3em]">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5"><span className="text-[#5aa142]">●</span> Mon - Sun: 7:00 AM - 7:00 PM</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:7204455599" className="hover:text-[#5aa142] transition-colors">Call: 720-445-5599</a>
          </div>
        </div>
      </div>

      <section className="relative overflow-hidden bg-gradient-to-br from-[#f4faf2] to-[#ecf5e9]">
        {/* Environmental Background Image with soft opacity */}
        <div className="absolute inset-0 opacity-[0.25] pointer-events-none mix-blend-multiply">
          <img src={envHeaderBg} alt="" className="w-full h-full object-cover" />
        </div>

        {/* Subtle Decorative Pattern Layer */}
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none">
          <img src={headerDecor} alt="" className="w-full h-full object-cover grayscale invert" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pt-8 pb-6 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
            {/* Logo */}
            <NavLink to="/" className="shrink-0">
              <img
                src={logoImage}
                alt="Company logo"
                className="w-[240px] sm:w-[320px] lg:w-[380px] object-contain transition-all duration-700 hover:scale-[1.02]"
              />
            </NavLink>

            {/* Header Right Content - More Integrated & Subdued look */}
            <div className="hidden lg:flex items-center gap-10 p-6  relative group overflow-hidden">
              <div className="absolute top-0 right-0 -mr-6 -mt-6 w-20 h-20 opacity-[0.15] group-hover:scale-110 transition-transform duration-1000 grayscale">
                <img src={headerDecor} alt="" className="w-full h-full object-contain rotate-12" />
              </div>

              <div className="text-right flex flex-col items-end relative z-10">
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#5aa142] mb-1">Expert Local Service</span>
                <a href="tel:7204455599" className="text-4xl font-black text-[#1d4f79] tracking-tighter hover:text-[#5aa142] transition-all duration-300">
                  720-445-5599
                </a>
              </div>
              <NavLink
                to="/contact-us"
                className="bg-[#5aa142] text-white px-8 py-4 rounded-sm text-[11px] font-black uppercase tracking-[0.2em] shadow-xl hover:bg-[#4a8a35] hover:-translate-y-1 transition-all active:scale-95 whitespace-nowrap border-b-4 border-[#3c702a] relative z-10"
              >
                Get A Free Quote
              </NavLink>
            </div>

            {/* Mobile Header Icons (Toggle) */}
            <div className="lg:hidden absolute top-8 right-4 pt-10">
              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-3 bg-[#1d4f79] text-white rounded-sm shadow-xl hover:bg-[#5aa142] transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16m-7 6h7" /></svg>
              </button>
            </div>
          </div>
        </div>

        {/* High-Impact Main Nav - Enhanced for "Nổi nổi lên" */}
        <nav className="hidden lg:block relative z-20 border-t border-[#d8d0bb]/30 bg-white/95 backdrop-blur-md shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)]">
          <div className="mx-auto max-w-7xl px-8">
            <ul className="flex items-center justify-between">
              {primaryLinks.map((item) => {
                const targetPath = getPath(item);
                const isActive = location.pathname === targetPath || (targetPath !== '/' && location.pathname.startsWith(targetPath));

                return (
                  <li key={item} className="group py-2">
                    <NavLink
                      to={targetPath}
                      className={({ isActive }) =>
                        `block py-5 px-6 text-[14px] font-black uppercase tracking-[0.2em] transition-all duration-300 relative rounded-sm border-2 border-transparent 
                         ${isActive 
                           ? "text-[#5aa142] bg-[#5aa142]/5 border-[#5aa142]/30" 
                           : "text-[#1d4f79] hover:text-[#5aa142] hover:border-[#5aa142] hover:bg-[#5aa142]/5"
                         }`
                      }
                    >
                      {item}
                      {/* Subdued High-Impact Indicator */}
                      <span className={`absolute bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#5aa142] transition-all duration-300 ${isActive ? 'scale-100 opacity-100' : 'scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100'}`} />
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </section>

      {/* Mobile Drawer (Same logic but streamlined) */}
      <div className={`fixed inset-0 z-[200] transition-opacity duration-300 lg:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-[#1d4f79]/80 backdrop-blur-md" onClick={() => setIsMenuOpen(false)} />
        <div className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-[#f1efe1] shadow-2xl transition-transform duration-500 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="p-10 border-b border-[#d8d0bb]/40 flex justify-between items-center bg-white">
            <span className="text-xs font-black uppercase tracking-[0.4em] text-[#5aa142]">Site Navigation</span>
            <button onClick={() => setIsMenuOpen(false)} className="p-2 text-[#1d4f79] hover:text-[#5aa142] transition">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" /></svg>
            </button>
          </div>

          <nav className="p-10 h-[calc(100vh-100px)] overflow-y-auto bg-white/40">
            <ul className="space-y-6">
              {primaryLinks.map((item) => (
                <li key={item}>
                  <NavLink
                    to={getPath(item)}
                    onClick={() => setIsMenuOpen(false)}
                    className={({ isActive }) =>
                      `block p-5 text-sm font-black uppercase tracking-widest transition-all ${isActive
                        ? "bg-[#5aa142] text-white shadow-2xl translate-x-3"
                        : "text-[#1d4f79] hover:bg-white/60 border-l-[4px] border-transparent hover:border-[#5aa142] pl-6"
                      }`
                    }
                  >
                    {item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
