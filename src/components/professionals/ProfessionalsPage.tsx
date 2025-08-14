import React from 'react';
import ProfessionalsHero from './ProfessionalsHero';
import SearchFilters from './SearchFilters';
import ProfessionalsList from './ProfessionalsList';
import FeaturedProfessionals from './FeaturedProfessionals';
import ProfessionalsStats from './ProfessionalsStats';

const ProfessionalsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-950 dark:via-gray-900 dark:to-gray-900 transition-all duration-500">
      <ProfessionalsHero />
      <SearchFilters />
      <FeaturedProfessionals />
      <ProfessionalsList />
      <ProfessionalsStats />
    </div>
  );
};

export default ProfessionalsPage;