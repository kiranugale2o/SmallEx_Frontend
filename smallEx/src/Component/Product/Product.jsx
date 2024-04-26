import React, { useEffect, useState } from "react";
import Productcard from "./Productcard";
import "./product.css";
import Pagination from "./Pagination";
import { NavLink, Route, Router, Routes } from "react-router-dom";
import Seeproduct from "./Seeproduct";

export default function Product() {
  const [product, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  const [index, setIndex] = useState(0);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = 0;

  const currentPosts = product.slice(firstPostIndex, lastPostIndex);
  useEffect(() => {
    const getSong = async () => {
      await fetch(
        "https://small-ex-like-olx.vercel.app/product/allproducts"
      ).then((res) =>
        res.json().then((d) => {
          setProduct(d);
        })
      );
    };
    getSong();
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
                        setIndex={setIndex}
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
          <Route
            path="/seeproduct"
            element={<Seeproduct index={index} product={product} />}
          />
        </Routes>
      </div>
    </>
  );
}
