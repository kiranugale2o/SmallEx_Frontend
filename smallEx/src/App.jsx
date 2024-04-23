import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Topnavbar from "./Component/Navbar/Topnavbar";
import Bottombar from "./Component/Navbar/Bottombar";

import Product from "./Component/Product/Product";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import Singup from "./Component/Auth/Singup";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/singup" element={<Singup />} />
          <Route path="/" element={<Home />}>
            <Route path="/product" />
            <Route path="/sell" />
            <Route path="/chat" />
            <Route path="/myproduct" />
            <Route path="/account" />
          </Route>
          <Route path="/about" element={<Topnavbar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
