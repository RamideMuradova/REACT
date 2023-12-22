import React from "react";
import PirimaryButton from "../../components/button";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header">header</div>
        <PirimaryButton btnText={"header btn"}/>
      </div>
    </header>
  );
};

export default Header;