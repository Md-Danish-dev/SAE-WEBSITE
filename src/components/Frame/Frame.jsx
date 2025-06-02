/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { NavlinksAbout } from "../NavlinksAbout";
import { NavlinksProject } from "../NavlinksProject";
import { NavlinksResources } from "../NavlinksResources";
import { NavlinksTeam } from "../NavlinksTeam";
import "./style.css";

export const Frame = ({
  navlinksAboutLine = "https://c.animaapp.com/Fbj8Hkb3/img/line-1-16.svg",
  navlinksAboutLineClassName,
  navlinksAboutProperty1 = "click",
  navlinksTeamLine = "https://c.animaapp.com/Fbj8Hkb3/img/line-1-16.svg",
  navlinksTeamLineClassName,
  navlinksProjectLineClassName,
  navlinksProjectLine = "https://c.animaapp.com/Fbj8Hkb3/img/line-1-16.svg",
  navlinksResoucresLine = "https://c.animaapp.com/Fbj8Hkb3/img/line-1-16.svg",
  navlinksResoucresLineClassName,
}) => {
  return (
    <div className="frame">
      <img
        className="SAE-IITR-2"
        alt="Sae IITR"
        src="https://c.animaapp.com/Fbj8Hkb3/img/sae-iitr-1-4@2x.png"
      />

      <div className="div-2">
        <NavlinksAbout
          line={navlinksAboutLine}
          lineClassName={navlinksAboutLineClassName}
          property1={navlinksAboutProperty1}
        />
        <NavlinksTeam
          line={navlinksTeamLine}
          lineClassName={navlinksTeamLineClassName}
          property1="default"
        />
        <NavlinksProject
          line={navlinksProjectLine}
          lineClassName={navlinksProjectLineClassName}
          property1="default"
        />
        <NavlinksResources
          line={navlinksResoucresLine}
          lineClassName={navlinksResoucresLineClassName}
          property1="default"
        />
      </div>
    </div>
  );
};
