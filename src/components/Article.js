import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import MarkdownRenderer from "./MarkdownRenderer";
import SideBar from "./SideBar";

function Article() {
  const currentArticle = useSelector((state) => state.articlesSlice.currentArticle);

  useEffect(() => {
    let title = `${currentArticle.title} | Array of Sunshine | Front-End WebDev Blog: JavaScript, React, Coding Book Reviews`;
    document.title = title;
  }, [currentArticle]);

  window.scrollTo({
    top: 0,
    behavior: "instant",
  });

  return (
    <>
      <main className="main--article">
        <article className="full-article">
          <p>
            by&nbsp;
            <Link to={`/writers/${currentArticle.authorPath}`}>{currentArticle.author}</Link>
          </p>
          <h1 className="article-title--full">{currentArticle.title}</h1>
          <p>by {currentArticle.date}</p>
          <MarkdownRenderer children={currentArticle.content} linkTargets="_blank" />
        </article>
        <SideBar />
      </main>
    </>
  );
}

export default Article;
