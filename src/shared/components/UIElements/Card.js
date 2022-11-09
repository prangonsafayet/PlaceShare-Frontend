import React from "react";

import "./Card.css";

const Card = (props) => {
  return (
    <div
      className={`card ${props.className ? props.className : "default-card"}`}
      style={props.style}
    >
      {props.children}
    </div>
  );
};

export default Card;
