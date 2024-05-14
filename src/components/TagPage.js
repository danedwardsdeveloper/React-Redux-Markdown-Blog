import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import Pagination from "./Pagination";

function TagPage() {
  const { filteredPageTitle, currentPage, visibleArticles } = useSelector((state) => state.articlesSlice);

  useEffect(() => {
    let title = `${currentPage === 1 ? filteredPageTitle : "Page " + currentPage} | Array of Sunshine | Front-End WebDev Blog: JavaScript, React, Coding Book Reviews`;
    document.title = title;
  }, [currentPage]);

  return (
    <>
      <main className="main--article">
        <article className="full-article">
          <h2>Articles Tagged: {filteredPageTitle}</h2>
          {visibleArticles.map((article) => (
            <h3 key={article.id}>{article.title}</h3>
          ))}
        </article>
      </main>
      <Pagination />
    </>
  );
}

export default TagPage;
