import React from "react";
import MarkdownRenderer from "./MarkdownRenderer";

function ArticleComponent({ article }) {
  const element = document.getElementById("myElement");
  const elementHeight = element.offsetHeight;
  console.log("Element height (including padding, border, scrollbar):", elementHeight);

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
