import React from "react";

const Card = ({ description, order }) => {
  return (
    <div className="card">
      <p>{description}</p>
      <p>{order}</p>
    </div>
  );
};

export default Card;
