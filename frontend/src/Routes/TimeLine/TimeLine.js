import React, { useEffect, useState } from "react";
// import 'react-calendar-heatmap/dist/styles.css';
// import CalendarHeatmap from 'react-calendar-heatmap';
import './Timeline.css'
// import './react-calender-heatmap.css'
import { Tooltip } from 'antd';
// import Tooltip from '@uiw/react-tooltip';

import HeatMap from '@uiw/react-heat-map';
import { array } from "prop-types";




// const value = [
//   { date: '2023-01-11', count:56 },
//   ...[...Array(17)].map((_, idx) => ({ date: `2023-01-${idx + 10}`, count: idx })),
//   ...[...Array(17)].map((_, idx) => ({ date: `2023-02-${idx + 10}`, count: idx })),
//   { date: '2023-04-12', count:58 },
//   { date: '2023-05-01', count:67 },
//   { date: '2023-05-02', count:99 },
//   { date: '2023-05-03', count:90 },
//   { date: '2023-05-04', count:70 },
//   { date: '2023-05-08', count:80 },
// ];

var timeLineData=0;



const TimeLine = () => {


  String.prototype.replaceAt = function(index, replacement) {
    return this.replace(0, index) + replacement
        + this.replace(index + replacement.length);
}

const [dateData,setDate] = React.useState('2023-01-01');
const [value,setValue] = React.useState([]);

React.useEffect(() => {

  

  // var timeData = "2023-01-01";
  var timeData = ['2','0','2','3','-','0','1','-','0','1']
  console.log(timeData);
  var arrayValue = []
  var randomData;

  for(var i=1;i<=12;i++){
   
    
    if(i<10){
      timeData[5]='0';
      timeData[6]=i.toString();
      // timeData = timeData.replaceAt(5,'0');
      // timeData= timeData.replaceAt(6,i);
    }
    else{

      timeData[5]=1;
      timeData[6]=(i%10).toString();
      // timeData=  timeData.replaceAt(5,1);
      // timeData= timeData.replaceAt(5,i%10);

    }

    console.log("updated",timeData);

    for(var x=1;x<=31;x++){
      if(x<10){
        // timeData= timeData.replaceAt(8,'0');
        // timeData= timeData.replaceAt(9,x);
        timeData[8]='0';
        timeData[9]=x;
      }
      else{
        // timeData= timeData.replace(8,(x-(x%10))/10);
        // timeData= timeData.replace(9,x%10);
        timeData[8]=((x-(x%10))/10);
        timeData[9]=x%10;
      }

      let newString = "";
      timeData.forEach(element => {
        newString+=element;
      });

      var month = timeData[5].toString() + timeData[6].toString();
      var day = timeData[8].toString() + timeData[9].toString();
      console.log(month,day,"week data")
      


      randomData = Math.floor(Math.random() * 75);
      var myDate = new Date();
      myDate.setFullYear(2023);
      myDate.setMonth(month);
      myDate.setDate(day);
      console.log("which day??", myDate.getDay());
      if(myDate.getDay() == 6 || myDate.getDay() == 0) {
        arrayValue.push({date:newString, count:0})
        console.log("damn and still?")
      }
      else arrayValue.push({date:newString, count:randomData})

      
      console.log("last",newString)

      


    }
    
  }
  setValue(arrayValue)
  
},[]);

  return (
    <>

    <div className="map">
      <h4>Attendance Heatmap</h4>

        <HeatMap
          
          width={700}
          value={value}
          reactSize={20}
          legendCellSize={0}
          startDate={new Date('2023-01-01')}
          rectRender={(props, data) => {
         
            // console.log(data);
            return (
              <Tooltip
                title={`Strength on ${new Date(data.date).toLocaleDateString()}: ${data.row===0 ? 0 : data.count}`}
                // onOpenChange={() => {
                //   console.log(data)
                // }}
                // onClick={() => {
                //   console.log(data)
                // }}
              >
                <rect {...props}/>
              </Tooltip>
            );
          }}
          
        
        />

    </div>
    </>)
};

export default TimeLine

// export default function TimeLine() {


//   return (
//     <div className="map">
     
//        <h1>adsds</h1>
//         <CalendarHeatmap
//             startDate={new Date('2016-01-01')}
//             endDate={new Date('2016-04-01')}
//             values={[
//                 { date: '2016-01-01', count: 12 },
//                 { date: '2016-01-22', count: 122 },
//                 { date: '2016-01-30', count: 38 },
//                 // ...and so on
//             ]}
//             classForValue={value => {
//                 if (!value) {
//                   return 'color-empty';
//                 }
//                 return `color-github-${value.count}`;
//               }}
//             //   
//               showWeekdayLabels={true}
//             //   onClick={value => alert(`Clicked on value with count: ${value.count}`)}
//         />
//         {/* <ReactTooltip /> */}
     
//     </div>
//   );
// }