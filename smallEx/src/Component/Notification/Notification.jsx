import React, { useEffect, useState } from "react";
import "./notification.css";
export default function Notification(props) {
  const [notification, setNoti] = useState([]);
  const [ndis, setNdis] = useState("block");
  const [pdis, setPdis] = useState("none");
  const id = props.id;
  useEffect(() => {
    const getNotifi = async () => {
      await fetch(
        `https://small-ex-like-olx.vercel.app/user/notification/${id}`
      ).then((res) => {
        res.json().then((d) => {
          if (res.status === 200) {
            setNoti(d.notification);
            setPdis("none");
          } else {
            setNdis("none");
            setPdis("block");
          }
        });
      });
    };
    getNotifi();
  }, [1]);
  return (
    <>
      <div className="shadow-lg p-3 mb-5 bg-body-tertiary rounded" id="noti">
        Notification
      </div>
      <div
        className="text-start h3"
        style={{ display: `${pdis}`, margin: "10% auto" }}
      >
        Not Found Any Notification
      </div>
      <div className="notification" style={{ display: `${ndis}` }}>
        {notification.map((d, index) => {
          return (
            <Mynotification key={index} data={d} img={props.data.profileImg} />
          );
        })}
      </div>
    </>
  );
}

export const Mynotification = (props) => {
  return (
    <>
      <div className="d-flex  shadow-sm p-3 mb-5 bg-body-tertiary " id="mynoti">
        <div className="img">
          <img
            src={props.img}
            width={50}
            height={50}
            className="rounded-circle"
          />
        </div>
        <div className="info" style={{ display: "block" }}>
          <div className="notification">{props.data.content}</div>
          <div className="time">{props.data.createdAt}</div>
        </div>
      </div>
    </>
  );
};
