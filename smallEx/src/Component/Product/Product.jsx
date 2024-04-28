import React, { useEffect, useState } from "react";
import Productcard from "./Productcard";
import "./product.css";
import Pagination from "./Pagination";
import { NavLink, Route, Router, Routes } from "react-router-dom";
import Seeproduct from "./Seeproduct";

export default function Product(props) {
  const [product, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  const lastPostIndex = currentPage * postsPerPage;

  const firstPostIndex = 0;

  const currentPosts = product.slice(firstPostIndex, lastPostIndex);
  useEffect(() => {
    const getProduct = async () => {
      await fetch(
        "https://small-ex-like-olx.vercel.app/product/allproducts"
      ).then((res) =>
        res.json().then((d) => {
          setProduct(d);
        })
      );
    };
    getProduct();
  }, []);

  return (
    <>
      <div className="products" style={{ width: "100%" }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="products" style={{ margin: "10% auto" }}>
                  {currentPosts.map((d, index) => {
                    return (
                      <Productcard
                        key={index}
                        i={index}
                        setIndex={props.setIndex}
                        data={d}
                      />
                    );
                  })}
                </div>
                <br />
                <br />
                <br />
                <br />
                <Pagination
                  totalPosts={product.length}
                  postsPerPage={postsPerPage}
                  setCurrentPage={setCurrentPage}
                  currentPage={currentPage}
                />
              </>
            }
          />
        </Routes>
      </div>
    </>
  );
}
