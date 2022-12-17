import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  // return <h2>{}</h2>;

  const removeItem = (id) => {
    let newPeople = people.filter((person) => {
      return person.id !== id;
    });
    setPeople(newPeople);
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        );
      })}

      <button
        className="btn"
        onClick={() => {
          setPeople([]);
        }}
      >
        Clear items
      </button>
    </>
  );
};

export default UseStateArray;
