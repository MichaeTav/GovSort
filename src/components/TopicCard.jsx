import React from "react";

const TopicCard = ({ topic, description }) => {
  return (
    <div className="topic-card">
      <h2>{topic}</h2>
      <p>{description}</p>
      <button>PLAY</button>
    </div>
  );
};

export default TopicCard;
