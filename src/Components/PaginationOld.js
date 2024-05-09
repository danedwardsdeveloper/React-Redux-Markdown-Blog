import React, { useState } from "react";
import { Link } from "react-router-dom";

function PaginationOld() {
  return (
    <nav className="pagination">
      <p className="page-count">Page 1 of 10</p>
      <Link to="/" className="next">
        Older posts
      </Link>
    </nav>
  );
}

export default PaginationOld;
