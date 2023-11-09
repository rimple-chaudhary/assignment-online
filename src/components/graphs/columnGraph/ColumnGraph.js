import React, { useEffect } from "react";
import * as echarts from "echarts";
import "./ColumnGraph.css"

const ColumnGraph = () => {
  useEffect(() => {
    const chart = echarts.init(document.getElementById("column-chart"));
    const data = [
      { day: "Mon", value1: 500, value2: 200 },
      { day: "Tue", value1: 400, value2: 600 },
      { day: "Wed", value1: 300, value2: 100 },
      { day: "Thu", value1: 600, value2: 500 },
      { day: "Fri", value1: 700, value2: 400 },
      { day: "Sat", value1: 400, value2: 400 },
      { day: "Sun", value1: 700, value2: 400 },
    ];

    const options = {
      legend: {
        data: ["Country", "City"],
        textStyle: {
          color: "white", 
         
        },
        icon: 'circle',
        itemWidth: 6,
        itemHeight: 6
      },
      xAxis: {
        type: "category",
        data: data.map((item) => item.day),
      },
      yAxis: {
        type: "value",
        axisLabel: {
          formatter: function (value) {
            if (value === 0) return "0";
            else return `$${value / 1000}k`;
          },
         
        },
      },
      series: [
        {
          name: "Country",
          type: "bar",
          data: data.map((item) => item.value1),
          stack: "stackGroup",
        
          barWidth: 6, 
          z: 2,
          itemStyle: {
            color: "#FB4540", 
            borderColor: "#FB4540",
          
           
          },
        },
        {
          name: "City",
          type: "bar",
          data: data.map((item) => item.value2),
          stack: "stackGroup",
         
          barWidth: 6, 
          z: 1,
          itemStyle: {
            color: "#00F2DE", 
            borderColor: "#00F2DE",
            
          },
        },
      ],
    };
    chart.setOption(options);
    return () => {
      chart.dispose();
    };
  }, []);

  return (<div> <h2 className="colunm-heading"> Location </h2> <div id="column-chart" style={{ width: "90%", height: "350px", paddingLeft: "30px" }} />;</div>)
};

export default ColumnGraph;
