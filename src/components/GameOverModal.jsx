import React, { useEffect, useState } from "react";
import ConfettiExplosion from "react-confetti-explosion";

const GameOverModal = ({
  restartGame,
  endGame,
  open,
  setOpenModal,
  score,
  maxScore,
  isCorrect,
  topic,
}) => {
  const [highScore, setHighScore] = useState(localStorage.getItem(topic));
  const displayScore = isCorrect ? score + 1 : score;

  useEffect(() => {
    if (highScore < displayScore) {
      localStorage.setItem(topic, displayScore);
      setHighScore(displayScore);
    }
  }, [displayScore]);

  const restart = () => {
    restartGame();
    setOpenModal(false);
  };

  if (!open) return null;

  return (
    <>
      <div className="modal-overlay" />

      <div className="game-over-modal">
        {isCorrect && <h2>Good Job!</h2>}
        {isCorrect && <ConfettiExplosion zIndex={1000} />}
        {!isCorrect && <h2>Game Over</h2>}
        <h2>
          Score: {displayScore}/{maxScore}
        </h2>
        <h3>Best: {highScore ? highScore : "N/A"}</h3>
        <button onClick={restart}>PLAY AGAIN</button>
        <button onClick={endGame}>EXIT</button>
      </div>
    </>
  );
};

export default GameOverModal;
