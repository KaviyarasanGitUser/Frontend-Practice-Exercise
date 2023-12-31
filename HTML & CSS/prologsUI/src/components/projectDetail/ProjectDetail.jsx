import React from "react";
import "./ProjectDetail.css";
import { RiEqualizerLine } from "react-icons/ri";
import ProjectDetailCard from "../projectDetailCard/ProjectDetailCard";
import trelloLogo from "../../assest/images/trello_logo.png";
import tataLogo from "../../assest/images/tata_logo.png";
import jioLogo from "../../assest/images/jio_logo.png";
import boschLogo from "../../assest/images/bosch_logo.png";
import itcLogo from "../../assest/images/ITC_Limited_Logo.png";
import googleLogo from "../../assest/images/google_logo.png";
import divumLogo from "../../assest/images/divum_logo.png";
import tvsLogo from "../../assest/images/tvs_logo.png";

function ProjectDetail() {
  const projectDetailData = [
    {
      logo: trelloLogo,
      logoName: "Trello",
      hRisk: false,
      inProgress: true,
      duration: "12 Aug - 13 Jun",
      progress: 45,
      remainingDays: "Delayed by 5 weeks",
      list: 45,
      bug: 123,
      code: 0,
      checkList: 0,
    },
    {
      logo: tataLogo,
      logoName: "Tata",
      hRisk: false,
      inProgress: true,
      duration: "12 Aug - 13 Jun",
      progress: 45,
      remainingDays: "Delayed by 5 weeks",
      list: 45,
      bug: 123,
      code: 0,
      checkList: 0,
    },
    {
      logo: jioLogo,
      logoName: "Jio",
      hRisk: true,
      inProgress: true,
      duration: "12 Aug - 13 Jun",
      progress: 45,
      remainingDays: "Delayed by 5 weeks",
      list: 45,
      bug: 123,
      code: 0,
      checkList: 0,
    },
    {
      logo: boschLogo,
      logoName: "Bosch",
      hRisk: false,
      inProgress: true,
      duration: "12 Aug - 13 Jun",
      progress: 45,
      remainingDays: "Delayed by 5 weeks",
      list: 45,
      bug: 123,
      code: 0,
      checkList: 0,
    },
    {
      logo: itcLogo,
      logoName: "ITC",
      hRisk: false,
      inProgress: true,
      duration: "12 Aug - 13 Jun",
      progress: 23,
      remainingDays: "Delayed by 5 weeks",
      list: 45,
      bug: 123,
      code: 0,
      checkList: 0,
    },
    {
      logo: googleLogo,
      logoName: "Google",
      hRisk: true,
      inProgress: true,
      duration: "12 Aug - 13 Jun",
      progress: 45,
      remainingDays: "Delayed by 5 weeks",
      list: 45,
      bug: 123,
      code: 0,
      checkList: 0,
    },
    {
      logo: divumLogo,
      logoName: "Divum",
      hRisk: false,
      inProgress: true,
      duration: "12 Aug - 13 Jun",
      progress: 45,
      remainingDays: "Delayed by 5 weeks",
      list: 45,
      bug: 123,
      code: 0,
      checkList: 0,
    },
    {
      logo: tvsLogo,
      logoName: "TVS",
      hRisk: true,
      inProgress: true,
      duration: "12 Aug - 13 Jun",
      progress: 45,
      remainingDays: "Delayed by 5 weeks",
      list: 45,
      bug: 123,
      code: 0,
      checkList: 0,
    },
  ];
  return (
    <>
      <div className="project-detail-header">
        <div className="project-text">
          <p>Projects</p>
        </div>
        <div className="button-div">
          <button className="project-detail-button filter">
            Filter
            <RiEqualizerLine className="filter-icon" />
          </button>
          <button className="project-detail-button create">+ Create New</button>
        </div>
      </div>
      <div className="project-detail">
        {projectDetailData.map((projectDetail) => {
          return <ProjectDetailCard projectDetail={projectDetail} />;
        })}
      </div>
    </>
  );
}

export default ProjectDetail;
