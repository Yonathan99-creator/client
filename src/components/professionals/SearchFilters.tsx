import React, { useState } from 'react';
import { Filter, ChevronDown, X, Star, DollarSign, Clock, MapPin, Award, Video, Phone } from 'lucide-react';

const SearchFilters: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    category: 'All',
    availability: '',
    consultationType: '',
    rating: '',
    priceRange: 500
  });

  const categories = [
    'All', 'Healthcare', 'Legal', 'Finance', 'Therapy', 'Consulting', 'Education'
  ];

  const quickFilters = [
    { label: 'Available Now', key: 'availability', value: 'now' },
    { label: 'Video Call', key: 'consultationType', value: 'video' },
    { label: 'Top Rated (4.5+)', key: 'rating', value: '4.5' },
    { label: 'Under $150', key: 'priceRange', value: 150 }
  ];

  const updateFilter = (key: string, value: any) => {
    setSelectedFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const clearFilters = () => {
    setSelectedFilters({
      category: 'All',
      availability: '',
      consultationType: '',
      rating: '',
      priceRange: 500
    });
  };

  const activeFiltersCount = Object.entries(selectedFilters).filter(([key, value]) => {
    if (key === 'category') return value !== 'All';
    if (key === 'priceRange') return value < 500;
    return value !== '';
  }).length;

  const toggleQuickFilter = (filter: any) => {
    const currentValue = selectedFilters[filter.key as keyof typeof selectedFilters];
    const newValue = currentValue === filter.value ? (filter.key === 'priceRange' ? 500 : '') : filter.value;
    updateFilter(filter.key, newValue);
  };

  return (
    <section className="py-8 bg-gradient-to-r from-white via-blue-50/30 to-white dark:from-gray-900 dark:via-blue-950/20 dark:to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => updateFilter('category', category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 relative overflow-hidden ${
                selectedFilters.category === category
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg transform scale-105'
                  : 'bg-white/80 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-700 border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm'
              }`}
            >
              {selectedFilters.category === category && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-20 animate-pulse"></div>
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>

        {/* Quick filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {quickFilters.map((filter, index) => {
            const isActive = filter.key === 'priceRange' 
              ? selectedFilters.priceRange <= filter.value
              : selectedFilters[filter.key as keyof typeof selectedFilters] === filter.value;
            
            return (
              <button
                key={index}
                onClick={() => toggleQuickFilter(filter)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:scale-105 text-sm ${
                  isActive
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 border-2 border-blue-300 dark:border-blue-600'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
                }`}
              >
                {filter.label}
              </button>
            );
          })}
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
          <div className="mt-6 bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl rounded-2xl p-8 animate-fade-in-up border border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center">
                <Award className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2" />
                Advanced Filters
              </h3>
              <button
                onClick={clearFilters}
                className="flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-all duration-300 hover:scale-105 px-3 py-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20"
              >
                <X className="h-4 w-4" />
                <span>Clear</span>
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Price Range */}
              <div className="space-y-3">
                <label className="flex items-center space-x-2 text-sm font-medium text-gray-900 dark:text-white">
                  <DollarSign className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                  <span>Max Price: ${selectedFilters.priceRange}</span>
                </label>
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-3">
                  <input
                    type="range"
                    min="50"
                    max="500"
                    step="25"
                    value={selectedFilters.priceRange}
                    onChange={(e) => updateFilter('priceRange', parseInt(e.target.value))}
                    className="w-full h-3 bg-gradient-to-r from-blue-200 to-purple-200 dark:from-blue-800 dark:to-purple-800 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
                    <span>$50</span>
                    <span>$500+</span>
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
                  value={selectedFilters.availability}
                  onChange={(e) => updateFilter('availability', e.target.value)}
                  className="w-full p-3 bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 border border-green-200 dark:border-green-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300 hover:shadow-md"
                >
                  <option value="">Any time</option>
                  <option value="now">Available now</option>
                  <option value="today">Available today</option>
                  <option value="week">This week</option>
                </select>
              </div>
              
              {/* Consultation Type */}
              <div className="space-y-3">
                <label className="flex items-center space-x-2 text-sm font-medium text-gray-900 dark:text-white">
                  <Video className="h-4 w-4 text-purple-600 dark:text-purple-400" />
                  <span>Consultation Type</span>
                </label>
                <select
                  value={selectedFilters.consultationType}
                  onChange={(e) => updateFilter('consultationType', e.target.value)}
                  className="w-full p-3 bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 hover:shadow-md"
                >
                  <option value="">Any type</option>
                  <option value="video">Video call</option>
                  <option value="phone">Phone call</option>
                  <option value="person">In person</option>
                </select>
              </div>
              
              {/* Rating */}
              <div className="space-y-3">
                <label className="flex items-center space-x-2 text-sm font-medium text-gray-900 dark:text-white">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span>Minimum Rating</span>
                </label>
                <select
                  value={selectedFilters.rating}
                  onChange={(e) => updateFilter('rating', e.target.value)}
                  className="w-full p-3 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border border-yellow-200 dark:border-yellow-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300 hover:shadow-md"
                >
                  <option value="">Any rating</option>
                  <option value="4">4+ stars</option>
                  <option value="4.5">4.5+ stars</option>
                  <option value="4.8">4.8+ stars</option>
                </select>
              </div>
            </div>
            
            {/* Apply filters button */}
            <div className="mt-8 text-center">
              <div className="flex justify-center space-x-4">
                <button 
                  onClick={() => setShowFilters(false)}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Filter className="h-4 w-4 inline mr-2" />
                  Apply Filters ({activeFiltersCount})
                </button>
                {activeFiltersCount > 0 && (
                  <button 
                    onClick={clearFilters}
                    className="px-6 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    Clear All
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Active filters display */}
        {activeFiltersCount > 0 && (
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Active filters:</span>
            {selectedFilters.category !== 'All' && (
              <span className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm">
                {selectedFilters.category}
                <button 
                  onClick={() => updateFilter('category', 'All')}
                  className="ml-2 hover:text-blue-600 dark:hover:text-blue-200"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            {selectedFilters.availability && (
              <span className="inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm">
                Available {selectedFilters.availability === 'now' ? 'Now' : selectedFilters.availability}
                <button 
                  onClick={() => updateFilter('availability', '')}
                  className="ml-2 hover:text-green-600 dark:hover:text-green-200"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            {selectedFilters.consultationType && (
              <span className="inline-flex items-center px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm">
                {selectedFilters.consultationType === 'video' ? 'Video Call' : 
                 selectedFilters.consultationType === 'phone' ? 'Phone Call' : 'In Person'}
                <button 
                  onClick={() => updateFilter('consultationType', '')}
                  className="ml-2 hover:text-purple-600 dark:hover:text-purple-200"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            {selectedFilters.rating && (
              <span className="inline-flex items-center px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-300 rounded-full text-sm">
                {selectedFilters.rating}+ stars
                <button 
                  onClick={() => updateFilter('rating', '')}
                  className="ml-2 hover:text-yellow-600 dark:hover:text-yellow-200"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            {selectedFilters.priceRange < 500 && (
              <span className="inline-flex items-center px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-800 dark:text-indigo-300 rounded-full text-sm">
                Under ${selectedFilters.priceRange}
                <button 
                  onClick={() => updateFilter('priceRange', 500)}
                  className="ml-2 hover:text-indigo-600 dark:hover:text-indigo-200"
                >
                  <X className="h-3 w-3" />
                </button>
              </span>
            )}
            <button 
              onClick={clearFilters}
              className="text-sm text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300 font-medium"
            >
              Clear all
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchFilters;
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