import React, { useEffect, useRef, useCallback } from "react";

const GameOverModal = ({
  restartGame,
  endGame,
  open,
  setOpenModal,
  score,
  maxScore,
  isCorrect,
}) => {
  if (!open) return null;

  const displayScore = isCorrect ? score + 1 : score;

  const restart = () => {
    restartGame();
    setOpenModal(false);
  };

  return (
    <>
      <div className="modal-overlay" />
      <div className="game-over-modal">
        <h2>Game Over</h2>
        <h2>
          Score: {displayScore}/{maxScore}
        </h2>
        <button onClick={restart}>PLAY AGAIN</button>
        <button onClick={endGame}>EXIT</button>
      </div>
    </>
  );
};

export default GameOverModal;
