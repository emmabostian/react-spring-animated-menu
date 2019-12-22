import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useSpring } from "react-spring";

import { MenuRight, MenuFull } from "./Menu";

import "./styles.css";

function App() {
  const [rightMenuVisible, setRightMenuVisible] = useState(false);
  const [fullMenuVisible, setFullMenuVisible] = useState(false);

  const rightMenuTransition = useSpring({
    opacity: rightMenuVisible ? 1 : 0,
    transform: rightMenuVisible ? `translateX(0)` : `translateX(100%)`
  });
  const fullMenuTransition = useSpring({
    transform: fullMenuVisible ? `translateY(0)` : `translateY(-100%)`,
    opacity: fullMenuVisible ? 1 : 0
  });

  return (
    <div className="App">
      <button
        className="menu-button"
        onClick={() => setRightMenuVisible(!rightMenuVisible)}
      >
        {rightMenuVisible ? "Close" : "Side Menu"}
      </button>
      <button
        className="menu-button menu-button--full"
        onClick={() => setFullMenuVisible(!fullMenuVisible)}
      >
        {fullMenuVisible ? "Close" : "Full Menu"}
      </button>

      <MenuRight style={rightMenuTransition} />
      <MenuFull style={fullMenuTransition} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
