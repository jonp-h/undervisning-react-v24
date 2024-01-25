import React from "react";
import { useState } from "react";

export default function InteractiveCounter() {
  // hook
  const [counter, setCounter] = useState(1);

  function clickEvent() {
    setCounter((oldValue) => oldValue + 1);
    // 90% av tilfellene vil man ikke merke forskjell
  }

  return (
    <div className="text-8xl text-white">
      {counter}
      <button onClick={clickEvent} className="ml-10">
        Click me
      </button>
    </div>
  );
}
