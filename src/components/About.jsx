import React from "react";
import logo from "../img/logo192.png";
import "../css/about.css";
import { NavLink } from "react-router-dom";
export default function About() {
  return (
    <div className="about-container container-fluid">
      <div className="row mx-auto ">
        <div className="col-md-3  col-12  mt-2 mt-md-0 about-left text-center">
          <NavLink to="/" className="text-decoration-none ">
            <img src={logo} alt="The Movie Hub" />
            <h5 className="fw-bold text-white d-none d-md-block ">
              The Movie Hub
            </h5>
          </NavLink>
        </div>
        <div className="col-md-9 col-12  about-right d-flex flex-column align-items-center justify-content-center">
          <div>
            <span className="fw-bold text-white "> The Movie Hub </span> is a{" "}
            <span className="fw-bold text-white">
              React-based movie application
            </span>{" "}
            that allows users to search for movies, view details, and paginate
            through results using the{" "}
            <span className="fw-bold text-white">OMDB API</span>.
          </div>
        </div>
      </div>
    </div>
  );
}
