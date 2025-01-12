import React from 'react';

const Cabinet = ({ id, title, items, onSelect, isSelected, isDeleteMode, onEdit }) => {
    const validItems = Array.isArray(items) ? items : [];
    const editIconPath = "storage/Images/edit.png";
    return (
        <div
        className={`cabinet ${isSelected ? 'selected' : ''}`}
        onClick={onSelect}
        >
        <div className="cabinet-content">
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    onEdit({id, title, validItems})
                }}
                className="edit-button"
            >
                <img src={editIconPath} alt="Edit" className="edit-icon" />
            </button>
            <div className="title">{title}</div>
            <ul className="cabinet-list">
            {validItems.length > 0 ? (
                validItems.map((item, index) => (
                <li key={index}>{item.item}</li>
                ))
            ) : (
                <li>No items in this cabinet</li>
            )}
            </ul>
        </div>

        {isDeleteMode && (
            <div className={`circle-button ${isSelected ? 'selected' : ''}`}></div>
        )}
        </div>
    );
};

export default Cabinet;
