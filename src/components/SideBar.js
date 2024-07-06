import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Tags from "./Tags";

import { setCurrentArticle } from "../features/articles/articlesSlice";

function SideBar() {
  let { recentArticles } = useSelector((state) => state.articlesSlice);

  const dispatch = useDispatch();

  const handleArticleClick = (article) => {
    dispatch(setCurrentArticle(article));
  };

  return (
    <aside className="sidebar">
      <section className="recent-section">
        <h3>Recent articles</h3>
        <ul>
          {recentArticles.map((article) => {
            let articleSlug = `/articles/${article.slug}`;
            return (
              <li key={article.title}>
                <Link
                  to={articleSlug}
                  onClick={() => {
                    handleArticleClick(article);
                  }}
                >
                  {article.title}
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
      <section className="tags-section">
        <h3>Tags</h3>
        <Tags />
      </section>
    </aside>
  );
}

export default SideBar;
