import React from 'react';
import Sidebar from '../components/Sidebar';

const ShoppingList = () => {
    return (
        <div style={{ display: 'flex', minHeight: '100vh' }}>
            <Sidebar />
            <main style={{ flex: 1, padding: '16px' }}>
                <h1>Shopping List</h1>
            </main>
        </div>
    );
};

export default ShoppingList;
