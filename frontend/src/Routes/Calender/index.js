import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import { Progress } from 'antd'

// export default class TimeTab extends React.Component {
const TimeTab = ()=>{

  const handleDateClick = (arg) => {
    // bind with an arrow function
    alert(arg.dateStr)
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
          arrayValue.push({date:newString, title:0})
          console.log("damn and still?")
        }
        else arrayValue.push({date:newString, title:randomData})
  
        
  
        
  
  
      }
      
    }
    setValue(arrayValue)
    
  },[]);


    return (
      <>
        <FullCalendar

          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          // dateClick={this.handleDateClick}
          events={value}
          // weekends={false}
          // dayCellContent={(k, v) => {
          //   console.log(k, v)
          //   return (
          //     <>
          //       <Progress type="dashboard" percent={75} />

          //     </>
          //   )
          // }}
          contentHeight={500}
          eventContent={renderEventContent}
          eventBackgroundColor='#FFFFFF'
          eventBorderColor='#FFFFFF'
        />
      </>
    )
  }

  export default TimeTab


function renderEventContent(eventInfo) {
  const val = eventInfo.event.title;
  return (
    <>
      {/* <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i> */}
      <Progress type="line" percent={val} strokeColor={val > 75 ? "green" : val > 50 ? "orange" : "red"} />

    </>
  )
}
