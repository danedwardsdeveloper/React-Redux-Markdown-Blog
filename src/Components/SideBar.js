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
        <Tags tags={articleTags} />
      </section>
    </aside>
  );
}

export default SideBar;
