import React, { useEffect, useState } from "react";
import ServerService from "../../API/ServerService";
import Navv from "../../Component/Navbar";
import Nav from "../../Component/Navbar";
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import "./Dashboard.css";
import Card from "../../Component/Card/Card";
import LineGraphData from "./GraphData/LineGraph";
import PieChartData from "./GraphData/PieChartData";
import BarGraphData from './GraphData/BarGraphData'
import RadarChartData from "./GraphData/RadarData";
import LineGraph from "./Graphs/LineGraph";
import BarGraph from "./Graphs/BarGraph";
import PiechartGraph from "./Graphs/PieChartGraph";
import RadarChartGraph from "./Graphs/RadarchartGraph";
import BrushBarChart from "./Graphs/BrushBarChart";
import BrushBarData from "./GraphData/BrushBarData";

const Dashboard = () => {
  const [data, setData] = useState({
    one: 50,
    two: 10,
    three: 12,
    four: 25,
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
      <Navv/>
      <h2 style={{textAlign:"center"}}> DASHBOARD </h2>
      <div className="Dashboard-container">
        <div className="Dashboard-card-container">
          <Card color="white" c="#242e42" heading={"Total Classes"} number={data.one} />
          <Card color="white" c="#242e42" heading={"Total Teachers"} number={data.two} />
          <Card color="white" c="#242e42" heading={"Total Students"} number={data.three} />
          <Card color="white" c="#242e42" heading={"Total Subjects"} number={data.four} />
        </div>
        <div className="Overall-attendence-graphs">
          <h3>Overall Attendence for each block 1 </h3>
          <LineGraph data={LineGraphData}/>
        </div>
       
        <div className="Overall-attendence-graphs">
          <h3 >Overall Attendence for each block 2 </h3>
          <BarGraph data={BarGraphData}/>
        </div>


        <div className="Overall-attendence-graphs">
          <h3 >Overall Attendence for each block 3 </h3>
          <PiechartGraph data={PieChartData}/>
        </div>

        <div className="Overall-attendence-graphs">
          <h3 >Overall Attendence for each block 4 </h3>
          <RadarChartGraph data={RadarChartData}/>
        </div>

        <div className="Overall-attendence-graphs">
          <h3 >Overall Attendence for each block 5 </h3>
          <BrushBarChart data={BrushBarData}/>
        </div>
        
      </div>
    </>
  );
};

export default Dashboard;