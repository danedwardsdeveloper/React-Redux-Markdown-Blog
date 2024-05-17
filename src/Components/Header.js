import React from "react";
import { useDispatch } from "react-redux";
import { NavLink, Link } from "react-router-dom";

import { setPage, clearFilterTerm } from "../features/articles/articlesSlice";

// import SearchField from "./SearchField";

function Header() {
  const dispatch = useDispatch();

  const handleHomeClick = () => {
    dispatch(clearFilterTerm());
    dispatch(setPage({ currentPage: 1 }));
  };

  return (
    <>
      <header>
        <div className="header-row header-row-1">
          <div className="header-column-1">
            <h1 className="site-title">
              <Link
                to="/"
                onClick={() => {
                  handleHomeClick();
                }}
              >
                Array of Sunshine
              </Link>
            </h1>
          </div>
          {/* <div className="header-column-2"><SearchField /></div> */}
        </div>
        <div className="header-row header-row-2">
          <nav className="main-nav">
            <ul>
              <li>
                <NavLink
                  to="/"
                  onClick={() => {
                    handleHomeClick();
                  }}
                >
                  Home
                </NavLink>
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
