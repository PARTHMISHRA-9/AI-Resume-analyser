import React from 'react';
import MainLayout from '../components/layouts/MainLayout';

const Home = () => {
  return (
    <MainLayout>
      <div className="min-h-[calc(100vh-64px)]">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-50 to-indigo-100 dark:from-dark-800 dark:to-dark-900 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-dark-900 dark:text-white mb-6">
                Optimize Your Resume for ATS
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                AI-powered resume analysis to ensure your application gets past Applicant Tracking Systems and reaches recruiters.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-lg transition-colors">
                  Get Started
                </button>
                <button className="px-8 py-3 border-2 border-primary-500 text-primary-600 dark:text-primary-400 font-semibold rounded-lg hover:bg-primary-50 dark:hover:bg-dark-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-dark-900 dark:text-white mb-12">
              Powerful Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'ATS Score Analysis',
                  description: 'Get a detailed ATS compatibility score for your resume.',
                },
                {
                  title: 'Keyword Matching',
                  description: 'Identify missing keywords to increase your chances of getting selected.',
                },
                {
                  title: 'Formatting Review',
                  description: 'Ensure your resume format is ATS-friendly and professionally formatted.',
                },
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all"
                >
                  <h3 className="text-xl font-semibold text-dark-900 dark:text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default Home;
