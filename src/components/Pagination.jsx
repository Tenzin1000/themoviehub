import React from "react";
import { useGlobalContext } from "../Context/Context";
import "../css/pagination.css";
export default function Pagination() {
  const { totalResults, setTotalResults, currentPage, setCurrentPage } =
    useGlobalContext();
  console.log(totalResults);
  const lastpage = Math.ceil(totalResults / 10);
  const handlenext = () => {
    let newpage = currentPage + 1;
    setCurrentPage(newpage);
  };
  const handlePrev = () => {
    let prev = currentPage - 1;
    setCurrentPage(prev);
  };
  const handleStart = () => {
    let one = 1;
    setCurrentPage(one);
  };
  const handleEnd = () => {
    let last = Math.ceil(totalResults / 10);
    setCurrentPage(last);
  };
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  return (
    <div>
      {totalResults > 10 ? (
        <div className="d-flex my-3 text-white  align-items-center justify-content-center">
          {/* direct first btn */}
          {currentPage > 2 && (
            <div className="btn-icon ms-2" onClick={handleStart}>
              <i className="fa-solid fa-angles-left"></i>
            </div>
          )}
          {/* prev div  */}
          {currentPage !== 1 && (
            <div className="btn-icon ms-2" onClick={handlePrev}>
              <i className="fa-solid fa-arrow-left"></i>
            </div>
          )}
          {/* currentPage-1 btn  */}
          {currentPage > 1 && (
            <div
              className="btn-number ms-2"
              onClick={() => handlePageChange(currentPage - 1)}
            >
              {currentPage - 1}
            </div>
          )}
          <div className="main-index m-2"> {currentPage}</div>
          {/* lastpage btn  */}
          {currentPage < lastpage && (
            <div
              className="btn-number me-2"
              onClick={() => handlePageChange(currentPage + 1)}
            >
              {currentPage + 1}
            </div>
          )}
          {currentPage < lastpage && (
            <div className="btn-icon me-2" onClick={handlenext}>
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          )}
          {currentPage < lastpage && (
            <div className="btn-icon" onClick={handleEnd}>
              <i className="fa-solid fa-angles-right"></i>
            </div>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
