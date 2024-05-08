import React from "react";
// import styles from "./Components.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <div className="header-row header-row-1">
          <div className="header-column-1">
            <Link to="/">
              <h1 className="site-title">Array of Sunshine</h1>
            </Link>
          </div>
          <div className="header-column-2">
            {/* <form action="" className="search-form" id="search-form"> */}
            {/* <img className="search-icon" src="./assets/icons/google-search-icon.svg" alt="" /> */}
            {/* <input type="search" placeholder="Search..." className="search-input" name="search-form" /> */}
            {/* </form> */}
          </div>
        </div>
        <div className="header-row header-row-2">
          <nav className="main-nav">
            <ul>
              <li className="active">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
