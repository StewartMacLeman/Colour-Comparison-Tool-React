import React, {useState} from "react";
import ScrollContainerTop from "./ScrollContainerTop";
import ScrollContainerBottom from "./ScrollContainerBottom";
import ColourBox from "./ColourBox";
import ArrowContainer from "./ArrowContainer";

const Main = (props) => {
  const [topBoxColour, setTopBoxColour] = useState("black");
  const [topBoxText, setTopBoxText] = useState("black");
  const [bottomBoxColour, setBottomBoxColour] = useState("white");
  const [bottomBoxText, setBottomBoxText] = useState("white");

  const updateColourBox = (e) => {
    let boxPosition = e.target.dataset.position;
    let boxColour = e.target.dataset.colour;

    if (boxPosition === "top") {
      setTopBoxColour(boxColour);
      setTopBoxText(boxColour);
    } else if (boxPosition === "bottom") {
      setBottomBoxColour(boxColour);
      setBottomBoxText(boxColour);
    }
  }
  
  return (
    <main className="main">
      <button className="topButton">Top Reset</button>
      <ScrollContainerTop colourNames={props.colourNames} updateColourBox={updateColourBox}/>
      <ArrowContainer />
      <ColourBox boxColour={topBoxColour} boxText={topBoxText}/>
      <ColourBox boxColour={bottomBoxColour} boxText={bottomBoxText}/>
      <ArrowContainer />
      <ScrollContainerBottom colourNames={props.colourNames} updateColourBox={updateColourBox}/>
      <button className="bottomButton">Bottom Reset</button>
    </main>
  );
};

export default Main;
