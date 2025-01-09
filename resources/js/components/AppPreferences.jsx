import React from 'react';
import '../../css/AppPreferences.css';
import { useFont } from '../FontContext';

const AppPreferences = () => {
    const { notification, selectedTheme, setSelectedFontStyle, setNotification, setSelectedTheme } = useFont();

    const handleToggleTheme = () => {
        setSelectedTheme(selectedTheme === 'dark-theme' ? 'light-theme' : 'dark-theme');
    };

    const handleToggleNotifications = () => {
        setNotification(!notification);
    };

    const handleFontStyleChange = (event) => {
        setSelectedFontStyle(event.target.value);
    };

    return (
        <div className={`appPreferences-settings ${selectedTheme}`}>
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
                                checked={selectedTheme === 'dark-theme'}
                                onChange={handleToggleTheme}
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
                            onChange={handleFontStyleChange}
                            className="font-style-dropdown"
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
                    <strong>Notifications:</strong>
                </li>
                <li>
                    <div className="Notifications-toggle-container">
                        <span className="Notifications-label">Off</span>
                        <label className="Notifications-toggle">
                            <input
                                type="checkbox"
                                checked={notification}
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
