import React from 'react';

const SettingsBox = ({ title, description, content }) => {
  return (
    <div className="settings-box">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="settings-content">
        {content}
      </div>
    </div>
  );
};

export default SettingsBox;
