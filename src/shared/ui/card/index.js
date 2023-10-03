import React from "react";
import "./style.css";

export const Card = ({ data }) => {
  return (
    <div className="card">
      {data.map((el, i) => (
        <p key={i}>{el[1]}</p>
      ))}
    </div>
  );
};
