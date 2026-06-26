import React from 'react';

const Loading = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-dark-900">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-primary-200 dark:border-dark-700 border-t-primary-500 rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-gray-600 dark:text-gray-400">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
