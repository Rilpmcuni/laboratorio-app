// src/utils/util.ts
import { useState, useEffect } from "react";

export function useFechaYHoraActual() {
    const [fecha, setFecha] = useState<string | null>(null);
    const [hora, setHora] = useState<string | null>(null);

    useEffect(() => {
        const obtenerFechaYHoraActual = () => {
            const fechaActual = new Date();
            const dia = fechaActual.getDate().toString().padStart(2, "0");
            const mes = (fechaActual.getMonth() + 1).toString().padStart(2, "0");
            const anio = fechaActual.getFullYear().toString();

            const hora = fechaActual.getHours().toString().padStart(2, "0");
            const minutos = fechaActual.getMinutes().toString().padStart(2, "0");
            const segundos = fechaActual.getSeconds().toString().padStart(2, "0");

            setFecha(`${dia}/${mes}/${anio}`);
            setHora(`${hora}:${minutos}:${segundos}`);
        };

        obtenerFechaYHoraActual();

        // Actualizar la fecha y hora cada segundo
        const interval = setInterval(obtenerFechaYHoraActual, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return { fecha, hora };
}
