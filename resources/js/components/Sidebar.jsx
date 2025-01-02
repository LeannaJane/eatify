import React from 'react';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2 className="logo">Eatify</h2>
            <ul className="menu">
                <li className="menu-item">
                    <img src="/Images/home.png" alt="Home" className="menu-icon" />
                    Dashboard
                </li>
                <li className="menu-item">
                    <img src="/Images/search.png" alt="search" className="menu-icon" />
                    Meal Finder</li>
                <li className="menu-item">
                    <img src="/Images/cutlery.png" alt="cutlery" className="menu-icon" />
                    Menu</li>
                <li className="menu-item">
                    <img src="/Images/notes.png" alt="notes" className="menu-icon" />
                    Planner</li>
                <li className="menu-item">
                    <img src="/Images/fridge.png" alt="fridge" className="menu-icon" />
                    Cabinet</li>
                <li className="menu-item">
                    <img src="/Images/family.png" alt="family" className="menu-icon" />
                    Family Share</li>
                <li className="menu-item">
                    <img src="Images/shopping.png" alt="shopping" className="menu-icon" />
                    Shopping</li>
                <li className="menu-item">
                    <img src="Images/setting.png" alt="setting" className="menu-icon" />
                    Settings</li>
            </ul>
            <div className="light-mode">
                <span>Light Mode</span>
            </div>
            <button className="logout-button">Logout</button>
        </div>
    );
};

export default Sidebar;
