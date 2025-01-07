import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const HomePage = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  const [selectedFontStyle] = useState(() => {
    return localStorage.getItem('selectedFontStyle') || 'default';
  });

  useEffect(() => {
    localStorage.setItem('selectedFontStyle', selectedFontStyle);
  }, [selectedFontStyle]);

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/dashboard');
    }
  }, [isLoggedIn, navigate]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} className={selectedFontStyle}>
      <div className="content">
        <h1>Welcome to Eatify</h1>
        {!isLoggedIn && (
          <div style={{ marginTop: '20px' }}>
            <Link to="/login">
              <button className="primary-button">Login</button>
            </Link>
            <Link to="/register">
              <button className="secondary-button" style={{ marginLeft: '10px' }}>Register</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
