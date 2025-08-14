import React, { useState } from 'react';
import { Star, Heart, CheckCircle, Calendar, Clock, MapPin, ChevronDown, Grid, List } from 'lucide-react';

const ProfessionalsList: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('rating');
  const [favorites, setFavorites] = useState<number[]>([]);

  const professionals = [
    {
      id: 1,
      name: 'Dr. Sarah Mitchell',
      specialty: 'Cardiologist',
      rating: 4.9,
      reviews: 342,
      price: '$180',
      availability: 'Available Today',
      location: 'New York, NY',
      image: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face',
      verified: true,
      responseTime: '< 30 min',
      experience: '15+ years',
      nextAvailable: 'Today 2:00 PM',
      specializations: ['Heart Surgery', 'Preventive Cardiology']
    },
    {
      id: 2,
      name: 'James Rodriguez',
      specialty: 'Corporate Lawyer',
      rating: 4.8,
      reviews: 289,
      price: '$250',
      availability: 'Available Now',
      location: 'Los Angeles, CA',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face',
      verified: true,
      responseTime: '< 15 min',
      experience: '12+ years',
      nextAvailable: 'Now',
      specializations: ['Contract Law', 'Business Formation']
    },
    {
      id: 3,
      name: 'Dr. Emily Chen',
      specialty: 'Clinical Psychologist',
      rating: 4.9,
      reviews: 456,
      price: '$120',
      availability: 'Available Tomorrow',
      location: 'San Francisco, CA',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face',
      verified: true,
      responseTime: '< 1 hour',
      experience: '10+ years',
      nextAvailable: 'Tomorrow 10:00 AM',
      specializations: ['Anxiety Disorders', 'Depression']
    },
    {
      id: 4,
      name: 'Michael Thompson',
      specialty: 'Financial Advisor',
      rating: 4.7,
      reviews: 234,
      price: '$140',
      availability: 'Available Today',
      location: 'Chicago, IL',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face',
      verified: true,
      responseTime: '< 2 hours',
      experience: '8+ years',
      nextAvailable: 'Today 4:00 PM',
      specializations: ['Investment Planning', 'Retirement']
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      specialty: 'Business Consultant',
      rating: 4.8,
      reviews: 198,
      price: '$200',
      availability: 'Available This Week',
      location: 'Miami, FL',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face',
      verified: true,
      responseTime: '< 3 hours',
      experience: '14+ years',
      nextAvailable: 'Wednesday 2:00 PM',
      specializations: ['Strategy Development', 'Digital Transformation']
    },
    {
      id: 6,
      name: 'Prof. David Kim',
      specialty: 'Math Tutor',
      rating: 4.9,
      reviews: 312,
      price: '$85',
      availability: 'Available Tomorrow',
      location: 'Seattle, WA',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face',
      verified: true,
      responseTime: '< 1 hour',
      experience: '20+ years',
      nextAvailable: 'Tomorrow 3:00 PM',
      specializations: ['Calculus', 'Statistics']
    }
  ];

  const sortOptions = [
    { value: 'rating', label: 'Highest Rated' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'availability', label: 'Availability' }
  ];

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  const getAvailabilityColor = (availability: string) => {
    if (availability.includes('Now')) return 'text-green-600 bg-green-100 dark:bg-green-900/20 dark:text-green-400';
    if (availability.includes('Today')) return 'text-blue-600 bg-blue-100 dark:bg-blue-900/20 dark:text-blue-400';
    if (availability.includes('Tomorrow')) return 'text-purple-600 bg-purple-100 dark:bg-purple-900/20 dark:text-purple-400';
    return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20 dark:text-yellow-400';
  };

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with controls */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Available Professionals
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              {professionals.length} professionals found
            </p>
          </div>

          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            {/* Sort */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>

            {/* View toggle */}
            <div className="flex bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === 'grid'
                    ? 'bg-white dark:bg-gray-700 shadow-md'
                    : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <Grid className="h-4 w-4" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === 'list'
                    ? 'bg-white dark:bg-gray-700 shadow-md'
                    : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <List className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Professionals grid */}
        <div className={`grid gap-6 ${viewMode === 'grid' ? 'md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
          {professionals.map((professional, index) => (
            <div
              key={professional.id}
              className={`group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 animate-fade-in-up ${
                viewMode === 'list' ? 'flex items-center space-x-6' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Professional image and basic info */}
              <div className={`${viewMode === 'list' ? 'flex-shrink-0' : 'mb-4'}`}>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img
                        src={professional.image}
                        alt={professional.name}
                        className={`rounded-full object-cover ring-4 ring-white dark:ring-gray-700 group-hover:ring-blue-200 dark:group-hover:ring-blue-800 transition-all duration-300 ${
                          viewMode === 'list' ? 'h-16 w-16' : 'h-20 w-20'
                        }`}
                      />
                      {professional.verified && (
                        <div className="absolute -bottom-1 -right-1 bg-blue-600 rounded-full p-1">
                          <CheckCircle className="h-3 w-3 text-white" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {professional.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 font-medium">
                        {professional.specialty}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        {professional.experience} • {professional.location}
                      </p>
                    </div>
                  </div>
                  {viewMode === 'grid' && (
                    <button
                      onClick={() => toggleFavorite(professional.id)}
                      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                    >
                      <Heart
                        className={`h-5 w-5 transition-all duration-300 ${
                          favorites.includes(professional.id)
                            ? 'text-red-500 fill-current'
                            : 'text-gray-400 hover:text-red-500'
                        }`}
                      />
                    </button>
                  )}
                </div>
              </div>

              {/* Professional details */}
              <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>
                {/* Rating and price */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(professional.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300 dark:text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-gray-900 dark:text-white">
                      {professional.rating} ({professional.reviews})
                    </span>
                  </div>
                  <span className="text-xl font-bold text-gray-900 dark:text-white">
                    {professional.price}
                  </span>
                </div>

                {/* Specializations */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {professional.specializations.map((spec, specIndex) => (
                      <span
                        key={specIndex}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Availability and response time */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      {professional.responseTime}
                    </span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getAvailabilityColor(professional.availability)}`}>
                    {professional.availability}
                  </span>
                </div>

                {/* Action buttons */}
                <div className={`flex ${viewMode === 'list' ? 'space-x-3' : 'space-x-3'}`}>
                  <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <Calendar className="h-4 w-4 inline mr-2" />
                    Book Now
                  </button>
                  <button className="px-4 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-xl transition-all duration-300 hover:scale-105">
                    Profile
                  </button>
                  {viewMode === 'list' && (
                    <button
                      onClick={() => toggleFavorite(professional.id)}
                      className="p-3 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                    >
                      <Heart
                        className={`h-5 w-5 transition-all duration-300 ${
                          favorites.includes(professional.id)
                            ? 'text-red-500 fill-current'
                            : 'text-gray-400 hover:text-red-500'
                        }`}
                      />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load more */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            Load More Professionals
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalsList;