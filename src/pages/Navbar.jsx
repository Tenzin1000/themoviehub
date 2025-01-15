import React, { useEffect, useState } from "react";
import logo from "../img/logo192.png";
import "../css/navbar.css";
import { NavLink } from "react-router-dom";
import { useGlobalContext } from "../Context/Context";
export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [prevScrollPosition, setPrevScrollPosition] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPostion = window.scrollY;
      if (currentScrollPostion < prevScrollPosition) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
      setPrevScrollPosition(currentScrollPostion);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPosition]);

  const { query, setQuery } = useGlobalContext();
  return (
    <div
      className={`container-fluid  d-flex align-items-center justify-content-center navbar-container ${
        isSticky ? "sticky" : ""
      }`}
    >
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
        <div className="col-md-9  col-sm-8 col-9 d-flex align-items-center justify-content-center">
          <div className="search-container d-flex align-items-center justify-content-center">
            <form
              action="#"
              onSubmit={(e) => e.preventDefault()}
              style={{ flex: 1 }}
            >
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                type="text"
                className="search-input"
                placeholder="Enter keywords..."
              />
            </form>
            <div className="serach-icon">
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
