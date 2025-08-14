import React, { useState } from 'react';
import { Star, Heart, CheckCircle, Calendar, Clock, MapPin, Award, Filter, Grid, List, ChevronDown } from 'lucide-react';

const ProfessionalsList: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('rating');
  const [favorites, setFavorites] = useState<number[]>([]);

  const professionals = [
    {
      id: 1,
      name: 'Dr. Michael Thompson',
      specialty: 'Dermatologist',
      category: 'Healthcare',
      rating: 4.8,
      reviews: 234,
      price: '$160',
      availability: 'Available Today',
      location: 'Chicago, IL',
      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face',
      verified: true,
      responseTime: '< 1 hour',
      experience: '12+ years',
      languages: ['English'],
      nextAvailable: 'Today 3:00 PM',
      specializations: ['Skin Cancer', 'Acne Treatment', 'Cosmetic Dermatology'],
      description: 'Board-certified dermatologist with expertise in medical and cosmetic dermatology.'
    },
    {
      id: 2,
      name: 'Lisa Anderson',
      specialty: 'Financial Advisor',
      category: 'Finance',
      rating: 4.9,
      reviews: 189,
      price: '$140',
      availability: 'Available Now',
      location: 'Miami, FL',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face',
      verified: true,
      responseTime: '< 30 min',
      experience: '8+ years',
      languages: ['English', 'Spanish'],
      nextAvailable: 'Now',
      specializations: ['Retirement Planning', 'Investment Strategy', 'Tax Planning'],
      description: 'Certified Financial Planner helping clients achieve their financial goals.'
    },
    {
      id: 3,
      name: 'Prof. David Kim',
      specialty: 'Math Tutor',
      category: 'Education',
      rating: 4.9,
      reviews: 312,
      price: '$85',
      availability: 'Available Tomorrow',
      location: 'Seattle, WA',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face',
      verified: true,
      responseTime: '< 2 hours',
      experience: '20+ years',
      languages: ['English', 'Korean'],
      nextAvailable: 'Tomorrow 4:00 PM',
      specializations: ['Calculus', 'Statistics', 'SAT Prep'],
      description: 'Mathematics professor with two decades of teaching experience.'
    },
    {
      id: 4,
      name: 'Dr. Rachel Green',
      specialty: 'Nutritionist',
      category: 'Healthcare',
      rating: 4.7,
      reviews: 156,
      price: '$110',
      availability: 'Available Today',
      location: 'Austin, TX',
      image: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face',
      verified: true,
      responseTime: '< 1 hour',
      experience: '7+ years',
      languages: ['English'],
      nextAvailable: 'Today 5:00 PM',
      specializations: ['Weight Management', 'Sports Nutrition', 'Meal Planning'],
      description: 'Registered dietitian specializing in personalized nutrition plans.'
    },
    {
      id: 5,
      name: 'Mark Johnson',
      specialty: 'Business Consultant',
      category: 'Consulting',
      rating: 4.8,
      reviews: 278,
      price: '$200',
      availability: 'Available This Week',
      location: 'Denver, CO',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face',
      verified: true,
      responseTime: '< 3 hours',
      experience: '15+ years',
      languages: ['English', 'German'],
      nextAvailable: 'Wednesday 10:00 AM',
      specializations: ['Strategy Development', 'Process Optimization', 'Digital Transformation'],
      description: 'Senior business consultant with Fortune 500 company experience.'
    },
    {
      id: 6,
      name: 'Dr. Amanda White',
      specialty: 'Pediatrician',
      category: 'Healthcare',
      rating: 4.9,
      reviews: 445,
      price: '$150',
      availability: 'Available Tomorrow',
      location: 'Portland, OR',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face',
      verified: true,
      responseTime: '< 1 hour',
      experience: '11+ years',
      languages: ['English', 'French'],
      nextAvailable: 'Tomorrow 9:00 AM',
      specializations: ['Preventive Care', 'Developmental Pediatrics', 'Adolescent Medicine'],
      description: 'Board-certified pediatrician dedicated to comprehensive child healthcare.'
    }
  ];

  const sortOptions = [
    { value: 'rating', label: 'Highest Rated' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'availability', label: 'Availability' },
    { value: 'experience', label: 'Most Experienced' }
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

  const ProfessionalCard = ({ professional, index }: { professional: any, index: number }) => (
    <div
      className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 animate-fade-in-up"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Professional Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <img
              src={professional.image}
              alt={professional.name}
              className="h-16 w-16 rounded-full object-cover ring-4 ring-white dark:ring-gray-700 group-hover:ring-blue-200 dark:group-hover:ring-blue-800 transition-all duration-300"
            />
            {professional.verified && (
              <div className="absolute -bottom-1 -right-1 bg-blue-600 rounded-full p-1">
                <CheckCircle className="h-4 w-4 text-white" />
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
              {professional.experience} experience
            </p>
          </div>
        </div>
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
      </div>

      {/* Rating and Price */}
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
            {professional.rating}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            ({professional.reviews})
          </span>
        </div>
        <span className="text-xl font-bold text-gray-900 dark:text-white">
          {professional.price}
        </span>
      </div>

      {/* Specializations */}
      <div className="mb-4">
        <div className="flex flex-wrap gap-1">
          {professional.specializations.slice(0, 2).map((spec: string, specIndex: number) => (
            <span
              key={specIndex}
              className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium"
            >
              {spec}
            </span>
          ))}
          {professional.specializations.length > 2 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded-full text-xs">
              +{professional.specializations.length - 2} more
            </span>
          )}
        </div>
      </div>

      {/* Details */}
      <div className="space-y-2 mb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <MapPin className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {professional.location}
            </span>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getAvailabilityColor(professional.availability)}`}>
            {professional.availability}
          </span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Clock className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Responds in {professional.responseTime}
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {professional.nextAvailable}
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-3">
        <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg group">
          <Calendar className="h-4 w-4 inline mr-2 group-hover:scale-110 transition-transform" />
          Book Now
        </button>
        <button className="px-4 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-xl transition-all duration-300 hover:scale-105">
          View Profile
        </button>
      </div>
    </div>
  );

  const ProfessionalListItem = ({ professional, index }: { professional: any, index: number }) => (
    <div
      className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 animate-fade-in-up"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex items-center space-x-6">
        {/* Professional Image */}
        <div className="relative flex-shrink-0">
          <img
            src={professional.image}
            alt={professional.name}
            className="h-20 w-20 rounded-full object-cover ring-4 ring-white dark:ring-gray-700"
          />
          {professional.verified && (
            <div className="absolute -bottom-1 -right-1 bg-blue-600 rounded-full p-1">
              <CheckCircle className="h-4 w-4 text-white" />
            </div>
          )}
        </div>

        {/* Professional Info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="font-bold text-xl text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {professional.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 font-medium text-lg">
                {professional.specialty}
              </p>
              <p className="text-gray-500 dark:text-gray-500 mb-2">
                {professional.experience} experience • {professional.location}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                {professional.description}
              </p>
              
              {/* Specializations */}
              <div className="flex flex-wrap gap-2 mb-3">
                {professional.specializations.map((spec: string, specIndex: number) => (
                  <span
                    key={specIndex}
                    className="px-2 py-1 bg-blue-100 dark:bg-blue-900/20 text-blue-800 dark:text-blue-300 rounded-full text-xs font-medium"
                  >
                    {spec}
                  </span>
                ))}
              </div>

              {/* Rating and availability */}
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-1">
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
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getAvailabilityColor(professional.availability)}`}>
                  {professional.availability}
                </span>
              </div>
            </div>

            {/* Price and Actions */}
            <div className="text-right flex-shrink-0">
              <div className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {professional.price}
              </div>
              <div className="flex flex-col space-y-2">
                <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105">
                  Book Now
                </button>
                <button className="px-6 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-xl transition-all duration-300">
                  View Profile
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Favorite Button */}
        <button
          onClick={() => toggleFavorite(professional.id)}
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 flex-shrink-0"
        >
          <Heart
            className={`h-5 w-5 transition-all duration-300 ${
              favorites.includes(professional.id)
                ? 'text-red-500 fill-current'
                : 'text-gray-400 hover:text-red-500'
            }`}
          />
        </button>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 animate-fade-in-up">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
              All Professionals
            </h2>
            <p className="text-gray-600 dark:text-gray-300">
              Showing {professionals.length} professionals
            </p>
          </div>

          <div className="flex items-center space-x-4 mt-4 lg:mt-0">
            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 pointer-events-none" />
            </div>

            {/* View Mode Toggle */}
            <div className="flex bg-gray-100 dark:bg-gray-800 rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === 'grid'
                    ? 'bg-white dark:bg-gray-700 shadow-md'
                    : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <Grid className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === 'list'
                    ? 'bg-white dark:bg-gray-700 shadow-md'
                    : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                <List className="h-5 w-5 text-gray-600 dark:text-gray-400" />
              </button>
            </div>
          </div>
        </div>

        {/* Professionals Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professionals.map((professional, index) => (
              <ProfessionalCard key={professional.id} professional={professional} index={index} />
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {professionals.map((professional, index) => (
              <ProfessionalListItem key={professional.id} professional={professional} index={index} />
            ))}
          </div>
        )}

        {/* Load More Button */}
        <div className="text-center mt-16 animate-fade-in-up">
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
            Load More Professionals
            <ChevronDown className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalsList;