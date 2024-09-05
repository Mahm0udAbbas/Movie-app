import React, { useState } from "react";
import { Pagination } from "react-bootstrap";

export default function MoviesPagination({ setPage }) {
  //Handles Pagination
  const pageNumpers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // go to previous page
  const goToPrev = () => {
    if (page == 1) {
      setPage(1);
    } else {
      setPage(page - 1);
    }
  };
  // go To Next page
  const goToNext = () => {
    if (page == pageNumpers.length) {
      setPage(pageNumpers.length);
    } else {
      setPage(+page + 1);
    }
  };
  // Go to Selected page
  const goToPage = (e) => {
    e.target.innerHTML;
    setPage(e.target.innerHTML);
  };
  return (
    <Pagination>
      <Pagination.Prev onClick={() => goToPrev()} />
      {pageNumpers.map((pageNum, i) => {
        return (
          <Pagination.Item key={i} onClick={(e) => goToPage(e)}>
            {pageNum}
          </Pagination.Item>
        );
      })}
      <Pagination.Next onClick={() => goToNext()} />
    </Pagination>
  );
}
