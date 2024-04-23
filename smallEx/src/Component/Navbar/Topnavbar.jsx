import React from "react";
import { NavLink } from "react-router-dom";
import "./topnavbar.css";

export default function Topnavbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" id="Navbar">
        <div className="container-fluid">
          <NavLink
            className="navbar-brand"
            style={{ fontSize: "35px", margin: "auto 30px" }}
            to="/"
          >
            SmallEx
          </NavLink>
          <form class="d-flex" style={{ margin: "auto 0px" }} role="searchs">
            <input
              class="form-control"
              type="search"
              placeholder="Search Products"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <div class="collapse navbar-collapse" id="nav-items">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item" id="icon" style={{ margin: "20px 0px" }}>
                <NavLink
                  to="/"
                  class="nav-link active"
                  aria-current="page"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="24"
                    fill="currentColor"
                    class="bi bi-chat-text"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105" />
                    <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8m0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5" />
                  </svg>
                </NavLink>
              </li>
              <li class="nav-item " id="icon" style={{ margin: "20px " }}>
                <NavLink
                  to="notification"
                  class="nav-link active"
                  aria-current="page"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="24"
                    fill="currentColor"
                    class="bi bi-bell"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2M8 1.918l-.797.161A4 4 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4 4 0 0 0-3.203-3.92zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5 5 0 0 1 13 6c0 .88.32 4.2 1.22 6" />
                  </svg>
                </NavLink>
              </li>
              <li class="nav-item" style={{ margin: "20px 0px" }}>
                <NavLink
                  to="account"
                  class="nav-link active"
                  aria-current="page"
                  style={{
                    textDecoration: "none",
                    color: "black",
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="32"
                    fill="currentColor"
                    class="bi bi-person-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path
                      fill-rule="evenodd"
                      d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                    />
                  </svg>
                </NavLink>
              </li>
            </ul>
          </div>
          <NavLink
            to="sell"
            id="sell-btn"
            className="btn border rounded-pill"
            style={{
              textDecoration: "none",
              color: "white",
              backgroundColor: "black",
            }}
          >
            Sell
          </NavLink>
        </div>
      </nav>
    </>
  );
}
