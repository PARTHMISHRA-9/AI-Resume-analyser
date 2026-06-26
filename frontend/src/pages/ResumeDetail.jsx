import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FiArrowLeft, FiDownload, FiShare2 } from 'react-icons/fi';
import DashboardLayout from '../components/layouts/DashboardLayout';
import ATSScoreCircle from '../components/common/ATSScoreCircle';
import Loading from '../components/common/Loading';
import HistoryTable from '../components/common/HistoryTable';

const ResumeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Fetch resume details from API
    setTimeout(() => {
      setResume({
        id: id,
        fileName: 'John_Doe_Resume.pdf',
        uploadedAt: new Date(),
        atsScore: 85,
        improvements: [
          { skill: 'Keywords', current: 45, recommended: 60, impact: 'High' },
          { skill: 'Formatting', current: 78, recommended: 90, impact: 'Medium' },
          { skill: 'Experience', current: 85, recommended: 95, impact: 'High' },
        ],
      });
      setLoading(false);
    }, 1000);
  }, [id]);

  if (loading) return <Loading />;

  const improvementColumns = [
    { key: 'skill', label: 'Skill' },
    { key: 'current', label: 'Current Score' },
    { key: 'recommended', label: 'Recommended' },
    { key: 'impact', label: 'Impact' },
  ];

  return (
    <DashboardLayout>
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={() => navigate('/dashboard')}
          className="p-2 hover:bg-gray-100 dark:hover:bg-dark-700 rounded-lg transition-colors"
        >
          <FiArrowLeft size={24} className="text-dark-900 dark:text-white" />
        </button>
        <div>
          <h1 className="text-3xl font-bold text-dark-900 dark:text-white">{resume?.fileName}</h1>
          <p className="text-gray-600 dark:text-gray-400">Uploaded on {new Date(resume?.uploadedAt).toLocaleDateString()}</p>
        </div>
      </div>

      {/* Score Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-1 bg-white dark:bg-dark-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8 flex flex-col items-center">
          <ATSScoreCircle score={resume?.atsScore} size="lg" />
          <div className="mt-6 w-full space-y-3">
            <button className="w-full py-2 px-4 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2">
              <FiDownload size={18} />
              Download
            </button>
            <button className="w-full py-2 px-4 border border-primary-500 text-primary-600 dark:text-primary-400 font-medium rounded-lg hover:bg-primary-50 dark:hover:bg-dark-700 transition-colors flex items-center justify-center gap-2">
              <FiShare2 size={18} />
              Share
            </button>
          </div>
        </div>

        {/* Analysis Summary */}
        <div className="lg:col-span-2 bg-white dark:bg-dark-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8">
          <h2 className="text-xl font-bold text-dark-900 dark:text-white mb-6">Analysis Summary</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-dark-900 rounded-lg">
              <span className="text-gray-700 dark:text-gray-300">Total Keywords Found</span>
              <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">24</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-dark-900 rounded-lg">
              <span className="text-gray-700 dark:text-gray-300">Missing Keywords</span>
              <span className="text-2xl font-bold text-warning-600 dark:text-warning-400">8</span>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-dark-900 rounded-lg">
              <span className="text-gray-700 dark:text-gray-300">Formatting Issues</span>
              <span className="text-2xl font-bold text-error-600 dark:text-error-400">3</span>
            </div>
          </div>
        </div>
      </div>

      {/* Improvements Table */}
      <div className="bg-white dark:bg-dark-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8">
        <h2 className="text-xl font-bold text-dark-900 dark:text-white mb-6">Recommended Improvements</h2>
        <HistoryTable data={resume?.improvements || []} columns={improvementColumns} />
      </div>
    </DashboardLayout>
  );
};

export default ResumeDetail;
