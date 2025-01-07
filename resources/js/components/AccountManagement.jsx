import React from 'react';

const AccountManagement = () => {

    return (
        <div className={`AccountManagement-settings`}>
            <ul className="AccountManagement-list">
                <li>
                    <strong>Delete the entire family group and remove all shared access to meal plans, pantry items, and shopping lists. This action cannot be undone and will affect all family members</strong>
                </li>
                <li>
                    <button className={`delete-family-button`}>
                        Delete Family
                    </button>
                </li>
                <li>
                    <strong>Permanently delete your account, including all your data, meal plans, shopping lists, and pantry inventory. This action cannot be undone.</strong>
                </li>
                <li>
                    <button className={`delete-button`}>
                        Delete Account
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default AccountManagement;
