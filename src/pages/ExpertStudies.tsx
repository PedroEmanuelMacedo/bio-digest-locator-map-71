
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ExpertStudiesContent from '@/components/ExpertStudiesContent';

const ExpertStudies = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <ExpertStudiesContent />
      </main>
      <Footer />
    </div>
  );
};

export default ExpertStudies;
