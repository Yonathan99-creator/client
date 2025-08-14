import React from 'react';
import { Search, Users, Star, Award, TrendingUp, Shield } from 'lucide-react';

const ProfessionalsHero: React.FC = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-950 dark:via-gray-900 dark:to-secondary-950/30 overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-400 to-secondary-600 rounded-full opacity-20 dark:opacity-10 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-secondary-400 to-accent-600 rounded-full opacity-20 dark:opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary-400 to-secondary-600 rounded-full opacity-10 dark:opacity-5 animate-spin-slow"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Hero content */}
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-primary-100 to-secondary-100 dark:from-primary-900/30 dark:to-secondary-900/30 rounded-full mb-8 border border-primary-200/50 dark:border-primary-700/50">
            <Users className="h-6 w-6 text-primary-600 dark:text-primary-400 mr-3" />
            <span className="text-primary-800 dark:text-primary-300 font-semibold">10,000+ Verified Professionals</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-gray-50 mb-6 leading-tight animate-fade-in-up animation-delay-300">
            Find Your Perfect
            <span className="text-gradient animate-text-shimmer"> Professional</span>
            <br />
            Match Today
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed animate-fade-in-up animation-delay-500">
            Connect with top-rated professionals across all industries. From healthcare to legal services, 
            find verified experts who match your specific needs and schedule appointments instantly.
          </p>

          {/* Quick search bar */}
          <div className="max-w-4xl mx-auto mb-12 animate-fade-in-up animation-delay-700">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-2xl border border-gray-200 dark:border-gray-700 backdrop-blur-xl">
              <div className="flex flex-col lg:flex-row gap-4 items-center">
                <div className="flex-1 relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search by profession, specialty, or name..."
                    className="w-full pl-14 pr-4 py-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-300 text-lg"
                  />
                </div>
                <button className="px-8 py-4 bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 text-white font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg animate-pulse-glow">
                  Search Professionals
                </button>
              </div>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto animate-fade-in-up animation-delay-1000">
            <div className="flex flex-col items-center space-y-3 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-600 hover:shadow-xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 group">
              <div className="p-3 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-green-600 transition-colors">100%</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Verified</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-600 hover:shadow-xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 group animation-delay-300">
              <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl">
                <Users className="h-8 w-8 text-white" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 transition-colors">10K+</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Professionals</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-600 hover:shadow-xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 group animation-delay-500">
              <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl">
                <Star className="h-8 w-8 text-white" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-yellow-600 transition-colors">4.9</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Avg Rating</div>
              </div>
            </div>

            <div className="flex flex-col items-center space-y-3 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg border border-gray-200 dark:border-gray-600 hover:shadow-xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 group animation-delay-700">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900 dark:text-gray-100 group-hover:text-purple-600 transition-colors">98%</div>
                <div className="text-gray-600 dark:text-gray-400 text-sm">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalsHero;