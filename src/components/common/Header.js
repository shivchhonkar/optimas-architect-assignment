import React from "react";
import "./Header.css";
// import logo from "../../../public/optimas-logo.svg";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img src="./images/optimas-logo.svg" alt="logo" />
      </div>
      <div className="main-nav">
        <ul className="menu-content">
          <li>
            <i>
              <img src="./images/dashboard_icon.svg" alt="user" />
            </i>
            Dashboard
          </li>
          <li className="active">
            <i className="users">
              <img src="./images/admin_icon.svg" alt="user" />
            </i>
            Users
          </li>
          <li>
            <i>
              <img src="./images/roles_icon.svg" alt="user" />
            </i>
            Roles
          </li>
          <li>
            <i>
              <img src="./images/setting_icon.svg" alt="user" />
            </i>
            Settings
          </li>
        </ul>
        <div className="main-nav-toggle"></div>
      </div>
      <div className="user-profile">
        <i className="notifications">
          <img src="./images/notification_icon.svg" alt="user" />
          <img src="./images/notification-dot.svg" alt="user" />
        </i>
        <i>
          <img src="./images/user_img.png" alt="user" />
        </i>
      </div>
    </div>
  );
}

export default Header;
