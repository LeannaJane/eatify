import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/Sidebar'; // Ensure the correct path to Sidebar

const HomePage = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      {/*
      <div style={{ marginLeft: '250px', padding: '20px' }}>
        <h1>Home</h1>
        <Link to="/about">
          <button>Go to About</button>
        </Link>
      </div>
      */}
    </div>
  );
};

export default HomePage;
