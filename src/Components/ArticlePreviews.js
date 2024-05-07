import React from "react";
import { Link } from "react-router-dom";
import Tags from "./Tags";

const ArticlePreviews = (props) => {
  return (
    <main className="article-list">
      {props.articles.map((article) => {
        return (
          <section className="article" key={article.id}>
            <div className="article-info-container">
              <p className="article-author">by {article.author}</p>
              <h2 className="article-title">{article.title}</h2>
              <p className="article-date">{article.date}</p>
              <Tags tags={article.tags} />
            </div>
            <div className="article-preview-container">
              <p className="article-preview">{article.preview}</p>
              <p className="read-more">
                <Link key={article.id} to={`/articles/${article.path}`}>
                  Read more
                </Link>
              </p>
            </div>
          </section>
        );
      })}
    </main>
  );
};

export default ArticlePreviews;
