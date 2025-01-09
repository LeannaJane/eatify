import React, { useState, useEffect } from 'react';
import { useAuth } from '../AuthContext';

const Login = () => {
    const { login } = useAuth();
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const [selectedFontStyle] = useState(() => {
        return localStorage.getItem('selectedFontStyle') || 'default';
    });

    useEffect(() => {
        localStorage.setItem('selectedFontStyle', selectedFontStyle);
    }, [selectedFontStyle]);

    return (
        <div className={`login-container ${selectedFontStyle}`}>
            <h1 className={`login-heading ${selectedFontStyle}`}>Login</h1>
            <input
                type="text"
                name="email"
                placeholder="Enter Email address"
                value={formData.email}
                onChange={handleChange}
                className={`login-input ${selectedFontStyle}`}
            />
            <br />
            <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                className={`login-input ${selectedFontStyle}`}
            />
            <br />
            <button
                onClick={() => login(formData)}
                className={`login-button ${selectedFontStyle}`}
            >
                Login
            </button>
        </div>
    );
};

export default Login;
