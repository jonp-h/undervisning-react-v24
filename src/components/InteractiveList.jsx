import React from "react";

export default function InteractiveList() {
  const liste = [1, 2, 3, 4];

  function clickEvent() {
    liste.push(liste.length + 1);
    console.log(liste);
  }

  return (
    <div className="text-white text-8xl flex flex-col">
      {liste}
      <button onClick={clickEvent}>Click me</button>
    </div>
  );
}
