// components/Calendar.js
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import esLocale from "@fullcalendar/core/locales/es";

const Calendar = () => {
    const events = [
        { title: "Evento 1", date: "2023-09-24" },
        { title: "Evento 2", date: "2023-09-25" },
        { title: "Evento 2", date: "2023-09-25" },
        { title: "Evento 2", date: "2023-09-25" },
        { title: "Evento 2", date: "2023-09-25" },
        { title: "Evento 2", date: "2023-09-25" },
        { title: "Evento 2", date: "2023-09-25" },
        // ... más eventos
    ];

    const handleDateClick = (info: { dateStr: any }) => {
        console.log(`Fecha seleccionada: ${info.dateStr}`);
    };

    return (
        <FullCalendar
            dayMaxEventRows={true}
            views={{
                dayGrid: {
                    dayMaxEventRows: true,
                },
            }}
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={events}
            locale={esLocale}
            // dateClick={handleDateClick}
        />
    );
};

export default Calendar;
