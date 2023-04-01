import React from "react";
import { Chart } from "react-charts";
import BarChart from "../../Component/Graphs/BarChart";
import Navv from "../../Component/Navbar";
import { Tag, Tabs, Collapse } from "antd";
import "./ClassDetail.css";
import { useParams } from 'react-router-dom';
import { PieChart } from "react-minimal-pie-chart";
import Card from "../../Component/Card/Card";
import LineGraph from "../Dashboard/Graphs/LineGraph";
import LineGraphData from "../Dashboard/GraphData/LineGraph";
// import  "../Dashboard/Dashboard.css"

const { Panel } = Collapse;

export default function ClassDetail() {
  const onChange = (key) => {
    console.log(key);
  };
  const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
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

  
  const params = useParams();
  const className = params.id;

  return (
    <>
      <Navv />
      {/* {} */}
      {/* <BarChart/> */}
      <div className="ClassDetail">
        <h3 style={{ textAlign: "center", color: "black" }}>Class Name : {className}</h3>
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
            <Panel header="Attendence graph" key="0">
                <p style={{fontWeight:"bold"}} >7% students were present today</p>
                <div className="Overall-attendence-graph">
                  <h3>Overall Attendence for each block 1 </h3>
                  <LineGraph data={LineGraphData}/>
              </div>
              </Panel>
              <Panel header="Today's attendence" key="1">
                <p style={{fontWeight:"bold"}} >70% students were present today</p>
                <div className="piechart">
                  <PieChart
                    animate={true}
                    data={[
                      { title: "Present", value: 70, color: "green" },
                      { title: "Absent", value: 30, color: "red" },
                    ]}
                    label={({ dataEntry }) => dataEntry.value}
                    labelStyle={{
                      fontSize: '25px',
                      fontFamily: 'sans-serif',
                      fill: '#E38627',
                    }}
                  />
                </div>
              </Panel>
              <Panel header="Monthly attendence analysis" key="2">
              <p style={{fontWeight:"bold"}}>60% students were present this month</p>
                <div className="piechart">
                  <PieChart
                    animate={true}
                    data={[
                      { title: "Present", value: 60, color: "green" },
                      { title: "Absent", value: 40, color: "red" },
                    ]}
                    label={({ dataEntry }) => dataEntry.value}
                    labelStyle={{
                      fontSize: '25px',
                      fontFamily: 'sans-serif',
                      fill: '#E38627',
                    }}
                  />
                </div>
              </Panel>
              <Panel header="Entire semester attendence analysis" key="3">
              <p style={{fontWeight:"bold"}}>50% students were present this semester</p>
                <div className="piechart">
                  <PieChart
                    animate={true}
                    data={[
                      { title: "Present", value: 50, color: "green" },
                      { title: "Absent", value: 50, color: "red" },
                    ]}
                    label={({ dataEntry }) => dataEntry.value}
                    labelStyle={{
                      fontSize: '25px',
                      fontFamily: 'sans-serif',
                      fill: '#E38627',
                    }}
                  />
                </div>
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
