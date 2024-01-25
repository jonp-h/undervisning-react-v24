import React, { useState } from "react";

export default function InteractiveList() {
  const [liste, setListe] = useState([1, 2, 3, 4]);

  function clickEvent() {
    //løst med nyyydelig spread syntax
    setListe((prevListe) => [...liste, prevListe.length + 1]);
    console.log(liste);
  }

  return (
    <div className="text-white text-8xl flex flex-col">
      {liste}
      <button onClick={clickEvent}>Click me</button>
    </div>
  );
}
