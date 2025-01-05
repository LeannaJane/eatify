import React, { useState } from 'react';

const AppPreferences = () => {
    // State for theme
    const [isDarkMode, setIsDarkMode] = useState(false);

    // State for notifications
    const [NotificationsOn, setNotificationsOn] = useState(false);

    // State for font style
    const [selectedFontStyle, setSelectedFontStyle] = useState('');

    const handleToggletheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    const handleToggleNotifications = () => {
        setNotificationsOn((prevNotifications) => !prevNotifications);
    };

    const handleFontStyleChange = (event) => {
        setSelectedFontStyle(event.target.value);
    };

    return (
        <div className="appPreferences-settings">
            <ul className="appPreferences-list">
                <li>
                    <strong>Themes:</strong>
                </li>
                <li>
                    <div className="theme-toggle-container">
                        <span className="theme-label">Light</span>
                        <label className="theme-toggle">
                            <input
                                type="checkbox"
                                checked={isDarkMode}
                                onChange={handleToggletheme}
                            />
                            <span className="toggle-slider" />
                        </label>
                        <span className="theme-label">Dark</span>
                    </div>
                </li>
                <li>
                    <div className="font-style-container">
                        <strong>Font Style:</strong>
                        <select
                            value={selectedFontStyle}
                            onChange={handleFontStyleChange}
                            className="font-style-dropdown"
                        >
                            <option value="" disabled>
                                Select Font Style
                            </option>
                            <option value="Arial">Arial</option>
                            <option value="Times New Roman">Times New Roman</option>
                            <option value="Verdana">Verdana</option>
                            <option value="Courier New">Courier New</option>
                        </select>
                    </div>
                </li>
                <li>
                    <strong>Notifications:</strong>
                </li>
                <li>
                    <div className="Notifications-toggle-container">
                        <span className="Notifications-label">Off</span>
                        <label className="Notifications-toggle">
                            <input
                                type="checkbox"
                                checked={NotificationsOn}
                                onChange={handleToggleNotifications}
                            />
                            <span className="Notifications-toggle-slider" />
                        </label>
                        <span className="Notifications-label">On</span>
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default AppPreferences;
