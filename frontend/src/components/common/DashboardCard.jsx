import React from 'react';

const DashboardCard = ({ title, value, icon: Icon, trend, color = 'primary', description }) => {
  const colorClasses = {
    primary: 'bg-primary-50 dark:bg-dark-700 border-primary-200 dark:border-primary-900',
    success: 'bg-success-50 dark:bg-dark-700 border-success-200 dark:border-success-900',
    warning: 'bg-warning-50 dark:bg-dark-700 border-warning-200 dark:border-warning-900',
    error: 'bg-error-50 dark:bg-dark-700 border-error-200 dark:border-error-900',
  };

  const iconColorClasses = {
    primary: 'text-primary-600 dark:text-primary-400',
    success: 'text-success-600 dark:text-success-400',
    warning: 'text-warning-600 dark:text-warning-400',
    error: 'text-error-600 dark:text-error-400',
  };

  return (
    <div className={`${colorClasses[color]} border rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:scale-105`}>
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">{title}</p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-3xl font-bold text-dark-900 dark:text-white">{value}</h3>
            {trend && (
              <span className={`text-sm font-semibold ${
                trend > 0 ? 'text-success-600' : trend < 0 ? 'text-error-600' : 'text-gray-600'
              }`}>
                {trend > 0 ? '+' : ''}{trend}%
              </span>
            )}
          </div>
          {description && <p className="text-xs text-gray-500 dark:text-gray-500 mt-2">{description}</p>}
        </div>
        {Icon && <Icon className={`${iconColorClasses[color]} w-8 h-8`} />}
      </div>
    </div>
  );
};

export default DashboardCard;
