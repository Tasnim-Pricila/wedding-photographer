import React, { useEffect, useState } from "react";
import "./Calendar.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useSelector } from "react-redux";
import { useGetBookingsQuery } from "../../../features/booking/bookingApi";

const Calendar = () => {
  const { id: userId, role } = useSelector((state) => state.auth);
  const { data } = useGetBookingsQuery();
  const [events, setEvents] = useState([]);
  const allEvents = data?.data?.result;
  const userEvents = allEvents?.filter((e) => e.userId === userId);

  const formatEventDate = (dateString) => {
    const eventDate = new Date(dateString);
    const year = eventDate.getFullYear();
    const month = String(eventDate.getMonth() + 1).padStart(2, "0");
    const day = String(eventDate.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  
  useEffect(() => {
    let eventData = [];
    role === "admin"
      ? allEvents?.forEach((d) => {
          d?.bookingDate?.forEach((element) => {
            const formattedDate = formatEventDate(element);
            eventData.push({
              title: d?.packageId?.title,
              date: formattedDate,
            });
          });
        })
      : userEvents?.forEach((d) => {
          d?.bookingDate?.forEach((element) => {
            const formattedDate = formatEventDate(element);
            eventData.push({
              title: d?.packageId?.title,
              date: formattedDate,
            });
          });
        });
    setEvents(eventData);
  }, [allEvents, userEvents, role]);

  return (
    <div className="bg-slate-700 text-white rounded-lg p-6 capitalize">
      {role && (
        <FullCalendar
          // plugins={[dayGridPlugin]}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay",
          }}
          initialView="dayGridMonth"
          events={events}
          editable={true}
          selectable={true}
          selectMirror={true}
        />
      )}
    </div>
  );
};

export default Calendar;
