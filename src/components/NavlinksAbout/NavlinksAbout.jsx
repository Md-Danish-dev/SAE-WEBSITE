/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { useReducer } from "react";
import "./style.css";

export const NavlinksAbout = ({
  property1,
  lineClassName,
  line = "https://c.animaapp.com/Fbj8Hkb3/img/line-1-16.svg",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`navlinks-about ${state.property1}`}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onClick={() => {
        dispatch("click");
      }}
    >
      <div className="text-wrapper-4">About</div>

      <img
        className={`line ${lineClassName}`}
        alt="Line"
        src={
          state.property1 === "hover"
            ? "https://c.animaapp.com/Fbj8Hkb3/img/line-1-15.svg"
            : line
        }
      />
    </div>
  );
};

function reducer(state, action) {
  if (state.property1 === "default") {
    switch (action) {
      case "mouse_enter":
        return {
          property1: "hover",
        };
    }
  }

  if (state.property1 === "hover") {
    switch (action) {
      case "mouse_leave":
        return {
          property1: "default",
        };

      case "click":
        return {
          property1: "click",
        };
    }
  }

  return state;
}
