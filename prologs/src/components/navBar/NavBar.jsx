import React from "react";
import "./NavBar.css"
import logo from "../../assest/images/logo.png";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <div className="logo-div">
        <img className="logo" src={logo} />
        <p className="logo-text">ProLogos</p>
      </div>
      <div className="search-div">
        <i className="fas fa-search"></i>
        <CiSearch className="search-icon" />
        <input type="text" placeholder="Search or type" />
      </div>
      <div className="profile-div">
        <IoMdNotificationsOutline className="notification-icon" />
        <CgProfile className="profile-icon" />
      </div>
    </div>
  );
};

export default NavBar;
