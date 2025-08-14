import React from 'react';
import { useState } from 'react';
import Navbar from './components/shared/Navbar';
import Landing from './components/landing/Landing';
import ProfessionalsPage from './components/professionals/ProfessionalsPage';
import AppointmentsPage from './components/appointments/AppointmentsPage';
import ReviewsPage from './components/reviews/ReviewsPage';

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
        return <AppointmentsPage />;
      case 'reviews':
        return <ReviewsPage />;
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