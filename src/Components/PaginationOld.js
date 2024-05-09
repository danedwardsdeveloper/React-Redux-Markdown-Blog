import React, { useState } from "react";
import { Link } from "react-router-dom";

function PaginationOld() {
  let currentPageNumber = 1;
  let totalPages = 10;

  return (
    <nav className="pagination">
      <p className="page-count">
        Page&nbsp;<span>{currentPageNumber}</span>&nbsp;of&nbsp;<span>{totalPages}</span>
      </p>
      <ul>
        <li>
          <Link to="/" className="previous">
            Newer posts
          </Link>
        </li>
        <li>
          <Link to="/" className="next">
            Older posts
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default PaginationOld;
