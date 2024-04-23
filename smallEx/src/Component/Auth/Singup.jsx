import React, { useState } from "react";
import "./singup.css";
import { imageHandler } from "../../firebase/firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Singup() {
  const [first_name, setFname] = useState("");
  const [last_name, setLname] = useState("");
  const [profileImg, setImg] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPass] = useState("");
  const [pincode, setPin] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    const url = await imageHandler(profileImg);
    const user = {
      name: first_name + " " + last_name,
      profileImg: url,
      email,
      mobile,
      pincode,
      password,
    };
    console.log(user);
    await fetch("http://localhost:4000/user/singup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }).then((res) => {
      res.json().then((d) => {
        if (res.status === 200) {
          toast.success("SuccessFully singup !");
        } else {
          toast.warning(d.message);
        }
      });
    });
  };
  return (
    <>
      <div
        className="text-center h1"
        style={{ margin: "20px ", fontFamily: "cursive" }}
      >
        SmallEx{" "}
      </div>
      <br />
      <div className="container" id="singup">
        <div className="title">Registration</div>
        <div className="content">
          <form onSubmit={submitHandler} method="Post">
            <div className="user-details">
              <div className="input-box">
                <span className="details">First Name</span>
                <input
                  type="text"
                  placeholder="Enter your First name"
                  onChange={(e) => setFname(e.target.value)}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Last Name</span>
                <input
                  type="text"
                  placeholder="Enter your Last name"
                  onChange={(e) => setLname(e.target.value)}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input
                  type="text"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Whatsapp Number</span>
                <input
                  type="text"
                  placeholder="Enter your whatsapp number"
                  onChange={(e) => setMobile(e.target.value)}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Password</span>
                <input
                  type="text"
                  placeholder="Enter your password"
                  onChange={(e) => setPass(e.target.value)}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Enter Pincode</span>
                <input
                  type="text"
                  placeholder="enter your city Pincode"
                  onChange={(e) => setPin(e.target.value)}
                  required
                />
              </div>

              <div className="input-box">
                <span className="details">Upload Profile Image</span>
                <input
                  type="file"
                  placeholder="upload profile img"
                  onChange={(e) => setImg(e.target.files[0])}
                  required
                />
              </div>
            </div>

            <div className="button">
              <input type="submit" defaultValue="Register" />
            </div>
          </form>
          <ToastContainer />
        </div>
      </div>
    </>
  );
}
