import React, { useState } from "react";
import LineData from "./LineData";
import "./LineChart.css";

function LineChart() {
  const [data, setData] = useState([
    { name: "Jan", line1: 10, line2: 25 },
    { name: "Feb", line1: 15, line2: 22 },
    { name: "Mar", line1: 13, line2: 20 },
    { name: "Apr", line1: 20, line2: 18 },
    { name: "May", line1: 18, line2: 30 },
  ]);

  const updateData = (line) => {
    const newData = [...data];
    newData.forEach((entry) => {
      entry[line] = Math.floor(Math.random() * 30);
    });
    setData(newData);
  };

  return (
    <div className="lineChart">
      <div className="linegraph-headings">
        <span className="lineChart-heading">Website Analytics</span>{" "}
        <span className="lineChart-subheading">Based on your Performance </span>{" "}
      </div>
  <div className="btn-grp"><button onClick={() => updateData("line1")} className="btn-graph">Weekly</button>
      <button className="btn-graph" onClick={() => updateData("line2")}>Monthly</button>
      <button className="btn-graph" onClick={() => updateData("line2")}>Yearly</button> </div>
      
    <div className="lineData"> <LineData data={data} /> </div> 
    </div>
  );
}

export default LineChart;
