import React, { useState } from 'react';

const ProfileSettings = ({ selectedFontStyle }) => {
    const editIconPath = "storage/Images/edit.png";

    const [name, setName] = useState("Lea Jane");
    const [email, setEmail] = useState("Leanna.ux@outlook.com");
    const [password, setPassword] = useState("********");
    const [profilePicture, setProfilePicture] = useState("");

    const [editableField, setEditableField] = useState(null);

    const handleProfilePictureChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => setProfilePicture(reader.result);
            reader.readAsDataURL(file);
        }
    };

    const handleEditClick = (field) => {
        if (editableField === field) {
            setEditableField(null);
        } else {
            setEditableField(field);
        }
    };

    return (
        <div className={`profile-settings ${selectedFontStyle}`}>
            <ul className="profile-list">
                <li>
                    <strong className={selectedFontStyle}>Name:</strong>
                    {editableField === "name" ? (
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            className={selectedFontStyle}
                        />
                    ) : (
                        <span className={selectedFontStyle}>{name}</span>
                    )}
                    <button
                        onClick={() => handleEditClick("name")}
                        className={`edit-button ${selectedFontStyle}`}
                    >
                        <img src={editIconPath} alt="Edit" className="edit-icon" />
                    </button>
                </li>
                <li>
                    <strong className={selectedFontStyle}>Email:</strong>
                    {editableField === "email" ? (
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className={selectedFontStyle}
                        />
                    ) : (
                        <span className={selectedFontStyle}>{email}</span>
                    )}
                    <button
                        onClick={() => handleEditClick("email")}
                        className={`edit-button ${selectedFontStyle}`}
                    >
                        <img src={editIconPath} alt="Edit" className="edit-icon" />
                    </button>
                </li>
                <li>
                    <strong className={selectedFontStyle}>Password:</strong>
                    {editableField === "password" ? (
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter a new password"
                            className={selectedFontStyle}
                        />
                    ) : (
                        <span className={selectedFontStyle}>{password}</span>
                    )}
                    <button
                        onClick={() => handleEditClick("password")}
                        className={`edit-button ${selectedFontStyle}`}
                    >
                        <img src={editIconPath} alt="Edit" className="edit-icon" />
                    </button>
                </li>
                <li>
                    <strong className={selectedFontStyle}>Profile Picture:</strong>
                    {editableField === "profilePic" ? (
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleProfilePictureChange}
                            className={selectedFontStyle}
                        />
                    ) : (
                        profilePicture ? (
                            <img
                                src={profilePicture}
                                alt="Profile"
                                className={`profile-img-preview ${selectedFontStyle}`}
                            />
                        ) : (
                            <span className={selectedFontStyle}>No Profile Picture</span>
                        )
                    )}
                    <button
                        onClick={() => handleEditClick("profilePic")}
                        className={`edit-button ${selectedFontStyle}`}
                    >
                        <img src={editIconPath} alt="Edit" className="edit-icon" />
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default ProfileSettings;
