import React from "react";
import { NavLink, Link } from "react-router-dom";
// import SearchField from "./SearchField";

function Header() {
  return (
    <>
      <header>
        <div className="header-row header-row-1">
          <div className="header-column-1">
            <h1 className="site-title">
              <Link to="/">Array of Sunshine</Link>
            </h1>
          </div>
          <div className="header-column-2">{/* <SearchField /> */}</div>
        </div>
        <div className="header-row header-row-2">
          <nav className="main-nav">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
