import React, { useEffect, useState } from "react";
import Productcard from "../Product/Productcard";
import { NavLink, Route, Router, Routes } from "react-router-dom";
import Seeproduct from "../Product/Seeproduct";

import "./myproduct.css";
import Myproductcard from "./myproductcard";

export default function Myproduct(props) {
  const [product, setProduct] = useState([0, 2]);
  const [index, setIndex] = useState();
  const [pdis, setPdis] = useState("none");
  const [tdis, setTdis] = useState("none");

  useEffect(() => {
    const getProduct = async () => {
      await fetch(
        `https://small-ex-like-olx.vercel.app/product/yourproducts/${props.id}`
      ).then((res) =>
        res.json().then((d) => {
          if (d.status) {
            setProduct(d.products);
            setPdis("block");
            setTdis("none");
          } else {
            setPdis("none");
            setTdis("block");
          }
        })
      );
    };
    getProduct();
  }, []);
  return (
    <>
      <div className="h1" id="title">
        Your Selling Product
      </div>
      <div className="products" style={{ display: `${pdis}` }}>
        {product.map((d, index) => {
          return <Myproductcard key={index} data={d} />;
        })}
      </div>
      <div className="text-center h3" style={{ display: `${tdis}` }}>
        <NavLink to="/sell" style={{ textDecoration: "none", color: "white" }}>
          <button className="btn btn-dark">Start Selling on SmallEx</button>
        </NavLink>
      </div>
    </>
  );
}
