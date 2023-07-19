import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <div>
      <nav
        class={`navbar navbar-expand-lg  bg-${props.mode}  data-bs-theme=-${props.mode}`}
      >
        <div className="container-fluid">
          <Link
            className={`navbar-brand text-${
              props.mode === "dark" ? "light" : "dark"
            }`}
            to="/"
          >
            {props.title}
          </Link>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class={`navbar-nav me-auto mb-2 mb-lg-0 text-${props.mode === "dark" ? "light" : "dark"}`}>
        <li class="nav-item">
          <Link class={`nav-link active text-${props.mode === "dark" ? "light" : "dark"}`} aria-current="page" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class={`nav-link text-${props.mode === "dark" ? "light" : "dark"}`} to="./about">About</Link>
        </li>
      
        
      </ul>
      
    </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul
              className={`navbar-nav me-auto mb-2 mb-lg-0 text-${
                props.mode === "dark" ? "light" : "dark"
              }`}
            ></ul>
          </div>
         
          <div
            class={`form-check form-switch text-${
              props.mode === "dark" ? "light" : "dark"
            }`}
          >
            <input
              class="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.Togglemode}
            />
            <label class="form-check-label" for="flexSwitchCheckDefault">
              {props.mode === "light"
                ? "Enable Blue Mode"
                : "Enable Light Mode"}
            </label>
          </div>
        </div>
      </nav>
    </div>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
};
Navbar.defaultProps = {
  title: "Set your title here",
};
