import React, { useState } from "react";
import "./sellproduct.css";
import { imageHandler } from "../../firebase/firebase";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
export default function Sellproduct(props) {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [catogery, setCatogery] = useState();
  const [img1, setImg1] = useState();
  const [img2, setImg2] = useState();
  const [img3, setImg3] = useState();
  const [product_des, setProductdes] = useState();
  const [paddress, setAdd] = useState();
  const [pincode, setPin] = useState();

  const productCreater = async (e) => {
    e.preventDefault();
    const url1 = await imageHandler(img1);
    const url2 = await imageHandler(img2);
    const url3 = await imageHandler(img3);
    const data = {
      ownerId: props.id,
      name,
      price,
      catogery,
      product_img1: url1,
      product_img2: url2,
      product_img3: url3,
      product_des,
      pincode,
      location: paddress,
    };
    await fetch("https://small-ex-like-olx.vercel.app/product/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) =>
      res.json().then((d) => {
        if (res.status === 200) {
          toast.success("Post Send !");
          navigate("/");
        } else {
          toast.error(d.message);
        }
      })
    );
  };

  return (
    <>
      <div className="container" id="box">
        <header>Sell Product </header>
        <form onSubmit={productCreater} style={{ height: "600px" }}>
          <div className="form first">
            <div className="details personal">
              <span className="title">Product Details</span>
              <div className="fields">
                <div className="input-field">
                  <label>Product Name</label>
                  <input
                    type="text"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                  />
                </div>

                <div className="input-field">
                  <label>Product Price</label>
                  <input
                    type="number"
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Enter product price"
                    required
                  />
                </div>

                <div className="input-field">
                  <label> Select Catogery</label>
                  <select
                    required
                    onChange={(e) => setCatogery(e.target.value)}
                  >
                    <option disabled="" selected="">
                      Select Catogery
                    </option>
                    <option value="car">Car</option>
                    <option value="mobile">Mobile</option>
                    <option value="Properties">Properties</option>
                    <option value="Bike">Bike</option>
                    <option value="Fashion">Fashion</option>
                    <option value="pets">Pets</option>
                    <option value="electronic">Electronics & Appliances</option>
                    <option value="other">Others</option>
                  </select>
                </div>

                <div className="input-field">
                  <label>Upload Product Image1</label>
                  <input
                    type="file"
                    onChange={(e) => setImg1(e.target.files[0])}
                    placeholder="upload product img"
                    required
                  />
                </div>
                <div className="input-field">
                  <label>Upload Product Image2</label>
                  <input
                    type="file"
                    onChange={(e) => setImg2(e.target.files[0])}
                    placeholder="upload product img"
                    required=""
                  />
                </div>
                <div className="input-field">
                  <label>Upload Product Image3</label>
                  <input
                    type="file"
                    placeholder="upload product img"
                    onChange={(e) => setImg3(e.target.files[0])}
                    required=""
                  />
                </div>
                <div className="input-field">
                  <label>Product Description </label>
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    onChange={(e) => setProductdes(e.target.value)}
                    rows="3"
                  ></textarea>
                </div>
              </div>
            </div>
            <div className="details ID">
              <span className="title">Address Details</span>
              <div className="fields">
                <div className="input-field">
                  <label>Address </label>
                  <input
                    type="text"
                    onChange={(e) => setAdd(e.target.value)}
                    placeholder="Enter your address"
                    required=""
                  />
                </div>
                <div className="input-field">
                  <label>Pincode</label>
                  <input
                    type="number"
                    onChange={(e) => setPin(e.target.value)}
                    placeholder="Enter your city Pincode"
                    required
                  />
                </div>
              </div>
            </div>
            <button className="">Next</button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
}
