import React from "react";
import "./map.css";
export default function Map(props) {
  const city = "umarakhed";
  const url =
    "https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=post%20office%20Umarakhed%20+(smallEx)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed ";
  return (
    <>
      <div className="" id="map">
        <iframe
          width="100%"
          height="600"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=post%20office%20Umarakhed%20+(smallEx)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed "
        >
          <a href="https://www.gps.ie/">gps devices</a>
        </iframe>
      </div>
    </>
  );
}
