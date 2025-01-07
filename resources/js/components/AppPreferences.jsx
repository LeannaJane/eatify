import React, { useState, useEffect } from 'react';
import '../../css/AppPreferences.css'; // Ensure the correct import path
import { useFont } from '../FontContext';

const AppPreferences = () => {
    const {notification, selectedTheme, setSelectedFontStyle, setNotification, setSelectedTheme} = useFont();

    const handleToggletheme = () => {
        if (selectedTheme === 'dark-theme') {
            setSelectedTheme('light-theme');
        } else {
            setSelectedTheme('dark-theme');
        }
    };

    const handleToggleNotifications = () => {
        setNotification(!notification);
    };

    const handleFontStyleChange = (event) => {
        const newFontStyle = event.target.value;
        setSelectedFontStyle(newFontStyle);
    };

    return (
        <div
            className={`appPreferences-settings ${selectedTheme}`}
        >
            <ul className="appPreferences-list">
                <li>
                    <strong>Themes:</strong> {}
                </li>
                <li>
                    <div className="theme-toggle-container">
                        <span className={`theme-label`}>Light</span> {/* Apply the class here */}
                        <label className="theme-toggle">
                            <input
                                type="checkbox"
                                checked={selectedTheme === 'dark-theme'}
                                onChange={handleToggletheme}
                            />
                            <span className="toggle-slider" />
                        </label>
                        <span className={`theme-label`}>Dark</span> {/* Apply the class here */}
                    </div>
                </li>
                <li>
                    <div className="font-style-container">
                        <strong>Font Style:</strong> {/* Apply the class here */}
                        <select
                            onChange={handleFontStyleChange}
                            className={`font-style-dropdown`} // Apply the class here
                        >
                            <option value="" disabled>
                                Select Font Style
                            </option>
                            <option value="font-arial">Arial</option>
                            <option value="font-times-new-roman">Times New Roman</option>
                            <option value="font-verdana">Verdana</option>
                            <option value="font-courier-new">Courier New</option>
                            <option value="single-day-regular">Single</option>
                        </select>
                    </div>
                </li>
                <li>
                    <strong>Notifications:</strong> {/* Apply the class here */}
                </li>
                <li>
                    <div className="Notifications-toggle-container">
                        <span className={`Notifications-label`}>Off</span> {/* Apply the class here */}
                        <label className="Notifications-toggle">
                            <input
                                type="checkbox"
                                checked={notification}
                                onChange={handleToggleNotifications}
                            />
                            <span className="Notifications-toggle-slider" />
                        </label>
                        <span className={`Notifications-label`}>On</span> {/* Apply the class here */}
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default AppPreferences;
