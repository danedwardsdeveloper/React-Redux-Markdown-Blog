import React from "react";
import styles from "./Components.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <h1>Array of Sunshine</h1>
      <form action="" id="search-bar">
        <input type="search" placeholder="Search..." id="search-input" />
      </form>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/profiles">Profiles</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
