import React from "react";
import articleList from "../articles/articles.json";
import { Link } from "react-router-dom";

function ArticlePreviews() {
  return (
    <main className="article-list">
      {articleList.length &&
        articleList.map((article, i) => {
          return (
            <article className="article" key={article.id}>
              <div className="article-info-container">
                <p className="article-author">by {article.author}</p>
                <h2 className="article-title">{article.title}</h2>
                <p className="article-date">{article.date}</p>
              </div>
              <div className="article-preview-container">
                <p className="article-preview">{article.preview}</p>
                <p className="read-more">
                  <Link key={article.id} to={article.path}>
                    Read more
                  </Link>
                </p>
              </div>
            </article>
          );
        })}
    </main>
  );
}

export default ArticlePreviews;
