import React from 'react';
import { FiMail, FiMapPin, FiLink } from 'react-icons/fi';

const ProfileCard = ({ user, onEdit, onLogout }) => {
  return (
    <div className="bg-white dark:bg-dark-800 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg">
      {/* Cover Background */}
      <div className="h-24 bg-gradient-to-r from-primary-500 to-primary-600"></div>

      {/* Content */}
      <div className="px-6 pb-6">
        {/* Avatar */}
        <div className="flex items-end justify-between mb-4">
          <div className="flex items-end gap-4">
            <div className="-mt-12 w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 border-4 border-white dark:border-dark-800 flex items-center justify-center text-white font-bold text-3xl">
              {user?.fullName?.charAt(0).toUpperCase() || 'U'}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-dark-900 dark:text-white">{user?.fullName || 'User'}</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400">Profile</p>
            </div>
          </div>
        </div>

        {/* Info */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
            <FiMail size={16} className="text-primary-500" />
            <span className="text-sm">{user?.email || 'email@example.com'}</span>
          </div>
          {user?.location && (
            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
              <FiMapPin size={16} className="text-primary-500" />
              <span className="text-sm">{user.location}</span>
            </div>
          )}
          {user?.website && (
            <div className="flex items-center gap-3 text-gray-600 dark:text-gray-400">
              <FiLink size={16} className="text-primary-500" />
              <a href={user.website} target="_blank" rel="noopener noreferrer" className="text-sm text-primary-500 hover:text-primary-600">
                {user.website}
              </a>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={onEdit}
            className="flex-1 py-2 px-4 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors"
          >
            Edit Profile
          </button>
          <button
            onClick={onLogout}
            className="flex-1 py-2 px-4 bg-gray-100 dark:bg-dark-700 text-gray-900 dark:text-white font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-dark-600 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
