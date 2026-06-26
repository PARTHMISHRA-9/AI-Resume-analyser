import React from 'react';
import { FiSearch } from 'react-icons/fi';

const SearchBar = ({ placeholder = 'Search...', onChange, value = '', disabled = false }) => {
  return (
    <div className="relative w-full max-w-md">
      <FiSearch
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"
        size={20}
      />
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        disabled={disabled}
        className="w-full pl-12 pr-4 py-3 bg-white dark:bg-dark-800 border border-gray-300 dark:border-gray-600 rounded-lg focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 dark:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Search"
      />
    </div>
  );
};

export default SearchBar;
