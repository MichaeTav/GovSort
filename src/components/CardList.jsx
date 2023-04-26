import React, { useEffect, useRef } from "react";
import Card from "./Card";

const CardList = ({ placedCards, currentIndex }) => {
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      const cardWidth = 272;
      const screenWidth = window.innerWidth;
      const transformValue = currentIndex * -cardWidth + screenWidth / 2;
      listRef.current.style.transform = `translateX(${transformValue}px)`;
    }
  }, [currentIndex]);

  //reset card list position after game reset
  useEffect(() => {
    if (listRef.current && placedCards.length === 0) {
      const screenWidth = window.innerWidth;
      const transformValue = screenWidth / 2;
      listRef.current.style.transform = `translateX(${transformValue}px)`;
    }
  }, [placedCards]);

  return (
    <div className="card-list-container">
      <div ref={listRef} className="card-list">
        {placedCards.map((card, index) => (
          <Card
            key={index}
            description={card.description}
            order={card.order}
            url={card.url}
          />
        ))}
      </div>
      <span className="up-triangle" />
    </div>
  );
};

export default CardList;
