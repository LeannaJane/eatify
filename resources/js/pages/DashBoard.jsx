import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';

const DashBoard = () => {

  const [selectedFontStyle] = useState(() => {
    return localStorage.getItem('selectedFontStyle') || 'default';
  });

  useEffect(() => {
    localStorage.setItem('selectedFontStyle', selectedFontStyle);
  }, [selectedFontStyle]);

  return (
    <div style={{ display: 'flex' }} className={selectedFontStyle}>
      <Sidebar />
      <div className="content">
      </div>
    </div>
  );
};

export default DashBoard;
