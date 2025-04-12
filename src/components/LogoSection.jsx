import React from "react";
import { logoIconsList } from "../constants";

const LogoIcon = ({ icon }) => {
  return (
    <div className="marquee-item flex-none flex-center ">
      <img src={icon.imgPath} alt={icon.name} />
    </div>
  );
};

const LogoSection = () => {
  return (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-edge" />
      <div className="gradient-edge" />
      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {logoIconsList.map((imgPath, index) => (
            <LogoIcon key={index} icon={imgPath} />
          ))}
          {logoIconsList.map((imgPath, index) => (
            <LogoIcon key={index + logoIconsList.length} icon={imgPath} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
