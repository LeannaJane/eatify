import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
                <div className="sidebar-header">
                    <h2 className="companyName">Eatify</h2>
                    <button className="toggle-button" onClick={toggleSidebar}>
                        <img 
                        src="/Images/back-arrow.png" 
                        alt={isOpen ? "Close Sidebar" : "Open Sidebar"} 
                        className="toggle-icon"
                        />
                    </button>
                </div>
                <ul className="menu">
                    <li className="menu-item">
                        <img src="/Images/home.png" alt="Home" className="menu-icon" />
                        <NavLink to="/">Home Page</NavLink>
                    </li>
                    <li className="menu-item">
                        <img src="/Images/search.png" alt="search" className="menu-icon" />
                        <NavLink to="/mealfinder"> Meal Finder</NavLink>
                    </li>
                    <li className="menu-item">
                        <img src="/Images/cutlery.png" alt="cutlery" className="menu-icon" />
                        Menu
                    </li>
                    <li className="menu-item">
                        <img src="/Images/notes.png" alt="notes" className="menu-icon" />
                        Planner
                    </li>
                    <li className="menu-item">
                        <img src="/Images/fridge.png" alt="fridge" className="menu-icon" />
                        Cabinet
                    </li>
                    <li className="menu-item">
                        <img src="/Images/family.png" alt="family" className="menu-icon" />
                        Family Share
                    </li>
                    <li className="menu-item">
                        <img src="/Images/shopping.png" alt="shopping" className="menu-icon" />
                        Shopping
                    </li>
                    <li className="menu-item">
                        <img src="/Images/setting.png" alt="setting" className="menu-icon" />
                        Settings
                    </li>
                </ul>
                <div className="light-mode">
                    <span>Light Mode</span>
                </div>
                <button className="logout-button">Logout</button>
            </div>


            {!isOpen && (
                <button className="reopen-button" onClick={toggleSidebar}>
                <img 
                    src="/Images/forward-arrow.png" 
                    alt="Reopen Sidebar" 
                    className="toggle-icon"
                />
                </button>
            )}
        </div>
    );
};

export default Sidebar;
