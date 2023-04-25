import React from "react";

const TopicCard = ({ title, description, callback }) => {
  const selectTopic = (event) => {
    event.preventDefault();
    callback(title);
  };
  return (
    <div className="topic-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={(e) => selectTopic(e)}>PLAY</button>
    </div>
  );
};

export default TopicCard;
