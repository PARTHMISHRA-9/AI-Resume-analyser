import React from 'react';
import { FiAlertCircle, FiCheckCircle, FiInfo, FiX } from 'react-icons/fi';

const Toast = ({ type = 'info', message, onClose, duration = 5000 }) => {
  React.useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  const styles = {
    success: {
      bg: 'bg-success-50 dark:bg-dark-800',
      border: 'border-success-500',
      icon: <FiCheckCircle className="text-success-500" size={20} />,
      text: 'text-success-800 dark:text-success-200',
    },
    error: {
      bg: 'bg-error-50 dark:bg-dark-800',
      border: 'border-error-500',
      icon: <FiAlertCircle className="text-error-500" size={20} />,
      text: 'text-error-800 dark:text-error-200',
    },
    info: {
      bg: 'bg-blue-50 dark:bg-dark-800',
      border: 'border-blue-500',
      icon: <FiInfo className="text-blue-500" size={20} />,
      text: 'text-blue-800 dark:text-blue-200',
    },
  };

  const style = styles[type];

  return (
    <div
      className={`flex items-start gap-3 ${style.bg} border-l-4 ${style.border} p-4 rounded-lg shadow-lg max-w-md`}
      role="alert"
    >
      {style.icon}
      <div className="flex-1">
        <p className={`${style.text} font-medium text-sm`}>{message}</p>
      </div>
      <button
        onClick={onClose}
        className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
        aria-label="Close notification"
      >
        <FiX size={18} />
      </button>
    </div>
  );
};

export default Toast;
