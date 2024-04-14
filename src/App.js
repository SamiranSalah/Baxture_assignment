import React, { useState } from "react";
import "./components/Card";

function Card({ person, onDelete }) {
  const [followed, setFollowed] = useState(false);
  const { firstName, lastName, email, phone, website } = person;
  const initials = `${firstName[0]}${lastName[0]}`;

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-logo">{initials}</div>
        {followed && <span>⭐</span>}
      </div>
      <div className="card-body">
        <h3>
          {firstName} {lastName}
        </h3>
        <p>{email}</p>
        <p>{phone}</p>
        <p>
          <a
            href={`http://${website}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {website}
          </a>
        </p>
      </div>
      <div className="card-footer">
        <button className="button" onClick={() => setFollowed(!followed)}>
          {followed ? "Unfollow" : "Follow"}
        </button>
        <button className="button" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Card;
