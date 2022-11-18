import React from "react";
import "./topbar.css";
import { NotificationsNone, SettingsApplications } from "@material-ui/icons";
import { useNavigate } from "react-router-dom";

export default function Topbar() {
  const navigate = useNavigate();

  function Logout() {
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("auth");
    navigate("/login");

    window.location.reload();
  }
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo"></span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone className="topbar-icon" />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <SettingsApplications className="topbar-icon" />
          </div>
          <img
            src="https://avatars.githubusercontent.com/u/34004150?v=4"
            alt=""
            className="topAvatar"
          />
          <button className="p-2 rounded-lg outline " onClick={Logout}>
            Logout{" "}
          </button>
        </div>
      </div>
    </div>
  );
}
