import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState("");
  
  React.useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [navigate]);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    navigate("/");
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Project Dashboard</h1>
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      </header>

      <div className="container">
        <h2>Projects</h2>
        <div className="section">
          <ProjectCard title="UI/UX Design in the Age of AI" onClick={openModal} />
          <ProjectCard title="Machine Learning for Beginners" onClick={openModal} />
          <ProjectCard title="React Best Practices" onClick={openModal} />
          <ProjectCard title="Data Structures & Algorithms" onClick={openModal} />
        </div>

        <h2>Tasks</h2>
        <div className="section">
          <ProjectCard title="Frontend Refactoring" onClick={openModal} />
          <ProjectCard title="Database Optimization" onClick={openModal} />
          <ProjectCard title="API Development" onClick={openModal} />
          <ProjectCard title="Testing & QA" onClick={openModal} />
        </div>

        <h2>Sub Tasks</h2>
        <div className="section">
          <ProjectCard title="Fix UI Bugs" onClick={openModal} />
          <ProjectCard title="Improve Performance" onClick={openModal} />
          <ProjectCard title="Add Animations" onClick={openModal} />
          <ProjectCard title="Enhance Security" onClick={openModal} />
        </div>
      </div>

      {isModalOpen && (
        <ProjectModal 
          title={selectedProject} 
          onClose={closeModal} 
        />
      )}
    </div>
  );
};

export default Dashboard;