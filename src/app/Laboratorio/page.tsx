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
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import { Button } from "@mui/material";
import VerDescargarInforme from "@/components/function/VerDescargarInforme";
import { Test } from "@/components/test/Test";

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
    fechaMuestreo: string;
    muestra: number;
    codigo: string;
    asentamientoCono: number;
    // Agrega las demás propiedades de la muestra de hormigón
}

export default function Laboratorio() {
    const [informeData, setInformeData] = useState<DataInforme | null>(null);
    const [hormigonData, setHormigonData] = useState<DataHormigon[]>([]);
    const [muestraCounter, setMuestraCounter] = useState(0);
    const [numeroInforme, setNumeroInforme] = useState(0);

    useEffect(() => {
        // Cargar los datos del Local Storage al cargar la página
        const informeDataFromLocalStorage = localStorage.getItem("informeData");
        const hormigonDataFromLocalStorage =
            localStorage.getItem("hormigonData");

        if (informeDataFromLocalStorage) {
            const parsedInformeData: DataInforme = JSON.parse(
                informeDataFromLocalStorage
            );
            setInformeData(parsedInformeData);
            setNumeroInforme(parsedInformeData.numeroInforme + 1); // Incrementar el número de informe correlativo en 1
        }

        if (hormigonDataFromLocalStorage) {
            const parsedHormigonData: DataHormigon[] = JSON.parse(
                hormigonDataFromLocalStorage
            );
            setHormigonData(parsedHormigonData);
            setMuestraCounter(parsedHormigonData.length);
        }
    }, []);

    const generateRows = () => {
        // Agrupar las muestras de hormigón por quincena
        const groupedHormigonData: { [key: string]: DataHormigon[] } = {};

        for (const data of hormigonData) {
            const quincena = getQuincenaFromDate(data.fechaMuestreo);

            if (groupedHormigonData[quincena]) {
                groupedHormigonData[quincena].push(data);
            } else {
                groupedHormigonData[quincena] = [data];
            }
        }

        // Generar las filas de la tabla
        const rows = [];

        for (const quincena in groupedHormigonData) {
            const muestras = groupedHormigonData[quincena];

            rows.push({
                quincena,
                fechaMuestreo: getFechaMuestreo(quincena),
                muestras,
            });
        }

        return rows;
    };

    const getQuincenaFromDate = (date: string) => {
        const currentDate = new Date(date);
        const day = currentDate.getDate();

        if (day >= 1 && day <= 15) {
            return "Primera quincena";
        } else {
            return "Segunda quincena";
        }
    };

    const getFechaMuestreo = (quincena: string) => {
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

    return (
        <TableContainer component={Paper}>
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
                            numeroInforme={numeroInforme}
                        />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

function Row(props: {
    row: {
        quincena: string;
        fechaMuestreo: string;
        muestras: DataHormigon[];
    };
    numeroInforme: number;
}) {
    const { row, numeroInforme } = props;
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
                <TableCell>{row.fechaMuestreo}</TableCell>
                <TableCell>{row.quincena}</TableCell>
                <TableCell>{numeroInforme}</TableCell>
                <TableCell>
                    <VerDescargarInforme numeroInforme={numeroInforme} row={row}  />
                </TableCell>
            </TableRow>
            {/*  */}
            {/*  */}
            <TableRow>
                <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={4}
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
                                    {row.muestras.map((muestra, index) => (
                                        <TableRow key={index}>
                                            <TableCell>
                                                {muestra.muestra}
                                            </TableCell>
                                            <TableCell>
                                                {muestra.asentamientoCono}
                                            </TableCell>
                                            <TableCell>
                                                {muestra.fechaMuestreo}
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
            <div style={{width:"40vw", height:"100vh"}}>

            <Test pasa={undefined}/>
            </div>
        </React.Fragment>
    );
}

/*  */
/*  */
/*  */
