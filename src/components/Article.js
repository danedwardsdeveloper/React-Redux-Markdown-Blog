import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import MarkdownRenderer from "./MarkdownRenderer";
import SideBar from "./SideBar";
import NextPrev from "./NextPrev";

import { snapToTop } from "../features/utilities";

function Article() {
  const currentArticle = useSelector((state) => state.articlesSlice.currentArticle);

  useEffect(() => {
    let title = `${currentArticle.title} | Array of Sunshine | Front-End WebDev Blog: JavaScript, React, Coding Book Reviews`;
    document.title = title;
  }, [currentArticle]);

  snapToTop();

  // window.scrollTo({
  //   top: 0,
  //   behavior: "instant",
  // });

  return (
    <main className="main--article">
      <div className="col">
        <article className="article--full">
          <div className="article-header">
            <p>
              by&nbsp;
              <Link to={`/writers/${currentArticle.writerSlug}`}>{currentArticle.writer}</Link>
            </p>
            <h1 className="article-title--full">{currentArticle.title}</h1>
            <p className="article-date">{currentArticle.date}</p>
          </div>
          <MarkdownRenderer children={currentArticle.content} linkTargets="_blank" />
        </article>
        <NextPrev />
      </div>
      <SideBar />
    </main>
  );
}

export default Article;
