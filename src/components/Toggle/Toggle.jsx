import React from "react";
import "./Toggle.css";

export default function Toggle({ active, onClick, sortItem }) {
  return (
    <div className="toggle">
      <button
        onClick={onClick}
        className={active ? "toggle__button--on" : "toggle__button--off"}
      >
        <div
          className={
            active ? "toggle__button__core--on" : "toggle__button__core--off"
          }
        ></div>
      </button>
      <span>{`Sort by ${sortItem}`}</span>
    </div>
  );
}
