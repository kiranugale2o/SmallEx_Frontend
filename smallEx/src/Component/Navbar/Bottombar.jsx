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
              to="/chat"
              style={{ textDecoration: "none", color: "black" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="30"
                fill="currentColor"
                class="bi bi-chat-text"
                viewBox="0 0 16 16"
              >
                <path d="M2.678 11.894a1 1 0 0 1 .287.801 11 11 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8 8 0 0 0 8 14c3.996 0 7-2.807 7-6s-3.004-6-7-6-7 2.808-7 6c0 1.468.617 2.83 1.678 3.894m-.493 3.905a22 22 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a10 10 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9 9 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105" />
                <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8m0 2.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5" />
              </svg>
              <p>chats</p>
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
              to="myproduct"
              style={{ textDecoration: "none", color: "black" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="30"
                fill="currentColor"
                class="bi bi-heart-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                />
              </svg>
              <p>My ads</p>
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
