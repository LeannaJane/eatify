import React, { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// Create the AuthContext
const AuthContext = createContext();

// AuthProvider component to provide the context to the app
export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = (formData) => {
        axios.post('/auth/login', formData).then(response => {
            if(!response.data.error) {
                setUser(response.data.data);
                setIsLoggedIn(true);
                navigate('/');
            } else {

            }
        });
    };

    const logout = () => {
        axios.post('/auth/logout').then(response => {
            if(!response.data.error) {
                setUser(null);
                setIsLoggedIn(false);
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
                setUser(response.data.data);
                setIsLoggedIn(true);
                navigate('/');
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
