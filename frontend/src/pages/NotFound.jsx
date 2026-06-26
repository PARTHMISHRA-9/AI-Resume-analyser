import React from 'react';
import MainLayout from '../components/layouts/MainLayout';
import { FiHome } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <MainLayout>
      <div className="min-h-[calc(100vh-64px)] flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-dark-900 dark:to-dark-800">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-dark-900 dark:text-white mb-4">404</h1>
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">Page Not Found</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
            Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors"
          >
            <FiHome size={18} />
            Go to Home
          </Link>
        </div>
      </div>
    </MainLayout>
  );
};

export default NotFound;
