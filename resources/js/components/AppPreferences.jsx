import React, { useState, useEffect } from 'react';
import '../../css/AppPreferences.css'; // Ensure the correct import path

const AppPreferences = ({ selectedFontStyle, setSelectedFontStyle }) => {
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
            } ${selectedFontStyle}`} // Apply the selected font style class here
        >
            <ul className="appPreferences-list">
                <li>
                    <strong className={selectedFontStyle}>Themes:</strong> {/* Apply the class here */}
                </li>
                <li>
                    <div className="theme-toggle-container">
                        <span className={`theme-label ${selectedFontStyle}`}>Light</span> {/* Apply the class here */}
                        <label className="theme-toggle">
                            <input
                                type="checkbox"
                                checked={isDarkMode}
                                onChange={handleToggletheme}
                            />
                            <span className="toggle-slider" />
                        </label>
                        <span className={`theme-label ${selectedFontStyle}`}>Dark</span> {/* Apply the class here */}
                    </div>
                </li>
                <li>
                    <div className="font-style-container">
                        <strong className={selectedFontStyle}>Font Style:</strong> {/* Apply the class here */}
                        <select
                            onChange={handleFontStyleChange}
                            className={`font-style-dropdown ${selectedFontStyle}`} // Apply the class here
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
                    <strong className={selectedFontStyle}>Notifications:</strong> {/* Apply the class here */}
                </li>
                <li>
                    <div className="Notifications-toggle-container">
                        <span className={`Notifications-label ${selectedFontStyle}`}>Off</span> {/* Apply the class here */}
                        <label className="Notifications-toggle">
                            <input
                                type="checkbox"
                                checked={NotificationsOn}
                                onChange={handleToggleNotifications}
                            />
                            <span className="Notifications-toggle-slider" />
                        </label>
                        <span className={`Notifications-label ${selectedFontStyle}`}>On</span> {/* Apply the class here */}
                    </div>
                </li>
            </ul>
        </div>
    );
};

export default AppPreferences;
