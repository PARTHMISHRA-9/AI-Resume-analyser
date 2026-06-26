import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiMenu, FiX, FiMoon, FiSun, FiLogOut, FiUser } from 'react-icons/fi';
import useAuth from '../../hooks/useAuth';
import useTheme from '../../hooks/useTheme';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/auth/login');
  };

  return (
    <nav className="sticky top-0 z-40 bg-white dark:bg-dark-800 border-b border-gray-200 dark:border-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">AR</span>
            </div>
            <span className="text-xl font-bold gradient-text hidden sm:inline">Resume AI</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors">
                  Dashboard
                </Link>
                <Link to="/resume/upload" className="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors">
                  Upload
                </Link>
                <Link to="/profile" className="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors">
                  Profile
                </Link>
              </>
            ) : (
              <>
                <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors">
                  Home
                </Link>
                <Link to="/#features" className="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors">
                  Features
                </Link>
              </>
            )}
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>

            {/* Auth Buttons / User Menu */}
            {isAuthenticated ? (
              <div className="flex items-center gap-4">
                <Link
                  to="/profile"
                  className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors"
                  aria-label="Profile"
                >
                  <FiUser size={20} />
                </Link>
                <button
                  onClick={handleLogout}
                  className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors"
                  aria-label="Logout"
                >
                  <FiLogOut size={20} />
                </button>
              </div>
            ) : (
              <div className="hidden sm:flex gap-3">
                <Link
                  to="/auth/login"
                  className="px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors font-medium"
                >
                  Login
                </Link>
                <Link
                  to="/auth/register"
                  className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors font-medium"
                >
                  Sign Up
                </Link>
              </div>
            )}

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-3 animate-slide-up">
            {isAuthenticated ? (
              <>
                <Link to="/dashboard" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors">
                  Dashboard
                </Link>
                <Link to="/resume/upload" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors">
                  Upload
                </Link>
                <Link to="/profile" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors">
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="w-full text-left px-4 py-2 text-error-600 dark:text-error-400 hover:bg-error-50 dark:hover:bg-dark-700 transition-colors"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors">
                  Home
                </Link>
                <Link to="/#features" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors">
                  Features
                </Link>
                <Link to="/auth/login" className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors">
                  Login
                </Link>
                <Link to="/auth/register" className="block px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg transition-colors text-center">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
