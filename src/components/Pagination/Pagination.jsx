import React from "react";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

export const Pagination = ({ info, pageNumber, setPageNumber }) => {
  const [width, setWidth] = useState(window.innerWidth);

  const updateWindow = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", updateWindow);
    return () => window.removeEventListener("resize", updateWindow);
  });
  return (
    <>
      <style jsx>
        {`
          @media (max-width: 768px) {
            .prev,
            .next {
              display: none;
            }
            .pagination {
              font-size: 14px;
            }
          }
        `}
      </style>
      <ReactPaginate
        forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
        className="pagination justify-content-center align-items-center gap-4 my-5"
        previousLabel="Prev"
        nextLabel="Next"
        pageLinkClassName="page-link"
        pageClassName="page-item"
        previousLinkClassName="btn btn-primary fs-5 prev"
        nextLinkClassName="btn btn-primary fs-5 next"
        activeClassName="active"
        onPageChange={(data) => setPageNumber(data.selected + 1)}
        pageCount={info?.pages}
        marginPagesDisplayed={width < 576 ? 1 : 2}
        pageRangeDisplayed={width < 576 ? 1 : 2}
      />
    </>
  );
};
