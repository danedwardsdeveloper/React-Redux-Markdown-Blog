import React from "react";
import { Link } from "react-router-dom";

const ArticlePreviews = (props) => {
  return (
    <main className="main--home-page">
      {props.articles.map((article) => {
        let articlePath = `/articles/${article.path}`;
        let authorPath = `/writers/${article.authorPath}`;
        return (
          <section className="article-preview-container" key={article.id}>
            <div className="article-meta-col">
              <p className="article-author">
                by&nbsp;
                <Link to={authorPath} className="article-author">
                  {article.author}
                </Link>
              </p>
              <h2 className="article-title--preview">
                <Link to={articlePath}>{article.title}</Link>
              </h2>
              <p className="article-date">{article.date}</p>
            </div>
            <div className="article-content-col">
              <p>
                <Link to={articlePath} className="article-preview">
                  {article.preview}
                </Link>
              </p>
              <p className="read-more">
                <Link key={article.id} to={articlePath}>
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
