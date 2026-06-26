import React from 'react';
import { FiInbox } from 'react-icons/fi';

const EmptyState = ({ icon: Icon = FiInbox, title, description, action = null, size = 'md' }) => {
  const sizes = {
    sm: { icon: 32, title: 'text-lg', padding: 'py-8' },
    md: { icon: 48, title: 'text-xl', padding: 'py-16' },
    lg: { icon: 64, title: 'text-2xl', padding: 'py-24' },
  };

  const s = sizes[size];

  return (
    <div className={`flex flex-col items-center justify-center text-center ${s.padding}`}>
      <Icon size={s.icon} className="text-gray-400 dark:text-gray-600 mb-4" />
      <h3 className={`${s.title} font-bold text-dark-900 dark:text-white mb-2`}>{title}</h3>
      {description && <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-sm">{description}</p>}
      {action && <div>{action}</div>}
    </div>
  );
};

export default EmptyState;
