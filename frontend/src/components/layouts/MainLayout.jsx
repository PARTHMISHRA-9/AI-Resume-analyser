import React from 'react';
import Navbar from '../common/Navbar';
import Footer from '../common/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-dark-900">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default MainLayout;
