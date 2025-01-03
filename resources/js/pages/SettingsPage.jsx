import React from 'react';
import Sidebar from '../components/Sidebar';

const SettingsPage = () => {
    return(
        <div style={{ display: 'flex' }}>
            <Sidebar />
            <div className="content">
            </div>
        </div>
    )
}

export default SettingsPage;