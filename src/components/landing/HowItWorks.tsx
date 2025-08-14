import React from 'react';
import { Search, UserCheck, Calendar, CheckCircle, ArrowRight, Sparkles } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: Search,
      title: 'Search & Discover',
      description: 'Browse through thousands of verified professionals across all industries and specialties.',
      details: ['Filter by location, price, and availability', 'Read reviews and ratings', 'Compare profiles and expertise'],
      color: 'from-blue-500 to-cyan-500',
      delay: 0
    },
    {
      icon: UserCheck,
      title: 'Choose Your Professional',
      description: 'Select the perfect professional based on their expertise, reviews, and availability.',
      details: ['View detailed profiles', 'Check credentials and certifications', 'See real client testimonials'],
      color: 'from-purple-500 to-pink-500',
      delay: 200
    },
    {
      icon: Calendar,
      title: 'Book Instantly',
      description: 'Schedule your appointment with just a few clicks. Choose your preferred time and date.',
      details: ['Real-time availability', 'Instant confirmation', 'Flexible scheduling options'],
      color: 'from-green-500 to-teal-500',
      delay: 400
    },
    {
      icon: CheckCircle,
      title: 'Meet & Review',
      description: 'Attend your appointment and share your experience to help other clients.',
      details: ['Video, phone, or in-person meetings', 'Secure payment processing', 'Rate and review your experience'],
      color: 'from-orange-500 to-red-500',
      delay: 600
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 transition-all duration-500 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-full mb-6">
            <Sparkles className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
            <span className="text-blue-800 dark:text-blue-300 font-medium">How It Works</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Book Your Perfect
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Appointment </span>
            in 4 Simple Steps
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our streamlined process makes it easy to find and book appointments with top professionals
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-green-200 dark:from-blue-800 dark:via-purple-800 dark:to-green-800 transform -translate-y-1/2"></div>
          
          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${step.delay}ms` }}
              >
                {/* Step card */}
                <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 border border-gray-200 dark:border-gray-700 relative overflow-hidden">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  {/* Step number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-full flex items-center justify-center font-bold text-gray-600 dark:text-gray-300 group-hover:scale-110 transition-transform duration-300">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Details list */}
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li
                        key={detailIndex}
                        className="flex items-center text-sm text-gray-500 dark:text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors duration-300"
                      >
                        <div className={`w-2 h-2 bg-gradient-to-r ${step.color} rounded-full mr-3 group-hover:scale-125 transition-transform duration-300`}></div>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  {/* Arrow for desktop */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-8 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center border border-gray-200 dark:border-gray-700 group-hover:scale-110 transition-transform duration-300">
                        <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-16 animate-fade-in-up animation-delay-800">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied clients who have found their perfect professional match through ProBooking
              </p>
              <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group">
                Start Booking Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;