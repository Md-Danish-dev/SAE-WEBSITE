/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { useReducer } from "react";
import "./style.css";

export const NavlinksResources = ({
  property1,
  lineClassName,
  line = "https://c.animaapp.com/Fbj8Hkb3/img/line-1-16.svg",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`navlinks-resources property-1-5-${state.property1}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className="text-wrapper-7">Resources</div>

      <img
        className={`line-4 ${lineClassName}`}
        alt="Line"
        src={
          state.property1 === "variant-2"
            ? "https://c.animaapp.com/Fbj8Hkb3/img/line-1-15.svg"
            : line
        }
      />
    </div>
  );
};

function reducer(state, action) {
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "variant-2",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}
