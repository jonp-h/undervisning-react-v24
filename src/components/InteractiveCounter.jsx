import React from "react";
import { useState } from "react";

export default function InteractiveCounter() {
  // hook
  const [counter, setCounter] = useState(1);

  // lag en hook som lagrer en boolean, med intial state til false
  const [Innlogget, setInnlogget] = useState(false);

  // toggle innlogget hook, med setInnlogget
  function InnloggetEvent() {
    setInnlogget(!Innlogget);
  }

  function clickEvent() {
    setCounter((oldValue) => oldValue + 1);
    // 90% av tilfellene vil man ikke merke forskjell
  }

  return (
    <div className="text-8xl flex flex-col justify-center text-center gap-10 text-white">
      {counter}
      <button onClick={clickEvent} className="ml-10">
        Click me
      </button>

      {/* Toggle innlogget */}
      <button onClick={InnloggetEvent}>Logg inn!</button>
      {/* Viser innhold om bruker er innlogget */}
      {Innlogget ? (
        <div>
          <h1>Innlogget</h1>
          <h3>Ditt brukernavn</h3>
          <p>tekst lorem ipsum</p>
        </div>
      ) : (
        <h1>Du har ikke tilgang</h1>
      )}
    </div>
  );
}
