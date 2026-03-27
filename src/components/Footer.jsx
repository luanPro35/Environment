import React from 'react';
import { menuItems } from "../constants";
import footerLogo from "../assets/Logo-footer.jpg";
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const getPath = (item) => {
    const normalizedItem = item.toLowerCase();
    if (normalizedItem.includes("home")) return "/";
    if (normalizedItem.includes("about")) return "/about-us";
    if (normalizedItem.includes("gall")) return "/gallery";
    if (normalizedItem.includes("service")) return "/services";
    if (normalizedItem.includes("contact")) return "/contact-us";
    return "#";
  };

  return (
    <footer className="bg-[#121a21] pt-24 pb-12 text-white/70 relative overflow-hidden">
      {/* Decorative Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(90,161,66,0.05),transparent_40%)]" />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-3 items-start">
          
          {/* Column 1: Brand & Social */}
          <div className="space-y-10">
            <div className="overflow-hidden rounded-sm shadow-2xl border border-white/5 max-w-[240px] group">
              <img 
                src={footerLogo} 
                alt="Company Footer Logo" 
                className="w-full h-auto object-contain transition duration-1000 group-hover:scale-110" 
              />
            </div>
            <div className="space-y-4">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-[#5aa142]">Connect With Us</p>
              <div className="flex gap-4">
                <a href="#" className="h-10 w-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#5aa142] hover:border-[#5aa142] transition-all duration-300">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.77,7.46H14.5V5.83a.81.81,0,0,1,.81-.81h3.11V1H14.52a5,5,0,0,0-5,5V7.46H6.11V11.5H9.52v9.5h5V11.5h4.25Z"/></svg>
                </a>
                <a href="#" className="h-10 w-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-[#5aa142] hover:border-[#5aa142] transition-all duration-300">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12.31,2h-1C6.2,2,2,6.2,2,11.31v1.38C2,17.8,6.2,22,11.31,22h1.38C17.8,22,22,17.8,22,12.69V11.31C22,6.2,17.8,2,12.69,2ZM12,17.14a5.14,5.14,0,1,1,5.14-5.14A5.14,5.14,0,0,1,12,17.14Zm5.14-9.14a1.29,1.29,0,1,1,1.29-1.29A1.29,1.29,0,0,1,17.14,8Z"/></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div className="space-y-8">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">Quick Navigation</h3>
            <ul className="grid grid-cols-1 gap-4 text-xs font-bold uppercase tracking-widest">
              {menuItems.slice(0, 7).map((item) => (
                <li key={item}>
                  <NavLink to={getPath(item)} className="hover:text-[#5aa142] transition py-1 block border-l-2 border-transparent hover:border-[#5aa142] pl-4">{item}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-8">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white">Contact Info</h3>
            <div className="space-y-6 text-sm italic font-bold uppercase tracking-widest">
              <div className="space-y-2">
                 <p className="text-[10px] text-[#5aa142] not-italic">Call Anytime</p>
                 <a href="tel:7204455599" className="text-xl not-italic text-white hover:text-[#5aa142] transition-colors">720-445-5599</a>
              </div>
              <div className="space-y-2">
                 <p className="text-[10px] text-[#5aa142] not-italic">Email Address</p>
                 <a href="mailto:hoanglawnservices@gmail.com" className="text-white/80 not-italic hover:text-[#5aa142] transition-colors lowercase">hoanglawnservices@gmail.com</a>
              </div>
              <div className="space-y-2">
                 <p className="text-[10px] text-[#5aa142] not-italic">Visit Address</p>
                 <p className="text-white/80 not-italic">3564 W Alamo Dr, Littleton, CO 80123</p>
              </div>
              <div className="space-y-2">
                 <p className="text-[10px] text-[#5aa142] not-italic">Working Hours</p>
                 <p className="text-white/80 not-italic">Mon - Sun: 7:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>

        </div>

        {/* Footer Bottom Line */}
        <div className="mt-24 pt-12 border-t border-white/5">
           <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
              <div className="text-[9px] font-black uppercase tracking-[0.35em] text-white/30 text-center lg:text-left leading-loose">
                 © 2024 Hoang’s Landscape & Maintenance. All Rights Reserved. 
                 <br />
                 Content protected by Copyright laws. Unauthorized reproduction is strictly prohibited.
              </div>
              <div className="flex gap-8 text-[9px] font-black uppercase tracking-[0.3em] text-white/40">
                 <a href="#" className="hover:text-white transition underline underline-offset-4">Terms of Service</a>
                 <a href="#" className="hover:text-white transition underline underline-offset-4">Privacy Policy</a>
              </div>
           </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
