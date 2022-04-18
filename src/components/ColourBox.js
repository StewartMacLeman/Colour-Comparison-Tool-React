import React from "react";

const ColourBox = (props) => {
  return (
    <div
      className="colourBox"
      style={{ backgroundColor: `${props.boxColour}` }}
    >
      <p>Colour: {props.boxText}</p>
    </div>
  );
};

export default ColourBox;
