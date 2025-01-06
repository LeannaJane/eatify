import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import SettingsBox from '../components/Settingsbox';
import ProfileSettings from '../components/ProfileSettings';
import AppPreferences from '../components/AppPreferences';
import Privacy from '../components/Privacy';
import AccountManagement from '../components/AccountManagement';

const SettingsPage = () => {
  const [selectedFontStyle, setSelectedFontStyle] = useState(() => {
    return localStorage.getItem('selectedFontStyle') || 'default';
  });

  useEffect(() => {
    localStorage.setItem('selectedFontStyle', selectedFontStyle);
  }, [selectedFontStyle]);

  return (
    <div style={{ display: 'flex' }} className={selectedFontStyle}>
      <Sidebar />
      <div className={`content ${selectedFontStyle}`}>
        <div className={`settings-grid ${selectedFontStyle}`}>
          <SettingsBox
            title="Profile Settings"
            description="Manage your personal information, change your display name, and update your profile picture."
            content={<ProfileSettings selectedFontStyle={selectedFontStyle} />}
          />
          <SettingsBox
            title="App Preferences"
            description="Customize app appearance, notifications, and other preferences."
            content={<AppPreferences selectedFontStyle={selectedFontStyle} setSelectedFontStyle={setSelectedFontStyle} />}
          />
          <SettingsBox
            title="Privacy"
            description="Control your privacy settings, including data sharing and visibility options."
            content={<Privacy selectedFontStyle={selectedFontStyle} />}
          />
          <SettingsBox
            title="Account & Family Management"
            description="Manage account settings, add family members, and oversee family permissions."
            content={<AccountManagement selectedFontStyle={selectedFontStyle} />}
          />
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
