import React from "react";
import Card from "react-bootstrap/Card";

const FilmCard = ({ image }) => {
  return (
    <div>
      <Card className="cardbody">
        <img alt="image" src={image} className="cardfilmimg" />
        <div className="cardup"></div>
      </Card>
    </div>
  );
};

export default FilmCard;
