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

  const reset = (e) => {
    let button = e.target.dataset.resetbutton;
    
    if (button === "top") {
      setTopBoxColour("black");
      setTopBoxText("black");
      let nextElement = e.target.nextSibling;
      nextElement.scrollTop = 0;
    } else if (button === "bottom") {
      setBottomBoxColour("white");
      setBottomBoxText("white");
      let prevElement = e.target.previousSibling;
      prevElement.scrollTop = 0;
    }
  }

  return (
    <main className="main">
      <button className="topButton" data-resetbutton="top" onClick={reset}>Top Reset</button>
      <ScrollContainerTop colourNames={props.colourNames} updateColourBox={updateColourBox}/>
      <ArrowContainer />
      <ColourBox boxColour={topBoxColour} boxText={topBoxText}/>
      <ColourBox boxColour={bottomBoxColour} boxText={bottomBoxText}/>
      <ArrowContainer />
      <ScrollContainerBottom colourNames={props.colourNames} updateColourBox={updateColourBox}/>
      <button className="bottomButton" data-resetbutton="bottom" onClick={reset}>Bottom Reset</button>
    </main>
  );
};

export default Main;
