import React from "react";
import Tags from "./Tags";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function SideBar(props) {
  return (
    <aside className="sidebar">
      <section className="recent-section">
        <h3>Recent articles</h3>
        <ul>
          <li>
            <Link to="/not-found">Another article</Link>
          </li>
          <li>
            <Link to="/not-found">Another article</Link>
          </li>
          <li>
            <Link to="/not-found">Another article</Link>
          </li>
        </ul>
      </section>
      <section className="tags-section">
        <h3>Tags</h3>
        <Tags {...props} />
      </section>
    </aside>
  );
}

// SideBar.propTypes = {
//   articleTags: PropTypes.arrayOf(PropTypes.string),
//   aboutTags: PropTypes.arrayOf(PropTypes.string),
// };

export default SideBar;
