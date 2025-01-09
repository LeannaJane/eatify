import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import Login from './Login';

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
    <div className={`homepage-background ${selectedFontStyle}`}>
      <div className="green-bar left"></div>
      <h1 className="homepage-title">Eatify</h1>
      <Login />
      <div className="signup-container">
        <p>Don't have an account?</p>
        <Link to="/register">
          <button className="secondary-button sign-up-button">Sign Up</button>
        </Link>
      </div>
      <div className="green-bar right"></div>
    </div>
  );
};

export default HomePage;
