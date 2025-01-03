import React, {useState } from 'react';

const Cabinet = ({ index, onSelect, isSelected, isDeleteMode }) => {
    return (
        <div 
        className={`cabinet ${isSelected ? 'selected' : ''}`} 
        onClick={onSelect}
        >
            <div className="cabinet-content">
                <p>Cabinet {index + 1}</p>
            </div>

            {isDeleteMode && (
                <div className={`circle-button ${isSelected ? 'selected' : ''}`}></div>
            )}
        </div>
    );
};

export default Cabinet;
