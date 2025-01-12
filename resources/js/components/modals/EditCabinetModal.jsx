import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom';

const EditCabinetModal = ({ isOpen, onClose, cabinetData, onSave }) => {
    const [formData, setFormData] = useState({ id: null, title: "", validItems: [] });

    useEffect(() => {
        if (cabinetData) {
          setFormData({
            ...cabinetData,
            validItems: cabinetData.validItems.map((obj) => obj.item)
          });
        }
      }, [cabinetData]);

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSave = () => {
        onSave(formData);
        onClose();
    };

    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
    };

    return ReactDOM.createPortal(
        <div className="modal-overlay">
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-head">
              <h3>Edit Cabinet</h3>
              <button className="modal-close-button" onClick={onClose}>
                &times;
              </button>
            </div>
            <div className="modal-body">
              <label>
                Title:
                <input
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  type="text"
                />
              </label>
              <label>
                    Valid Items:
                    <textarea
                        name="validItems"
                        value={formData.validItems.join("\n")} // Join items with newline
                        onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              validItems: e.target.value.split("\n"), // Convert back to objects
                            }))
                        }
                        rows="5"
                    />
                </label>
              <button className="save-button" onClick={handleSave}>Save</button>
            </div>
          </div>
        </div>,
        document.body
    );
}

export default EditCabinetModal
