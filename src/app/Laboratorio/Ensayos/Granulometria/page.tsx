"use client";
import { useState, useEffect, useCallback } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {
    Box,
    Divider,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField,
    ToggleButton,
    ToggleButtonGroup,
    Typography,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
interface DataInforme {
    banda: string;
}
interface FraccionData {
    string: string;
    simb: string;
    input: string;
}

const fraccionDataSobre = (string: string, simb: string): FraccionData => {
    return { string, simb, input: "0" };
};

const fraccionDataBajo = (string: string, simb: string): FraccionData => {
    return { string, simb, input: "0" };
};

const Granulometria = () => {
    /* lado */

    const [alignment, setAlignment] = useState("izquierda");

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string
    ) => {
        setAlignment(newAlignment);
    };
    /* lado */
    const [porcentajesPasaArray, setPorcentajesPasaArray] = useState<number[]>([]);

    const porcentajesPasa: number[] = [];
    const [startIndex, setStartIndex] = useState<number>(0);
    const [aver, setAver] = useState<any>("54");
    const [selected, setSelected] = useState<boolean>(false);
    const [calculated, setCalculated] = useState<boolean>(false); // Nuevo estado

    function createData(
        mm: number | string,
        astm: string
    ): { mm: number | string; astm: string } {
        return { mm, astm };
    }

    const [fraccionSobreData, setFraccionSobreData] = useState<FraccionData[]>([
        fraccionDataSobre("P. muestra total seca a tamizar", "Z"),
        fraccionDataSobre("P. seco inicial retenido en", "D"),
        fraccionDataSobre("P. seco lavado retenido en", "D´"),
        fraccionDataSobre("Σ retenido sobre tamíz", "Σ Mi"),
    ]);

    const [fraccionBajoData, setFraccionBajoData] = useState<FraccionData[]>([
        fraccionDataBajo("P. seco inicial pasa", "C"),
        fraccionDataBajo("P. seco cuarteo pasa", "C´"),
        fraccionDataBajo("P. seco cuarteo lavado", "C´´"),
        fraccionDataBajo("Σ retenido sobre tamíz", "Σ Mi"),
    ]);

    const rows = [
        createData(150, '6"'),
        createData(125, '5"'),
        createData(100, '4"'),
        createData(80, '3"'),
        createData(63, '2½"'),
        createData(50, '2"'),
        createData(40, '1½"'),
        createData(25, '1"'),
        createData(20, '¾"'),
        createData(10, '⅜"'),
        createData(5, "N°4"),
        createData("Residuo ;(R1)", "Residuo ;(R1)"),
        createData(2, "N°10"),
        createData(0.5, "N°40"),
        createData(0.08, "N°200"),
        createData("Residuo ;(R2)", "Residuo ;(R2)"),
    ];

    const [pMuestra, setPMuestra] = useState<number>(0);
    const [pesosRetenidos, setPesosRetenidos] = useState<number[]>([
        ...Array(rows.length - 4).fill(0),
        parseFloat(fraccionBajoData[1].input),
        ...Array(4).fill(0),
    ]);

    const handleInputChange = useCallback(
        (
            index: number,
            value: string,
            data: FraccionData[],
            setData: (data: FraccionData[]) => void
        ) => {
            // Solo actualizar si aún no se ha calculado
            if (!calculated) {
                const inputValue = parseFloat(value);
                const clampedValue = Math.min(
                    Math.max(inputValue, -100000),
                    10000
                );

                const updatedData = data.map((fraccion, i) =>
                    i === index
                        ? { ...fraccion, input: clampedValue.toString() }
                        : fraccion
                );

                setData(updatedData);

                if (index === 1 && clampedValue > 0 && startIndex === 0) {
                    setStartIndex(index);
                }
            }
        },
        [startIndex, calculated]
    );

    const handlePesoRetenidoChange = useCallback(
        (currentIndex: number, newValue: number) => {
            // Solo actualizar si aún no se ha calculado
            if (!calculated) {
                const updatedPesosRetenidos = [...pesosRetenidos];
                updatedPesosRetenidos[currentIndex] = newValue;
                setPesosRetenidos(updatedPesosRetenidos);
            }
        },
        [pesosRetenidos, calculated]
    );

    const calculateSum = () => {
        const valorSobre = parseFloat(fraccionSobreData[1].input);
        const valorBajo = parseFloat(fraccionBajoData[0].input);
        const suma = valorSobre + valorBajo;

        const updatedData = fraccionSobreData.map((fraccion, index) => {
            if (index === 0) {
                return { ...fraccion, input: suma.toString() };
            }
            return fraccion;
        });
        setPMuestra(suma);

        setFraccionSobreData(updatedData);
    };

    useEffect(() => {
        calculateSum();
    }, [fraccionSobreData, fraccionBajoData]);

    useEffect(() => {
        if (aver !== porcentajesPasa[10]?.toFixed(2)) {
            setAver(porcentajesPasa[10]?.toFixed(2) || "0");
        }
    }, [porcentajesPasa, aver]);
    /* banda */
    const data = {
        "TM-50a": [
            100,
            null,
            { min: 55, max: 100 },
            null,
            { min: 30, max: 75 },
            { min: 20, max: 65 },
            null,
            { min: 10, max: 50 },
            { min: 5, max: 30 },
            { min: 0, max: 20 },
        ],
        "TM-50b": [
            100,
            { min: 70, max: 100 },
            { min: 55, max: 85 },
            { min: 45, max: 75 },
            { min: 35, max: 65 },
            { min: 25, max: 55 },
            null,
            { min: 15, max: 45 },
            { min: 5, max: 25 },
            { min: 0, max: 10 },
        ],
        "TM-50c": [
            100,
            null,
            { min: 70, max: 100 },
            { min: 60, max: 90 },
            { min: 40, max: 75 },
            { min: 30, max: 60 },
            null,
            { min: 15, max: 45 },
            { min: 10, max: 30 },
            { min: 0, max: 15 },
        ],
        "TM-40a": [
            null,
            100,
            { min: 70, max: 100 },
            { min: 50, max: 80 },
            { min: 25, max: 50 },
            { min: 10, max: 30 },
            { min: 5, max: 15 },
            null,
            { min: 0, max: 5 },
            { min: 0, max: 3 },
        ],
        "TM-40b": [
            null,
            100,
            null,
            { min: 80, max: 100 },
            null,
            { min: 50, max: 80 },
            { min: 35, max: 65 },
            null,
            { min: 25, max: 50 },
            { min: 10, max: 30 },
            { min: 5, max: 15 },
        ],
        "TM-40c": [
            null,
            100,
            { min: 80, max: 100 },
            null,
            { min: 50, max: 80 },
            { min: 35, max: 65 },
            null,
            { min: 25, max: 50 },
            { min: 15, max: 30 },
            { min: 5, max: 20 },
        ],
        "TM-25": [
            null,
            null,
            100,
            { min: 70, max: 100 },
            { min: 50, max: 80 },
            { min: 35, max: 65 },
            null,
            { min: 25, max: 50 },
            { min: 10, max: 30 },
            { min: 0, max: 15 },
        ],
    };
    const [informeData, setInformeData] = useState<DataInforme | null>(null);
    const [bandaActual, setBandaActual] = useState("");
    useEffect(() => {
        // Cargar los datos del Local Storage al cargar la página
        const informeDataFromLocalStorage = localStorage.getItem("informeData");

        if (informeDataFromLocalStorage) {
            const parsedInformeData: DataInforme = JSON.parse(
                informeDataFromLocalStorage
            );
            setBandaActual(parsedInformeData.banda);
        }
    }, []);
    
    // const [porcentajesretenidos, setPorcentajesretenidos] = useState(null)
    useEffect(() => {
        const calculatedPorcentajesPasa: number[] = [];
    
        rows.forEach((row, index) => {
            const currentIndex = index + startIndex;
            const pMuestraTotal =
                currentIndex >= rows.length - 4
                    ? parseFloat(fraccionBajoData[1].input)
                    : pMuestra;
            const porcentajeRetenido =
                currentIndex >= rows.length - 4
                    ? (pesosRetenidos[currentIndex] /
                          parseFloat(fraccionBajoData[1].input)) *
                      aver
                    : (pesosRetenidos[currentIndex] / pMuestraTotal) * 100;
    
            let porcentajePasa =
                currentIndex === startIndex ? 100 : calculatedPorcentajesPasa[index - 1];
            porcentajePasa -= porcentajeRetenido;
    
            calculatedPorcentajesPasa[index] = porcentajePasa;
        });
    
        setPorcentajesPasaArray(calculatedPorcentajesPasa);
    }, [startIndex, pMuestra, pesosRetenidos, aver, fraccionBajoData]);
    
    return (
        <Box>
            bandaActual{bandaActual}bandaActual
            <Box
                sx={{
                    display: "flex",
                    // justifyContent: "space-between",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "0.5rem",
                }}
            >
                <TableContainer component={Paper}>
                    <Table
                        sx={{ width: "100%" }}
                        aria-label="simple table"
                        size="small"
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell
                                    align="center"
                                    colSpan={5}
                                    sx={{ paddingX: 0, fontWeight: "bolder" }}
                                >
                                    Fracción Sobre{" "}
                                    {!selected
                                        ? rows[10].astm
                                        : rows[10].mm + " mm"}
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {fraccionSobreData.map((fraccion, index) => (
                                <TableRow key={index}>
                                    <TableCell>
                                        {fraccion.string}{" "}
                                        {index === 0
                                            ? null
                                            : !selected
                                            ? rows[10].astm
                                            : rows[10].mm + " mm"}
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            size="small"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <span
                                                            style={{
                                                                color: "GREY",
                                                                fontWeight:
                                                                    "bolder",
                                                                fontSize:
                                                                    "0.85rem",
                                                                display: "flex",
                                                                alignItems:
                                                                    "center",
                                                                justifyContent:
                                                                    "center",
                                                            }}
                                                        >
                                                            {fraccion.simb}
                                                        </span>
                                                    </InputAdornment>
                                                ),
                                            }}
                                            type="number"
                                            value={fraccion.input}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    index,
                                                    e.target.value,
                                                    fraccionSobreData,
                                                    setFraccionSobreData
                                                )
                                            }
                                            disabled={index === 0}
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

                <TableContainer component={Paper}>
                    <Table
                        sx={{ width: "100%" }}
                        aria-label="simple table"
                        size="small"
                    >
                        <TableHead>
                            <TableRow>
                                <TableCell
                                    align="center"
                                    colSpan={5}
                                    sx={{ paddingX: 0, fontWeight: "bolder" }}
                                >
                                    Fracción Bajo{" "}
                                    {!selected
                                        ? rows[10].astm
                                        : rows[10].mm + " mm"}
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {fraccionBajoData.map((fraccion, index) => (
                                <TableRow key={index}>
                                    <TableCell>
                                        {fraccion.string}{" "}
                                        {!selected
                                            ? rows[10].astm
                                            : rows[10].mm + " mm"}
                                    </TableCell>
                                    <TableCell>
                                        <TextField
                                            size="small"
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <span
                                                            style={{
                                                                color: "GREY",
                                                                fontWeight:
                                                                    "bolder",
                                                                fontSize:
                                                                    "0.85rem",
                                                                display: "flex",
                                                                alignItems:
                                                                    "center",
                                                                justifyContent:
                                                                    "center",
                                                            }}
                                                        >
                                                            {fraccion.simb}
                                                        </span>
                                                    </InputAdornment>
                                                ),
                                            }}
                                            type="number"
                                            value={fraccion.input}
                                            onChange={(e) =>
                                                handleInputChange(
                                                    index,
                                                    e.target.value,
                                                    fraccionBajoData,
                                                    setFraccionBajoData
                                                )
                                            }
                                        />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
            <Divider variant="middle" sx={{ marginY: "0.5rem" }} />
            <>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                        Material
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        // value={claseLicencia}
                        label="Material"
                        // onChange={(event: SelectChangeEvent<string>) => {
                        //     setClaseLicencia(event.target.value as string);
                        // }}
                    >
                        <MenuItem value={1}>Sub Base Granular</MenuItem>
                        <MenuItem value={2}>Base Granular</MenuItem>
                        <MenuItem value={3}>Carpeta Granular</MenuItem>
                        <MenuItem value={3}>Terraplén</MenuItem>
                        <MenuItem value={3}>Relleno Estructural</MenuItem>
                    </Select>
                </FormControl>
            </>
            <>
                <Typography variant="subtitle1">Pista / Faja</Typography>
                <ToggleButtonGroup
                    color="primary"
                    value={alignment}
                    exclusive
                    onChange={handleChange}
                    aria-label="Platform"
                >
                    <ToggleButton value="izquierda">Izquierda</ToggleButton>
                    <ToggleButton value="derecha">Derecha</ToggleButton>
                </ToggleButtonGroup>
            </>
            <TableContainer component={Paper}>
                <Table
                    sx={{ width: "100%" }}
                    aria-label="simple table"
                    size="small"
                >
                    <TableHead>
                        <TableRow>
                            <TableCell
                                align="center"
                                sx={{ paddingX: 1, fontWeight: "bolder" }}
                            >
                                <ToggleButton
                                    sx={{ fontWeight: "bolder" }}
                                    value="check"
                                    selected={selected}
                                    onChange={() => {
                                        setSelected(!selected);
                                    }}
                                >
                                    Tamíz {!selected ? "(ASTM)" : "(mm.)"}
                                </ToggleButton>
                            </TableCell>
                            <TableCell
                                align="center"
                                sx={{ paddingX: 1, fontWeight: "bolder" }}
                            >
                                P. Retenido
                            </TableCell>
                            <TableCell
                                align="center"
                                sx={{ paddingX: 1, fontWeight: "bolder" }}
                            >
                                %. Retenido
                            </TableCell>
                            <TableCell
                                align="center"
                                sx={{ paddingX: 1, fontWeight: "bolder" }}
                            >
                                %. Pasa
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => {
                            const currentIndex = index + startIndex;
                            const pMuestraTotal =
                                currentIndex >= rows.length - 4
                                    ? parseFloat(fraccionBajoData[1].input)
                                    : pMuestra;
                            const porcentajeRetenido =
                                currentIndex >= rows.length - 4
                                    ? (pesosRetenidos[currentIndex] /
                                          parseFloat(
                                              fraccionBajoData[1].input
                                          )) *
                                      aver
                                    : (pesosRetenidos[currentIndex] /
                                          pMuestraTotal) *
                                      100;

                            let porcentajePasa =
                                currentIndex === startIndex
                                    ? 100
                                    : porcentajesPasa[index - 1];
                            porcentajePasa -= porcentajeRetenido;

                            porcentajesPasa[index] = porcentajePasa;
                            // setPorcentajesretenidos(porcentajePasa.toFixed(2));
                            console.log(porcentajePasa.toFixed(2));
                            return (
                                <TableRow key={row.mm}>
                                    <TableCell
                                        component="th"
                                        scope="row"
                                        align="center"
                                        sx={{
                                            fontWeight: "bolder",
                                            color: "GREY",
                                        }}
                                    >
                                        {!selected ? row.astm : row.mm}
                                    </TableCell>
                                    <TableCell
                                        align="center"
                                        sx={{ width: "100%", p: 0, m: 0 }}
                                    >
                                        <TextField
                                            size="small"
                                            value={pesosRetenidos[currentIndex]}
                                            onChange={(e) =>
                                                handlePesoRetenidoChange(
                                                    currentIndex,
                                                    parseFloat(e.target.value)
                                                )
                                            }
                                            id="outlined-basic"
                                            variant="outlined"
                                            type="number"
                                            inputProps={{ min: 0 }}
                                        />
                                    </TableCell>
                                    <TableCell align="center">
                                        {porcentajeRetenido.toFixed(2)}
                                    </TableCell>
                                    <TableCell align="center">
                                        {porcentajePasa.toFixed(2)}
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <Divider variant="middle" sx={{ marginY: "1rem" }} />
            {porcentajesPasaArray}
        </Box>
    );
};
export default Granulometria;
