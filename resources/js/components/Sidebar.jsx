import React from 'react';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2 className="logo">Eatify</h2>
            <ul className="menu">
                <li className="menu-item">Dashboard</li>
                <li className="menu-item">Meal Finder</li>
                <li className="menu-item">Menu</li>
                <li className="menu-item">Planner</li>
                <li className="menu-item">Cabinate</li>
                <li className="menu-item">Family Share</li>
                <li className="menu-item">Shopping</li>
                <li className="menu-item">Settings</li>
            </ul>
            <div className="light-mode">
                <span>Light Mode</span>
            </div>
            <button className="logout-button">Logout</button>
        </div>
    );
};

export default Sidebar;
