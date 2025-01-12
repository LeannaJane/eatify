import React, { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Create the AuthContext
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        axios.get('/auth/check').then(response => {
            if (response.data.data != null) {
                setUser(response.data.data);
                setIsLoggedIn(true);
            } else {
                setUser(null);
                setIsLoggedIn(false);
                navigate('/login');
            }
        });
    }, []);

    const login = (formData) => {
        axios.post('/auth/login', formData).then(response => {
            if(!response.data.error) {
                const userData = response.data.data;
                setUser(userData);
                setIsLoggedIn(true);
                navigate('/dashboard');
            } else {

            }
        });
    };

    const logout = () => {
        axios.post('/auth/logout').then(response => {
            if(!response.data.error) {
                setUser(null);
                setIsLoggedIn(false);

                localStorage.removeItem('user');

                navigate('/');
            } else {

            }
        });
        setUser(null);
        setIsLoggedIn(false);
    };

    const register = (formData) => {
        axios.post('/auth/register', formData).then(response => {
            if(!response.data.error) {
                const userData = response.data.data;
                setUser(userData);
                setIsLoggedIn(true);

                navigate('/dashboard');

            } else {

            }
        });
    }

    return (
        <AuthContext.Provider value={{ user, isLoggedIn, login, logout, register }}>
        {children}
        </AuthContext.Provider>
    );
};

// Custom hook to access the auth context
export const useAuth = () => {
    return useContext(AuthContext);
};
