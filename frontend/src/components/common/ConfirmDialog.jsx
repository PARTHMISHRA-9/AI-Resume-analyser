import React from 'react';
import { FiAlertCircle } from 'react-icons/fi';

const ConfirmDialog = ({ isOpen, title, message, confirmText = 'Confirm', cancelText = 'Cancel', onConfirm, onCancel, isDangerous = false }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center" role="alertdialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={onCancel}
        aria-hidden="true"
      ></div>

      {/* Dialog */}
      <div className="relative bg-white dark:bg-dark-800 rounded-2xl shadow-2xl max-w-sm w-full mx-4 p-6 animate-slide-up">
        <div className="flex gap-4">
          {isDangerous && <FiAlertCircle className="text-error-500 flex-shrink-0" size={24} />}
          <div className="flex-1">
            <h2 className="text-lg font-bold text-dark-900 dark:text-white mb-2">{title}</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">{message}</p>
          </div>
        </div>

        <div className="flex gap-3 justify-end">
          <button
            onClick={onCancel}
            className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors"
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            className={`px-4 py-2 rounded-lg text-white font-medium transition-colors ${
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
