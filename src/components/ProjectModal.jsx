import React from "react";
import "./ProjectModal.css";

const ProjectModal = ({ title, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2 className="modal-title">Projects Detail</h2>
        <p className="modal-description">{title}</p>
        
        <div className="modal-footer">
          <div className="avatars">
            <img src="https://randomuser.me/api/portraits/men/1.jpg" alt="User 1" className="avatar" />
            <img src="https://randomuser.me/api/portraits/women/2.jpg" alt="User 2" className="avatar" />
          </div>
          <div className="stats">
            <span className="icon">💬</span> <span>11</span>
            <span className="icon">✔</span> <span>187</span>
          </div>
        </div>

        <span className="priority-badge">High</span>
      </div>
    </div>
  );
};

export default ProjectModal;
