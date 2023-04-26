import React, { useEffect, useRef } from "react";

const Controls = ({
  placeCard,
  currentIndex,
  setCurrentIndex,
  numOfPlacedCards,
  gameOver,
}) => {
  const leftButtonRef = useRef(null);
  const rightButtonRef = useRef(null);

  const handleLeftClick = () => {
    //make sure index doesn't go under 0
    if (currentIndex - 1 >= 0) setCurrentIndex(currentIndex - 1);
    if (leftButtonRef.current) leftButtonRef.current.blur();
  };

  const handleRightClick = () => {
    //make sure index doesn't go out of index of placedCards
    if (currentIndex + 1 <= numOfPlacedCards) setCurrentIndex(currentIndex + 1);
    if (rightButtonRef.current) rightButtonRef.current.blur();
  };

  const handleButtonKeyDown = (event) => {
    if (event.key === " " || event.key === "Enter") {
      event.preventDefault();
    }
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
      <button
        ref={leftButtonRef}
        className="control-btn"
        onClick={handleLeftClick}
      >
        <span className="left-triangle" />
      </button>
      <button
        className="place-btn"
        onClick={placeCard}
        onKeyDown={handleButtonKeyDown}
      >
        PLACE
      </button>
      <button
        ref={rightButtonRef}
        className="control-btn"
        onClick={handleRightClick}
      >
        <span className="right-triangle" />
      </button>
    </div>
  );
};

export default Controls;
