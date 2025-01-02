// custom-pages/Dashboard.jsx
import React from 'react';
import Sidebar from '../components/Sidebar';

const MealFinder = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div className="content">
        Welcome to Meal Finder!
      </div>
    </div>
  );
};

export default MealFinder;