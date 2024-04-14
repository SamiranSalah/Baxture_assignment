import React, { useState } from "react";
import "./Card.css"; // Import CSS file for styling

const Card = ({ person, onDelete }) => {
  const [following, setFollowing] = useState(false);

  const toggleFollow = () => {
    setFollowing(!following);
  };

  const handleDelete = () => {
    onDelete(person.id);
  };

  const getRandomColor = () => {
    const colors = [
      "#f44336",
      "#9c27b0",
      "#2196f3",
      "#4caf50",
      "#ffeb3b",
      "#ff9800",
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const fullName = `${person.firstName} ${person.lastName}`;
  const initials = `${person.firstName[0]}${person.lastName[0]}`;
  const logoStyle = {
    backgroundColor: getRandomColor(),
    color: "#ffffff",
  };

  return (
    <div className="card">
      <div className="logo" style={logoStyle}>
        {initials}
      </div>

      <h3 className="card-name">
        {fullName}{" "}
        {following && (
          <span role="img" aria-label="star">
            ⭐
          </span>
        )}
      </h3>

      <div className="contact-info">
        <ul>
          <li>Email: {person.email}</li>
          <li>Phone: {person.phone}</li>
          <li>Website: {person.website}</li>
        </ul>
      </div>
      <div className="buttons">
        <button className="follow-button" onClick={toggleFollow}>
          {following ? "Unfollow" : "Follow"}
        </button>
        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Card;
