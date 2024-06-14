import React from 'react'
import './Home.css';

const ProfileCards = ({ image, name, title, location, email }) => {
    return (
        <div style={{display:"flex", flexDirection:"row"}}>
            <div className="profile-card">
                <div className="profile-image">
                    <img src={image} alt="Profile" />
                </div>
                <div className="profile-info">
                    <h2>{name}</h2>
                    <p>{title}</p>
                    <p>{location}</p>
                    <p>{email}</p>
                </div>
            </div>
        </div>

    );
}

export default ProfileCards
