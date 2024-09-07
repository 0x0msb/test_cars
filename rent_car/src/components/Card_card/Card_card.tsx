import React from "react";
import "./Card_card.css";

interface CardProps {
  imgSrc: string;
  carName: string;
}

const Card_card: React.FC<CardProps> = ({ imgSrc, carName }) => {
  return (
    <div className="main_card">
      <div className="card_pic">
        <img src={imgSrc} alt={carName} className="card_image" />
      </div>
      <div className="car_name">
        <h3>{carName}</h3>
      </div>
    </div>
  );
};

export default Card_card;
