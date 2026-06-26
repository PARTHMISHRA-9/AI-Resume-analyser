import React from 'react';
import { FiUploadCloud } from 'react-icons/fi';

const DragDropUpload = ({ onFileSelect, accept = '.pdf', maxSize = 10 }) => {
  const [isDragging, setIsDragging] = React.useState(false);
  const fileInputRef = React.useRef(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFiles(files);
    }
  };

  const handleFiles = (files) => {
    const file = files[0];
    if (file.size > maxSize * 1024 * 1024) {
      alert(`File size must be less than ${maxSize}MB`);
      return;
    }
    onFileSelect(file);
  };

  const handleInputChange = (e) => {
    if (e.target.files.length > 0) {
      handleFiles(e.target.files);
    }
  };

  return (
    <div
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={`border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all duration-300 ${
        isDragging
          ? 'border-primary-500 bg-primary-50 dark:bg-dark-800'
          : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-dark-900 hover:border-primary-400'
      }`}
      role="button"
      tabIndex="0"
      onKeyDown={(e) => e.key === 'Enter' && fileInputRef.current?.click()}
      aria-label="Upload resume"
    >
      <input
        ref={fileInputRef}
        type="file"
        accept={accept}
        onChange={handleInputChange}
        className="hidden"
        aria-hidden="true"
      />

      <FiUploadCloud
        size={48}
        className="mx-auto mb-4 text-primary-500 transition-transform duration-300 hover:scale-110"
      />
      <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">Upload Your Resume</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">Drag and drop your PDF here, or click to select</p>
      <button
        onClick={() => fileInputRef.current?.click()}
        className="inline-block bg-primary-500 hover:bg-primary-600 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
      >
        Choose File
      </button>
      <p className="text-sm text-gray-500 dark:text-gray-500 mt-4">Maximum file size: {maxSize}MB</p>
    </div>
  );
};

export default DragDropUpload;
