// components/Calendar.js
import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import esLocale from "@fullcalendar/core/locales/es";

export default function Calendar({ hormigonData }: { hormigonData: any }) {
    function convertDateFormat(dateString: string) {
        const [day, month, year] = dateString.split("/");
        return `${year}-${month}-${day}`;
    }
    const events: any[] = [];

    [...hormigonData].reverse().forEach((data, index) => {
        const dateFormatted = convertDateFormat(data.fechaToma);
        const event = {
            title: `muestra ${data.dataArray.designacion} Vol. ${data.asentamientoCono}` ,
            date: dateFormatted,
        };
        events.push(event);
    });

    // const handleDateClick = (info: { dateStr: any }) => {
    //     console.log(`Fecha seleccionada: ${info.dateStr}`);
    // };

    return (
        <FullCalendar
            height={500}
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
}
