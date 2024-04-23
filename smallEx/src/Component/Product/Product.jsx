import React, { useEffect, useState } from "react";
import Productcard from "./Productcard";
import "./product.css";
import Pagination from "./Pagination";

export default function Product() {
  const [product, setProduct] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = 0;

  const currentPosts = product.slice(firstPostIndex, lastPostIndex);
  useEffect(() => {
    const getSong = async () => {
      await fetch("https://free-music-api2.vercel.app/getSongs").then((res) =>
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
        <div className="products" style={{ margin: "10% auto" }}>
          {currentPosts.map((d, index) => {
            return (
              <Productcard
                key={index}
                i={index}
                setCurrentPage={setCurrentPage}
                setPostsPerPage={setPostsPerPage}
              />
            );
          })}
        </div>

        <Pagination
          totalPosts={product.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}
