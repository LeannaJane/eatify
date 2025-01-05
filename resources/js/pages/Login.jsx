import React, { useState } from 'react'
import { useAuth } from '../AuthContext';

const Login = () => {
    const { login } = useAuth();
    const [formData, setFormData] = useState({ email: '', password: '' });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div style={{'textAlign': 'center'}}>
            <h1>Login</h1>
            <input type="text" name="email" placeholder='Enter Email address' value={formData.email} onChange={handleChange} /><br />
            <input type="password" name='password' placeholder='Enter Password' value={formData.password} onChange={handleChange}/><br />
            <button onClick={() => login(formData)}>Login</button>
        </div>
    )
}

export default Login
