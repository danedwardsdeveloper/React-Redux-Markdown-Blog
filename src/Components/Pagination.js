import React from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../features/articles/articlesSlice";

function Pagination() {
  const dispatch = useDispatch();
  const { currentPage, totalPages } = useSelector((state) => state.articlesSlice);

  const handleNextPage = () => {
    const nextPage = currentPage + 1;
    dispatch(setPage({ currentPage: nextPage }));
  };

  const handlePreviousPage = () => {
    const previousPage = currentPage - 1;
    dispatch(setPage({ currentPage: previousPage }));
  };

  return (
    <nav className="pagination">
      <p className="page-count">
        Page&nbsp;<span>{currentPage}</span>&nbsp;of&nbsp;<span>{totalPages}</span>
      </p>
      <ul>
        {currentPage > 1 && (
          <li>
            <Link onClick={handlePreviousPage} className="previous">
              Newer posts
            </Link>
          </li>
        )}
        {currentPage < totalPages && (
          <li>
            <Link onClick={handleNextPage} className="next">
              Older posts
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Pagination;
