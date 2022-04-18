import React from "react";
import ScrollItemDiv from "./ScrollItemDiv";

const ScrollContainerBottom = (props) => {
  return (
    <div className="scrollContainer">
      {props.colourNames.map((item) => {
        return (
          <ScrollItemDiv
            key={item}
            colour={item}
            colourBox="bottom"
            updateColourBox={props.updateColourBox}
          />
        );
      })}
    </div>
  );
};

export default ScrollContainerBottom;
