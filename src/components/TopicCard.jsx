import React, { useState } from "react";

const TopicCard = ({
  title,
  description,
  callback,
  difficulty,
  numberOfCards,
}) => {
  const [highScore, _] = useState(localStorage.getItem(title));

  const selectTopic = (event) => {
    event.preventDefault();
    callback(title);
  };

  const color = () => {
    switch (difficulty) {
      case "HARD":
        return "#ff0f0f";
      case "MEDIUM":
        return "#FF7900";
      case "EASY":
        return "#00bd00";
    }
  };
  return (
    <div className="topic-card">
      <h2>{title}</h2>
      <div className="description">
        {/* <h3>Description: {description}</h3> */}
        <h3>
          High Score <br />
          {highScore ? highScore : "N/A"}
        </h3>
        <h3>
          Cards
          <br />
          {numberOfCards}
        </h3>
        <h3>
          Difficulty
          <br />
          <span style={{ color: color() }}>{difficulty}</span>
        </h3>
      </div>
      <button onClick={(e) => selectTopic(e)}>PLAY</button>
    </div>
  );
};

export default TopicCard;
