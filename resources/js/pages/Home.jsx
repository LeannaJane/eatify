import React from 'react';
import Sidebar from '../components/Sidebar';

const HomePage = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div className="content">
      </div>
    </div>
  );
};

export default HomePage;
