import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import Features from './Features';
import ProfessionalSearch from './ProfessionalSearch';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';
import Footer from './Footer';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-all duration-500">
      <Navbar />
      <Hero />
      <Features />
      <ProfessionalSearch />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Landing;