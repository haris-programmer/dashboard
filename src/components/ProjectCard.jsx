import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ title, onClick }) => {
  return (
    <div className="card" onClick={() => onClick(title)}>
      <span className="badge">Important</span>
      <h4>{title}</h4>
      <div className="footer">
        <div className="avatars">
          <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="User 1" className="avatar" />
          <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="User 2" className="avatar" />
        </div>
        <div className="stats">
          <span className="icon">💬</span> <span>11</span>
          <span className="icon">✔</span> <span>187</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
