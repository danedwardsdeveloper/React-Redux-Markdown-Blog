import React from "react";
// import { useParams } from "react-router-dom";
import MarkdownRenderer from "./MarkdownRenderer";

function ArticleComponent({ article }) {
  return (
    <article className="full-article">
      <p>by {article.author}</p>
      <h1 className="article-title">{article.title}</h1>
      <p>by {article.date}</p>
      <MarkdownRenderer children={article.content} />
    </article>
  );
}

export default ArticleComponent;
