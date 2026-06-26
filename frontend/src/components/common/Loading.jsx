import React from 'react';

const Loading = ({ fullScreen = true, message = 'Loading...' }) => {
  const content = (
    <div className="flex flex-col items-center justify-center space-y-4">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-4 border-gray-200 dark:border-gray-700"></div>
        <div className="absolute inset-0 rounded-full border-4 border-primary-500 border-t-transparent animate-spin"></div>
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">{message}</p>
    </div>
  );

  if (fullScreen) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-dark-900">
        {content}
      </div>
    );
  }

  return content;
};

export default Loading;
