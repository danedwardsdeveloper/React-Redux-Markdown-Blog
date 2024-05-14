import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// import Tags from "./Tags";

import { setCurrentArticle } from "../features/articles/articlesSlice";

function SideBar() {
  // let tags = currentArticle.tags;
  let recentArticles = useSelector((state) => state.articlesSlice.recentArticles);

  return (
    <aside className="sidebar">
      <section className="recent-section">
        <h3>Recent articles</h3>
        <ul>
          {recentArticles.map((article) => (
            <li key={article.title}>
              <Link to={`/articles/${article.slug}`}>{article.title}</Link>
            </li>
          ))}
        </ul>
      </section>
      {/* <section className="tags-section">
        <h3>Tags</h3>
        <Tags tags={props.tags} />
      </section> */}
    </aside>
  );
}

export default SideBar;
