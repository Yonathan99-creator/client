import React, { useState } from 'react';
import { Filter, ChevronDown, X, Star, DollarSign, Clock, MapPin, Users, Award, Zap, Video, Phone } from 'lucide-react';

const SearchFilters: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState(500);
  const [minRating, setMinRating] = useState(0);
  const [availability, setAvailability] = useState('');
  const [consultationType, setConsultationType] = useState('');
  const [experience, setExperience] = useState('');

  const categories = [
    'All', 'Healthcare', 'Legal', 'Finance', 'Therapy', 'Consulting', 'Education'
  ];

  const availabilityOptions = [
    { value: '', label: 'Any time' },
    { value: 'now', label: 'Available now' },
    { value: 'today', label: 'Available today' },
    { value: 'week', label: 'This week' }
  ];

  const consultationTypes = [
    { value: '', label: 'Any type' },
    { value: 'video', label: 'Video call' },
    { value: 'phone', label: 'Phone call' },
    { value: 'person', label: 'In person' }
  ];

  const experienceOptions = [
    { value: '', label: 'Any experience' },
    { value: '1-5', label: '1-5 years' },
    { value: '5-10', label: '5-10 years' },
    { value: '10+', label: '10+ years' }
  ];

  const clearFilters = () => {
    setSelectedCategory('All');
    setPriceRange(500);
    setMinRating(0);
    setAvailability('');
    setConsultationType('');
    setExperience('');
  };

  const activeFiltersCount = [
    selectedCategory !== 'All',
    priceRange < 500,
    minRating > 0,
    availability !== '',
    consultationType !== '',
    experience !== ''
  ].filter(Boolean).length;

  return (
    <section className="py-8 bg-gradient-to-r from-white via-blue-50/30 to-white dark:from-gray-900 dark:via-blue-950/20 dark:to-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Popular searches */}
        <div className="mb-6 text-center">
          <div className="inline-flex items-center space-x-4 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-2xl px-6 py-3 border border-gray-200/50 dark:border-gray-700/50">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Trending:</span>
            {['Therapists near me', 'Online doctors', 'Business lawyers', 'Math tutors'].map((search, index) => (
              <button key={index} className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors">
                {search}
              </button>
            ))}
          </div>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 relative overflow-hidden ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm'
              }`}
            >
              {selectedCategory === category && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 animate-pulse"></div>
              )}
              <span className="relative z-10">{category}</span>
              {category}
            </button>
          ))}
        </div>

        {/* Advanced filters toggle */}
        <div className="flex justify-center">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 px-6 py-3 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 rounded-xl transition-all duration-300 hover:scale-105 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm shadow-lg"
          >
            <Filter className={`h-5 w-5 transition-transform duration-300 ${showFilters ? 'rotate-180' : ''}`} />
            <span>Advanced Filters</span>
            {activeFiltersCount > 0 && (
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center animate-pulse shadow-lg">
                {activeFiltersCount}
              </span>
            )}
            <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${showFilters ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Advanced filters panel */}
        {showFilters && (
          <div className="mt-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-xl rounded-2xl p-8 animate-fade-in-up border border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                <Award className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
                Refine Your Search
              </h3>
              <button
                onClick={clearFilters}
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-all duration-300 hover:scale-105 px-3 py-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20"
              >
                <X className="h-4 w-4" />
                <span>Clear</span>
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {/* Price Range */}
              <div className="space-y-3">
                <label className="flex items-center space-x-2 text-sm font-medium text-gray-900 dark:text-white">
                  <DollarSign className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <span>Max Price: ${priceRange}</span>
                </label>
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-3">
                <input
                  type="range"
                  min="50"
                  max="500"
                  step="25"
                  value={priceRange}
                  onChange={(e) => setPriceRange(parseInt(e.target.value))}
                    className="w-full h-3 bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-800 dark:to-purple-800 rounded-lg appearance-none cursor-pointer"
                />
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                    <span>$50</span>
                    <span>$500+</span>
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="space-y-3">
                <label className="flex items-center space-x-2 text-sm font-medium text-gray-900 dark:text-white">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span>Minimum Rating</span>
                </label>
                <div className="bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-lg p-3">
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => setMinRating(rating)}
                        className={`p-2 rounded-lg transition-all duration-300 hover:scale-125 ${
                        minRating >= rating
                            ? 'text-yellow-400 bg-yellow-50 dark:bg-yellow-900/30'
                            : 'text-gray-300 dark:text-gray-600 hover:text-yellow-400 hover:bg-yellow-50 dark:hover:bg-yellow-900/20'
                      }`}
                    >
                      <Star className={`h-5 w-5 ${minRating >= rating ? 'fill-current' : ''}`} />
                    </button>
                  ))}
                </div>
                </div>
              </div>

              {/* Availability */}
              <div className="space-y-3">
                <label className="flex items-center space-x-2 text-sm font-medium text-gray-900 dark:text-white">
                  <Clock className="h-4 w-4 text-green-600 dark:text-green-400" />
                  <span>Availability</span>
                </label>
                <select
                  value={availability}
                  onChange={(e) => setAvailability(e.target.value)}
                  className="w-full p-3 bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 border border-green-200 dark:border-green-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 hover:shadow-md"
                >
                  {availabilityOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Consultation Type */}
              <div className="space-y-3">
                <label className="flex items-center space-x-2 text-sm font-medium text-gray-900 dark:text-white">
                  <Video className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  <span>Consultation Type</span>
                </label>
                <select
                  value={consultationType}
                  onChange={(e) => setConsultationType(e.target.value)}
                  className="w-full p-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 hover:shadow-md"
                >
                  {consultationTypes.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Experience Level */}
              <div className="space-y-3">
                <label className="flex items-center space-x-2 text-sm font-medium text-gray-900 dark:text-white">
                  <Users className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                  <span>Experience</span>
                </label>
                <select
                  value={experience}
                  onChange={(e) => setExperience(e.target.value)}
                  className="w-full p-3 bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 border border-indigo-200 dark:border-indigo-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300 hover:shadow-md"
                >
                  {experienceOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            {/* Apply filters button */}
            <div className="mt-8 text-center">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
                <Filter className="h-4 w-4 inline mr-2" />
                Apply Filters ({activeFiltersCount})
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchFilters;