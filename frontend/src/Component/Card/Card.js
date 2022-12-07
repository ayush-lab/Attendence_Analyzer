import React from 'react';
import CountUp from "react-countup";


 export default function Card({ heading, number, color,c}){
    return (
      <div className="Dashboard-card" style={{background:color, color:c}}>
        <p>{heading}</p>
        <CountUp className="countUp" end={number} />
      </div>
    );
  };