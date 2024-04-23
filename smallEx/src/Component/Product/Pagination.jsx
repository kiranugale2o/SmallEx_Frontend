import React from "react";
import "./pagination.css";
const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  return (
    <div className="pagination">
      <button
        id="loadbtn"
        className="btn btn-light"
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        Load more
      </button>
    </div>
  );
};

export default Pagination;
