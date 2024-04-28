import React, { useEffect, useState } from "react";

import Product from "../../Component/Product/Product";
import { Route, Router, RouterProvider, Routes } from "react-router-dom";
import Topnavbar from "../../Component/Navbar/Topnavbar";
import Bottombar from "../../Component/Navbar/Bottombar";
import Sellproduct from "../../Component/Sellproduct/Sellproduct";
import Seeproduct from "../../Component/Product/Seeproduct";
import SFooter from "../SFooter";
import Myproduct from "../../Component/Mystore/Myproduct";
import Profile from "../Profile/Profile";
import Notification from "../../Component/Notification/Notification";

export default function Home(props) {
  return (
    <>
     

      <div className="" style={{ width: "100%" }}>
        <Routes>
          <Route path="/" element={<Product />}>
            <Route path="/seeproduct"  />
          </Route>
        </Routes>
      </div>

      <div className="footer">
        <SFooter id={props.id} />
      </div>
    </>
  );
}
