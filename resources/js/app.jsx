import './bootstrap';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './components/App';
import { AuthProvider } from './AuthContext';
import { PreferencesProvider } from './FontContext';

ReactDOM.createRoot(document.getElementById('app')).render(
    <BrowserRouter>
        <PreferencesProvider>
            <AuthProvider>
                <App />
            </AuthProvider>
        </PreferencesProvider>
    </BrowserRouter>
);
