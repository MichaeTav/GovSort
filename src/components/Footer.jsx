import React from "react";
import github from "../assets/github-icon.png";

const Footer = () => {
  return (
    <div>
      <a href="https://github.com/MichaeTav/GovSort" target="_blank">
        <img src={github} alt="Github icon" className="github-logo" />
      </a>
      <p>View Code</p>
    </div>
  );
};

export default Footer;
