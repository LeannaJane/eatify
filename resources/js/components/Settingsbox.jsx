import React from 'react';

const SettingsBox = ({ title, description, content, selectedFontStyle }) => {
  return (
    <div className={`settings-box ${selectedFontStyle}`}>
      <h2 className={selectedFontStyle}>{title}</h2>
      <p className={selectedFontStyle}>{description}</p>
      <div className={`settings-content ${selectedFontStyle}`}>
        {content}
      </div>
    </div>
  );
};

export default SettingsBox;
