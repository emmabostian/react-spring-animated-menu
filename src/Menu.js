import React from "react";
import { animated } from "react-spring";
import "./menu.css";

export const MenuRight = ({ style }) => (
  <animated.div className="menu menu--right" style={style}>
    <nav>
      <ul className="menu-list menu-list--right">
        <li className="menu-list-item menu-list-item--right">
          <a href="/">Home</a>
        </li>
        <li className="menu-list-item menu-list-item--right">
          <a href="/">About</a>
        </li>
        <li className="menu-list-item menu-list-item--right">
          <a href="/">Work</a>
        </li>
        <li className="menu-list-item menu-list-item--right">
          <a href="/">Contact</a>
        </li>
      </ul>
    </nav>
  </animated.div>
);

export const MenuFull = ({ style }) => (
  <animated.div className="menu menu--full" style={style}>
    <nav>
      <ul className="menu-list menu-list--full">
        <li className="menu-list-item menu-list-item--full">
          <a href="/">Home</a>
        </li>
        <li className="menu-list-item menu-list-item--full">
          <a href="/">About</a>
        </li>
        <li className="menu-list-item menu-list-item--full">
          <a href="/">Work</a>
        </li>
        <li className="menu-list-item menu-list-item--full">
          <a href="/">Contact</a>
        </li>
      </ul>
    </nav>
  </animated.div>
);
