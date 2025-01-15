import React, { useEffect, useState } from "react";
import logo from "../img/logo192.png";
import { NavLink, useParams } from "react-router-dom";
import loadinglogo from "../img/logo192.png";

import "../css/moviedetail.css";
const Detail_url = `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_API}`;

export default function Moviedetail() {
  const { id } = useParams();
  const [singleMovie, setSingleMovie] = useState([]);
  const [loading, setLoading] = useState(true);
  const getmoviedetails = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data.Response);
      if (data.Response === "True") {
        setLoading(false);
        setSingleMovie(data);
      }
    } catch (errors) {
      console.log(errors);
    }
  };
  useEffect(() => {
    getmoviedetails(`${Detail_url}&i=${id}`);
  }, []);
  const {
    Title,
    Poster,
    Released,
    Runtime,
    Genre,
    Language,
    Country,
    Director,
    Plot,
    imdbRating,
    Actors,
    Type,
    Writer,
  } = singleMovie;
  return (
    <>
      <div className="container-fluid  d-flex align-items-center justify-content-center navbar-container fixed">
        <div className="row  mx-auto">
          <NavLink
            to="/"
            className="col-md-3 col-sm-4 col-3 d-flex align-items-center text-decoration-none"
          >
            <div>
              <img src={logo} alt="The movie hub" className="navbar-logo" />
            </div>
            <div className="navbar-title d-none d-sm-block">The Movie Hub</div>
          </NavLink>
          <div className="col-md-9  col-sm-8 col-9 d-flex align-items-center justify-content-center"></div>
        </div>
      </div>
      <div className="movie-detail-container d-flex align-items-center justify-content-center container-fluid">
        {loading ? (
          <div className="d-flex align-items-center justify-content-center loading-container">
            <div className="loading-logo">
              <img src={loadinglogo} alt="logo" />
            </div>
            <div className="loading-text ms-3">Loading......</div>
          </div>
        ) : (
          <div className="row moviedetail-row mx-auto ">
            <div className="moviedetail-img col-md-4 col-12 d-flex align-items-center justify-content-md-end">
              <img src={Poster} alt={Title} />
            </div>
            <div className="moviedetail-des col-md-8 col-12 d-flex flex-column align-items-start justify-content-center  ">
              <div className="md-name">{Title}</div>
              <div className="d-flex  my-1 md-down-name">
                <div className="md-type me-2">{Type}</div>
                <div className="md-rating me-2">IMDB: {imdbRating}</div>
                <div>{Runtime}</div>
              </div>
              <div className="md-overview my-2">
                <div className="md-overview-title text-white">Overview:</div>
                <div className="md-overview-des">{Plot}</div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6">
                  <div>
                    <span className="md-title">Director : </span>
                    {Director}
                  </div>
                  <div>
                    <span className="md-title">Released Date : </span>
                    {Released}
                  </div>
                  <div>
                    <span className="md-title">Genre : </span>
                    {Genre}
                  </div>
                  <div>
                    <span className="md-title">Casts : </span>
                    {Actors}
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <div>
                    <span className="md-title">Writer : </span>
                    {Writer}
                  </div>
                  <div>
                    <span className="md-title">Duration : </span>
                    {Runtime}
                  </div>
                  <div>
                    <span className="md-title">Language : </span>
                    {Language}
                  </div>
                  <div>
                    <span className="md-title">Country : </span>
                    {Country}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
