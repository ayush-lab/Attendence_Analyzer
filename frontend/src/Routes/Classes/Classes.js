
import React, { useEffect, useRef, useState } from "react";
// import { useParams } from "react-router-dom";
import { Table, Input, Button, Space, Progress } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
// import ServerService from "../../API/ServerService";
import { useParams } from 'react-router-dom';
import LineGraph from "../../Component/Graphs/LineGraph";
import BarGraph from "../../Component/Graphs/BarGraph";
import BarGraphData from "../../Component/Graphs/GraphData/BarGraphData"
import ReactPlayer from "react-player";
import classData from "./dummyData";

const LineGraphData = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Classes(props) {
  // const [rowData, setRowData] = useState([]);


  //   useEffect(() => {
  //     if (id !== undefined) {
  //       ServerService.GetCollegesList(id)
  //         .then((res) => {
  //           setRowData(res.data);
  //         })
  //         .catch((err) => {
  //           // console.log(err);
  //         });
  //     } 
  //     else {
  //       ServerService.GetAllColleges()
  //         .then((res) => {
  //           setRowData(res.data);
  //         })
  //         .catch((err) => {
  //           // console.log(err);
  //         });
  //     }
  //   }, [id]);


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

  return (
    <>
      <div className="info">
        <div className="Overall-attendence-graphs">
          <h2>Overall Attendence for each block 1 </h2>
          <LineGraph data={LineGraphData} />
        </div>
        <div className="Overall-attendence-graphs">
          <h2>Overall Attendence for each block 1 </h2>
          <BarGraph data={BarGraphData} />
        </div>
      </div>
      <h2 style={{ textAlign: "center", paddingBottom: "50px", paddingTop: "50px" }}>Classes in the {block} </h2>
      <div style={{ paddingLeft: "30px" }}>
        <Table columns={tableColumns} dataSource={classData} />
      </div>
    </>
  );
};


// /ClassDetail 