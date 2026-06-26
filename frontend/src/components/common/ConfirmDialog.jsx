import React from 'react';
import { FiAlertTriangle } from 'react-icons/fi';

const ConfirmDialog = ({
  isOpen,
  title,
  message,
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  isDangerous = false,
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-dark-800 rounded-2xl shadow-xl max-w-sm w-full mx-4 p-6">
        {/* Icon */}
        {isDangerous && (
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-error-100 dark:bg-dark-700 rounded-full flex items-center justify-center">
              <FiAlertTriangle className="text-error-600 dark:text-error-400" size={24} />
            </div>
          </div>
        )}

        {/* Content */}
        <h2 className="text-xl font-bold text-dark-900 dark:text-white text-center mb-2">{title}</h2>
        <p className="text-gray-600 dark:text-gray-400 text-center mb-6">{message}</p>

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 py-2 px-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors"
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            className={`flex-1 py-2 px-4 text-white font-medium rounded-lg transition-colors ${
              isDangerous
                ? 'bg-error-500 hover:bg-error-600'
                : 'bg-primary-500 hover:bg-primary-600'
            }`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;
