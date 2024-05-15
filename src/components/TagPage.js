import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { setCurrentArticle } from "../features/articles/articlesSlice";

import Pagination from "./Pagination";

function TagPage() {
  const { filterTerm, currentPage, visibleArticles, totalPages } = useSelector((state) => state.articlesSlice);

  const dispatch = useDispatch();

  const handleClick = (article) => {
    dispatch(setCurrentArticle(article));
  };

  useEffect(() => {
    let title =
      totalPages === 1 ? `${filterTerm} | Array of Sunshine | Front-End WebDev Blog: JavaScript, React, Coding Book Reviews` : `${filterTerm}, Page ${currentPage} | Array of Sunshine | Front-End WebDev Blog: JavaScript, React, Coding Book Reviews`;

    document.title = title;
  }, [currentPage]);

  return (
    <>
      <h2>
        Articles Tagged: <span className="filtered-page-term">{filterTerm}</span>
      </h2>
      <main className="main--home-page">
        {visibleArticles.map((article) => {
          let articleSlug = `/articles/${article.slug}`;
          let authorSlug = `/writers/${article.authorSlug}`;
          return (
            <section className="article-preview-container" key={article.id}>
              <div className="article-meta-col">
                <p className="article-author">
                  by&nbsp;
                  <Link to={authorSlug} className="article-author">
                    {article.author}
                  </Link>
                </p>
                <h2 className="article-title--preview">
                  <Link
                    to={articleSlug}
                    onClick={() => {
                      handleClick(article);
                    }}
                  >
                    {article.title}
                  </Link>
                </h2>
                <p className="article-date">{article.date}</p>
              </div>
              <div className="article-content-col">
                <p>
                  <Link
                    to={articleSlug}
                    onClick={() => {
                      handleClick(article);
                    }}
                    className="article-preview"
                  >
                    {article.preview}
                  </Link>
                </p>
                <p className="read-more">
                  <Link
                    key={article.id}
                    to={articleSlug}
                    onClick={() => {
                      handleClick(article);
                    }}
                  >
                    Read more
                  </Link>
                </p>
              </div>
            </section>
          );
        })}
      </main>
      <Pagination />
    </>
  );
}

export default TagPage;
