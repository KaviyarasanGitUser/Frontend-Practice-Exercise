import React from "react";
import "./ProjectDetailCard.css";
import { CiViewList } from "react-icons/ci";
import { IoBugOutline } from "react-icons/io5";
import { BsCodeSlash } from "react-icons/bs";
import { GoChecklist } from "react-icons/go";

const ProjectDetailCard = ({ projectDetail }) => {
  return (
    <div className="project-detail-card">
      <div className="project-detail-div">
        <div className="project-logo">
          <div className="logo-div">
            <img className="project-icon" src={projectDetail.logo} />
            <p className="project-name">{projectDetail.logoName}</p>
          </div>
          <div className="badge-div">
            <p
              className="project-detail-badge primary-badge"
              style={{ display: projectDetail.hRisk ? "inline" : "none" }}
            >
              H-Risk
            </p>
            <p
              className="project-detail-badge secondary-badge"
              style={{ display: projectDetail.inProgress ? "inline" : "none" }}
            >
              Inprogress
            </p>
          </div>
        </div>
        <div className="project-progress">
          <p className="progress-text">{projectDetail.duration}</p>
          <progress
            className="slider"
            min={0}
            max={100}
            value={projectDetail.progress}
          ></progress>
          <p style={{ display: "inline" }}>{projectDetail.progress}%</p>
          <p className="progress-text">{projectDetail.remainingDays}</p>
        </div>
        <div className="project-stats">
          <div className="stats-div">
            <CiViewList className="stats-icon" />
            <p className="stats-value">{projectDetail.list}%</p>
          </div>
          <div className="stats-div">
            <IoBugOutline className="stats-icon" />
            <p className="stats-value">{projectDetail.bug}</p>
          </div>
          <div className="stats-div">
            <BsCodeSlash className="stats-icon" />
            <p className="stats-value">{projectDetail.code}%</p>
          </div>
          <div className="stats-div">
            <GoChecklist className="stats-icon" />
            <p className="stats-value">{projectDetail.checkList}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailCard;
