import React from "react";
import ScrollItemDiv from "./ScrollItemDiv";

const ScrollContainerTop = (props) => {
  return (
    <div className="scrollContainer">
      {props.colourNames
        .map((item) => {
          return (
            <ScrollItemDiv
              key={item}
              colour={item}
              colourBox="top"
              updateColourBox={props.updateColourBox}
            />
          );
        })
        .reverse()}
    </div>
  );
};

export default ScrollContainerTop;
