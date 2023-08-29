"use client";
import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Button, Grid } from "@mui/material";
import VerDescargarInforme from "@/components/function/VerDescargarInforme";
import TabsComponent from "@/components/test/Test";
import Link from "next/link";
import { useRouter } from "next/navigation";
import HeroAppCard from "@/components/ui/HeroAppCard";
import ContactoCard from "@/components/ui/ContactoCard";
import NoAuth from "@/components/feedback/NoAuth";

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

interface DataHormigon {
    fechaLocal: string;
    muestra: number;
    codigo: string;
    asentamientoCono: number;
    // Agrega las demás propiedades de la muestra de hormigón
}

export default function ListInformes() {
    const [data, setData] = useState<{
        informeData: DataInforme | null;
        hormigonData: DataHormigon[];
        muestraCounter: number;
        numeroInforme: number;
    }>({
        informeData: null,
        hormigonData: [],
        muestraCounter: 0,
        numeroInforme: 0,
    });

    useEffect(() => {
        const informeDataFromLocalStorage = localStorage.getItem("laboratorioData");
        const hormigonDataFromLocalStorage = localStorage.getItem("hormigonData");

        if (informeDataFromLocalStorage) {
            const parsedInformeData: DataInforme = JSON.parse(
                informeDataFromLocalStorage
            );
            setData((prevData) => ({
                ...prevData,
                informeData: parsedInformeData,
                numeroInforme: parsedInformeData.numeroInforme + 1,
            }));
        }

        if (hormigonDataFromLocalStorage) {
            const parsedHormigonData: DataHormigon[] = JSON.parse(
                hormigonDataFromLocalStorage
            );
            setData((prevData) => ({
                ...prevData,
                hormigonData: parsedHormigonData,
                muestraCounter: parsedHormigonData.length,
            }));
        }
    }, []);

    const generateRows = () => {
        const { hormigonData, numeroInforme } = data;

        const groupedHormigonData: { [key: string]: DataHormigon[] } = {};

        for (const data of hormigonData) {
            const quincena = getQuincenaFromDate(data.fechaLocal);

            if (groupedHormigonData[quincena]) {
                groupedHormigonData[quincena].push(data);
            } else {
                groupedHormigonData[quincena] = [data];
            }
        }

        const rows = [];
        let informeCounter = numeroInforme;

        for (const quincena in groupedHormigonData) {
            const muestras = groupedHormigonData[quincena];

            const storedSelectedDate = localStorage.getItem(
                `selectedDate_${informeCounter}`
            );
            const storedNumeroCarta = localStorage.getItem(
                `numeroCarta_${informeCounter}`
            );

            rows.push({
                quincena,
                fechaLocal: getfechaLocal(quincena),
                muestras,
                numeroInforme: informeCounter,
                storedSelectedDate: storedSelectedDate || "",
                storedNumeroCarta: storedNumeroCarta
                    ? parseInt(storedNumeroCarta)
                    : 0,
            });

            informeCounter++;
        }

        return rows;
    }

    const getQuincenaFromDate = (date: string) => {
        const currentDate = new Date(date);
        const day = currentDate.getDate();

        if (day >= 1 && day <= 15) {
            return "Primera quincena";
        } else {
            return "Segunda quincena";
        }
    };

    const getfechaLocal = (quincena: string) => {
        const currentDate = new Date();
        const month = currentDate.toLocaleString("default", { month: "long" });
        const year = currentDate.getFullYear();

        if (quincena === "Primera quincena") {
            return `Del 1 al 15 de ${month} ${year}`;
        } else if (quincena === "Segunda quincena") {
            const lastDayOfMonth = new Date(
                year,
                currentDate.getMonth() + 1,
                0
            ).getDate();
            return `Del 16 al ${lastDayOfMonth} de ${month} ${year}`;
        }

        return "";
    };

    const router = useRouter();

    return (
        <>
            <TableContainer variant="outlined" component={Paper}>
                <Table size="small" aria-label="collapsible table">
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Fecha</TableCell>
                            <TableCell>Quincena</TableCell>
                            <TableCell>Informe N°</TableCell>
                            <TableCell>Ver/Descargar</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {generateRows().map((row, index) => (
                            <Row
                                key={index}
                                row={row}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}

function Row(props: {
    row: {
        quincena: string;
        fechaLocal: string;
        muestras: DataHormigon[];
        numeroInforme: number;
        storedSelectedDate: string;
        storedNumeroCarta: number;
    };
}) {
    const { row } = props;
    const { quincena, fechaLocal, muestras, numeroInforme } = row;
    const [open, setOpen] = useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? (
                            <KeyboardArrowUpIcon />
                        ) : (
                            <KeyboardArrowDownIcon />
                        )}
                    </IconButton>
                </TableCell>
                <TableCell>{fechaLocal}</TableCell>
                <TableCell>{quincena}</TableCell>
                <TableCell>{numeroInforme}</TableCell>
                <TableCell>
                <VerDescargarInforme
                    numeroInforme={row.numeroInforme}
                    row={row}
                    storedSelectedDate={row.storedSelectedDate}
                    storedNumeroCarta={row.storedNumeroCarta}
                />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={5} // Adjust the colspan to match the number of columns
                >
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography
                                variant="h6"
                                gutterBottom
                                component="div"
                            >
                                Muestras de Hormigón
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Muestra N°</TableCell>
                                        <TableCell>
                                            Asentamiento de Cono
                                        </TableCell>
                                        <TableCell>Fecha de Muestreo</TableCell>
                                        {/* Agrega las demás columnas necesarias */}
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {muestras.map((muestra, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                {index + 1}
                                            </TableCell>
                                            <TableCell>
                                                {muestra.asentamientoCono}
                                            </TableCell>
                                            <TableCell>
                                                {muestra.fechaLocal}
                                            </TableCell>
                                            {/* Agrega las demás celdas de la muestra de hormigón */}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}
// 
// 
// 
// 