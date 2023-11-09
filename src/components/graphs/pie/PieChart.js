import React, { useEffect } from "react";
import * as echarts from "echarts";
import "./PieChart.css";

const PieChart = () => {
  useEffect(() => {
    const chartDom = document.getElementById("main");
    const myChart = echarts.init(chartDom);

    const option = {
      grid: {
        left: '20%',
        right: '20%',
        top: '20%',
        bottom: 0,
        containLabel: true,
      },
      tooltip: {
        trigger: "item",
      },
      legend: {
        show: true,
        orient: "vertical",
        right: 0,
        top: "top",
        itemWidth: 30,
        itemHeight: 5,
        textStyle: {
          color: "#fff",
          
        },

        
      },
      series: [
        {
          name: "Access From",
          type: "pie",
          radius: ["40%", "55%"],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderWidth: 2,
          },
          label: {
            show: false,
            position: "left",
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 15,
              fontWeight: "bold",
            },
          },
          labelLine: {
            show: false,
          },
          data: [
            { value: 148, name: "Total User Visit", itemStyle: { color: "#5E5CE3" } },
            { value: 235, name: "User Sign up", itemStyle: { color: "#5E5CE6" } },
            { value: 1080, name: "User Subscribed", itemStyle: { color: "#3F46F7" } },
          ],
          center: ["35%", "35%"],
          label: {
            show: true,
            position: "center",
            formatter: "583",
            fontSize: 40,
            fontWeight: 900,
            color:"white"
          },
          textStyle: {
            color: "white",
          },
        },
      ],
    };

    option && myChart.setOption(option);
  }, []);

  return (
    <div style={{  }}>
      <div>
        <h2 className="piechart-heading">Conversion Rate</h2>
        <div id="main" style={{ height: "400px" }} />
      </div>
      <div id="legend-container" style={{ flex: 1 }} />
    </div>
  );
};

export default PieChart;
