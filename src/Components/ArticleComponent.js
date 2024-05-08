import React from "react";
// import { useParams } from "react-router-dom";
import MarkdownRenderer from "./MarkdownRenderer";

function ArticleComponent({ article }) {
  return (
    <section>
      <p>by {article.author}</p>
      <h1>{article.title}</h1>
      <p>by {article.date}</p>
      <MarkdownRenderer children={article.content} />
    </section>
  );
}

export default ArticleComponent;
