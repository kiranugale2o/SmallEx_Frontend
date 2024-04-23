import React, { useState } from "react";
import Seeproduct from "./Seeproduct";
import { useNavigate } from "react-router";

export default function Productcard(props) {
  return (
    <>
      <Card
        index={props.i}
        setCurrentPage={props.setCurrentPage}
        setPostsPerPage={props.setPostsPerPage}
      />
    </>
  );
}

export const Card = (props) => {
  const [page, setPage] = useState(true);
  return (
    <>
      {page ? (
        <>
          <div
            className="card"
            style={{
              width: "18rem",
              position: "relative",
              margin: "1rem 1rem",
              height: "50vh",
              overflow: "hidden",
            }}
            onClick={() => {
              setPage(false);
            }}
          >
            <img
              src="programmer.jpg"
              className="card-img-top"
              alt="..."
              style={{ height: "25vh", width: "15rem", margin: " 10px auto" }}
            />
            <div className="card-body">
              <p className="card-text h5">
                <b>{props.index}</b>
              </p>

              <p className="text-start " style={{ fontWeight: "400" }}>
                product description inside this box
              </p>
              <p className="text-start" style={{ fontWeight: "400" }}>
                Product address
              </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <Seeproduct index={props.index} />
        </>
      )}
    </>
  );
};
