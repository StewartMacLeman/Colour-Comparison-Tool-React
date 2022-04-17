import React from "react";
import ScrollContainer from "./ScrollContainer";
import ColourBox from "./ColourBox";
import ArrowContainer from "./ArrowContainer";

const Main = () => {
  return (
    <main className="main">
      <button className="topButton">Top Reset</button>
      <ScrollContainer />
      <ArrowContainer />
      <ColourBox />
      <ColourBox />
      <ArrowContainer />
      <ScrollContainer />
      <button className="bottomButton">Bottom Reset</button>
    </main>
  );
};

export default Main;
