import React, { useEffect, useState } from "react";
import ServerService from "../../API/ServerService";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./Dashboard.css";
import Card from "../../Component/Card/Card";
import LineGraphData from "../../Component/Graphs/GraphData/LineGraph";
import PieChartData from "../../Component/Graphs/GraphData/PieChartData";
import BarGraphData from '../../Component/Graphs/GraphData/BarGraphData'
import RadarChartData from "../../Component/Graphs/GraphData/RadarData";
import LineGraph from "../../Component/Graphs/LineGraph";
import BarGraph from "../../Component/Graphs/BarGraph";
import PiechartGraph from "../../Component/Graphs/PieChartGraph";
import RadarChartGraph from "../../Component/Graphs/RadarchartGraph";
import BrushBarChart from "../../Component/Graphs/BrushBarChart";
import BrushBarData from "../../Component/Graphs/GraphData/BrushBarData";

const Dashboard = () => {
  const [data, setData] = useState({
    one: 50,
    two: 10,
    three: 1800,
    four: 75,
  });

  // useEffect(() => {
  //   ServerService.GetDashboardData()
  //     .then((res) => {
  //       // console.log(res);
  //       setData({
  //         one: res.data.universities,
  //         two: res.data.colleges,
  //         three: res.data.faculties,
  //         four: res.data.workshops,
  //       });
  //     })
  //     .catch((err) => {
  //       // console.log(err);
  //     });
  // }, []);

  console.log(LineGraphData)

  return (
    <>
      <h2 style={{ textAlign: "center" }}> DASHBOARD </h2>
      <div className="Dashboard-container">
        <div className="Dashboard-card-container">
          <Card color="white" c="#242e42" heading={"Total Classrooms"} number={data.one} />
          <Card color="white" c="#242e42" heading={"Blocks"} number={data.two} />
          <Card color="white" c="#242e42" heading={"Total Students"} number={data.three} />
          <Card color="white" c="#242e42" heading={"Current Strength %"} number={data.four} />
        </div>
        <div className="graphContainer">
          <div className="Overall-attendence-graphs">
            <h3>Real-time Strength of all Classrooms</h3>
            <LineGraph data={LineGraphData} />
          </div>

          <div className="Overall-attendence-graphs">
            <h3 >Blockwise strength</h3>
            <BarGraph data={BarGraphData} />
          </div>


          {/* <div className="Overall-attendence-graphs">
            <h3 >Overall Attendence for each block 3 </h3>
            <PiechartGraph data={PieChartData} />
          </div>

          <div className="Overall-attendence-graphs">
            <h3 >Overall Attendence for each block 4 </h3>
            <RadarChartGraph data={RadarChartData} />
          </div> */}

          {/* <div className="Overall-attendence-graphs">
            <h3 >Overall Attendence for each block 5 </h3>
            <BrushBarChart data={BrushBarData} />
          </div> */}
        </div>


      </div>
    </>
  );
};

export default Dashboard;