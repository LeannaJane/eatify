import React, { useEffect } from 'react';
import Router from '../router/Index';

const App = () => {
  useEffect(() => {
    const handleWheel = (event) => {
      if (event.ctrlKey) {
        event.preventDefault(); // Prevent zoom when the Ctrl key is pressed
      }
    };

    document.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      document.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return <Router />;
};

export default App;
