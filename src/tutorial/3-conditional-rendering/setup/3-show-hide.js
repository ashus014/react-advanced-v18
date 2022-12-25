import React, { useState, useEffect } from "react";

const Item = () => {
  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
    // adding clean-up function
    return () => {
      window.removeEventListener("resize", checkSize);
    };
  }, []);
  return (
    <div style={{ marginTop: "2rem" }}>
      <h1>window</h1>
      <h2>size : {size}px</h2>
    </div>
  );
};

const ShowHide = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <button className="btn" onClick={() => setShow(!show)}>
        show/hide
      </button>
      {show && <Item />}
    </>
  );
};

export default ShowHide;
