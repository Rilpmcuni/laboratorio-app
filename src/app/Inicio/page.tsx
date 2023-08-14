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

export default function Inicio() {
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

    const handleRemoveImage = () => {
        setSelectedImage(null);
        setLogoEmpresa(null);
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImage(event.target.files[0]);
                setLogoEmpresa(reader.result as string);
            };
            reader.readAsDataURL(event.target.files[0]);
        } else {
            setSelectedImage(null);
            setLogoEmpresa(null);
        }
    };

    return (
        <main className="">
            <Typography variant="h1" fontWeight={900}>
                Generar Informe
            </Typography>

            <div>
                <div>
                    {logoEmpresa && (
                        <div>
                            <img
                                alt="not found"
                                width={"250px"}
                                src={logoEmpresa}
                            />
                            <br />
                            <button onClick={handleRemoveImage}>Remove</button>
                        </div>
                    )}
                    <br />
                    <br />

                    <input
                        type="file"
                        name="myImage"
                        onChange={handleFileChange}
                    />
                </div>
                <TextField
                    id="outlined-controlled"
                    label="Número Carta"
                    value={numeroCarta}
                    type="number"
                    inputProps={{
                        min: 0,
                        step: 1,
                    }}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        const value = parseInt(event.target.value);
                        setNumeroCarta(value);
                    }}
                />
                <div>
                    <input
                        type="date"
                        value={selectedDate}
                        onChange={(event) =>
                            setSelectedDate(event.target.value)
                        }
                    />
                    {renderInforme() && <p>{renderInforme()}</p>}
                </div>
                <TextField
                    id="outlined-controlled"
                    label="Inspector"
                    value={nombreInspector}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setNombreInspector(event.target.value);
                    }}
                />
                <TextField
                    id="outlined-controlled"
                    label="Empresa"
                    value={nombreEmpresa}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setNombreEmpresa(event.target.value);
                    }}
                />
                <TextField
                    id="outlined-controlled"
                    label="Residente"
                    value={nombreResidente}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setNombreResidente(event.target.value);
                    }}
                />
                <TextField
                    multiline
                    maxRows={0}
                    id="outlined-controlled"
                    label="Contrato"
                    value={nombreContrato}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        setNombreContrato(event.target.value);
                    }}
                />
                <TextField
                    id="outlined-controlled"
                    label="Número de Informe"
                    value={numeroInforme}
                    type="number"
                    inputProps={{
                        min: 0,
                        step: 1,
                    }}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                        const value = parseInt(event.target.value);
                        setNumeroInforme(value);
                    }}
                />
            </div>
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
