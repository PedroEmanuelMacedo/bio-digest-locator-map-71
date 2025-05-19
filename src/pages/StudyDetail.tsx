
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StudyDetail from '@/components/StudyDetail';

const StudyDetailPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <StudyDetail />
      </main>
      <Footer />
    </div>
  );
};

export default StudyDetailPage;
