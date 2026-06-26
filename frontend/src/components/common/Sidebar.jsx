import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiHome, FiUploadCloud, FiBarChart2, FiUser, FiChevronDown } from 'react-icons/fi';
import useAuth from '../../hooks/useAuth';

const Sidebar = ({ collapsed = false, onCollapse }) => {
  const location = useLocation();
  const { user } = useAuth();
  const [expandedMenu, setExpandedMenu] = useState(null);

  const isActive = (path) => location.pathname.startsWith(path);

  const menuItems = [
    { label: 'Dashboard', path: '/dashboard', icon: FiHome },
    { label: 'Upload Resume', path: '/resume/upload', icon: FiUploadCloud },
    { label: 'Analysis', path: '/analysis', icon: FiBarChart2 },
    { label: 'Profile', path: '/profile', icon: FiUser },
  ];

  return (
    <aside
      className={`fixed left-0 top-16 h-[calc(100vh-64px)] bg-white dark:bg-dark-800 border-r border-gray-200 dark:border-gray-700 transition-all duration-300 ${
        collapsed ? 'w-20' : 'w-64'
      } overflow-y-auto`}
      role="navigation"
      aria-label="Sidebar navigation"
    >
      {/* User Profile Section */}
      {!collapsed && (
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white font-bold">
              {user?.fullName?.charAt(0).toUpperCase() || 'U'}
            </div>
            <div>
              <p className="font-semibold text-dark-900 dark:text-white text-sm">{user?.fullName || 'User'}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{user?.email || 'user@example.com'}</p>
            </div>
          </div>
        </div>
      )}

      {/* Menu Items */}
      <nav className="px-3 py-6 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);

          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                active
                  ? 'bg-primary-500 text-white'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-dark-700'
              }${
                collapsed ? 'justify-center' : ''
              }`}
              title={collapsed ? item.label : undefined}
            >
              <Icon size={20} />
              {!collapsed && <span className="font-medium">{item.label}</span>}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
