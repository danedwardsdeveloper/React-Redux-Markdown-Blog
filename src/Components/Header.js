import React from "react";
// import styles from "./Components.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <div className="header-row header-row-1">
          <div className="header-column-1">
            <a href="#">
              <h1 className="site-title">Array of Sunshine</h1>
            </a>
          </div>
          <div className="header-column-2">
            <form action="" className="search-form">
              {/* <img className="search-icon" src="./assets/icons/google-search-icon.svg" alt="" /> */}
              <input type="search" placeholder="Search..." className="search-input" />
            </form>
          </div>
        </div>
        <div className="header-row header-row-2">
          <nav>
            <ul>
              <li className="active">Home</li>
              <li>About</li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
