import React, { useState } from 'react'
import { useAuth } from '../AuthContext';

const Register = () => {
    const { register } = useAuth();
    const [formData, setFormData] = useState({ name: '', email: '', password: '', password_confirmation: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div style={{'textAlign': 'center'}}>
            <h1>Register</h1>
            <input type="text" name="name" placeholder='Enter Your Name' value={formData.name} onChange={handleChange} /><br />
            <input type="text" name="email" placeholder='Enter Email address' value={formData.email} onChange={handleChange} /><br />
            <input type="password" name='password' placeholder='Enter Password' value={formData.password} onChange={handleChange}/><br />
            <input type="password" name='password_confirmation' placeholder='Enter Password Again' value={formData.password_confirmation} onChange={handleChange}/><br />
            <button onClick={() => register(formData)}>Register</button>
        </div>
    )
}

export default Register
