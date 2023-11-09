import { DownOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import React, { useState } from "react";
import "./LineBarGraph.css";

import {
  Category,
  ChartComponent,
  ColumnSeries,
  Highlight,
  Inject,
  Legend,
  LineSeries,
  SeriesCollectionDirective,
  SeriesDirective,
  StackingColumnSeries,
  Tooltip,
} from "@syncfusion/ej2-react-charts";

import { Browser, registerLicense } from "@syncfusion/ej2-base";

registerLicense(process.env.REACT_APP_SYNCFUSION_LICENSE_KEY);

const data = [
  { x: "Jan", userSignup: 0, userSubscription: -20.5, gdp: 5 },
  { x: "Feb", userSignup: -40, userSubscription: 0, gdp: 10 },
  { x: "Mar", userSignup: "", userSubscription: 42.5, gdp: 20 },
  { x: "Apr", userSignup: -30, userSubscription: "", gdp: 15 },
  { x: "May", userSignup: "", userSubscription: -20.5, gdp: 25 },
  { x: "Jun", userSignup: -60, userSubscription: "", gdp: 30 },
  { x: "Jul", userSignup: "", userSubscription: 60.5, gdp: 40 },
  { x: "Aug", userSignup: -40, userSubscription: "", gdp: 35 },
  { x: "Sep", userSignup: "", userSubscription: -10.5, gdp: 45 },
  { x: "Oct", userSignup: 56, userSubscription: "", gdp: 50 },
  { x: "Nov", userSignup: "", userSubscription: 44.5, gdp: 55 },
];

const LineBarGraph = () => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleButtonClick = () => {
    if (!isButtonDisabled) {
      console.log("Button clicked!");
    }
  };

  const onChartLoad = (args) => {
    let chart = document.getElementById("charts");
    chart.setAttribute("title", "");
  };

  const load = (args) => {
    let selectedTheme = window.location.hash.split("/")[1];
    selectedTheme = selectedTheme ? selectedTheme : "Material";
    args.chart.theme = (
      selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1)
    )
      .replace(/-dark/i, "Dark")
      .replace(/contrast/i, "Contrast");
  };

  return (
    <div className="control-pane">
      <div className="heading-dropdown">
        {" "}
        <h2 style={{ color: "white" }}> UserTraffic</h2>
        <span>
          {" "}
          <Button
            className="dropdown-btn"
            disabled={isButtonDisabled}
            onClick={handleButtonClick}
          >
            <Space>
              <span>Current Year</span>
              <DownOutlined />
            </Space>
          </Button>
        </span>{" "}
      </div>
      <div className="control-section">
        <ChartComponent
          id="charts"
          style={{ textAlign: "center" }}
          primaryXAxis={{
            interval: Browser.isDevice ? 1 : 1,
            labelIntersectAction: "Rotate45",
            valueType: "Category",
            majorGridLines: { width: 0 },
            minorGridLines: { width: 0 },
            majorTickLines: { width: 0 },
            minorTickLines: { width: 0 },
            lineStyle: { width: 0 },
          }}
          load={load.bind(this)}
          primaryYAxis={{
            title: "",
            minimum: -100,
            maximum: 100,
            interval: 50,
            lineStyle: { width: 0 },
            majorTickLines: { width: 0 },
            majorGridLines: { width: 1 },
            minorGridLines: { width: 1 },
            minorTickLines: { width: 0 },
            labelFormat: "{value}",
          }}
          chartArea={{ border: { width: 0 } }}
          title=""
          loaded={onChartLoad.bind(this)}
          tooltip={{ enable: true }}
          width={Browser.isDevice ? "100%" : "95%"}
          height="390px"
          legendSettings={{ visible: true, enableHighlight: true }}
        >
          <Inject
            services={[
              StackingColumnSeries,
              LineSeries,
              Category,
              ColumnSeries,
              Tooltip,
              Legend,
              Highlight,
            ]}
          />
          <SeriesCollectionDirective>
            <SeriesDirective
              dataSource={data}
              xName="x"
              yName="userSignup"
              name="User Signup"
              type="Column"
              width={10}
              fill="#0082CC"
            />
            <SeriesDirective
              dataSource={data}
              xName="x"
              yName="userSubscription"
              name="User Subscription"
              type="Column"
              width={10}
              fill="#FB4540"
              stackingGroup="group1"
            />
            <SeriesDirective
              dataSource={data}
              xName="x"
              yName="gdp"
              name=""
              type="Line"
              width={2}
              opacity={0.6}
              fill="#00F2DE"
              marker={{ visible: true, width: 7, height: 7 }}
            />
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
    </div>
  );
};

export default LineBarGraph;
