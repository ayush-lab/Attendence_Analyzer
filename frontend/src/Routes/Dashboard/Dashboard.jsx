import React, { useEffect, useState } from "react";
import ServerService from "../../API/ServerService";
import Navv from "../../Component/Navbar";
import Nav from "../../Component/Navbar";
import "./Dashboard.css";
import Card from "../../Component/Card/Card";


const Dashboard = () => {
  const [data, setData] = useState({
    one: 50,
    two: 10,
    three: 12,
    four: 23,
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
      <Navv/>
      <h2 style={{textAlign:"center"}}> DASHBOARD </h2>
      <div className="Dashboard-container">
        <div className="Dashboard-card-container">
          <Card color="white" c="#242e42" heading={"Total Classes"} number={data.one} />
          <Card color="white" c="#242e42" heading={"Total Teachers"} number={data.two} />
          <Card color="white" c="#242e42" heading={"Total Students"} number={data.three} />
          <Card color="white" c="#242e42" heading={"Total Subjects"} number={data.four} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;