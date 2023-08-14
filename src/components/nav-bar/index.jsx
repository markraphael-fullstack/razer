import React from "react";
import RazerLogo from "../../assets/icons/wordmark.svg";
import "./index.scss";

const NavBar = () => {
  return (
    <div className="nav-bar-container">
      <div className="nav-bar">
        <div className="logo-container">
          <img src={RazerLogo} alt="" className="logo" />
        </div>
        <div className="navigations">
          <ul>
            <li>
              <div className="drop-down">
                <a href="">Products</a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="drop-down-icon"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </li>
            <li>About</li>
            <li>Community</li>
            <li>Contact Us</li>
            <li>
              <a href="/" className="buy-button">
                Buy Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
