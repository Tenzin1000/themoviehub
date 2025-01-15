import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo192.png";
import "../css/notfound.css";
export default function ErrorPages() {
  return (
    <div>
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

      {/* Error page */}
      <div className="container-fluid nf-container">
        <div className="row">
          <div className=" fs-1 text-white notfoundmsg  d-flex align-items-center justify-content-center">
            Page not Found !!!
          </div>
          <div className="nf-logo  d-flex align-items-center justify-content-center">
            <img src={logo} alt="The Movie Hub" />
          </div>
          <div className="text-center my-2">
            <NavLink to="/">Click here to go to home page..</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
