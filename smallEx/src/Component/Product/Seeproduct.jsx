import React, { useState } from "react";
import "./seeproduct.css";
import Map from "../Map/Map";
export default function Seeproduct(props) {
  const [data, setData] = useState(props.product);

  return (
    <>
      <div className="seeproduct-page">
        <br />
        <br />
        <br />
        <div
          id="carouselExample"
          className="carousel slide"
          style={{ width: "100%", margin: "10% auto" }}
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src={data[props.index].product_img1}
                className="d-block w-100"
                alt="..."
                style={{ height: "500px", width: "20%" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={data[props.index].product_img2}
                className="d-block w-100"
                alt="..."
                style={{ height: "500px" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src={data[props.index].product_img3}
                className="d-block w-100"
                alt="..."
                style={{ height: "500px" }}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        <div className="product-info ">
          <div className="box-1">
            <div
              className="info shadow-lg p-3 mb-5 bg-body-tertiary rounded border"
              style={{ width: "100%", height: "auto", display: "block" }}
            >
              <span
                class="badge text-bg-warning"
                style={{ height: "5vh", fontSize: "16px" }}
              >
                FEATURED
              </span>
              <p className="text-start h2" style={{ fontWeight: "800" }}>
                {data[props.index].name}
              </p>
              <p className="text-start " style={{ fontSize: "18px" }}>
                {data[props.index].product_des}
              </p>
            </div>
            <div
              className="shadow-lg p-3 mb-5 bg-body-tertiary rounded border"
              style={{
                width: "100%",
                height: "auto",
                margin: "-5% auto",
                display: "block",
              }}
            >
              <div className="text-start h2">Overview</div>
              <hr />
              <div className="text-start" style={{ display: "flex" }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="26"
                  fill="currentColor"
                  class="bi bi-geo-alt-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                </svg>
                <p className="text-start h5">Loction</p>
              </div>
              <p className="text-start "> {data[props.index].location} </p>
            </div>
          </div>

          <div className="box-3">
            <div
              className="contact shadow-lg p-3 mb-5 bg-body-tertiary rounded border"
              style={{ width: "100%", height: "30vh" }}
            >
              <div className="text-start h1" style={{ fontWeight: "800" }}>
                Rs.{data[props.index].price}
              </div>
              <br />
              <div
                className="btn btn-dark"
                style={{
                  width: "100%",
                  margin: "auto",
                  padding: "10px",
                  fontSize: "20px",
                  fontWeight: "600",
                }}
              >
                <a
                  href={`https://wa.me/${
                    data[props.index].ownerId.mobile
                  }?text=My offer is`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {" "}
                  Chat With Seller
                </a>
              </div>
            </div>
            <div
              className="contact shadow-lg p-3 mb-5 bg-body-tertiary rounded border"
              style={{
                width: "100%",
                height: "30vh",
                margin: "-4% auto",
                display: "block",
              }}
            >
              <div className="owner" style={{ display: "flex" }}>
                <div className="icon">
                  <img
                    src={data[props.index].ownerId.profileImg}
                    className="border rounded-circle"
                    alt="user"
                    width={60}
                    height={60}
                  />
                </div>
                <div className="text-center h4" style={{ margin: "4% 10px" }}>
                  {data[props.index].ownerId.name}
                </div>
              </div>
              <div
                className="btn btn-dark"
                style={{ margin: "5% auto", width: "100%", fontSize: "20px" }}
              >
                <a
                  href={`https://wa.me/${
                    data[props.index].ownerId.mobile
                  }?text=intrested`}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  {" "}
                  Chat With Seller
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Map />
    </>
  );
}
