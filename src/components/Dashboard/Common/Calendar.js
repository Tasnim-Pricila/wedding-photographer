import React from "react";
import "./Calendar.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

const Calendar = () => {
  return (
    <div className="bg-slate-700 text-white rounded-lg p-6 capitalize">
      <FullCalendar
        // plugins={[dayGridPlugin]}
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        initialView="dayGridMonth"
        events={[
          { title: "event 1", date: "2023-09-01" },
          { title: "event 2", date: "2023-09-02" },
        ]}
        editable={true}
        selectable={true}
        selectMirror={true}
      />
    </div>
  );
};

export default Calendar;
