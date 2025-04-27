
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import HowItWorks from '@/components/HowItWorks';
import Benefits from '@/components/Benefits';
import MapSection from '@/components/MapSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <HowItWorks />
        <Benefits />
        <MapSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
