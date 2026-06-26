import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FiUpload, FiCheck, FiAlertCircle } from 'react-icons/fi';
import DashboardLayout from '../components/layouts/DashboardLayout';
import DragDropUpload from '../components/common/UploadZone';
import Spinner from '../components/common/Spinner';
import toast from 'react-hot-toast';
import { FILE_UPLOAD } from '../utils/constants';

const UploadResume = () => {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const navigate = useNavigate();

  const handleFileSelect = (selectedFile) => {
    if (!FILE_UPLOAD.MIME_TYPES.includes(selectedFile.type)) {
      toast.error('Invalid file type. Please upload PDF or Word document.');
      return;
    }

    if (selectedFile.size > FILE_UPLOAD.MAX_SIZE * 1024 * 1024) {
      toast.error(`File size must be less than ${FILE_UPLOAD.MAX_SIZE}MB`);
      return;
    }

    setFile(selectedFile);
    setUploadProgress(0);
  };

  const handleUpload = async () => {
    if (!file) {
      toast.error('Please select a file');
      return;
    }

    try {
      setUploading(true);
      const formData = new FormData();
      formData.append('file', file);

      // Simulate upload with progress
      for (let i = 0; i <= 100; i += 10) {
        await new Promise((resolve) => setTimeout(resolve, 200));
        setUploadProgress(i);
      }

      // TODO: Replace with actual API call
      // const response = await resumeService.uploadResume(formData);

      toast.success('Resume uploaded successfully!');
      setTimeout(() => navigate('/dashboard'), 1500);
    } catch (error) {
      toast.error('Upload failed. Please try again.');
    } finally {
      setUploading(false);
      setUploadProgress(0);
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-dark-900 dark:text-white mb-2">Upload Resume</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Upload your resume in PDF or Word format for ATS analysis
          </p>
        </div>

        {/* Upload Zone */}
        <div className="bg-white dark:bg-dark-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 mb-6">
          {!file ? (
            <DragDropUpload
              onFileSelect={handleFileSelect}
              accept={FILE_UPLOAD.ACCEPTED_FORMATS.join(',')}
              maxSize={FILE_UPLOAD.MAX_SIZE}
            />
          ) : (
            <div className="text-center">
              {/* File Preview */}
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary-100 dark:bg-dark-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <FiCheck className="text-primary-600 dark:text-primary-400 w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-dark-900 dark:text-white mb-2">{file.name}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>

              {/* Upload Progress */}
              {uploading && (
                <div className="mb-6">
                  <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2 mb-3">
                    <div
                      className="bg-primary-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Uploading... {uploadProgress}%
                  </p>
                </div>
              )}

              {/* Actions */}
              {!uploading && (
                <div className="flex gap-4">
                  <button
                    onClick={() => setFile(null)}
                    className="flex-1 py-3 px-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-dark-700 transition-colors"
                  >
                    Change File
                  </button>
                  <button
                    onClick={handleUpload}
                    className="flex-1 py-3 px-4 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <FiUpload size={18} />
                    Upload & Analyze
                  </button>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 dark:bg-dark-800 border border-blue-200 dark:border-blue-900 rounded-xl p-6">
          <div className="flex gap-3">
            <FiAlertCircle className="text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" size={20} />
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-200 mb-2">Supported Formats</h4>
              <ul className="text-sm text-blue-800 dark:text-blue-300 space-y-1">
                <li>• PDF (.pdf)</li>
                <li>• Microsoft Word (.doc, .docx)</li>
                <li>• Maximum file size: {FILE_UPLOAD.MAX_SIZE}MB</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default UploadResume;
