import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Topnavbar from "./Component/Navbar/Topnavbar";
import Bottombar from "./Component/Navbar/Bottombar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Topnavbar />
      <Bottombar />
    </>
  );
}

export default App;
