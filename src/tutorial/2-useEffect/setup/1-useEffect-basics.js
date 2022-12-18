import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("Ashu Singh");
    if (value > 0) {
      document.title = `New Messages(${value}) `;
    }
    // if only '[]' is specified, it'll only run on the initial render
  }, [value]);
  console.log("Ashu Singh : 2");
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click Me
      </button>
    </>
  );
};

export default UseEffectBasics;
