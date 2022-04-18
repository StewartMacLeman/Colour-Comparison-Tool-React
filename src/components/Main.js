import React from "react";
import ScrollContainerTop from "./ScrollContainerTop";
import ScrollContainerBottom from "./ScrollContainerBottom";
import ColourBox from "./ColourBox";
import ArrowContainer from "./ArrowContainer";

const Main = (props) => {
  // let colourNamesReverse = props.colourNames.reverse();
  return (
    <main className="main">
      <button className="topButton">Top Reset</button>
      <ScrollContainerTop colourNames={props.colourNames}/>
      <ArrowContainer />
      <ColourBox />
      <ColourBox />
      <ArrowContainer />
      <ScrollContainerBottom colourNames={props.colourNames}/>
      <button className="bottomButton">Bottom Reset</button>
    </main>
  );
};

export default Main;
