import React, { useState } from "react";
import InputComp from "./index";

const InputComp = ({ count, setCount }) => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.valueAsNumber)}
      >
        <button
          onClick={() => {
            setCount((count = value));
          }}
        >
          Inc By Value
        </button>
      </input>
    </div>
  );
};

export default InputComp;
