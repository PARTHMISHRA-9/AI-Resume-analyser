import React from 'react';
import { FiUploadCloud } from 'react-icons/fi';

const DragDropUpload = ({ onFileSelect, accept, maxSize }) => {
  const [isDragging, setIsDragging] = React.useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      onFileSelect(files[0]);
    }
  };

  const handleFileInput = (e) => {
    const files = e.target.files;
    if (files.length > 0) {
      onFileSelect(files[0]);
    }
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`border-2 border-dashed rounded-xl p-12 text-center transition-colors ${
        isDragging
          ? 'border-primary-500 bg-primary-50 dark:bg-dark-700'
          : 'border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-dark-800'
      }`}
    >
      <FiUploadCloud className="w-12 h-12 mx-auto text-gray-400 dark:text-gray-500 mb-4" />
      <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-2">Drag & drop your resume</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">or click to browse from your computer</p>
      <input
        type="file"
        accept={accept}
        onChange={handleFileInput}
        className="hidden"
        id="file-upload"
      />
      <label htmlFor="file-upload" className="inline-block px-6 py-2 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg cursor-pointer transition-colors">
        Select File
      </label>
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">Maximum file size: {maxSize}MB</p>
    </div>
  );
};

export default DragDropUpload;
