import React from 'react';

const SettingsBox = ({ title, description, content }) => {
    return (
        <div className="settings-box">
            <h3>{title}</h3>
            <p>{description}</p>
            {content && <div className="settings-content">{content}</div>}
        </div>
    );
};

export default SettingsBox;
