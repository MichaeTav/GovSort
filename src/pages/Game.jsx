import React, { useState, useEffect } from "react";
import Controls from "../components/Controls";
import Card from "../components/Card";
import CardList from "../components/CardList";
import GameOverModal from "../components/GameOverModal";
import amendments from "../data/amendments";
import presidents from "../data/presidents";
import supremeCourtCases from "../data/supremeCourtCases";
import unitedstateshistory from "../data/unitedStatesHistory";
import test from "../data/test";

const Game = ({ title, endGame }) => {
  const [currentCard, setCurrentCard] = useState(null);
  const [shuffledDeck, setShuffledDeck] = useState([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [placedCards, setPlacedCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isCorrect, setIsCorrect] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const getTopicData = () => {
    switch (title) {
      case "Amendments":
        return amendments;
      case "Presidents":
        return presidents;
      case "Supreme Court":
        return supremeCourtCases;
      case "U.S. History":
        return unitedstateshistory;
      case "TEST":
        return test;
      default:
        return [];
    }
  };

  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const restartGame = () => {
    const topicData = getTopicData();
    if (topicData.length > 0) {
      const shuffled = shuffle([...topicData]);
      setShuffledDeck(shuffled);
      setCurrentCardIndex(0);
      setCurrentCard(shuffled[0]);
      setPlacedCards([]);
      setIsCorrect(false);
      setCurrentIndex(0);
    }
  };

  const getNextCard = () => {
    if (currentCardIndex < shuffledDeck.length) {
      const cardsBeforeCurrentIndex = placedCards.slice(0, currentIndex);
      const cardsAfterCurrentIndex = placedCards.slice(currentIndex);

      setPlacedCards([
        ...cardsBeforeCurrentIndex,
        currentCard,
        ...cardsAfterCurrentIndex,
      ]);

      setCurrentCardIndex((prevCardIndex) => {
        const newCardIndex = prevCardIndex + 1;
        setCurrentCard(shuffledDeck[newCardIndex]);
        return newCardIndex;
      });
    } else {
      setCurrentCard({ order: "", description: "" });
    }
  };

  useEffect(() => {
    if (isCorrect) {
      setOpenModal(true);
    }
  }, [isCorrect]);

  useEffect(() => {
    const correctOrder = placedCards.every((card, index) => {
      if (index === 0) {
        return true; // first element is always sorted
      }
      return card.order >= placedCards[index - 1].order;
    });

    //open at end of game only if there is at least 1 placed card
    if (
      placedCards.length > 0 &&
      correctOrder &&
      placedCards.length === shuffledDeck.length
    ) {
      setIsCorrect(true);
    } else if (!correctOrder) {
      setOpenModal(true);
    }
  }, [placedCards]);

  useEffect(() => {
    const topicData = getTopicData();
    if (topicData.length > 0) {
      const shuffled = shuffle([...topicData]);
      setShuffledDeck(shuffled);
      setCurrentCardIndex(0);
      setCurrentCard(shuffled[0]);
    }
  }, [title]);

  return (
    <div className="game">
      <h1>{title}</h1>
      <div className="game-container">
        <CardList placedCards={placedCards} currentIndex={currentIndex} />
        <div className="bottom-container">
          {currentCard && (
            <Card description={currentCard.description} order="???" />
          )}
          <Controls
            placeCard={getNextCard}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            numOfPlacedCards={placedCards.length}
            gameOver={openModal}
          />
        </div>
      </div>
      <GameOverModal
        endGame={endGame}
        restartGame={restartGame}
        topic={title}
        open={openModal}
        setOpenModal={setOpenModal}
        score={placedCards.length - 1}
        maxScore={shuffledDeck.length}
        isCorrect={isCorrect}
      />
    </div>
  );
};

export default Game;
