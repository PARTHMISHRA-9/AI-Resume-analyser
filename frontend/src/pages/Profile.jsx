import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../components/layouts/DashboardLayout';
import ProfileCard from '../components/common/ProfileCard';
import Modal from '../components/common/Modal';
import ConfirmDialog from '../components/common/ConfirmDialog';
import useAuth from '../hooks/useAuth';
import toast from 'react-hot-toast';

const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: user?.fullName || '',
    email: user?.email || '',
    location: user?.location || '',
    website: user?.website || '',
  });

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveProfile = async () => {
    try {
      // TODO: Call API to update profile
      toast.success('Profile updated successfully!');
      setEditModalOpen(false);
    } catch (error) {
      toast.error('Failed to update profile');
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
      toast.success('Logged out successfully!');
      navigate('/auth/login');
    } catch (error) {
      toast.error('Logout failed');
    }
  };

  return (
    <DashboardLayout>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-dark-900 dark:text-white mb-2">Profile Settings</h1>
        <p className="text-gray-600 dark:text-gray-400">Manage your account information and preferences</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <ProfileCard
            user={user}
            onEdit={() => setEditModalOpen(true)}
            onLogout={() => setLogoutDialogOpen(true)}
          />
        </div>

        {/* Settings */}
        <div className="lg:col-span-2 space-y-6">
          {/* Account Settings */}
          <div className="bg-white dark:bg-dark-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8">
            <h2 className="text-xl font-bold text-dark-900 dark:text-white mb-6">Account Settings</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email Address
                </label>
                <p className="py-2 px-4 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300">
                  {user?.email}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Member Since
                </label>
                <p className="py-2 px-4 bg-gray-50 dark:bg-dark-900 border border-gray-200 dark:border-gray-700 rounded-lg text-gray-700 dark:text-gray-300">
                  {new Date(user?.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className="bg-white dark:bg-dark-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8">
            <h2 className="text-xl font-bold text-dark-900 dark:text-white mb-6">Preferences</h2>
            <div className="space-y-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300" defaultChecked />
                <span className="text-gray-700 dark:text-gray-300">Email notifications for new features</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300" defaultChecked />
                <span className="text-gray-700 dark:text-gray-300">Marketing emails</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300" />
                <span className="text-gray-700 dark:text-gray-300">Product updates</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      <Modal isOpen={editModalOpen} onClose={() => setEditModalOpen(false)} title="Edit Profile" size="md">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleEditChange}
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-700 dark:text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Location
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleEditChange}
              placeholder="City, Country"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-700 dark:text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Website
            </label>
            <input
              type="url"
              name="website"
              value={formData.website}
              onChange={handleEditChange}
              placeholder="https://example.com"
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-dark-700 dark:text-white focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
            />
          </div>
          <button
            onClick={handleSaveProfile}
            className="w-full py-2 px-4 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-colors mt-6"
          >
            Save Changes
          </button>
        </div>
      </Modal>

      {/* Logout Confirmation */}
      <ConfirmDialog
        isOpen={logoutDialogOpen}
        title="Logout"
        message="Are you sure you want to logout? You'll need to login again to access your account."
        confirmText="Logout"
        cancelText="Cancel"
        isDangerous
        onConfirm={handleLogout}
        onCancel={() => setLogoutDialogOpen(false)}
      />
    </DashboardLayout>
  );
};

export default Profile;
