import React from "react";
import { Chart } from "react-charts";
import BarChart from "../../Component/Graphs/BarChart";
import { Tag, Tabs, Collapse } from "antd";
import "./ClassDetail.css";
import { useParams } from 'react-router-dom';
import { PieChart } from "react-minimal-pie-chart";
import Card from "../../Component/Card/Card";
import LineGraph from "../../Component/Graphs/LineGraph";
import LineGraphData from "../../Component/Graphs/GraphData/LineGraph";
import ReactPlayer from "react-player";
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
            <div className="ClassDetail">
                <h3 style={{ textAlign: "center", color: "black" }}>Class Name : {className}</h3>
                {/* <div className="cards">
                    <Card
                        color="#212529"
                        c="white"
                        heading={"Total Students"}
                        number={"50"}
                    />
                    <Card color="#212529" c="white" heading="Male" number="25" />
                    <Card color="#212529" c="white" heading="Female" number="25" />
                </div> */}
                <div className="content">
                    <div className="player">
                        <ReactPlayer playing={true} url={'https://youtu.be/6r3TiKlaOgk?t=11'} />
                    </div>
                    <div className="Overall-attendence-graphs">
                        <h2>Attendance of {'LT-1'} </h2>
                        <LineGraph data={LineGraphData} />
                    </div>
                </div>

            </div>
        </>
    );
}
