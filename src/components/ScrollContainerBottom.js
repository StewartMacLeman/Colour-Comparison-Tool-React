import React from "react";
import ScrollItemDiv from "./ScrollItemDiv";

const ScrollContainerBottom = (props) => {
  return (
    <div className="scrollContainer">
      {props.colourNames.map((item) => {
        return <ScrollItemDiv key={item} colour={item} />;
      })}
    </div>
  );
};

export default ScrollContainerBottom;
