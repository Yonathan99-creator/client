import React from 'react';
import ProfessionalsHero from './ProfessionalsHero';
import SearchFilters from './SearchFilters';
import ProfessionalsList from './ProfessionalsList';
import TrustIndicators from './TrustIndicators';
import FeaturedProfessionals from './FeaturedProfessionals';

const ProfessionalsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-900 transition-all duration-500">
      <ProfessionalsHero />
      <TrustIndicators />
      <SearchFilters />
      <FeaturedProfessionals />
      <ProfessionalsList />
    </div>
  );
};

export default ProfessionalsPage;