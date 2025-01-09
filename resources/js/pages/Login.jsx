import React, { useState } from 'react';
import { useAuth } from '../AuthContext';

const Login = () => {
    const { login } = useAuth();
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className="login-container">
            <h1 className="login-heading">Login</h1>
            <input
                type="text"
                name="email"
                placeholder="Enter Email address"
                value={formData.email}
                onChange={handleChange}
                className="login-input"
            />
            <br />
            <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={formData.password}
                onChange={handleChange}
                className="login-input"
            />
            <br />
            <button
                onClick={() => login(formData)}
                className="login-button"
            >
                Login
            </button>
        </div>
    );
};

export default Login;
