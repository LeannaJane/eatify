import React from 'react';
import Sidebar from '../components/Sidebar';
import SettingsBox from '../components/Settingsbox';
import ProfileSettings from '../components/ProfileSettings';
import AppPreferences from '../components/AppPreferences';

const SettingsPage = () => {




    return (
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div className="content">
                <div className="settings-grid">
                    <SettingsBox
                        title="Profile Settings"
                        description="Manage your personal information, change your display name, and update your profile picture."
                        content={<ProfileSettings />}
                    />
                    <SettingsBox
                        title="App Preferences"
                        description="Customise app appearance, notifications, and other preferences."
                        content={<AppPreferences />}
                    />
                    <SettingsBox
                        title="Privacy"
                        description="Control your privacy settings, including data sharing and visibility options."
                    />
                    <SettingsBox
                        title="Account & Family Management"
                        description="Manage account settings, add family members, and oversee family permissions."
                    />
                </div>
            </div>
        </div>
    );
};

export default SettingsPage;
