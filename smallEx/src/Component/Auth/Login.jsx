import React, { useState } from "react";
import "./login.css";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();
    const data = {
      email,
      password,
    };
    await fetch("https://small-ex-like-olx.vercel.app/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) =>
      res.json().then((d) => {
        if (res.status === 200) {
          toast.success(d.message);
          localStorage.setItem("smallEx_access_token", d.smallEx_access_token);
          navigate("/");
        } else {
          toast.warning(d.message);
        }
      })
    );
  };
  return (
    <>
      <div
        className="text-center h1"
        style={{ margin: "20px ", fontFamily: "cursive" }}
      >
        SmallEx{" "}
      </div>
      <div className="center">
        <div className="container ">
          <div className="text">Login Form</div>
          <form
            onSubmit={loginHandler}
            style={{ margin: "5% auto", height: "10px" }}
          >
            <div className="data">
              <label>Email </label>
              <input
                type="text"
                required
                placeholder="Enter your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="data">
              <label>Password</label>
              <input
                type="password"
                required
                placeholder="Enter your Password"
                onChange={(e) => setPass(e.target.value)}
              />
            </div>
            <br />
            <div className="btn btn-dark">
              <button type="submit" style={{ margin: "auto" }}>
                Login
              </button>
            </div>

            <div className="text-center" style={{ margin: "5px auto" }}>
              Don't have an account?
              <NavLink
                to="/singup"
                style={{ textDecoration: "none", fontWeight: "600" }}
              >
                Singup{" "}
              </NavLink>
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}
