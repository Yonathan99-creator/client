import React, { useState } from 'react';
import { Search, MapPin, Filter, Calendar, Clock, DollarSign, Star, ChevronDown, X, Sliders } from 'lucide-react';

const SearchFilters: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedAvailability, setSelectedAvailability] = useState('');
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [minRating, setMinRating] = useState(0);
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
  const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);
  const [selectedExperience, setSelectedExperience] = useState('');
  const [selectedInsurance, setSelectedInsurance] = useState<string[]>([]);

  const categories = [
    'All', 'Healthcare', 'Legal', 'Finance', 'Therapy', 'Consulting', 
    'Education', 'Technology', 'Real Estate', 'Beauty & Wellness'
  ];

  const availabilityOptions = [
    'Available Now', 'Available Today', 'Available This Week', 
    'Available This Month', 'Flexible Schedule'
  ];

  const languages = [
    'English', 'Spanish', 'French', 'German', 'Italian', 
    'Portuguese', 'Chinese', 'Japanese', 'Arabic'
  ];

  const experienceOptions = [
    '1-2 years', '3-5 years', '6-10 years', '11-15 years', '15+ years'
  ];

  const insuranceOptions = [
    'Blue Cross Blue Shield', 'Aetna', 'Cigna', 'UnitedHealth', 
    'Kaiser Permanente', 'Humana', 'Medicare', 'Medicaid'
  ];

  const toggleLanguage = (language: string) => {
    setSelectedLanguages(prev => 
      prev.includes(language) 
        ? prev.filter(l => l !== language)
        : [...prev, language]
    );
  };

  const toggleInsurance = (insurance: string) => {
    setSelectedInsurance(prev => 
      prev.includes(insurance) 
        ? prev.filter(i => i !== insurance)
        : [...prev, insurance]
    );
  };

  const clearAllFilters = () => {
    setSelectedCategory('All');
    setSelectedLocation('');
    setSelectedAvailability('');
    setPriceRange([0, 500]);
    setMinRating(0);
    setSelectedLanguages([]);
    setSelectedExperience('');
    setSelectedInsurance([]);
  };

  return (
    <section className="py-12 bg-white dark:bg-gray-900 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Search Bar */}
        <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl mb-8 border border-gray-200 dark:border-gray-700 animate-fade-in-up">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Search Input */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search professionals, specialties, or services..."
                className="w-full pl-14 pr-4 py-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-lg"
              />
            </div>

            {/* Location Input */}
            <div className="relative lg:w-64">
              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
              <input
                type="text"
                placeholder="Location"
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full pl-14 pr-4 py-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-lg"
              />
            </div>

            {/* Advanced Filters Toggle */}
            <button
              onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
              className="flex items-center space-x-2 px-6 py-4 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-2xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-600"
            >
              <Sliders className="h-6 w-6" />
              <span className="font-medium">Advanced Filters</span>
              <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${showAdvancedFilters ? 'rotate-180' : ''}`} />
            </button>

            {/* Search Button */}
            <button className="px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg">
              Search
            </button>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in-up animation-delay-300">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 hover:scale-105 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Advanced Filters Panel */}
        {showAdvancedFilters && (
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700 animate-fade-in-up animation-delay-500">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Advanced Filters</h3>
              <button
                onClick={clearAllFilters}
                className="flex items-center space-x-2 px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 transition-colors"
              >
                <X className="h-4 w-4" />
                <span>Clear All</span>
              </button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Availability Filter */}
              <div className="space-y-4">
                <label className="flex items-center space-x-2 text-lg font-semibold text-gray-900 dark:text-white">
                  <Calendar className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  <span>Availability</span>
                </label>
                <select
                  value={selectedAvailability}
                  onChange={(e) => setSelectedAvailability(e.target.value)}
                  className="w-full p-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300"
                >
                  <option value="">Any availability</option>
                  {availabilityOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              {/* Price Range Filter */}
              <div className="space-y-4">
                <label className="flex items-center space-x-2 text-lg font-semibold text-gray-900 dark:text-white">
                  <DollarSign className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  <span>Price Range</span>
                </label>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}+</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="500"
                    step="25"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
              </div>

              {/* Rating Filter */}
              <div className="space-y-4">
                <label className="flex items-center space-x-2 text-lg font-semibold text-gray-900 dark:text-white">
                  <Star className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  <span>Minimum Rating</span>
                </label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => setMinRating(rating)}
                      className={`p-2 rounded-xl transition-all duration-300 hover:scale-110 ${
                        minRating >= rating
                          ? 'text-yellow-400'
                          : 'text-gray-300 dark:text-gray-600 hover:text-yellow-400'
                      }`}
                    >
                      <Star className={`h-6 w-6 ${minRating >= rating ? 'fill-current' : ''}`} />
                    </button>
                  ))}
                </div>
              </div>

              {/* Experience Filter */}
              <div className="space-y-4">
                <label className="flex items-center space-x-2 text-lg font-semibold text-gray-900 dark:text-white">
                  <Clock className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                  <span>Experience</span>
                </label>
                <select
                  value={selectedExperience}
                  onChange={(e) => setSelectedExperience(e.target.value)}
                  className="w-full p-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300"
                >
                  <option value="">Any experience</option>
                  {experienceOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              {/* Languages Filter */}
              <div className="space-y-4">
                <label className="text-lg font-semibold text-gray-900 dark:text-white">Languages</label>
                <div className="flex flex-wrap gap-2">
                  {languages.map((language) => (
                    <button
                      key={language}
                      onClick={() => toggleLanguage(language)}
                      className={`px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 ${
                        selectedLanguages.includes(language)
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      {language}
                    </button>
                  ))}
                </div>
              </div>

              {/* Insurance Filter */}
              <div className="space-y-4">
                <label className="text-lg font-semibold text-gray-900 dark:text-white">Insurance Accepted</label>
                <div className="space-y-2 max-h-40 overflow-y-auto">
                  {insuranceOptions.map((insurance) => (
                    <label key={insurance} className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedInsurance.includes(insurance)}
                        onChange={() => toggleInsurance(insurance)}
                        className="w-4 h-4 text-primary-600 bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded focus:ring-primary-500 focus:ring-2"
                      />
                      <span className="text-gray-700 dark:text-gray-300">{insurance}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Apply Filters Button */}
            <div className="mt-8 text-center">
              <button className="px-12 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg">
                Apply Filters
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SearchFilters;