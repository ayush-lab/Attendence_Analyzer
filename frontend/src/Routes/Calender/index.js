import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import Navv from '../../Component/Navbar'
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick


export default class TimeTab extends React.Component {
    
    handleDateClick = (arg) => {
        // bind with an arrow function
       alert(arg.dateStr)
     }
  
 
    render() {

    return (
      <>
      <Navv/>
      <FullCalendar
         plugins={[ dayGridPlugin, interactionPlugin ]}
        initialView="dayGridMonth"
        dateClick={this.handleDateClick}
        events={[
            { title: 'Maths', date: '2022-12-01' },
            { title: 'Chemistry', date: '2022-12-02' }
          ]}
          weekends={false}
          eventContent={renderEventContent}
      />
      </>  
    )
  }
}


function renderEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    )
  }
  