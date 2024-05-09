import React from "react";
import { Link } from "react-router-dom";
// import SearchField from "./SearchField";

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
          <div className="header-column-2">{/* <SearchField /> */}</div>
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
