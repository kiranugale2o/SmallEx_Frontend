import React, { useState } from "react";
import "./myproductcard.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";

export default function Myproductcard(props) {
  const navigate = useNavigate();
  const [edis, setEdis] = useState("none");
  const [pdis, setPdis] = useState("flex");
  const [name, setName] = useState(props.data.name);
  const [price, setPrice] = useState(props.data.price);
  const [catogery, setCatogery] = useState(props.data.catogery);
  const [img1, setImg1] = useState(props.data.product_img1);
  const [img2, setImg2] = useState(props.data.product_img2);
  const [img3, setImg3] = useState(props.data.product_img3);
  const [product_des, setProductdes] = useState(props.data.product_des);
  const [paddress, setAdd] = useState(props.data.location);
  const [pincode, setPin] = useState(props.data.pincode);

  const updateHandler = async (e) => {
    e.preventDefault();
    const id = props.data._id;
    const data = {
      name,
      price,
      catogery,
      product_img1: img1,
      product_img2: img2,
      product_img3: img3,
      product_des,
      location: paddress,
      pincode,
    };
    console.log(data);
    await fetch(`https://small-ex-like-olx.vercel.app/product/update/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) =>
      res.json().then((d) => {
        if (res.status === 200) {
          toast.warning("Product update Successfully !");
          navigate("/");
        } else {
          toast.warning(d.message);
        }
      })
    );
    setEdis("none");
    setPdis("flex");
  };

  const deleteProduct = async () => {
    console.log(props.data);
    const id = props.data._id;
    await fetch(
      `https://small-ex-like-olx.vercel.app/product/deleteproduct/${id}`,
      {
        method: "DELETE",
      }
    ).then((res) =>
      res.json().then((d) => {
        if (res.status === 200) {
          toast.warning("Product Delete Successfully !");
          navigate("/");
        } else {
          toast.warning(d.message);
        }
      })
    );
  };
  return (
    <>
      <div
        className="shadow-sm p-3 mb-5 bg-body-tertiary rounded"
        id="myproduct"
        style={{ display: `${pdis}`, height: "auto", width: "auto" }}
      >
        <div className="border " style={{ width: "auto", height: "auto" }}>
          <img src="programmer.jpg" id="pimg" alt="" />
        </div>
        <div className="d-block">
          <div
            className="text-start h5"
            style={{ margin: "10px 20px", fontWeight: "800" }}
          >
            Rs.{props.data.price}
          </div>
          <div className="text-start h5" style={{ margin: "10px 20px" }}>
            {props.data.name}
          </div>
        </div>
        <div
          className="d-flex"
          style={{
            width: "30%",
            height: "40px",
            margin: "5% auto",
            justifyContent: "space-between",
          }}
        >
          <div
            className="btn btn-warning"
            style={{ width: "100%" }}
            onClick={() => {
              setEdis("block");
              setPdis("none");
            }}
          >
            Edit{" "}
          </div>
          <div
            className="btn btn-danger"
            style={{ width: "100%", margin: "0px 10px" }}
            onClick={deleteProduct}
          >
            Delete
          </div>
        </div>
      </div>
      {/* Edit product */}

      <div className="edit" style={{ display: `${edis}`, width: "100%" }}>
        <div
          className="container"
          id="editbox"
          style={{ width: "100%", height: "700px" }}
        >
          <h1>Edit Product </h1>
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
                setPdis("flex");
              }}
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
          </div>

          <form onSubmit={updateHandler} style={{ height: "600px" }}>
            <div className="form first">
              <div className="details-personal">
                <span className="title">Product Details</span>
                <div className="fields">
                  <div className="input-field">
                    <label>Product Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div className="input-field">
                    <label>Product Price</label>
                    <input
                      type="number"
                      placeholder="Enter product price"
                      onChange={(e) => setPrice(e.target.value)}
                    />
                  </div>

                  <div className="input-field">
                    <label> Select Catogery</label>
                    <select onChange={(e) => setCatogery(e.target.value)}>
                      <option disabled="" value="other">
                        Select Catogery
                      </option>
                      <option value="car">Car</option>
                      <option value="mobile">Mobile</option>
                      <option value="Properties">Properties</option>
                      <option value="Bike">Bike</option>
                      <option value="Fashion">Fashion</option>
                      <option value="pets">Pets</option>
                      <option value="electronic">
                        Electronics & Appliances
                      </option>
                      <option value="other">Others</option>
                    </select>
                  </div>

                  <div className="input-field">
                    <label>Upload Product Image1</label>
                    <input
                      type="file"
                      placeholder="upload product img"
                      onChange={(e) => setImg1(e.target.files[0])}
                    />
                  </div>
                  <div className="input-field">
                    <label>Upload Product Image2</label>
                    <input
                      type="file"
                      placeholder="upload product img"
                      onChange={(e) => setImg2(e.target.files[0])}
                    />
                  </div>
                  <div className="input-field">
                    <label>Upload Product Image3</label>
                    <input
                      type="file"
                      placeholder="upload product img"
                      onChange={(e) => setImg3(e.target.files[0])}
                    />
                  </div>
                  <div className="input-field">
                    <label>Product Description </label>
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      onChange={(e) => setProductdes(e.target.value)}
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
                      placeholder="Enter your address"
                      onChange={(e) => setAdd(e.target.value)}
                    />
                  </div>
                  <div className="input-field">
                    <label>Pincode</label>
                    <input
                      type="number"
                      placeholder="Enter your city Pincode"
                      onChange={(e) => setPin(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <button className="" type="submit">
                Update Product
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
