import React from "react";

export default function Menu({ startGame }) {
  return (
    <div id="menu">
      <h1>R<span>0</span>BLOX</h1>
      <p>Совершенно не Roblox 😏</p>
      <button onClick={startGame}>Играть</button>
    </div>
  );
}
