/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Frame } from "../Frame";
import "./style.css";

export const NavBar = ({
  className,
  frameNavlinksAboutLine = "https://c.animaapp.com/Fbj8Hkb3/img/line-1-16.svg",
  frameNavlinksTeamLineClassName,
  frameNavlinksProjectLineClassName,
  frameNavlinksAboutLineClassName,
  frameNavlinksResoucresLine = "https://c.animaapp.com/Fbj8Hkb3/img/line-1-16.svg",
  frameNavlinksResoucresLineClassName,
  frameNavlinksProjectLine = "https://c.animaapp.com/Fbj8Hkb3/img/line-1-16.svg",
  frameNavlinksTeamLine = "https://c.animaapp.com/Fbj8Hkb3/img/line-1-16.svg",
}) => {
  return (
    <div className={`NAV-BAR ${className}`}>
      <Frame
        navlinksAboutLine={frameNavlinksAboutLine}
        navlinksAboutLineClassName={frameNavlinksAboutLineClassName}
        navlinksAboutProperty1="default"
        navlinksProjectLine={frameNavlinksProjectLine}
        navlinksProjectLineClassName={frameNavlinksProjectLineClassName}
        navlinksResoucresLine={frameNavlinksResoucresLine}
        navlinksResoucresLineClassName={frameNavlinksResoucresLineClassName}
        navlinksTeamLine={frameNavlinksTeamLine}
        navlinksTeamLineClassName={frameNavlinksTeamLineClassName}
      />
    </div>
  );
};
