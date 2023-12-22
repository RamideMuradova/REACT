import React from "react";
import "./index.scss";
const PirimaryButton = (props) => {
  return (
    <>
      <button>
        {props.btnText}
      </button>
    </>
  );
};

export default PirimaryButton;
