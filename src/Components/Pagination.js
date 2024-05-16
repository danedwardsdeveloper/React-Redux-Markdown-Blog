import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setPage } from "../features/articles/articlesSlice";

import { smoothScrollToTop } from "../features/utilities";

function Pagination() {
  const dispatch = useDispatch();
  const { currentPage, totalPages } = useSelector((state) => state.articlesSlice);

  // const scrollOptions = {
  //   top: 0,
  //   left: 0,
  //   behavior: "smooth",
  // };

  // function scrollToTop(options = scrollOptions) {
  //   window.scrollTo(options);
  // }

  const handleNextPage = () => {
    const nextPage = currentPage + 1;
    dispatch(setPage({ currentPage: nextPage }));
    smoothScrollToTop();
  };

  const handlePreviousPage = () => {
    const previousPage = currentPage - 1;
    dispatch(setPage({ currentPage: previousPage }));
    smoothScrollToTop();
  };

  useEffect(() => {
    let title = `${currentPage === 1 ? "Home" : "Page " + currentPage} | Array of Sunshine | Front-End WebDev Blog: JavaScript, React, Coding Book Reviews`;
    document.title = title;
  }, [currentPage]);

  return (
    <nav className="pagination">
      <p className="page-count">
        Page&nbsp;<span>{currentPage}</span>&nbsp;of&nbsp;<span>{totalPages}</span>
      </p>
      <ul>
        {currentPage > 1 && (
          <li>
            <Link onClick={handlePreviousPage} className="pagination-previous">
              Newer posts
            </Link>
          </li>
        )}
        {currentPage < totalPages && (
          <li>
            <Link onClick={handleNextPage} className="pagination-next">
              Older posts
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Pagination;
