import React from "react";
import { Chart } from "react-charts";
import BarChart from "../../Component/Graphs/BarChart";
import Navv from "../../Component/Navbar";
import { Tag, Tabs,Collapse } from "antd";
import "./ClassDetail.css";
import Card from "../../Component/Card/Card";
const { Panel } = Collapse;

export default function ClassDetail() {
  const onChange = (key) => {
    console.log(key);
  };
  const data = React.useMemo(
    () => [
      {
        label: "Series 1",
        data: [
          [0, 1],
          [1, 2],
          [2, 4],
          [3, 2],
          [4, 7],
        ],
      },
      {
        label: "Series 2",
        data: [
          [0, 3],
          [1, 1],
          [2, 5],
          [3, 6],
          [4, 4],
        ],
      },
    ],
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );

  const lineChart = (
    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically
    <div
      style={{
        width: "400px",
        height: "300px",
      }}
    >
      <Chart data={data} axes={axes} />
    </div>
  );

  return (
    <>
      <Navv />
      {/* {} */}
      {/* <BarChart/> */}
      <div className="ClassDetail">
        <h3 style={{ textAlign: "center", color: "black" }}>Class Name : S2</h3>
        <div className="cards">
          <Card
            color="#212529"
            c="white"
            heading={"Total Students"}
            number={"50"}
          />
          <Card color="#212529" c="white" heading="Male" number="25" />
          <Card color="#212529" c="white" heading="Female" number="25" />
        </div>

        <Tabs defaultActiveKey="1">
          <Tabs.TabPane tab="Maths " key="1">
            <Collapse onChange={onChange}>
              <Panel header="This is panel header 1" key="1">
                <Collapse defaultActiveKey="1">
                  <Panel header="This is panel nest panel" key="1">
                    <p>{text}</p>
                  </Panel>
                </Collapse>
              </Panel>
              <Panel header="This is panel header 2" key="2">
                <p>{text}</p>
              </Panel>
              <Panel header="This is panel header 3" key="3">
                <p>{text}</p>
              </Panel>
            </Collapse>
          </Tabs.TabPane>
          <Tabs.TabPane tab="Chemistry" key="2">
            Content of Tab Pane 2
          </Tabs.TabPane>
          <Tabs.TabPane tab="Computer" key="3">
            Content of Tab Pane 3
          </Tabs.TabPane>
          <Tabs.TabPane tab="Machine Learning" key="4">
            Content of Tab Pane 4
          </Tabs.TabPane>
        </Tabs>
      </div>
    </>
  );
}
