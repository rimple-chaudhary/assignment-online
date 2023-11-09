import React, { useState } from "react";

import { DownOutlined } from "@ant-design/icons";
import { Button, Layout, Space } from "antd";
import "./Dashboard.css";
import ColumnGraph from "./graphs/columnGraph/ColumnGraph";
import LineBarGraph from "./graphs/lineBarGraph/LineBarGraph";
import LineChart from "./graphs/lineGraph/LineChart";
import PieChart from "./graphs/pie/PieChart";
import Tiles from "./tiles/Tiles";

const { Header, Content } = Layout;

function Dashboard() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleButtonClick = () => {
    if (!isButtonDisabled) {
      console.log("Button clicked!");
    }
  };
  return (
    <div className="dashboard-container">
      <Layout className="layout">
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            paddingTop: "20px",
            height: "15vh",
            background: "#091823",
          }}
        >
          <div className="demo-logo">
            <div className="headings-container">
              {" "}
              <span className="heading-dashboard"> User Analytics </span>{" "}
              <span className="second-heading">
                {" "}
                Lorem ipsum dolor sit consectetur
              </span>{" "}
            </div>
            <Button
              className="dropdown-btn"
              disabled={isButtonDisabled}
              onClick={handleButtonClick}
            >
              <Space>
                User
                <DownOutlined />
              </Space>
            </Button>
          </div>
        </Header>
        <Content>
          <div
            className="site-layout-content"
            style={{
              height: "100px",
            }}
          >
            <div className="line-tiles-container">
              <div className="tiles">
                <Tiles />
              </div>
              <div className="line-bar-graph">
                <LineBarGraph />
              </div>
            </div>
            <div className="Graphs-container">
              <div className="columnGraph-container">
                {" "}
                <ColumnGraph />
              </div>
              <div className="columnGraph-container">
                {" "}
                <PieChart />
              </div>
              <div className="columnGraph-container">
                {" "}
                <LineChart />
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default Dashboard;
