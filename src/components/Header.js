import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <h1>Justin Hoffman</h1>
        <Typed
          className="typed-text"
          strings={[
            "Full Stack Developer",
            "Musician",
            "Gamer",
            "Computer Building",
          ]}
          typeSpeed={40}
          backSpeed={75}
          loop
        />
        <a href="#" className="btn-main">
          Hire Me
        </a>
      </div>
    </div>
  );
};

export default Header;
