import React from "react";
import Product from "../../Component/Product/Product";
import { Route, Router, RouterProvider, Routes } from "react-router-dom";
import Topnavbar from "../../Component/Navbar/Topnavbar";
import Bottombar from "../../Component/Navbar/Bottombar";
import Sellproduct from "../../Component/Sellproduct/Sellproduct";
import Seeproduct from "../../Component/Product/Seeproduct";
import SFooter from "../SFooter";

export default function Home() {
  return (
    <>
      <div className="">
        <Topnavbar />
        <Bottombar />
      </div>

      <div className="">
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/chat" element={<h1>chat</h1>} />
          <Route path="/sell" element={<Sellproduct />} />
          <Route path="/myproduct" element={<h1>my product</h1>} />
          <Route path="/account" element={<h1>Account</h1>} />
        </Routes>
      </div>

      <div className="footer">
        <SFooter />
      </div>
    </>
  );
}
