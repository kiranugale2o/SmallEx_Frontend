import React, { useState, useEffect } from "react";
import "./profile.css";
import Myproductcard from "../../Component/Mystore/myproductcard";
import Myproduct from "../../Component/Mystore/Myproduct";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { imageHandler } from "../../firebase/firebase";

export default function Profile(props) {
  const navigate = useNavigate();
  const [first_name, setFname] = useState("");
  const [last_name, setLname] = useState("");
  const [profileImg, setImg] = useState(props.data.profileImg);
  const [email, setEmail] = useState(props.data.email);
  const [mobile, setMobile] = useState(props.data.mobile);
  const [password, setPass] = useState(props.data.password);
  const [pincode, setPin] = useState(props.data.pincode);

  const [edis, setEdis] = useState("none");
  const [pdis, setPdis] = useState("block");
  const name = first_name + "" + last_name;
  const editHandler = async (e) => {
    e.preventDefault();
    const url = await imageHandler(profileImg);
    const data = {
      name: name,
      profileImg: url,
      email,
      mobile,
      password,
      pincode,
    };

    await fetch(
      `https://small-ex-like-olx.vercel.app/user/update/${props.data._id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    ).then((res) =>
      res.json().then((d) => {
        if (res.status === 200) {
          toast.success("Update Successfully !");
        } else {
          toast.error("profile not update !");
        }
      })
    );

    setEdis("none");
    setPdis("block");
    navigate("/");
  };
  return (
    <>
      <div className="profile" style={{ display: `${pdis}` }}>
        <div className="start">
          <div className="info">
            <img
              src={props.data.profileImg}
              className="rounded-circle "
              id="profileimg"
            />
            <div
              className="text-data"
              style={{ display: "white", margin: "8% 0px" }}
            >
              <div
                className="username h3"
                style={{ color: "white", fontWeight: "700" }}
              >
                {props.data.name}
              </div>
              <div
                className="email h6"
                style={{ color: "white", fontWeight: "300" }}
              >
                {props.data.email}
              </div>
              <div
                className="mobile h6"
                style={{ color: "white", fontWeight: "300" }}
              >
                {props.data.mobile}
              </div>
              <div
                className="btn btn-dark"
                id="ebtn"
                onClick={() => {
                  setEdis("block");
                  setPdis("none");
                }}
              >
                Edit Profile
              </div>
            </div>
          </div>
        </div>

        <div className="" style={{ width: "100%" }}>
          <Myproduct id={props.data._id} />
        </div>
      </div>

      {/* edit profile code */}
      <div className="container" id="singup" style={{ display: `${edis}` }}>
        <div className="title" style={{ margin: "10% auto" }}>
          Edit Profile
          <div className="text-end">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              fill="currentColor"
              class="bi bi-x-lg"
              viewBox="0 0 16 16"
              onClick={() => {
                setEdis("none");
                setPdis("block");
              }}
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
          </div>
        </div>
        <div className="content" style={{ margin: "-10% auto" }}>
          <form method="Post" onSubmit={editHandler}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">First Name</span>
                <input
                  type="text"
                  placeholder="Enter your First name"
                  onChange={(e) => setFname(e.target.value)}
                />
              </div>
              <div className="input-box">
                <span className="details">Last Name</span>
                <input
                  type="text"
                  placeholder="Enter your Last name"
                  onChange={(e) => setLname(e.target.value)}
                />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input
                  type="text"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-box">
                <span className="details">Whatsapp Number</span>
                <input
                  type="text"
                  placeholder="Enter your whatsapp number"
                  onChange={(e) => setMobile(e.target.value)}
                />
              </div>
              <div className="input-box">
                <span className="details">Password</span>
                <input
                  type="text"
                  placeholder="Enter your password"
                  onChange={(e) => setPass(e.target.value)}
                />
              </div>
              <div className="input-box">
                <span className="details">Enter Pincode</span>
                <input
                  type="text"
                  placeholder="enter your city Pincode"
                  onChange={(e) => setPin(e.target.value)}
                />
              </div>

              <div className="input-box">
                <span className="details">Upload Profile Image</span>
                <input
                  type="file"
                  placeholder="upload profile img"
                  onChange={(e) => setImg(e.target.files[0])}
                />
              </div>
            </div>
            <div
              className="button"
              style={{
                margin: "-2% auto",

                background: "none",
              }}
            >
              <input
                type="submit"
                defaultValue="Register"
                placeholder="Update Profile"
              />
            </div>
          </form>

          <ToastContainer />
        </div>
      </div>
    </>
  );
}
