import React from "react";

const ScollItemDiv = (props) => {
  return (
    <div
      className="scrollItemDiv"
      style={{ backgroundColor: `${props.colour}` }}
    >
      <p className="scrollItemPara">{props.colour}</p>
      <div
        className="overlayDiv"
        data-position={props.colourBox}
        data-colour={props.colour}
        onClick={props.updateColourBox}
      ></div>
    </div>
  );
};

export default ScollItemDiv;
