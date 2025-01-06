import React, { useState } from 'react';

const ProfileSettings = () => {

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
        <div className="profile-settings">
            <ul className="profile-list">
                <li>
                    <strong>Name:</strong>
                    {editableField === "name" ? (
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                        />
                    ) : (
                        <span>{name}</span>
                    )}
                    <button
                        onClick={() => handleEditClick("name")}
                        className="edit-button"
                    >
                        <img src={editIconPath} alt="Edit" className="edit-icon" />
                    </button>
                </li>
                <li>
                    <strong>Email:</strong>
                    {editableField === "email" ? (
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                        />
                    ) : (
                        <span>{email}</span>
                    )}
                    <button
                        onClick={() => handleEditClick("email")}
                        className="edit-button"
                    >
                        <img src={editIconPath} alt="Edit" className="edit-icon" />
                    </button>
                </li>
                <li>
                    <strong>Password:</strong>
                    {editableField === "password" ? (
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter a new password"
                        />
                    ) : (
                        <span>{password}</span>
                    )}
                    <button
                        onClick={() => handleEditClick("password")}
                        className="edit-button"
                    >
                        <img src={editIconPath} alt="Edit" className="edit-icon" />
                    </button>
                </li>
                <li>
                    <strong>Profile Picture:</strong>
                    {editableField === "profilePic" ? (
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleProfilePictureChange}
                        />
                    ) : (
                        profilePicture ? (
                            <img
                                src={profilePicture}
                                alt="Profile"
                                className="profile-img-preview"
                            />
                        ) : (
                            <span>No Profile Picture</span>
                        )
                    )}
                    <button
                        onClick={() => handleEditClick("profilePic")}
                        className="edit-button"
                    >
                        <img src={editIconPath} alt="Edit" className="edit-icon" />
                    </button>
                </li>
            </ul>
        </div>
    );
};

export default ProfileSettings;
