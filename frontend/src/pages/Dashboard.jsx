import React, { useState, useEffect } from 'react';
import { FiTrendingUp, FiUploadCloud, FiFileText, FiBarChart3 } from 'react-icons/fi';
import DashboardLayout from '../components/layouts/DashboardLayout';
import DashboardCard from '../components/common/DashboardCard';
import ResumeCard from '../components/common/ResumeCard';
import Loading from '../components/common/Loading';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Dashboard = () => {
  const [resumes, setResumes] = useState([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user's resumes
    const fetchResumes = async () => {
      try {
        setLoading(true);
        // TODO: Replace with actual API call
        setTimeout(() => {
          setResumes([
            {
              id: 1,
              fileName: 'John_Doe_Resume.pdf',
              uploadedAt: new Date(),
              atsScore: 85,
            },
            {
              id: 2,
              fileName: 'Updated_Resume_2024.pdf',
              uploadedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
              atsScore: 72,
            },
          ]);
          setLoading(false);
        }, 1000);
      } catch (error) {
        console.error('Error fetching resumes:', error);
        setLoading(false);
      }
    };

    fetchResumes();
  }, []);

  if (loading) return <Loading />;

  return (
    <DashboardLayout>
      {/* Welcome Section */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-dark-900 dark:text-white mb-2">
          Welcome back, {user?.fullName?.split(' ')[0]}!
        </h1>
        <p className="text-gray-600 dark:text-gray-400">Optimize your resume for ATS and land your dream job</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <DashboardCard
          title="Total Resumes"
          value={resumes.length}
          icon={FiFileText}
          color="primary"
          description="Uploaded resumes"
        />
        <DashboardCard
          title="Average ATS Score"
          value={resumes.length > 0 ? Math.round(resumes.reduce((acc, r) => acc + r.atsScore, 0) / resumes.length) : 0}
          icon={FiBarChart3}
          color="success"
          description="Across all resumes"
        />
        <DashboardCard
          title="Analyses Completed"
          value="0"
          icon={FiTrendingUp}
          color="warning"
          trend={0}
          description="This month"
        />
        <DashboardCard
          title="Profile"
          value="Complete"
          icon={FiUploadCloud}
          color="error"
          description="Setup status"
        />
      </div>

      {/* Recent Resumes */}
      <div className="bg-white dark:bg-dark-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-dark-900 dark:text-white">Recent Resumes</h2>
          <button
            onClick={() => navigate('/resume/upload')}
            className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors"
          >
            Upload New
          </button>
        </div>

        {resumes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {resumes.map((resume) => (
              <ResumeCard
                key={resume.id}
                resume={resume}
                onDownload={(id) => console.log('Download', id)}
                onDelete={(id) => setResumes(resumes.filter((r) => r.id !== id))}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <FiUploadCloud className="w-16 h-16 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-2">No resumes yet</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">Upload your first resume to get started</p>
            <button
              onClick={() => navigate('/resume/upload')}
              className="inline-block px-6 py-2 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors"
            >
              Upload Resume
            </button>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
