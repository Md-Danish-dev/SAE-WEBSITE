/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

export const Footer = ({
  className,
  facebook = "https://c.animaapp.com/Fbj8Hkb3/img/facebook.svg",
  instagram = "https://c.animaapp.com/Fbj8Hkb3/img/instagram.svg",
}) => {
  return (
    <div className={`footer ${className}`}>
      <img
        className="SAE-IITR"
        alt="Sae IITR"
        src="https://c.animaapp.com/Fbj8Hkb3/img/sae-iitr-1-3@2x.png"
      />

      <div className="div">
        <p className="text-wrapper">
          Society of Automotive Engineering, IIT Roorkee
        </p>

        <div className="frame-2">
          <div className="frame-3">
            <div className="text-wrapper-2">Address</div>

            <p className="p">
              Student Activity Center, IIT Roorkee 247667, Uttarakhand, India
            </p>
          </div>

          <div className="frame-4">
            <div className="text-wrapper-2">Follow us on</div>

            <div className="frame-5">
              <img className="img" alt="Facebook" src={facebook} />

              <img className="img" alt="Instagram" src={instagram} />
            </div>
          </div>

          <div className="frame-3">
            <div className="text-wrapper-2">Mail us</div>

            <div className="text-wrapper-3">sae@iitr.ac.in</div>
          </div>
        </div>
      </div>
    </div>
  );
};
