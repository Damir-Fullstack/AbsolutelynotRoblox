import React, { useState } from "react";
import Menu from "./components/Menu";
import Game from "./components/Game";

export default function App() {
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = () => setGameStarted(true);

  return (
    <>
      {!gameStarted && <Menu startGame={startGame} />}
      {gameStarted && <Game />}
    </>
  );
}
