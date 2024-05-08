import React from "react";
import Tags from "./Tags";
import { Link } from "react-router-dom";

function SideBar({ articleTags }) {
  return (
    <aside className="sidebar">
      <section className="recent-section">
        <h3>Recent articles</h3>
        <ul>
          <li>
            <Link to="/not-found">Another article</Link>
          </li>
        </ul>
      </section>
      SideBar
      <Tags tags={articleTags} />
    </aside>
  );
}

export default SideBar;
