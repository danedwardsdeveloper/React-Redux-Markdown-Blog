import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Pagination from "../components/Pagination";

import { setCurrentArticle } from "../features/articles/articlesSlice";

const ArticlePreviews = () => {
  const { visibleArticles } = useSelector((state) => state.articlesSlice);

  const dispatch = useDispatch();

  const handleClick = (article) => {
    dispatch(setCurrentArticle(article));
  };

  return (
    <>
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
};

export default ArticlePreviews;
