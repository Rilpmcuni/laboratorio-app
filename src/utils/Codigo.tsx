import React, { useState, useEffect } from "react";




type CodigoProps = {
    length: any;
    opcion?: string;
  };


  export function Codigo({ length, opcion }: CodigoProps): string {
    const [codigo, setCodigo] = useState("");

    useEffect(() => {
        // Obtener el laboratorioData del Local Storage si existe
        const laboratorioData = localStorage.getItem("laboratorioData");
        if (laboratorioData) {
            const parsedLaboratorioData: any = JSON.parse(laboratorioData);
            const region = parsedLaboratorioData.region;

            const obtenerFechaActual = () => {
                const fechaActual = new Date();
                const dia = fechaActual.getDate().toString().padStart(2, "0");
                const mes = (fechaActual.getMonth() + 1)
                    .toString()
                    .padStart(2, "0");
                const anio = fechaActual.getFullYear().toString().substr(-2); // Obtener los últimos 2 dígitos del año

                const formattedRegion = region.substring(0, 3).toUpperCase();
                const formattedCode = `${formattedRegion}-${dia}${mes}${anio}${opcion}-M${length}`;
                setCodigo(formattedCode);
            };

            obtenerFechaActual();
        }
    }, [opcion,length]);

    return codigo;
}
