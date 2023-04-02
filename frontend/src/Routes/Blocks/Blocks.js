import React, { useEffect, useState } from "react";
import { Breadcrumb, Progress, Table } from "antd";
import { Link } from "react-router-dom";
import LineGraph from "../../Component/Graphs/LineGraph";
import LineGraphData from "../../Component/Graphs/GraphData/LineGraph";
import BarGraphData from "../../Component/Graphs/GraphData/BarGraphData";
import "./block.css";
import ReactPlayer from 'react-player'
import blocksData from "./dummyData";
import BarGraph from "../../Component/Graphs/BarGraph";


const breadcrumb = [{ name: " Dashboard", link: "/Dashboard" }, { name: " Classes", link: "/classes" }];

const tableColumns = [
    {
        title: "BLOCK NAME ",
        dataIndex: "name",
        key: "id",
        render: (text, record) => (
            <Link to={`/Class/${record.id}`}>{text}</Link>
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
        key: "id",
        render: (_, record) => {
            return < Progress percent={parseInt(record.currentStrength * 100 / record.totalStrength)} size="small" />
        },
        width: '20%',
    },
];

export default function Blocks() {
    return (<>
        <h2 style={{ textAlign: "center", paddingTop: "25px" }}> BLOCKS IN THE COLLEGE</h2>
        <div className="screenPadding">
            <Breadcrumb style={{ marginBottom: "25px" }}>
                {breadcrumb.map((item, key) => {
                    return (<>
                        <Link to={item.link} key={key}>
                            <Breadcrumb.Item>{item.name}</Breadcrumb.Item>
                        </Link>
                        <span> /  </span>
                    </>);
                })}
            </Breadcrumb>
            <div className="info">
                <div className="Overall-attendence-graphs">
                    <h2>Overall Attendence of Blocks </h2>
                    <LineGraph data={LineGraphData} />
                </div>
                <div className="Overall-attendence-graphs">
                    <h2>Attendence of all Blocks </h2>
                    <BarGraph data={BarGraphData} />
                </div>
            </div>
            <Table columns={tableColumns} dataSource={blocksData} />
        </div>

    </>);
};
