import React from "react";

function Card(props) {
  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg w-full md:w-1/3">
      <img
        src={props.person.src}
        alt={props.person.fullName}
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />
      <h3 className="text-xl font-semibold mb-2">{props.person.fullName}</h3>
      <p className="text-gray-700">{props.person.desp}</p>
    </div>
  );
}

export default Card;
