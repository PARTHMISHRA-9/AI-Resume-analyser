import React from 'react';
import { FiFile, FiCalendar, FiDownload, FiTrash2 } from 'react-icons/fi';

const ResumeCard = ({ resume, onDownload, onDelete, loading }) => {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <div className="bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 hover:shadow-lg transition-all duration-300">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3 flex-1">
          <div className="w-10 h-10 bg-primary-100 dark:bg-dark-700 rounded-lg flex items-center justify-center">
            <FiFile className="text-primary-600 dark:text-primary-400" size={20} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-dark-900 dark:text-white truncate">{resume.fileName || 'Resume'}</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 mt-1">
              <FiCalendar size={14} />
              <span>{formatDate(resume.uploadedAt)}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      {resume.atsScore && (
        <div className="mb-4 p-3 bg-gray-50 dark:bg-dark-900 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">ATS Score</span>
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-bold text-primary-600 dark:text-primary-400">{resume.atsScore}</span>
              <span className="text-xs text-gray-600 dark:text-gray-400">/100</span>
            </div>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-2">
        <button
          onClick={() => onDownload?.(resume.id)}
          disabled={loading}
          className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-primary-50 dark:bg-dark-700 text-primary-600 dark:text-primary-400 hover:bg-primary-100 dark:hover:bg-dark-600 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Download resume"
        >
          <FiDownload size={16} />
          <span className="text-sm font-medium">Download</span>
        </button>
        <button
          onClick={() => onDelete?.(resume.id)}
          disabled={loading}
          className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-error-50 dark:bg-dark-700 text-error-600 dark:text-error-400 hover:bg-error-100 dark:hover:bg-dark-600 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Delete resume"
        >
          <FiTrash2 size={16} />
          <span className="text-sm font-medium">Delete</span>
        </button>
      </div>
    </div>
  );
};

export default ResumeCard;
