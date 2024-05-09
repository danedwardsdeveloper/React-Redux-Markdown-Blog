import React, { useState } from "react";
import { Link } from "react-router-dom";

function PaginationOld({ numberOfPages, currentPage, setCurrentPage }) {
  // let currentPageNumber = 1;
  // let totalPages = 10;
  // const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const goToNextPage = () => {
    if (currentPage !== numberOfPages) setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  return (
    <nav className="pagination">
      <p className="page-count">
        Page&nbsp;<span>{currentPage}</span>&nbsp;of&nbsp;<span>{numberOfPages}</span>
      </p>
      <ul>
        <li>
          <Link onClick={goToPrevPage} className="previous">
            Newer posts
          </Link>
        </li>
        <li>
          <Link onClick={goToNextPage} className="next">
            Older posts
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default PaginationOld;
