import React from "react";
import { Card } from "antd";
import "./Tiles.css"
import {tileData} from "../data/data"

function Tiles() {
  return (
    <>
  {tileData.map((item)=>
  <div className="card-container"> <Card className="tiles-container">
  <div className="tiles-subcontainer" > 
  <div className="box-headingData-container" ><div className="arrow-container"style={{ backgroundColor: item.colorCode }} > 
 <img src= {item.image} alt="downArrow-logo" className="downArrow-container"/> </div>
  <div className="heading-data-container"> <span className="heading-tiles-container"> {item.title}</span>
  <span className="data-container">{item.number}</span>
  </div> </div>
  
  <div className="rectangular-container" style={{backgroundColor:item.percentBackground}}> <span className="rectangle-content" style={{ color: item.percentColor }}> {item.percent}</span> </div>
  </div>
 
  
</Card> </div>
 
)}
   </>   
  );
}

export default Tiles;
