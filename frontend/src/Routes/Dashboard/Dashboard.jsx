import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import ServerService from "../../API/ServerService";
import "./Dashboard.css";

const Card = ({ heading, number }) => {
  return (
    <div className="Dashboard-card">
      <p>{heading}</p>
      <CountUp className="countUp" end={number} />
    </div>
  );
};

const Dashboard = () => {
  const [data, setData] = useState({
    one: 0,
    two: 0,
    three: 0,
    four: 0,
  });

  useEffect(() => {
    ServerService.GetDashboardData()
      .then((res) => {
        // console.log(res);
        setData({
          one: res.data.universities,
          two: res.data.colleges,
          three: res.data.faculties,
          four: res.data.workshops,
        });
      })
      .catch((err) => {
        // console.log(err);
      });
  }, []);

  return (
    <>
      <h2 style={{textAlign:"center"}}> DASHBOARD </h2>
      <div className="Dashboard-container">
        <div className="Dashboard-card-container">
          <Card heading={"Total Universities"} number={data.one} />
          <Card heading={"Total Colleges"} number={data.two} />
          <Card heading={"Total Faculty Trained"} number={data.three} />
          <Card heading={"Total Workshops"} number={data.four} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;