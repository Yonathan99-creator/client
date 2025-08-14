import React from 'react';
import Hero from './Hero';
import UpcomingAppointments from './UpcomingAppointments';
import ModuleCards from './ModuleCards';
import Features from './Features';
import ProfessionalSearch from './ProfessionalSearch';
import HowItWorks from './HowItWorks';
import Testimonials from './Testimonials';
import Footer from './Footer';

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-900 transition-all duration-500">
      <Hero />
      <UpcomingAppointments />
      <ModuleCards />
      <Features />
      <ProfessionalSearch />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Landing;