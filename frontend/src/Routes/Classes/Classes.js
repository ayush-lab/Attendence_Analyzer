
import React, { useEffect, useRef, useState } from "react";
// import { useParams } from "react-router-dom";
import { Table, Input, Button, Space, Progress, Tag } from "antd";
// import Highlighter from "react-highlight-words";
// import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
// import ServerService from "../../API/ServerService";
import { useParams } from 'react-router-dom';
// import LineGraph from "../../Component/Graphs/LineGraph";
import ECEBarGraph from '../../Component/Graphs/GraphData/LtData/ECE'
import MEBarGraph from '../../Component/Graphs/GraphData/LtData/ME';
import CSITBarGraph from '../../Component/Graphs/GraphData/LtData/CS&IT';
import LTBarGraph from '../../Component/Graphs/GraphData/LtData/LT_BLOCK';


import BarGraph from "../../Component/Graphs/BarGraph";
import BarGraphData from "../../Component/Graphs/GraphData/BarGraphData"

// import ReactPlayer from "react-player";
import classData from "./dummyData";
import ECELTData from './blocks/ECE'
import MEData from './blocks/ME'
import CSITData from './blocks/CS&IT'
import LTBlockData from './blocks/LT_BLOCK'


export default function Classes(props) {
  

  const tableColumns = [
    {
      title: "Class Name ",
      dataIndex: "name",
      key: "id",
      render: (text, record) => (
        <Link to={`/ClassDetail/${record.id}`}>{text}</Link>
      ),
    },
    {
      title: "Current Strength",
      dataIndex: "currentStrength",
      key: "id",
      // width: '20%',
    },
    {
      title: "Total Strength",
      dataIndex: "totalStrength",
      key: "id",
      // width: '20%',
    },
    {
      title: "Percentage",
      dataIndex: "code",
      key: "id",
      render: (_, record) => {

        console.log(record)
        return < Progress percent={parseInt(record.currentStrength * 100 / record.totalStrength)} size="small" />

      },
      width: '20%',
    },
  ];

  const params = useParams();
  const block = params.block;

  var barGraphType = BarGraphData;
  var LTData = classData;

  if(block === "ECE_Block"){
    barGraphType = ECEBarGraph;
    LTData = ECELTData
  }
  else if(block === "ME_Block"){
    barGraphType = MEBarGraph;
    LTData = MEData;
  }
  else if(block === "CS&IT_Block"){
    barGraphType = CSITBarGraph;
    LTData = CSITData;
  }
  else if(block === "LT_BLOCK"){
    barGraphType = LTBarGraph;
    LTData = LTBlockData;
  }

  return (
    <>
      <div className="info">
    
        <div className="Overall-attendence-graphs">
          <h2 style={{paddingBottom:"20px"}}>Overall Attendence for each LT for <span style={{textDecoration:"underline", color:"purple"}} >{block}</span> </h2>

          <BarGraph fill={"#a0d4ec"} data={barGraphType} />
        </div>
      </div>
      <h2 style={{ textAlign: "center", paddingBottom: "50px", paddingTop: "50px" }}>Classes in the <span style={{textDecoration:"underline", color:"purple"}} >{block}</span> </h2>
      <div style={{ paddingLeft: "30px" }}>
        <Table columns={tableColumns} 
               dataSource={LTData} />
      </div>
    </>
  );
};


// /ClassDetail 