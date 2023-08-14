"use client";
import React, { useState, useEffect } from "react";
import { Typography, TextField, Button } from "@mui/material";
import { PDFViewer } from "@react-pdf/renderer";
import InformePdf from "@/components/function/InformePdf";

interface DataInforme {
    numeroCarta: number;
    nombreResidente: string;
    nombreInspector: string;
    nombreEmpresa: string;
    renderInforme: string | null;
    selectedDate: string;
    logoEmpresa: string | null;
    nombreContrato: string;
    numeroInforme: number;
}
export default function Laboratorio() {
    const [numeroCarta, setNumeroCarta] = useState(0);
    const [nombreResidente, setNombreResidente] = useState("");
    const [nombreInspector, setNombreInspector] = useState("");
    const [nombreEmpresa, setNombreEmpresa] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [logoEmpresa, setLogoEmpresa] = useState<string | null>(null);
    const [nombreContrato, setNombreContrato] = useState("");
    const [numeroInforme, setNumeroInforme] = useState(0);
    const [generate, setGenerate] = useState(false);

    useEffect(() => {
        // Cargar los datos del Local Storage al cargar la página
        const dataFromLocalStorage = localStorage.getItem("informeData");
        if (dataFromLocalStorage) {
            const parsedData: DataInforme = JSON.parse(dataFromLocalStorage);
            setNumeroCarta(parsedData.numeroCarta);
            setNombreResidente(parsedData.nombreResidente);
            setNombreInspector(parsedData.nombreInspector);
            setNombreEmpresa(parsedData.nombreEmpresa);
            setSelectedDate(parsedData.selectedDate);
            setSelectedImage(null); // Borra la imagen seleccionada en cada carga para evitar problemas de visualización
            setLogoEmpresa(parsedData.logoEmpresa);
            setNombreContrato(parsedData.nombreContrato);
            setNumeroInforme(parsedData.numeroInforme);
        }
    }, []);

    useEffect(() => {
        // Guardar los datos en el Local Storage cuando cambien
        const informeData: DataInforme = {
            numeroCarta,
            nombreResidente,
            nombreInspector,
            nombreEmpresa,
            renderInforme: renderInforme(),
            selectedDate,
            logoEmpresa,
            nombreContrato,
            numeroInforme,
        };
        localStorage.setItem("informeData", JSON.stringify(informeData));
    }, [
        numeroCarta,
        nombreResidente,
        nombreInspector,
        nombreEmpresa,
        selectedDate,
        logoEmpresa,
        nombreContrato,
        numeroInforme,
    ]);

    const renderInforme = () => {
        if (selectedDate !== "") {
            const date = new Date(selectedDate);
            const day = date.getDate();
            const month = date.toLocaleString("default", { month: "long" });
            const year = date.getFullYear();
            if (day >= 1 && day <= 15) {
                const previousMonth = new Date(
                    date.getFullYear(),
                    date.getMonth(),
                    0
                );
                const previousMonthName = previousMonth.toLocaleString(
                    "default",
                    {
                        month: "long",
                    }
                );

                return `la segunda quincena del 16 al ${previousMonth.getDate()} ${previousMonthName} ${year}`;
            } else {
                return `la primera quincena del 1 al 15 ${month} ${year}`;
            }
        }

        return null;
    };

    const handleGenerate = () => {
        setGenerate(true);
    };
    return (
        <main>
            {!generate && (
                <Button variant="outlined" onClick={handleGenerate}>
                    Generar
                </Button>
            )}
            {generate && (
                <div>
                    <PDFViewer style={{ width: "100%", height: "90vh" }}>
                        <InformePdf
                            Ncarta={numeroCarta}
                            residente={nombreResidente}
                            inspector={nombreInspector}
                            empresa={nombreEmpresa}
                            fecha={renderInforme()}
                            selectedDate={selectedDate}
                            image={logoEmpresa}
                            nombreContrato={nombreContrato}
                            numeroInforme={numeroInforme}
                        />
                    </PDFViewer>
                </div>
            )}
        </main>
    );
}
