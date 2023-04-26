import React from "react";

const Card = ({ description, order, url }) => {
  const handleClick = () => {
    window.open(url, "_blank");
  };
  const cardStyle = url ? { cursor: "pointer" } : {};
  let clickable = url !== undefined;
  if (url === "") clickable = false;

  return (
    <div
      className="card"
      onClick={clickable ? handleClick : null}
      style={cardStyle}
    >
      <p>{description}</p>
      <p>{order}</p>
    </div>
  );
};

export default Card;
