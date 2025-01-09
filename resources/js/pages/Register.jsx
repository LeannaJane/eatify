import React, { useState, useEffect } from 'react';
import { useAuth } from '../AuthContext';

const Register = () => {
    const { register } = useAuth();
    const [formData, setFormData] = useState({ name: '', email: '', password: '', password_confirmation: '' });

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
        <div className={`register-background ${selectedFontStyle}`}>
            <div style={{ textAlign: 'center' }}>
                <h1>Register</h1>
                <input
                    type="text"
                    name="name"
                    placeholder="Enter Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className={selectedFontStyle}
                /><br />
                <input
                    type="text"
                    name="email"
                    placeholder="Enter Email address"
                    value={formData.email}
                    onChange={handleChange}
                    className={selectedFontStyle}
                /><br />
                <input
                    type="password"
                    name="password"
                    placeholder="Enter Password"
                    value={formData.password}
                    onChange={handleChange}
                    className={selectedFontStyle}
                /><br />
                <input
                    type="password"
                    name="password_confirmation"
                    placeholder="Enter Password Again"
                    value={formData.password_confirmation}
                    onChange={handleChange}
                    className={selectedFontStyle}
                /><br />
                <button onClick={() => register(formData)}>Register</button>
            </div>
        </div>
    );
}

export default Register;
