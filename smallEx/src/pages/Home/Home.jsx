import React, { useEffect, useState } from "react";
import Product from "../../Component/Product/Product";
import { 
  Route,
  Router,
  RouterProvider,
  Routes,
  useNavigate,
} from "react-router-dom";
import Topnavbar from "../../Component/Navbar/Topnavbar";
import Bottombar from "../../Component/Navbar/Bottombar";
import Sellproduct from "../../Component/Sellproduct/Sellproduct";
import Seeproduct from "../../Component/Product/Seeproduct";
import SFooter from "../SFooter";
import Myproduct from "../../Component/Mystore/Myproduct";
import Profile from "../Profile/Profile";
import Notification from "../../Component/Notification/Notification";

export default function Home() {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [id, setId] = useState("");

  useEffect(() => {
    const auth = async () => {
      fetch("https://small-ex-like-olx.vercel.app/user/auth", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("smallEx_access_token"),
        },
      }).then((res) => {
        res.json().then((data) => {
          if (res.status === 200) {
            setUser(data.user);
            setId(data.user._id);
            localStorage.setItem("user", data.user._id);
          } else {
            navigate("/login");
          }
        });
      });
    };

    auth();
  }, []);
  return (
    <>
      <div className="">
        <Topnavbar />
        <Bottombar />
      </div>

      <div className="" style={{ width: "100%" }}>
        <Routes>
          <Route path="/" element={<Product />}>
          
          <Route
            path="/notification"
            element={<Notification id={id} data={user} />}
          />
          <Route path="/sell" element={<Sellproduct id={id} />} />
          <Route path="/mystore" element={<Myproduct id={id} />} />
          <Route path="/account" element={<Profile data={user} />} />
             </Route>
        </Routes>
      </div>

      <div className="footer">
        <SFooter id={id} />
      </div>
    </>
  );
}
