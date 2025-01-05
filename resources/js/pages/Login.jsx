import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {
        axios.post('/api/login', formData).then(response => {
            if(!response.data.error) {
                navigate('/');
            } else {
                setError(response.data.data);
            }
        });
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div style={{'textAlign': 'center'}}>
            <h1>Login</h1>
            <input type="text" name="email" placeholder='Enter Email address' value={formData.email} onChange={handleChange} /><br />
            <input type="password" name='password' placeholder='Enter Password' value={formData.password} onChange={handleChange}/><br />
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

export default Login
