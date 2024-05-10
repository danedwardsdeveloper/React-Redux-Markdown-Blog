import React from "react";
import MarkdownRenderer from "./MarkdownRenderer";
// import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ArticleComponent(props) {
  window.scrollTo({
    top: 0,
    behavior: "instant",
  });

  return (
    <article className="full-article">
      <p>
        by&nbsp;
        <Link to={`/writers/${props.article.authorPath}`}>{props.article.author}</Link>
      </p>
      <h1 className="article-title--full">{props.article.title}</h1>
      <p>by {props.article.date}</p>
      <MarkdownRenderer children={props.article.content} linkTargets="_blank" />
    </article>
  );
}

export default ArticleComponent;
