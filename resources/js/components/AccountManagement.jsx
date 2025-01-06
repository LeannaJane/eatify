import React from 'react';

const AccountManagement = ({ selectedFontStyle }) => {
    return (
        <div className={`AccountManagement-settings ${selectedFontStyle}`}>
            <ul className="AccountManagement-list">
                <li>
                    <strong className={selectedFontStyle}>Delete the entire family group and remove all shared access to meal plans, pantry items, and shopping lists. This action cannot be undone and will affect all family members</strong>
                </li>
                <li>
                    <button className={`delete-family-button ${selectedFontStyle}`}>
                        Delete Family
                    </button>
                </li>
                <li>
                    <strong className={selectedFontStyle}>Permanently delete your account, including all your data, meal plans, shopping lists, and pantry inventory. This action cannot be undone.</strong>
                </li>
                <li>
                    <button className={`delete-button ${selectedFontStyle}`}>
                        Delete Account
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default AccountManagement;
