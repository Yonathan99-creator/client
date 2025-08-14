import React, { useState } from 'react';
import { Search, MapPin, Star, Clock, Calendar, Filter, Heart, Award, CheckCircle } from 'lucide-react';

const ProfessionalSearch: React.FC = () => {
+  const [selectedCategory, setSelectedCategory] = useState('All');
+  const [favorites, setFavorites] = useState<number[]>([]);
+
+  const categories = ['All', 'Healthcare', 'Legal', 'Finance', 'Therapy', 'Consulting', 'Education'];
+
+  const professionals = [
+    {
+      id: 1,
+      name: 'Dr. Emily Davis',
+      specialty: 'Cardiologist',
+      category: 'Healthcare',
+      rating: 4.9,
+      reviews: 234,
+      price: '$150',
+      availability: 'Available Today',
+      location: 'New York, NY',
+      image: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face',
+      verified: true,
+      responseTime: '< 1 hour',
+      experience: '15+ years'
+    },
+    {
+      id: 2,
+      name: 'James Wilson',
+      specialty: 'Corporate Lawyer',
+      category: 'Legal',
+      rating: 4.8,
+      reviews: 189,
+      price: '$200',
+      availability: 'Available Tomorrow',
+      location: 'Los Angeles, CA',
+      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face',
+      verified: true,
+      responseTime: '< 2 hours',
+      experience: '12+ years'
+    },
+    {
+      id: 3,
+      name: 'Sarah Johnson',
+      specialty: 'Financial Advisor',
+      category: 'Finance',
+      rating: 4.9,
+      reviews: 156,
+      price: '$120',
+      availability: 'Available Now',
+      location: 'Chicago, IL',
+      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face',
+      verified: true,
+      responseTime: '< 30 min',
+      experience: '10+ years'
+    },
+    {
+      id: 4,
+      name: 'Dr. Michael Brown',
+      specialty: 'Therapist',
+      category: 'Therapy',
+      rating: 4.7,
+      reviews: 298,
+      price: '$100',
+      availability: 'Available Today',
+      location: 'Miami, FL',
+      image: 'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face',
+      verified: true,
+      responseTime: '< 1 hour',
+      experience: '8+ years'
+    },
+    {
+      id: 5,
+      name: 'Lisa Chen',
+      specialty: 'Business Consultant',
+      category: 'Consulting',
+      rating: 4.8,
+      reviews: 167,
+      price: '$180',
+      availability: 'Available Tomorrow',
+      location: 'San Francisco, CA',
+      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face',
+      verified: true,
+      responseTime: '< 2 hours',
+      experience: '14+ years'
+    },
+    {
+      id: 6,
+      name: 'Prof. David Martinez',
+      specialty: 'Math Tutor',
+      category: 'Education',
+      rating: 4.9,
+      reviews: 203,
+      price: '$80',
+      availability: 'Available Now',
+      location: 'Boston, MA',
+      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop&crop=face',
+      verified: true,
+      responseTime: '< 30 min',
+      experience: '20+ years'
+    }
+  ];
+
+  const filteredProfessionals = selectedCategory === 'All' 
+    ? professionals 
+    : professionals.filter(prof => prof.category === selectedCategory);
+
+  const toggleFavorite = (id: number) => {
+    setFavorites(prev => 
+      prev.includes(id) 
+        ? prev.filter(fav => fav !== id)
+        : [...prev, id]
+    );
+  };
+
+  const getAvailabilityColor = (availability: string) => {
+    if (availability.includes('Now')) return 'text-green-600 bg-green-100 dark:bg-green-900/20 dark:text-green-400';
+    if (availability.includes('Today')) return 'text-blue-600 bg-blue-100 dark:bg-blue-900/20 dark:text-blue-400';
+    return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20 dark:text-yellow-400';
+  };
+
+  return (
+    <section id="professionals" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 transition-all duration-500">
+      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
+        {/* Section header */}
+        <div className="text-center mb-16 animate-fade-in-up">
+          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
+            Find Your Perfect
+            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Professional</span>
+          </h2>
+          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
+            Browse through thousands of verified professionals and book your appointment instantly
+          </p>
+        </div>
+
+        {/* Search and Filter Bar */}
+        <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl mb-12 border border-gray-200 dark:border-gray-700 animate-fade-in-up animation-delay-300">
+          <div className="flex flex-col lg:flex-row gap-4 items-center">
+            <div className="flex-1 relative">
+              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
+              <input
+                type="text"
+                placeholder="Search professionals, specialties, or services..."
+                className="w-full pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
+              />
+            </div>
+            <div className="relative">
+              <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
+              <input
+                type="text"
+                placeholder="Location"
+                className="w-full lg:w-48 pl-12 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
+              />
+            </div>
+            <button className="flex items-center space-x-2 px-6 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-xl transition-all duration-300 hover:scale-105">
+              <Filter className="h-5 w-5" />
+              <span>Filters</span>
+            </button>
+          </div>
+        </div>
+
+        {/* Category Filter */}
+        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in-up animation-delay-500">
+          {categories.map((category) => (
+            <button
+              key={category}
+              onClick={() => setSelectedCategory(category)}
+              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
+                selectedCategory === category
+                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
+                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
+              }`}
+            >
+              {category}
+            </button>
+          ))}
+        </div>
+
+        {/* Professionals Grid */}
+        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
+          {filteredProfessionals.map((professional, index) => (
+            <div
+              key={professional.id}
+              className="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700 animate-fade-in-up"
+              style={{ animationDelay: `${index * 150}ms` }}
+            >
+              {/* Professional Header */}
+              <div className="relative mb-4">
+                <div className="flex items-start justify-between">
+                  <div className="flex items-center space-x-4">
+                    <div className="relative">
+                      <img
+                        src={professional.image}
+                        alt={professional.name}
+                        className="h-16 w-16 rounded-full object-cover ring-4 ring-white dark:ring-gray-700 group-hover:ring-blue-200 dark:group-hover:ring-blue-800 transition-all duration-300"
+                      />
+                      {professional.verified && (
+                        <div className="absolute -bottom-1 -right-1 bg-blue-600 rounded-full p-1">
+                          <CheckCircle className="h-4 w-4 text-white" />
+                        </div>
+                      )}
+                    </div>
+                    <div>
+                      <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
+                        {professional.name}
+                      </h3>
+                      <p className="text-gray-600 dark:text-gray-400 font-medium">
+                        {professional.specialty}
+                      </p>
+                    </div>
+                  </div>
+                  <button
+                    onClick={() => toggleFavorite(professional.id)}
+                    className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110"
+                  >
+                    <Heart
+                      className={`h-5 w-5 transition-all duration-300 ${
+                        favorites.includes(professional.id)
+                          ? 'text-red-500 fill-current'
+                          : 'text-gray-400 hover:text-red-500'
+                      }`}
+                    />
+                  </button>
+                </div>
+              </div>
+
+              {/* Rating and Reviews */}
+              <div className="flex items-center justify-between mb-4">
+                <div className="flex items-center space-x-2">
+                  <div className="flex items-center">
+                    {[...Array(5)].map((_, i) => (
+                      <Star
+                        key={i}
+                        className={`h-4 w-4 ${
+                          i < Math.floor(professional.rating)
+                            ? 'text-yellow-400 fill-current'
+                            : 'text-gray-300 dark:text-gray-600'
+                        }`}
+                      />
+                    ))}
+                  </div>
+                  <span className="text-sm font-medium text-gray-900 dark:text-white">
+                    {professional.rating}
+                  </span>
+                  <span className="text-sm text-gray-500 dark:text-gray-400">
+                    ({professional.reviews} reviews)
+                  </span>
+                </div>
+                <div className="flex items-center space-x-1">
+                  <Award className="h-4 w-4 text-blue-600 dark:text-blue-400" />
+                  <span className="text-sm text-gray-600 dark:text-gray-400">
+                    {professional.experience}
+                  </span>
+                </div>
+              </div>
+
+              {/* Details */}
+              <div className="space-y-3 mb-6">
+                <div className="flex items-center justify-between">
+                  <div className="flex items-center space-x-2">
+                    <MapPin className="h-4 w-4 text-gray-400" />
+                    <span className="text-sm text-gray-600 dark:text-gray-400">
+                      {professional.location}
+                    </span>
+                  </div>
+                  <span className="text-lg font-bold text-gray-900 dark:text-white">
+                    {professional.price}
+                  </span>
+                </div>
+                
+                <div className="flex items-center justify-between">
+                  <div className="flex items-center space-x-2">
+                    <Clock className="h-4 w-4 text-gray-400" />
+                    <span className="text-sm text-gray-600 dark:text-gray-400">
+                      Responds in {professional.responseTime}
+                    </span>
+                  </div>
+                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getAvailabilityColor(professional.availability)}`}>
+                    {professional.availability}
+                  </span>
+                </div>
+              </div>
+
+              {/* Action Buttons */}
+              <div className="flex space-x-3">
+                <button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg group">
+                  <Calendar className="h-4 w-4 inline mr-2 group-hover:scale-110 transition-transform" />
+                  Book Now
+                </button>
+                <button className="px-4 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-xl transition-all duration-300 hover:scale-105">
+                  View Profile
+                </button>
+              </div>
+            </div>
+          ))}
+        </div>
+
+        {/* Load More Button */}
+        <div className="text-center mt-12 animate-fade-in-up">
+          <button className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-xl border-2 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
+            Load More Professionals
+            <Search className="ml-2 h-5 w-5" />
+          </button>
+        </div>
+      </div>
+    </section>
+  );
+};
+
+export default ProfessionalSearch;