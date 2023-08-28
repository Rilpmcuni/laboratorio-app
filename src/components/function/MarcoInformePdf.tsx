"use client";
import React, { useState, useEffect } from "react";
import { Typography, TextField, Button } from "@mui/material";
import {
    BlobProvider,
    PDFDownloadLink,
    PDFViewer,
    usePDF,
} from "@react-pdf/renderer";
import InformePdf from "@/components/function/InformePdf";
import ReactPDF from "@react-pdf/renderer";
import { Link as LinkMui, Stack } from "@mui/material";
import Link from "next/link";



interface DataInforme {
    numeroCarta: number;
    nombreResidente: string;
    nombreInspector: string;
    nombreEmpresa: string;
    renderInforme: string | null;
    selectedDate: string;
    logoEmpresa: string | null;
    nombreContrato: string;
}

interface Props {
    row: any;
    numeroInforme: number;
}
const MarcoInformePdf: React.FC<Props> = ({ row, numeroInforme }) => {
    const [numeroCarta, setNumeroCarta] = useState(0);
    const [nombreResidente, setNombreResidente] = useState("");
    const [nombreInspector, setNombreInspector] = useState("");
    const [nombreEmpresa, setNombreEmpresa] = useState("");
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [logoEmpresa, setLogoEmpresa] = useState<string | null>(null);
    const [nombreContrato, setNombreContrato] = useState("");
    const [generate, setGenerate] = useState(false);

    useEffect(() => {
        // Cargar los datos del Local Storage al cargar la página
        const dataFromLocalStorage = localStorage.getItem("informeData");
        if (dataFromLocalStorage) {
            const parsedData: DataInforme = JSON.parse(dataFromLocalStorage);
            setNombreResidente(parsedData.nombreResidente);
            setNombreInspector(parsedData.nombreInspector);
            setNombreEmpresa(parsedData.nombreEmpresa);
            setSelectedDate(parsedData.selectedDate);
            setSelectedImage(null); // Borra la imagen seleccionada en cada carga para evitar problemas de visualización
            setLogoEmpresa(parsedData.logoEmpresa);
            setNombreContrato(parsedData.nombreContrato);
        }
    }, []);
    /*  */
    const [selectedDate, setSelectedDate] = useState("");

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputDate = event.target.value;
        const formattedDate = formatInputDate(inputDate);
        setSelectedDate(formattedDate);
    };

    const formatInputDate = (inputDate: string) => {
        const dateParts = inputDate.split("-");
        const day = dateParts[2];
        const month = dateParts[1];
        const year = dateParts[0];
        return `${day}/${month}/${year}`;
    };

    const [instance, updateInstance] = usePDF({
        document: (
            <InformePdf
                Ncarta={numeroCarta}
                residente={nombreResidente}
                inspector={nombreInspector}
                empresa={nombreEmpresa}
                selectedDate={selectedDate}
                image={logoEmpresa}
                nombreContrato={nombreContrato}
                numeroInforme={numeroInforme}
                fecha={row.fechaMuestreo}
            />
        ),
    });

    if (instance.loading) return <div>Loading ...</div>;

    // if (instance.error) return <div>Something went wrong: {error}</div>;

    return (
        <div>
            <div>
                <span>Fecha entrega de Informe</span>

                <TextField
                    fullWidth
                    sx={{ flexGrow: 1 }}
                    id="hora-inicio-descarga"
                    label="Fecha entrega de Informe"
                    type="date"
                    value={selectedDate}
                    onChange={handleDateChange}
                />

                <p>Fecha seleccionada: {selectedDate}</p>
            </div>
            <TextField
                sx={{ flexGrow: 1 }}
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
            <PDFViewer style={{ width: "100%", height: "90vh" }}>
                <InformePdf
                    Ncarta={numeroCarta}
                    residente={nombreResidente}
                    inspector={nombreInspector}
                    empresa={nombreEmpresa}
                    selectedDate={selectedDate}
                    image={logoEmpresa}
                    nombreContrato={nombreContrato}
                    numeroInforme={numeroInforme}
                    fecha={row.fechaMuestreo}
                />
            </PDFViewer>
            <div>
                <PDFDownloadLink
                    document={
                        <InformePdf
                            Ncarta={numeroCarta}
                            residente={nombreResidente}
                            inspector={nombreInspector}
                            empresa={nombreEmpresa}
                            selectedDate={selectedDate}
                            image={logoEmpresa}
                            nombreContrato={nombreContrato}
                            numeroInforme={numeroInforme}
                            fecha={row.fechaMuestreo}
                        />
                    }
                    fileName="somename.pdf"
                >
                    {({ blob, url, loading, error }) =>
                        loading ? "Loading document..." : "Download now!"
                    }
                </PDFDownloadLink>
            </div>
            <div>
                <BlobProvider
                    document={
                        <InformePdf
                            Ncarta={numeroCarta}
                            residente={nombreResidente}
                            inspector={nombreInspector}
                            empresa={nombreEmpresa}
                            selectedDate={selectedDate}
                            image={logoEmpresa}
                            nombreContrato={nombreContrato}
                            numeroInforme={numeroInforme}
                            fecha={row.fechaMuestreo}
                        />
                    }
                >
                    {({ blob, url, loading, error }) => {
                        // Do whatever you need with blob here
                        return <div>There's something going on on the fly</div>;
                    }}
                </BlobProvider>
                <a href={instance.url ?? '/Laboratorio'} download="test.pdf" target="_blank">
                    Download
                </a>
                <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    fullWidth
                    LinkComponent={Link}
                    disabled={!instance && true}
                    href={instance.url ?? '/Laboratorio'}
                    target="_blank"
                >
                    Vista previa
                </Button><Button
                    size="small"
                    variant="contained"
                    color="primary"
                    fullWidth
                    LinkComponent={Link}
                    disabled={!instance && true}
                    href={instance.url ?? '/Laboratorio'}
                    target="_blank"
                    download="test.pdf"
                >
                    Download
                </Button>
            </div>
        </div>
    );
};
export default MarcoInformePdf;
