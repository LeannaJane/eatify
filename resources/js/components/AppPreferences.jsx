import React, { useState, useEffect } from 'react';

const AppPreferences = ({ setSelectedFontStyle }) => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return JSON.parse(localStorage.getItem('isDarkMode')) || false;
    });

    const [NotificationsOn, setNotificationsOn] = useState(() => {
        return JSON.parse(localStorage.getItem('NotificationsOn')) || false;
    });

    useEffect(() => {
        const savedFontStyle = localStorage.getItem('selectedFontStyle');
        if (savedFontStyle) {
            setSelectedFontStyle(savedFontStyle);
        }
    }, [setSelectedFontStyle]);

    const handleToggletheme = () => {
        setIsDarkMode((prevMode) => {
            const newMode = !prevMode;
            localStorage.setItem('isDarkMode', JSON.stringify(newMode));
            return newMode;
        });
    };

    const handleToggleNotifications = () => {
        setNotificationsOn((prevNotifications) => {
            const newNotifications = !prevNotifications;
            localStorage.setItem('NotificationsOn', JSON.stringify(newNotifications));
            return newNotifications;
        });
    };

    const handleFontStyleChange = (event) => {
        const newFontStyle = event.target.value;
        setSelectedFontStyle(newFontStyle);
        localStorage.setItem('selectedFontStyle', newFontStyle);
    };

    return (
        <div
            className={`appPreferences-settings ${
                isDarkMode ? "dark-theme" : "light-theme"
            }`}
        >
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
