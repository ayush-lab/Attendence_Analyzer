import React, { useEffect, useState } from "react";
import { Breadcrumb } from "antd";
import { Link } from "react-router-dom";

import "./Classes.css";
import ClassTab from "./ClassTab";
import Navv from "../../Component/Navbar";


const breadcrumb = [{ name: " Dashboard", link: "/Dashboard"}, {name:" Classes",link:"/classes"} ];


export  default function Classes(){
    return (<>
          <Navv/>
          <h2 style={{textAlign:"center", paddingTop:"25px"}}> Classes </h2>
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

                <ClassTab/>
            </div>


        </>);
};
