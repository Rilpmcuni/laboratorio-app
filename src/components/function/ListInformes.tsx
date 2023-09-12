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
import VerDescargarInforme from "@/components/function/VerDescargarInforme";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { format, addMonths, isLastDayOfMonth, isBefore } from "date-fns";
import { Chip, Divider } from "@mui/material";

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
    fechaToma: string;
    // Agrega las demás propiedades de la muestra de hormigón
}

export default function ListInformes() {
    const [data, setData] = useState<{
        informeData: DataInforme | null;
        hormigonData: DataHormigon[];
        muestraCounter: number;
        numeroInforme: number;
        rows: any[];
    }>({
        informeData: null,
        hormigonData: [],
        muestraCounter: 0,
        numeroInforme: 0,
        rows: [],
    });

    const [selectedMonth, setSelectedMonth] = useState<string>("");
    const [selectedQuincena, setSelectedQuincena] =
        useState<string>("Primera quincena");

    function esFechaEnQuincena(
        fecha: string | undefined, // Cambiar el tipo de fecha a string o undefined
        selectedMonth: string,
        quincena: string
    ) {
        if (!fecha) {
            return false; // Si fecha es undefined, retorna false
        }

        // Reformatear la fecha al formato "yyyy-MM-dd"
        const [day, month, year] = fecha.split("/");
        const reformattedFecha = `${year}-${month}-${day}`;

        const muestraDate = new Date(reformattedFecha);
        const muestraMonth = muestraDate.getMonth() + 1;
        const muestraYear = muestraDate.getFullYear();
        const quincenaStartDay = quincena === "Primera quincena" ? 1 : 16;
        const lastDayOfMonth = new Date(muestraYear, muestraMonth, 0).getDate();
        const quincenaEndDay =
            quincena === "Primera quincena" ? 15 : lastDayOfMonth;

        const selectedDate = new Date(selectedMonth);
        const selectedMonthNumber = selectedDate.getMonth() + 1;
        const selectedYear = selectedDate.getFullYear();

        return (
            muestraMonth === selectedMonthNumber &&
            muestraYear === selectedYear &&
            parseInt(day) >= quincenaStartDay &&
            parseInt(day) <= quincenaEndDay
        );
    }

    useEffect(() => {
        const informeDataFromLocalStorage =
            localStorage.getItem("laboratorioData");
        const storedHormigonData = localStorage.getItem("hormigonData");
        const storedInformesData = localStorage.getItem("InformesData");

        if (informeDataFromLocalStorage) {
            const parsedInformeData: DataInforme = JSON.parse(
                informeDataFromLocalStorage
            );
            setData((prevData) => ({
                ...prevData,
                informeData: parsedInformeData,
            }));
        }

        if (storedHormigonData) {
            const parsedHormigonData: DataHormigon[] =
                JSON.parse(storedHormigonData);

            setData((prevData) => ({
                ...prevData,
                hormigonData: parsedHormigonData,
            }));
        }

        if (storedInformesData) {
            const parsedInformesData: any[] = JSON.parse(storedInformesData);
            setData((prevData) => ({
                ...prevData,
                rows: parsedInformesData,
            }));

            // Recuperar el último valor de selectedMonth y selectedQuincena
            if (parsedInformesData.length > 0) {
                const lastRow =
                    parsedInformesData[parsedInformesData.length - 1];
                setSelectedMonth(lastRow.selectedMonth);
                setSelectedQuincena(lastRow.selectedQuincena);
            }
        }
    }, []);

    const getfechaLocal = (quincena: string, selectedMonth: string) => {
        const currentDate = new Date(selectedMonth + "-01");
        const monthNames = [
            "enero",
            "febrero",
            "marzo",
            "abril",
            "mayo",
            "junio",
            "julio",
            "agosto",
            "septiembre",
            "octubre",
            "noviembre",
            "diciembre",
        ];

        const month = monthNames[currentDate.getMonth()];
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
    //
    //
    //

    const generateInitialQuincena = () => {
        const currentDate = new Date(selectedMonth);
        let currentYear = currentDate.getFullYear();
        let currentMonth = currentDate.getMonth();

        // Obtener las muestras de hormigón que están dentro del rango de la quincena actual
        const muestrasEnQuincena = data.hormigonData.filter((muestra) => {
            const fechaLocal = muestra.fechaLocal;
            return esFechaEnQuincena(
                fechaLocal,
                selectedMonth,
                selectedQuincena
            );
        });

        const newQuincena = {
            quincena: selectedQuincena,
            fechaLocal: getfechaLocal(selectedQuincena, selectedMonth),
            // No agregues muestras aquí
            numeroInforme: data.informeData
                ? data.informeData.numeroInforme + data.rows.length
                : 1,
            storedSelectedDate: "",
            storedNumeroCarta: 0,
            ensayos: false,
            selectedMonth: selectedMonth,
            selectedQuincena: selectedQuincena,
        };

        const newRows = [...data.rows, newQuincena];
        setData((prevData) => ({
            ...prevData,
            rows: newRows,
        }));

        localStorage.setItem(`ensayos_${newQuincena.numeroInforme}`, "false");
        localStorage.setItem("InformesData", JSON.stringify(newRows));
    };
    //
    //
    //
    const generateNextQuincena = () => {
        const lastRow = data.rows[data.rows.length - 1];
        const lastSelectedMonth = new Date(lastRow.selectedMonth);
        const lastSelectedQuincena = lastRow.selectedQuincena;

        let nextMonth = addMonths(lastSelectedMonth, 1);

        // Verificar si la última quincena es "Segunda quincena" y avanzar al siguiente mes
        if (lastSelectedQuincena === "Segunda quincena") {
            nextMonth = addMonths(nextMonth, 1);
        }

        const formattedNextMonth = format(nextMonth, "yyyy-MM");

        const nextQuincena =
            lastSelectedQuincena === "Primera quincena"
                ? "Segunda quincena"
                : "Primera quincena";

        // Obtener las muestras de hormigón que están dentro del rango de la quincena actual
        const muestrasEnQuincena = data.hormigonData.filter((muestra) => {
            const fechaLocal = muestra.fechaLocal;
            return esFechaEnQuincena(
                fechaLocal,
                formattedNextMonth,
                nextQuincena
            );
        });

        const newQuincena = {
            quincena: nextQuincena,
            fechaLocal: getfechaLocal(nextQuincena, formattedNextMonth),
            // No agregues muestras aquí
            numeroInforme: lastRow.numeroInforme + 1,
            storedSelectedDate: "",
            storedNumeroCarta: 0,
            ensayos: false,
            selectedMonth: formattedNextMonth,
            selectedQuincena: nextQuincena,
        };

        const newRows = [...data.rows, newQuincena];
        setData((prevData) => ({
            ...prevData,
            rows: newRows,
        }));

        localStorage.setItem(`ensayos_${newQuincena.numeroInforme}`, "false");
        localStorage.setItem("InformesData", JSON.stringify(newRows));
    };
    return (
        <>
            <TableContainer variant="outlined" component={Paper}>
                <Table
                    size="small"
                    aria-label="collapsible table"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell />
                            <TableCell>Fecha</TableCell>
                            <TableCell>Quincena</TableCell>
                            <TableCell>Informe N°</TableCell>
                            <TableCell>Ver</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data.rows.map((row, index) => (
                            <Row
                                key={index}
                                row={row}
                                selectedMonth={selectedMonth}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            {data.rows.length > 0 && (
                <Button variant="contained" onClick={generateNextQuincena}>
                    Generar Siguiente Quincena
                </Button>
            )}
            {data.rows.length === 0 && (
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        marginTop: 2,
                    }}
                >
                    <TextField
                        id="selectedMonth"
                        label="Mes"
                        type="month"
                        value={selectedMonth}
                        onChange={(e) => setSelectedMonth(e.target.value)}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        sx={{ marginRight: 2 }}
                    />
                    <FormControl sx={{ minWidth: 120 }}>
                        <InputLabel id="selectedQuincena-label">
                            Quincena
                        </InputLabel>
                        <Select
                            labelId="selectedQuincena-label"
                            id="selectedQuincena"
                            value={selectedQuincena}
                            onChange={(e) =>
                                setSelectedQuincena(e.target.value as string)
                            }
                        >
                            <MenuItem value="Primera quincena">
                                Primera quincena
                            </MenuItem>
                            <MenuItem value="Segunda quincena">
                                Segunda quincena
                            </MenuItem>
                        </Select>
                    </FormControl>
                    <Button
                        variant="contained"
                        onClick={generateInitialQuincena}
                    >
                        Generar Primera Quincena
                    </Button>
                </Box>
            )}
        </>
    );
}

function Row(props: {
    row: {
        quincena: string;
        fechaLocal: string;
        numeroInforme: number;
        storedSelectedDate: string;
        storedNumeroCarta: number;
        ensayos: boolean;
    };
    selectedMonth: string;
}) {
    const { row, selectedMonth } = props;
    const { quincena, fechaLocal, numeroInforme, ensayos } = row;
    const [open, setOpen] = useState(false);

    // Obtener los ensayos de hormigón del localStorage
    const storedHormigonData = localStorage.getItem("hormigonData");
    const hormigonData: DataHormigon[] = storedHormigonData
        ? JSON.parse(storedHormigonData)
        : [];

    // Función para verificar si una fecha está en la quincena
    function esFechaEnQuincena(
        fecha: string | undefined,
        selectedMonth: string,
        quincena: string
    ) {
        if (!fecha) {
            return false; // Si fecha es undefined, retorna false
        }

        // Reformatear la fecha al formato "yyyy-MM-dd"
        const [day, month, year] = fecha.split("/");
        const reformattedFecha = `${year}-${month}-${day}`;

        const muestraDate = new Date(reformattedFecha);
        const muestraMonth = muestraDate.getMonth() + 1;
        const muestraYear = muestraDate.getFullYear();
        const quincenaStartDay = quincena === "Primera quincena" ? 1 : 16;
        const lastDayOfMonth = new Date(muestraYear, muestraMonth, 0).getDate();
        const quincenaEndDay =
            quincena === "Primera quincena" ? 15 : lastDayOfMonth;

        const selectedDate = new Date(selectedMonth);
        const selectedMonthNumber = selectedDate.getMonth() + 1;
        const selectedYear = selectedDate.getFullYear();

        return (
            muestraMonth === selectedMonthNumber &&
            muestraYear === selectedYear &&
            parseInt(day) >= quincenaStartDay &&
            parseInt(day) <= quincenaEndDay
        );
    }

    // Filtrar los ensayos de hormigón por fecha y quincena
    const filteredMuestras = hormigonData.filter((muestra) =>
        esFechaEnQuincena(muestra.fechaToma, selectedMonth, quincena)
    );

    return (
        <React.Fragment>
            <TableRow
                sx={{
                    "& > *": { borderBottom: "unset" },
                    borderBottom: "1px solid #d9d9d9",
                }}
            >
                {/* <span onClick={() => console.log(hormigonData)}>
                    hormigonData
                </span>
                <span onClick={() => console.log(filteredMuestras)}>
                    filteredMuestras
                </span> */}
                <TableCell>
                    {filteredMuestras.length > 0 ? (
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
                    ) : (
                        <TableRow>
                            <Chip
                                label="Sin movimiento"
                                size="small"
                                color="warning"
                            />
                            {/* <TableCell colSpan={3}>Sin movimiento</TableCell> */}
                        </TableRow>
                    )}
                </TableCell>
                <TableCell>{fechaLocal}</TableCell>
                <TableCell>{quincena}</TableCell>
                <TableCell>{numeroInforme}</TableCell>
                <TableCell>
                    <VerDescargarInforme
                        ensayos={filteredMuestras}
                        numeroInforme={row.numeroInforme}
                        row={row}
                        storedSelectedDate={row.storedSelectedDate}
                        storedNumeroCarta={row.storedNumeroCarta}
                    />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell
                    style={{
                        paddingBottom: 0,
                        paddingTop: 0,
                    }}
                    colSpan={5}
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
                            {filteredMuestras.length > 0 ? (
                                <Table size="small" aria-label="purchases">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Muestra N°</TableCell>
                                            <TableCell>
                                                Asentamiento de Cono
                                            </TableCell>
                                            <TableCell>
                                                Fecha de Muestreo
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {filteredMuestras.map(
                                            (muestra, index) => (
                                                <TableRow
                                                    sx={{
                                                        "& > *": {
                                                            borderBottom:
                                                                "unset",
                                                        },
                                                        borderBottom:
                                                            "1px solid ",
                                                        borderBottomColor:
                                                            "secondary.contrastText",
                                                    }}
                                                    key={index}
                                                >
                                                    <TableCell>
                                                        {index + 1}
                                                    </TableCell>
                                                    <TableCell>
                                                        {
                                                            muestra.asentamientoCono
                                                        }
                                                    </TableCell>
                                                    <TableCell>
                                                        {muestra.fechaToma}
                                                    </TableCell>
                                                </TableRow>
                                            )
                                        )}
                                    </TableBody>
                                </Table>
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={3}>
                                        Sin muestras de hormigón
                                    </TableCell>
                                </TableRow>
                            )}
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}
