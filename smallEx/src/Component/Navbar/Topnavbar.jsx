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
          <div class="collapse navbar-collapse" id="nav-items">
            <ul
              class="navbar-nav me-auto mb-2 mb-lg-0"
              style={{ margin: "20px 50%" }}
            >
              <li class="nav-item" id="icon" style={{ margin: " auto" }}>
                <NavLink
                  to="/notification"
                  class="nav-link active"
                  aria-current="page"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="30"
                    fill="currentColor"
                    class="bi bi-bell-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
                  </svg>
                </NavLink>
              </li>
              <li class="nav-item " id="icon" style={{ margin: "20px " }}>
                <NavLink
                  to="mystore"
                  class="nav-link active"
                  aria-current="page"
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="30"
                    fill="currentColor"
                    class="bi bi-shop-window"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.37 2.37 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0M1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5m2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5" />
                  </svg>{" "}
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
