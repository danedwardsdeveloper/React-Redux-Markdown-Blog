import React from "react";
import PropTypes from "prop-types";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const renderPageNumbers = () => {
    const pageNumbers = [];

    // Logic to determine how many links to show, handling edges
    const maxLinksToShow = 5;
    let start = Math.max(1, currentPage - Math.floor(maxLinksToShow / 2));
    let end = Math.min(totalPages, start + maxLinksToShow - 1);

    // Handle case where there are less pages than maxLinksToShow
    if (totalPages <= maxLinksToShow) {
      start = 1;
      end = totalPages;
    }

    for (let i = start; i <= end; i++) {
      pageNumbers.push(
        <li key={i} className={currentPage === i ? "active" : ""}>
          <button onClick={() => onPageChange(i)}>{i}</button>
        </li>
      );
    }

    return pageNumbers;
  };

  return (
    <nav>
      <ul className="pagination">
        <li className={currentPage === 1 ? "disabled" : ""}>
          <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
            Prev
          </button>
        </li>
        {renderPageNumbers()}
        <li className={currentPage === totalPages ? "disabled" : ""}>
          <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
}

// Pagination.propTypes = {
//   currentPage: PropTypes.number.isRequired,
//   totalPages: PropTypes.number.isRequired,
//   onPageChange: PropTypes.func.isRequired,
// };

export default Pagination;
