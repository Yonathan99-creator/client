import React from 'react';
import { Star, Award, Clock, MapPin, Calendar, Heart, CheckCircle, TrendingUp } from 'lucide-react';

const FeaturedProfessionals: React.FC = () => {
  const featuredProfessionals = [
    {
      id: 1,
      name: 'Dr. Sarah Mitchell',
      specialty: 'Cardiologist',
      category: 'Healthcare',
      rating: 4.9,
      reviews: 342,
      price: '$180',
      availability: 'Available Today',
      location: 'New York, NY',
      image: 'https://images.pexels.com/photos/5452268/pexels-photo-5452268.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&crop=face',
      verified: true,
      responseTime: '< 30 min',
      experience: '15+ years',
      featured: true,
      languages: ['English', 'Spanish'],
      nextAvailable: 'Today 2:00 PM',
      specializations: ['Heart Surgery', 'Preventive Cardiology', 'Interventional Cardiology']
    },
    {
      id: 2,
      name: 'James Rodriguez',
      specialty: 'Corporate Lawyer',
      category: 'Legal',
      rating: 4.8,
      reviews: 289,
      price: '$250',
      availability: 'Available Now',
      location: 'Los Angeles, CA',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&crop=face',
      verified: true,
      responseTime: '< 15 min',
      experience: '12+ years',
      featured: true,
      languages: ['English', 'Spanish', 'French'],
      nextAvailable: 'Now',
      specializations: ['Contract Law', 'Business Formation', 'Intellectual Property']
    },
    {
      id: 3,
      name: 'Dr. Emily Chen',
      specialty: 'Clinical Psychologist',
      category: 'Therapy',
      rating: 4.9,
      reviews: 456,
      price: '$120',
      availability: 'Available Tomorrow',
      location: 'San Francisco, CA',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop&crop=face',
      verified: true,
      responseTime: '< 1 hour',
      experience: '10+ years',
      featured: true,
      languages: ['English', 'Chinese'],
      nextAvailable: 'Tomorrow 10:00 AM',
      specializations: ['Anxiety Disorders', 'Depression', 'Cognitive Behavioral Therapy']
    }
  ];

  const getAvailabilityColor = (availability: string) => {
    if (availability.includes('Now')) return 'text-green-600 bg-green-100 dark:bg-green-900/20 dark:text-green-400';
    if (availability.includes('Today')) return 'text-blue-600 bg-blue-100 dark:bg-blue-900/20 dark:text-blue-400';
    return 'text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20 dark:text-yellow-400';
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-full mb-6">
            <TrendingUp className="h-6 w-6 text-yellow-600 dark:text-yellow-400 mr-3" />
            <span className="text-yellow-800 dark:text-yellow-300 font-semibold">Featured Professionals</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Top-Rated
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600"> Professionals</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our most highly-rated and experienced professionals, handpicked for their exceptional service and expertise
          </p>
        </div>

        {/* Featured Professionals Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {featuredProfessionals.map((professional, index) => (
            <div
              key={professional.id}
              className="group bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-700 transform hover:-translate-y-6 hover:scale-105 border border-gray-200 dark:border-gray-700 animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Featured Badge */}
              <div className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                <Award className="h-3 w-3" />
                <span>FEATURED</span>
              </div>

              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/10 dark:to-secondary-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div className="relative z-10">
                {/* Professional Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <img
                        src={professional.image}
                        alt={professional.name}
                        className="h-20 w-20 rounded-full object-cover ring-4 ring-white dark:ring-gray-700 group-hover:ring-primary-200 dark:group-hover:ring-primary-800 transition-all duration-500 shadow-lg"
                      />
                      {professional.verified && (
                        <div className="absolute -bottom-1 -right-1 bg-blue-600 rounded-full p-1">
                          <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                        {professional.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 font-medium text-lg">
                        {professional.specialty}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        {professional.experience} experience
                      </p>
                    </div>
                  </div>
                  <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110">
                    <Heart className="h-5 w-5 text-gray-400 hover:text-red-500 transition-colors" />
                  </button>
                </div>

                {/* Rating and Reviews */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < Math.floor(professional.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300 dark:text-gray-600'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-lg font-bold text-gray-900 dark:text-white">
                      {professional.rating}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400">
                      ({professional.reviews} reviews)
                    </span>
                  </div>
                  <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    {professional.price}
                  </span>
                </div>

                {/* Specializations */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Specializations:</h4>
                  <div className="flex flex-wrap gap-2">
                    {professional.specializations.map((spec, specIndex) => (
                      <span
                        key={specIndex}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-800 dark:text-primary-300 rounded-full text-xs font-medium"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {professional.location}
                      </span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getAvailabilityColor(professional.availability)}`}>
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
                        Next: {professional.nextAvailable}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <span className="text-sm text-gray-600 dark:text-gray-400">Languages:</span>
                    <div className="flex space-x-1">
                      {professional.languages.map((lang, langIndex) => (
                        <span
                          key={langIndex}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                        >
                          {lang}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold py-4 px-4 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-xl shadow-lg group/btn">
                    <Calendar className="h-5 w-5 inline mr-2 group-hover/btn:scale-110 transition-transform" />
                    Book Now
                  </button>
                  <button className="px-6 py-4 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-2xl transition-all duration-500 hover:scale-105 shadow-md hover:shadow-lg">
                    View Profile
                  </button>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-6 left-6 w-8 h-8 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-6 right-6 w-6 h-6 bg-gradient-to-tr from-secondary-100 to-accent-100 dark:from-secondary-900/20 dark:to-accent-900/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16 animate-fade-in-up animation-delay-800">
          <button className="inline-flex items-center px-8 py-4 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold rounded-2xl border-2 border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl">
            View All Featured Professionals
            <TrendingUp className="ml-2 h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProfessionals;