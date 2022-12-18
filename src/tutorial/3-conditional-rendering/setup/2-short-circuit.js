import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);

  // in case of "||",if the first value is false, then it returns the second value
  // const firstValue = text || "hello world";
  // // in case of "&&", if the first vlaue is true, it returns the second value
  // const secondValue = text && "hello world";

  return (
    <>
      {/* <h1>First : {firstValue}</h1>
      <h1>Second : {secondValue}</h1> */}
      <h1>{text || "John Doe"}</h1>
      <button
        className="btn"
        onClick={() => {
          setIsError(!isError);
        }}
      >
        toggle error
      </button>
      {isError && <h1>Error...</h1>}
      {isError ? (
        <p>there is an error</p>
      ) : (
        <div>
          <h2>there is no error</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
