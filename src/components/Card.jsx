import React from "react";

export default function Card(props) {
  return (
    <div className=" mx-3 w-fit max-h-96 bg-white rounded-lg p-2 flex flex-col">
      <img
        className=" max-w-40 rounded-xl"
        src="https://source.unsplash.com/random/300x400/?people"
      />
      <div className="p-2 bg-white">
        <h3 className="mb-1 font-bold">{props.name}</h3>
        <p className=" w-36"> {props.text}</p>
      </div>
    </div>
  );
}
