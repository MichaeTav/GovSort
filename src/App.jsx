import Home from "./pages/Home";
import Game from "./pages/Game";
import { useEffect, useState } from "react";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("home");

  const endGame = () => {
    setSelectedTopic("home");
  };

  return (
    <div>
      {selectedTopic === "home" && <Home setSelectedTopic={setSelectedTopic} />}
      {selectedTopic !== "home" && (
        <Game title={selectedTopic} endGame={endGame} />
      )}
    </div>
  );
}

export default App;
