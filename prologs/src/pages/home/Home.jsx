import React from "react";
import NavBar from "../../components/navBar/NavBar";
import ProjectMenu from "../../components/projectMenu/ProjectMenu";
import ProjectDetail from "../../components/projectDetail/ProjectDetail";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="nav-container">
        <NavBar />
      </div>
      <div className="main-container">
        <div className="project-menu-container">
          <ProjectMenu />
        </div>
        <div className="project-detail-container">
          <ProjectDetail />
        </div>
      </div>
    </div>
  );
};

export default Home;
