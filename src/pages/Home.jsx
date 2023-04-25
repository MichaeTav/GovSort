import React from "react";
import topics from "../data/topics";
import TopicCard from "../components/TopicCard";

const Home = ({ setSelectedTopic }) => {
  return (
    <div className="container">
      <h1>Gov Sort</h1>
      <div className="topics">
        <h2>Choose a Topic!</h2>
        <div className="topic-card-container">
          {topics.map((topic) => (
            <TopicCard
              key={topic.title}
              title={topic.title}
              description={topic.description}
              callback={setSelectedTopic}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
