import React from "react";

const TopicCard = ({ title, description }) => {
  return (
    <div className="topic-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <button>PLAY</button>
    </div>
  );
};

export default TopicCard;
