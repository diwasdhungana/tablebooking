import React, { useState, useEffect } from "react";
import "./Reserved.css";

export default (props) => {
  const [reservedData, setReservedData] = useState([]);

  useEffect(() => {
    try {
      const getReservedData = async () => {
        console.log("Getting reserved data");
        let res = await fetch("http://localhost:3005/reserved", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (res.status === 200) {
          res = await res.json();
          console.log("Reserved data", res);
          setReservedData(res);
        } else {
          console.log("soft Error in getting reserved data");
        }
      };
      getReservedData();
    } catch (error) {
      console.log("Error in getting reserved data", error);
    }
  }, []);
  const date = new Date().toString().split(" ").slice(1, 4).join(" ");
  return (
    <div>
      <h1>Reserved</h1>
      This is reserved page for {date}
      {reservedData &&
        reservedData.map((data) => {
          return (
            <div className="main-" key={data._id}>
              <a className="product-card" href="#dolce-gabbana-cropped">
                <p className="product-card__brand">{data.name}</p>
                <p className="product-card__description">
                  {data.reservation.name}
                </p>
                <p className="product-card__price">{data.reservation.email}</p>
              </a>
            </div>
          );
        })}
    </div>
  );
};
