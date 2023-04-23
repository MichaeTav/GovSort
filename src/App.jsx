import "./App.css";
import TopicCard from "./components/TopicCard";

function App() {
  return (
    <>
      <div className="container">
        <h1>Gov Sort</h1>
        <div className="topics">
          <h2>Choose a Topic!</h2>
          <div className="topic-card-container">
            <TopicCard
              topic="Test"
              description="test description test description test description test description test description"
            />
            <TopicCard
              topic="Test"
              description="test description test description test description test description test description"
            />
            <TopicCard
              topic="Test"
              description="test description test description test description test description test description"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
