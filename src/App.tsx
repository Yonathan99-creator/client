import React from 'react';
import { useState } from 'react';
import Navbar from './components/shared/Navbar';
import Landing from './components/landing/Landing';
import ProfessionalsPage from './components/professionals/ProfessionalsPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'professionals':
        return <ProfessionalsPage />;
      case 'appointments':
        return <div className="min-h-screen pt-20 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Appointments Page Coming Soon</h1>
        </div>;
      default:
        return <Landing />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar currentPage={currentPage} onNavigate={handleNavigation} />
      {renderCurrentPage()}
    </div>
  );
}

export default App;