import React from "react";
import { useGlobalContext } from "../Context/Context";
import { NavLink, useNavigate } from "react-router-dom";
import "../css/movie.css";
import loadinglogo from "../img/logo192.png";
export default function Movie() {
  const { movie, error, isLoading, query } = useGlobalContext();
  const navigate = useNavigate();
  console.log(isLoading);
  return (
    <div className="container-fluid movie-container">
      {isLoading ? (
        <div className="d-flex align-items-center justify-content-center loading-container">
          <div className="loading-logo">
            <img src={loadinglogo} alt="logo" />
          </div>
          <div className="loading-text ms-3">Loading......</div>
        </div>
      ) : (
        <div className="row mx-auto">
          <div className="text-white fs-4 fw-bold">
            Search results for "{query}"
          </div>

          {error.show ? (
            <p className="errormsg">{error.msg}</p>
          ) : (
            movie.slice(0, 10).map((curMovie, index) => {
              const { imdbID, Title, Poster: originalPoster, Year } = curMovie;
              // Check if Poster is "N/A" and replace it with loadinglogo
              const Poster =
                originalPoster === "N/A" ? loadinglogo : originalPoster;
              const handleClick = () => {
                navigate(`/movie/${imdbID}`);
              };
              const movieName = Title.substring(0, 20);
              return (
                <div className="col-6 col-md-2-4 px-2 " key={index}>
                  <div className="movie-card  my-2">
                    <div
                      className="movie-img"
                      style={{
                        background: `url(${Poster}) center/cover no-repeat`,
                      }}
                      onClick={handleClick}
                      aria-label={movieName}
                    ></div>
                    <div className="movie-main-detail d-flex align-items-center  justify-content-center">
                      <div className="movie-detail d-flex flex-column  w-100 justify-content-between">
                        <div className="movie-year ms-1">{Year}</div>
                        <div className="movie-name ms-1">
                          {movieName.length >= 20
                            ? `${movieName}...`
                            : movieName}
                        </div>
                        <div className="movie-more-btn d-none d-sm-flex">
                          <NavLink
                            className="movie-more mx-auto "
                            to={`movie/${imdbID}`}
                          >
                            <div>More</div>
                            <div className="movie-more-icon">
                              <i className="fa-solid fa-info "></i>
                            </div>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}
    </div>
  );
}
