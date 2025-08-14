import React, { useState } from 'react';
import { Filter, ChevronDown, X, Star, DollarSign, Clock } from 'lucide-react';

const SearchFilters: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [priceRange, setPriceRange] = useState(500);
  const [minRating, setMinRating] = useState(0);
  const [availability, setAvailability] = useState('');

  const categories = [
    'All', 'Healthcare', 'Legal', 'Finance', 'Therapy', 'Consulting', 'Education'
  ];

  const availabilityOptions = [
    { value: '', label: 'Any time' },
    { value: 'now', label: 'Available now' },
    { value: 'today', label: 'Available today' },
    { value: 'week', label: 'This week' }
  ];

  const clearFilters = () => {
    setSelectedCategory('All');
    setPriceRange(500);
    setMinRating(0);
    setAvailability('');
  };

  const activeFiltersCount = [
    selectedCategory !== 'All',
    priceRange < 500,
    minRating > 0,
    availability !== ''
  ].filter(Boolean).length;

  return (
    <section className="py-8 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Advanced filters toggle */}
        <div className="flex justify-center">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl transition-all duration-300 hover:scale-105"
          >
            <Filter className="h-5 w-5" />
            <span>Advanced Filters</span>
            {activeFiltersCount > 0 && (
              <span className="bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {activeFiltersCount}
              </span>
            )}
            <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${showFilters ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Advanced filters panel */}
        {showFilters && (
          <div className="mt-6 bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 animate-fade-in-up">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Refine Your Search</h3>
              <button
                onClick={clearFilters}
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
              >
                <X className="h-4 w-4" />
                <span>Clear</span>
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Price Range */}
              <div className="space-y-3">
                <label className="flex items-center space-x-2 text-sm font-medium text-gray-900 dark:text-white">
                  <DollarSign className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <span>Max Price: ${priceRange}</span>
                </label>
                <input
                  type="range"
                  min="50"
                  max="500"
                  step="25"
                  value={priceRange}
                  onChange={(e) => setPriceRange(parseInt(e.target.value))}
                  className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Rating */}
              <div className="space-y-3">
                <label className="flex items-center space-x-2 text-sm font-medium text-gray-900 dark:text-white">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span>Minimum Rating</span>
                </label>
                <div className="flex space-x-1">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => setMinRating(rating)}
                      className={`p-1 rounded transition-all duration-300 hover:scale-110 ${
                        minRating >= rating
                          ? 'text-yellow-400'
                          : 'text-gray-300 dark:text-gray-600 hover:text-yellow-400'
                      }`}
                    >
                      <Star className={`h-5 w-5 ${minRating >= rating ? 'fill-current' : ''}`} />
                    </button>
                  ))}
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
                  className="w-full p-3 bg-white dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                >
                  {availabilityOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchFilters;