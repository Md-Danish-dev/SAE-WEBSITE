/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { useReducer } from "react";
import "./style.css";

export const NavlinksProject = ({
  property1,
  lineClassName,
  line = "https://c.animaapp.com/Fbj8Hkb3/img/line-1-16.svg",
}) => {
  const [state, dispatch] = useReducer(reducer, {
    property1: property1 || "default",
  });

  return (
    <div
      className={`navlinks-project property-1-3-${state.property1}`}
      onMouseLeave={() => {
        dispatch("mouse_leave");
      }}
      onMouseEnter={() => {
        dispatch("mouse_enter");
      }}
    >
      <div className="text-wrapper-6">Project</div>

      <img
        className={`line-3 ${lineClassName}`}
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
  switch (action) {
    case "mouse_enter":
      return {
        ...state,
        property1: "hover",
      };

    case "mouse_leave":
      return {
        ...state,
        property1: "default",
      };
  }

  return state;
}
