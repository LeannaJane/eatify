import React, { useState, useEffect } from 'react';

const Cabinet = ({ onSelect, isSelected, isDeleteMode }) => {

    const [selectedFontStyle, setSelectedFontStyle] = useState(() => {
        return localStorage.getItem('selectedFontStyle') || 'default';
      });

      useEffect(() => {
        localStorage.setItem('selectedFontStyle', selectedFontStyle);
      }, [selectedFontStyle]);

    return (
        <div
        className={`cabinet ${isSelected ? 'selected' : ''}`}
        onClick={onSelect}
        >
            <div className="cabinet-content">
                <div className="title">Fridge</div>
                <ul className='cabinet-list'>
                    <li>Milk</li>
                    <li>Grated Cheese</li>
                    <li>Smoked Ham</li>
                    <li>Yogurt</li>
                    <li>Yogurt</li>
                    <li>Yogurt</li>
                    <li>Yogurt</li>
                    <li>Yogurt</li>
                    <li>Yogurt</li>
                    <li>Yogurt</li>
                </ul>
            </div>

            {isDeleteMode && (
                <div className={`circle-button ${isSelected ? 'selected' : ''}`}></div>
            )}
        </div>
    );
};

export default Cabinet;
