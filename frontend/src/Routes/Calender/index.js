import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import { Progress } from 'antd'

export default class TimeTab extends React.Component {

  handleDateClick = (arg) => {
    // bind with an arrow function
    alert(arg.dateStr)
  }


  render() {

    return (
      <>
        <FullCalendar

          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          // dateClick={this.handleDateClick}
          events={[
            { title: 25, date: '2023-04-01' },
            { title: 65, date: '2023-04-04' },
            { title: 85, date: '2023-04-05' },

          ]}
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
}


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
