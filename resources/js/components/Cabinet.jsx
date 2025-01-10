import React from 'react';

const Cabinet = ({ title, items, onSelect, isSelected, isDeleteMode }) => {
  const validItems = Array.isArray(items) ? items : [];

  return (
    <div
      className={`cabinet ${isSelected ? 'selected' : ''}`}
      onClick={onSelect}
    >
      <div className="cabinet-content">
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
