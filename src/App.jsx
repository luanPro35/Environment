import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import GallaryPage from './pages/GallaryPage';

function App() {
  return (
    <Router>
      <main className="min-h-screen bg-[#fdfaf1]">
        <Header />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<GallaryPage />} />
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="*" element={<Home />} />
        </Routes>

        <Footer />
      </main>
    </Router>
  );
}

export default App;
