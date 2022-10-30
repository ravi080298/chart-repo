import React from "react";
import "./card.css";

const Card = (props) => {
  const { number, text, src } = props;
  return (
    <div className="card1">
      <div className="card-content">
        <div className="text-number">{number}</div>
        <span>{text}</span>
      </div>
      <div className="card-content-right">
        <img src={src} alt={src} />
      </div>
    </div>
  );
};

export default Card;
