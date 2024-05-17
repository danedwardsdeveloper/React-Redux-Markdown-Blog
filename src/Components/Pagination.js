import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setPage } from "../features/articles/articlesSlice";

import { smoothScrollToTop } from "../features/utilities";

function Pagination() {
  const dispatch = useDispatch();
  const { currentPage, totalPages } = useSelector((state) => state.articlesSlice);

  const nextPage = currentPage + 1;
  const previousPage = currentPage - 1;

  const handleClick = (targetPage) => {
    dispatch(setPage({ currentPage: targetPage }));
    smoothScrollToTop();
  };

  const generatePath = (targetPage) => {
    return targetPage === 1 ? `/` : `/page-${targetPage}`;
  };

  useEffect(() => {
    let title = `${currentPage === 1 ? "Home" : "Page " + currentPage} | Array of Sunshine | Front-End WebDev Blog: JavaScript, React, Coding Book Reviews`;
    document.title = title;
  });

  return (
    <nav className="pagination">
      <p className="page-count">
        Page&nbsp;<span>{currentPage}</span>&nbsp;of&nbsp;<span>{totalPages}</span>
      </p>
      <ul>
        <li>
          {currentPage > 1 && (
            <Link
              to={generatePath(previousPage)}
              onClick={() => {
                handleClick(previousPage);
              }}
              className="pagination-previous"
            >
              Newer posts
            </Link>
          )}
        </li>
        {currentPage < totalPages && (
          <li>
            <Link
              to={generatePath(nextPage)}
              onClick={() => {
                handleClick(nextPage);
              }}
              className="pagination-next"
            >
              Older posts
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Pagination;
