import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="left-content-section">
        <div className="footer-menu-icon">
          <i>
            <img src="./images/menu-icon.svg" />
          </i>
        </div>
      </div>
      <div className="center-content-section">
        <div className="admin-icon">
          <i className="admin-icons-container">
            <img src="./images/admin.svg" />
            <img src="./images/admin_icon.svg" />
          </i>
        </div>
        <div className="officer-icon">
          <i className="officer-icons-container">
            <img src="./images/officer-icon.svg" />
          </i>
        </div>
      </div>
      <div className="right-content-section">
        <div className="footer-right-icon"></div>
      </div>
    </div>
  );
}

export default Footer;
