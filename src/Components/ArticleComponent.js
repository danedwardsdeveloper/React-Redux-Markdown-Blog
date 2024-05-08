import React from "react";
// import { useParams } from "react-router-dom";
import MarkdownRenderer from "./MarkdownRenderer";

function ArticleComponent({ article }) {
  window.scrollTo({
    top: 0,
    behavior: "instant",
  });

  return (
    <article className="full-article">
      <p>by {article.author}</p>
      <h1 className="article-title--full">{article.title}</h1>
      <p>by {article.date}</p>
      <MarkdownRenderer children={article.content} />
    </article>
  );
}

export default ArticleComponent;
