import React from "react";
import "./ProjectMenu.css";
import ProjectCard from "../projectCard/ProjectCard";
import { GoArrowBoth } from "react-icons/go";
import { SiHackthebox } from "react-icons/si";
import { TbSettingsAutomation } from "react-icons/tb";
import { TbPlaystationCircle } from "react-icons/tb";

const ProjectMenu = () => {
  const projectCardData = [
    {
      icon: <GoArrowBoth />,
      projectStatus: "Projects Completed",
      numberOfProject: 65,
      background: "#c2e0e8",
    },
    {
      icon: <SiHackthebox />,
      projectStatus: "Running Projects",
      numberOfProject: 10,
      background: "#f4f1e1",
    },
    {
      icon: <TbSettingsAutomation />,
      projectStatus: "Pipeline Projects",
      numberOfProject: 6,
      background: "#fadcdc",
    },
    {
      icon: <TbPlaystationCircle />,
      projectStatus: "Support Required",
      numberOfProject: 10,
      background: "#fad6ff",
    },
  ];
  return (
    <div className="header-container">
      {projectCardData.map((project) => {
        return <ProjectCard project={project} />;
      })}
    </div>
  );
};

export default ProjectMenu;
