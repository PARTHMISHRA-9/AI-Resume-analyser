import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { AnalysisProvider } from './context/AnalysisContext';
import { NotificationProvider } from './context/NotificationContext';
import ProtectedRoute from './components/common/ProtectedRoute';
import routes from './config/routes';

// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import UploadResume from './pages/UploadResume';
import ResumeDetail from './pages/ResumeDetail';
import Profile from './pages/Profile';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <NotificationProvider>
            <AnalysisProvider>
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/auth/login" element={<Login />} />
                <Route path="/auth/register" element={<Register />} />

                {/* Protected Routes */}
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/resume/upload"
                  element={
                    <ProtectedRoute>
                      <UploadResume />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/resume/:id"
                  element={
                    <ProtectedRoute>
                      <ResumeDetail />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  }
                />

                {/* 404 Route */}
                <Route path="/not-found" element={<NotFound />} />
                <Route path="*" element={<Navigate to="/not-found" replace />} />
              </Routes>

              {/* Toast Notifications */}
              <Toaster position="top-right" reverseOrder={false} />
            </AnalysisProvider>
          </NotificationProvider>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
