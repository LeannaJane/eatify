import React, { useState } from 'react';

const Privacy = () => {
    const [isActivity, setActivity] = useState(false);
    
    const handleActivityTracking = () => {
        setActivity((prevMode) => !prevMode);
    };


    return (
        <div className="activityTracking-settings">
            <ul className="activityTracking-list">
                <li>
                    <strong>Enable Activity Tracking:</strong>
                </li>
                <li>
                    <div className="activityTracking-toggle-container">
                        <span className="activityTracking-label">Off</span>
                        <label className="activityTracking-toggle">
                            <input
                                type="checkbox"
                                checked={isActivity}
                                onChange={handleActivityTracking}
                            />
                            <span className="activityTracking-toggle-slider" />
                        </label>
                        <span className="activityTracking-label">On</span>
                    </div>
                </li>
                <li className="privacy-policy-container">
                    <strong>View our Privacy Policy</strong>
                    <a href="#" className="privacy-policy-link">
                        <img 
                            src="storage/Images//link.png" 
                            alt="Privacy Policy Link Icon" 
                            className="privacy-policy-icon"
                        />
                    </a>
                </li>

            </ul>
        </div>
    );
};

export default Privacy;
