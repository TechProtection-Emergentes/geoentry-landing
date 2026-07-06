
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import CallToAction from '../components/CallToAction';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <CallToAction />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
