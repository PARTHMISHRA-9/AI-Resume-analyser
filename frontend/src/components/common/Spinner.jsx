import React from 'react';

const Spinner = ({ size = 'md', color = 'primary' }) => {
  const sizes = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4',
  };

  const colors = {
    primary: 'border-primary-200 border-t-primary-500',
    white: 'border-white/20 border-t-white',
  };

  return <div className={`${sizes[size]} ${colors[color]} border-t-4 rounded-full animate-spin`}></div>;
};

export default Spinner;
