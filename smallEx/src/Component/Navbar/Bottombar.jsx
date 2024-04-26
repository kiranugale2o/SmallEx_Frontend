import React from "react";
import { NavLink } from "react-router-dom";
import "./bottombar.css";
export default function Bottombar() {
  return (
    <>
      <div className="list" id="leftbar">
        <div className="nav-items">
          <div className="" id="item">
            <NavLink to="/" style={{ textDecoration: "none", color: "black" }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="30"
                fill="currentColor"
                class="bi bi-house-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z" />
                <path d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293z" />
              </svg>
              <p>Home</p>
            </NavLink>
          </div>
          <div className="chat" id="item">
            <NavLink
              to="/notification"
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
              <p>notification</p>
            </NavLink>
          </div>
          <div className="sell" id="item">
            <NavLink
              to="sell"
              style={{ textDecoration: "none", color: "black" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="56"
                height="50"
                fill="currentColor"
                class="bi bi-plusn "
                viewBox="0 0 16 16"
                style={{
                  margin: "-30px -6px",
                  backgroundColor: "black",
                  color: "white",
                  fontWeight: "700",
                  position: "fixed",
                  border: "50%",
                }}
              >
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
              </svg>
              <p style={{ margin: "30px 7px" }}>Sell</p>
            </NavLink>
          </div>
          <div className="myads" id="item">
            <NavLink
              to="mystore"
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
              <p>My store</p>
            </NavLink>
          </div>
          <div className="account" id="item">
            <NavLink
              to="account"
              style={{ textDecoration: "none", color: "black" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="30"
                fill="currentColor"
                class="bi bi-person"
                viewBox="0 0 16 16"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
              </svg>
              <p>Account</p>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
