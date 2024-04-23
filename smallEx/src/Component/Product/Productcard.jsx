import React from "react";

export default function Productcard(props) {
  return (
    <>
      <div
        className="card"
        style={{
          width: "18rem",
          position: "relative",
          margin: "2rem 1rem",
          overflow: "hidden",
        }}
      >
        <img
          src="programmer.jpg"
          className="card-img-top"
          alt="..."
          style={{ height: "30vh" }}
        />
        <div className="card-body">
          <p className="card-text">
            {props.some} mnsd ce af kcef erwjkfbefjbefvsamfbvmw aemfbkebrgjkv
          </p>
        </div>
      </div>
    </>
  );
}
