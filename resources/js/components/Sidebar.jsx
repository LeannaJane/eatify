import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(true);
    const { isLoggedIn, logout } = useAuth();

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
                        src="storage/Images/back-arrow.png"
                        alt={isOpen ? "Close Sidebar" : "Open Sidebar"}
                        className="toggle-icon"
                        />
                    </button>
                </div>
                <ul className="menu">
                    <li className="menu-item">
                        <img src="storage/Images/home.png" alt="Home" className="menu-icon" />
                        <NavLink to="/">Home Page</NavLink>
                    </li>
                    <li className="menu-item">
                        <img src="storage/Images/search.png" alt="search" className="menu-icon" />
                        <NavLink to="/mealfinder">Meal Finder</NavLink>
                    </li>
                    <li className="menu-item">
                        <img src="storage/Images/cutlery.png" alt="cutlery" className="menu-icon" />
                        Menu
                    </li>
                    <li className="menu-item">
                        <img src="storage/Images/notes.png" alt="notes" className="menu-icon" />
                        Planner
                    </li>
                    <li className="menu-item">
                        <img src="storage/Images/fridge.png" alt="fridge" className="menu-icon" />
                        <NavLink to="/cabinet">Cabinet</NavLink>
                    </li>
                    <li className="menu-item">
                        <img src="storage/Images/family.png" alt="family" className="menu-icon" />
                        Family Share
                    </li>
                    <li className="menu-item">
                        <img src="storage/Images/shopping.png" alt="shopping" className="menu-icon" />
                        Shopping
                    </li>
                    <li className="menu-item">
                        <img src="storage/Images/setting.png" alt="setting" className="menu-icon" />
                       <NavLink to="/settings">Settings</NavLink>
                    </li>
                </ul>
                {isLoggedIn ? (
                    <button className="logout-button" onClick={logout}>Logout</button>
                ) : (
                    <>
                        <Link to="/login"><button className="logout-button" style={{'marginBottom': 0}}>Login</button></Link>
                        <Link to="/register"><button className="logout-button">Register</button></Link>
                    </>
                )}
            </div>


            {!isOpen && (
                <button className="reopen-button" onClick={toggleSidebar}>
                <img
                    src="storage/Images/forward-arrow.png"
                    alt="Reopen Sidebar"
                    className="toggle-icon"
                />
                </button>
            )}
        </div>
    );
};

export default Sidebar;
