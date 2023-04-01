import React, { useState } from "react";
// import 'react-calendar-heatmap/dist/styles.css';
// import CalendarHeatmap from 'react-calendar-heatmap';
import './Timeline.css'
// import './react-calender-heatmap.css'
import Tooltip from '@uiw/react-tooltip';

import HeatMap from '@uiw/react-heat-map';
import Navv from "../../Component/Navbar";

const value = [
  { date: '2016/01/11', count:2 },
  ...[...Array(17)].map((_, idx) => ({ date: `2016/01/${idx + 10}`, count: idx })),
  ...[...Array(17)].map((_, idx) => ({ date: `2016/02/${idx + 10}`, count: idx })),
  { date: '2016/04/12', count:2 },
  { date: '2016/05/01', count:5 },
  { date: '2016/05/02', count:5 },
  { date: '2016/05/03', count:1 },
  { date: '2016/05/04', count:11 },
  { date: '2016/05/08', count:32 },
];

const TimeLine = () => {

  return (
    <>

    <Navv/>
    <div className="map">
      <h4>Timeline for attedence</h4>
      <HeatMap
        width={700}
        value={value}
        reactSize={20}
        legendCellSize={0}
        startDate={new Date('2016/01/01')}
        rectRender={(props, data) => {
            // if (!data.count) return <rect {...props} />;
            return (
              <Tooltip key={props.key} placement="right" content={`count: ${data.count || 0}`}>
                <rect {...props} />
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
