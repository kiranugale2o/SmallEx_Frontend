import React, { useState } from "react";
import Seeproduct from "./Seeproduct";
import { useNavigate } from "react-router";
import { NavLink, Route, Router, Routes } from "react-router-dom";

export default function Productcard(props) {
  return (
    <>
      <Card index={props.i} setIndex={props.setIndex} data={props.data} />
    </>
  );
}

export const Card = (props) => {
  const [page, setPage] = useState(true);
  const navigate = useNavigate();
  return (
    <>
      <NavLink to="/seeproduct" style={{ textDecoration: "none" }}>
        <div
          className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded"
          style={{
            width: "20rem",
            position: "relative",
            margin: "1rem 1rem",
            height: "55vh",
            overflow: "hidden",
          }}
          onClick={() => {
            props.setIndex(props.index);
          }}
        >
          <img
            src={props.data.product_img1}
            className="card-img-top"
            alt="..."
            style={{
              height: "25vh",
              width: "auto",
              margin: " 10px auto",
            }}
          />

          <div className="card-body">
            <p className="card-text h5">
              <b>Rs.{props.data.price}</b>
            </p>
            <p className="text-start " style={{ fontWeight: "400" }}>
              {props.data.name}
            </p>

            <p className="text-start" style={{ fontWeight: "400" }}>
              {props.data.location}
            </p>
          </div>
        </div>
      </NavLink>
    </>
  );
};
