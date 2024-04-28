import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Topnavbar from "./Component/Navbar/Topnavbar";
import Bottombar from "./Component/Navbar/Bottombar";
import { HashRouter } from "react-router-dom";
import Product from "./Component/Product/Product";
import Home from "./pages/Home/Home";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  useNavigate,
} from "react-router-dom";
import Singup from "./Component/Auth/Singup";
import Login from "./Component/Auth/Login";
import Map from "./Component/Map/Map";
import Seeproduct from "./Component/Product/Seeproduct";
import Sellproduct from "./Component/Sellproduct/Sellproduct";
import Notification from "./Component/Notification/Notification";
import Myproduct from "./Component/Mystore/Myproduct";
import Profile from "./pages/Profile/Profile";

function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState();
  const [id, setId] = useState("");
  const [index, setIndex] = useState(0);
  const [product, setProduct] = useState([]);

  const getProduct = async () => {
    await fetch(
      "https://small-ex-like-olx.vercel.app/product/allproducts"
    ).then((res) =>
      res.json().then((d) => {
        setProduct(d);
      })
    );
  };
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
    getProduct();
  }, []);

  return (
    <>
      <div className="">
        <Topnavbar />
        <Bottombar />
      </div>
      <Routes>
        <Route path="/singup" element={<Singup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Product setIndex={setIndex} />}></Route>
        <Route
          path="/seeproduct"
          element={<Seeproduct index={index} product={product} />}
        />
        <Route
          path="/notification"
          element={<Notification id={id} data={user} />}
        />
        <Route path="/sell" element={<Sellproduct id={id} />} />
        <Route path="/mystore" element={<Myproduct id={id} />} />
        <Route path="/account" element={<Profile data={user} />} />
        <Route path="/about" element={<Topnavbar />} />
      </Routes>
    </>
  );
}

export default App;
