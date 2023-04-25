import React, { useEffect } from "react";

const Controls = ({
  placeCard,
  currentIndex,
  setCurrentIndex,
  numOfPlacedCards,
  gameOver,
}) => {
  const handleLeftClick = () => {
    //make sure index doesn't go under 0
    if (currentIndex - 1 >= 0) setCurrentIndex(currentIndex - 1);
  };

  const handleRightClick = () => {
    //make sure index doesn't go out of index of placedCards
    if (currentIndex + 1 <= numOfPlacedCards) setCurrentIndex(currentIndex + 1);
  };

  const handleKeyPress = (event) => {
    if (!gameOver) {
      switch (event.key) {
        case "Left": // IE/Edge specific value
        case "ArrowLeft":
        case "a":
          handleLeftClick();
          break;
        case "Right": // IE/Edge specific value
        case "ArrowRight":
        case "d":
          handleRightClick();
          break;
        case "Enter":
        case " ":
          placeCard();
          break;
        default:
          return;
      }
    }
  };

  useEffect(() => {
    const handleWindowKeyPress = (event) => handleKeyPress(event);
    window.addEventListener("keyup", handleWindowKeyPress);

    return () => {
      // Clean up the event listener when the component is unmounted
      window.removeEventListener("keyup", handleWindowKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <div className="controls-container">
      <button className="control-btn" onClick={handleLeftClick}>
        <span className="left-triangle" />
      </button>
      <button className="place-btn" onClick={placeCard}>
        PLACE
      </button>
      <button className="control-btn" onClick={handleRightClick}>
        <span className="right-triangle" />
      </button>
    </div>
  );
};

export default Controls;
