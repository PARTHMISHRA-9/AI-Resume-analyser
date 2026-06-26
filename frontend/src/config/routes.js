// Route configuration
export const routes = [
  // Public routes
  {
    path: '/',
    name: 'Home',
    component: 'Home',
    layout: 'MainLayout',
    protected: false,
  },

  // Auth routes
  {
    path: '/auth/login',
    name: 'Login',
    component: 'Login',
    layout: 'MainLayout',
    protected: false,
  },
  {
    path: '/auth/register',
    name: 'Register',
    component: 'Register',
    layout: 'MainLayout',
    protected: false,
  },
  {
    path: '/auth/forgot-password',
    name: 'Forgot Password',
    component: 'ForgotPassword',
    layout: 'MainLayout',
    protected: false,
  },
  {
    path: '/auth/reset-password/:token',
    name: 'Reset Password',
    component: 'ResetPassword',
    layout: 'MainLayout',
    protected: false,
  },

  // Dashboard routes
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: 'Dashboard',
    layout: 'DashboardLayout',
    protected: true,
  },

  // Resume routes
  {
    path: '/resume/upload',
    name: 'Upload Resume',
    component: 'UploadResume',
    layout: 'DashboardLayout',
    protected: true,
  },
  {
    path: '/resume/history',
    name: 'Resume History',
    component: 'ResumeHistory',
    layout: 'DashboardLayout',
    protected: true,
  },
  {
    path: '/resume/:id',
    name: 'Resume Detail',
    component: 'ResumeDetail',
    layout: 'DashboardLayout',
    protected: true,
  },

  // Analysis routes
  {
    path: '/analysis',
    name: 'Analysis',
    component: 'Analysis',
    layout: 'DashboardLayout',
    protected: true,
  },
  {
    path: '/analysis/:id',
    name: 'Analysis Detail',
    component: 'AnalysisDetail',
    layout: 'DashboardLayout',
    protected: true,
  },

  // Profile routes
  {
    path: '/profile',
    name: 'Profile',
    component: 'Profile',
    layout: 'DashboardLayout',
    protected: true,
  },

  // 404 route
  {
    path: '*',
    name: 'Not Found',
    component: 'NotFound',
    layout: 'MainLayout',
    protected: false,
  },
];

export default routes;
