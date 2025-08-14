import React from 'react';
import { Users, Star, Calendar, Award, TrendingUp, Clock, Shield, CheckCircle } from 'lucide-react';

const ProfessionalsStats: React.FC = () => {
  const stats = [
    {
      icon: Users,
      value: '10,000+',
      label: 'Verified Professionals',
      description: 'Across all industries and specialties',
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50 dark:from-blue-900/10 dark:to-cyan-900/10'
    },
    {
      icon: Star,
      value: '4.9',
      label: 'Average Rating',
      description: 'Based on 50,000+ client reviews',
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'from-yellow-50 to-orange-50 dark:from-yellow-900/10 dark:to-orange-900/10'
    },
    {
      icon: Calendar,
      value: '100K+',
      label: 'Appointments Booked',
      description: 'Successfully completed this year',
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10'
    },
    {
      icon: Clock,
      value: '< 2 min',
      label: 'Average Response Time',
      description: 'Quick replies from professionals',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50 dark:from-purple-900/10 dark:to-pink-900/10'
    }
  ];

  const categories = [
    { name: 'Healthcare', count: '2,500+', icon: '🏥' },
    { name: 'Legal', count: '1,800+', icon: '⚖️' },
    { name: 'Finance', count: '1,200+', icon: '💰' },
    { name: 'Education', count: '2,000+', icon: '📚' },
    { name: 'Technology', count: '1,500+', icon: '💻' },
    { name: 'Consulting', count: '1,000+', icon: '📊' }
  ];

  const achievements = [
    {
      icon: Shield,
      title: '100% Verified',
      description: 'All professionals undergo thorough background checks'
    },
    {
      icon: Award,
      title: 'Top Rated',
      description: 'Only the highest-rated professionals make it to our platform'
    },
    {
      icon: CheckCircle,
      title: 'Quality Guaranteed',
      description: 'Satisfaction guaranteed or your money back'
    },
    {
      icon: TrendingUp,
      title: 'Growing Network',
      description: 'New professionals joining daily across all specialties'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Platform
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Statistics</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            See why thousands of clients trust ProBooking for their professional service needs
          </p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="group bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-4 hover:scale-105 border border-gray-200 dark:border-gray-700 animate-fade-in-up relative overflow-hidden"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}></div>
              
              <div className="relative z-10 text-center">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${stat.color} rounded-3xl mb-6 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                  <stat.icon className="h-10 w-10 text-white" />
                </div>

                {/* Value */}
                <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-500">
                  {stat.value}
                </div>

                {/* Label */}
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {stat.description}
                </p>

                {/* Decorative element */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Categories Section */}
        <div className="mb-20 animate-fade-in-up animation-delay-800">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Professionals by Category
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div
                key={category.name}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-105 border border-gray-200 dark:border-gray-700 group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-4">
                  <div className="text-3xl group-hover:scale-125 transition-transform duration-300">
                    {category.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {category.name}
                    </h4>
                    <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                      {category.count}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <div className="animate-fade-in-up animation-delay-1000">
          <h3 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Why Choose ProBooking?
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.title}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-4 group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg">
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {achievement.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20 animate-fade-in-up animation-delay-1200">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Find Your Perfect Professional?
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
                Join thousands of satisfied clients who have found their ideal professional match through ProBooking
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-2xl hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group">
                  <Calendar className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Start Searching Now
                </button>
                <button className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-2xl hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105">
                  <Users className="mr-2 h-5 w-5" />
                  Browse Categories
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalsStats;