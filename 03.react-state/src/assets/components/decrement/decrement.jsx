import React from "react";
import Decrement from "./decrement";

const Decrement = ({ setCount }) => {
  return (
    <button
      onClick={() => {
        setCount((count) => count - 1);
      }}
    >
      Decrement
    </button>
  );
};

export default Decrement;
