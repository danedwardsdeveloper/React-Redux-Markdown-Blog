import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import MarkdownRenderer from "./MarkdownRenderer";
import SideBar from "./SideBar";
import NextPrev from "./NextPrev";

import { findArticlesContaining, setFilterTermType } from "../features/articles/articlesSlice";

import { smoothScrollToTop } from "../features/utilities";

import { snapToTop } from "../features/utilities";

function Article() {
  const currentArticle = useSelector((state) => state.articlesSlice.currentArticle);

  useEffect(() => {
    let title = `${currentArticle.title} | Array of Sunshine | Front-End WebDev Blog: JavaScript, React, Coding Book Reviews`;
    document.title = title;
  }, [currentArticle]);

  const dispatch = useDispatch();
  const handleWriterClick = (writer) => {
    dispatch(findArticlesContaining(writer));
    dispatch(setFilterTermType("writer"));
    smoothScrollToTop();
  };

  snapToTop();

  return (
    <main className="main--article">
      <div className="col">
        <article className="article--full">
          <div className="article-header">
            <p className="article-writer">
              by&nbsp;
              <Link
                to={`/writers/${currentArticle.writerSlug}`}
                onClick={() => {
                  handleWriterClick(currentArticle.writer);
                }}
              >
                {currentArticle.writer}
              </Link>
            </p>
            <h1 className="article-title--full">{currentArticle.title}</h1>
            <p className="article-date">{currentArticle.date}</p>
          </div>
          <div className="markdown-content">
            <MarkdownRenderer children={currentArticle.content} linkTargets="_blank" />
          </div>
        </article>
        <NextPrev />
      </div>
      <SideBar />
    </main>
  );
}

export default Article;
