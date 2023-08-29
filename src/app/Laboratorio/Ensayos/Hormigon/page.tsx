"use client";
import React, { useState, useEffect } from "react";
import {
    Typography,
    TextField,
    Autocomplete,
    Box,
    Button,
    Collapse,
    Grid,
    Card,
    CardContent,
    MenuItem,
    Select,
    InputLabel,
    FormControl,
    SelectChangeEvent,
    InputAdornment,
} from "@mui/material";
import CardActions from "@mui/material/CardActions";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import MetodoConoAbrams from "@/components/metodos/MetodoConoAbrams";
import { Codigo } from "@/utils/Codigo";
import { useFechaYHoraActual } from "@/utils/Fecha";
import { SimpleSnackbar } from "@/components/feedback/SnackBar";

interface DataHormigon {
    nombreContrato: string;
    proveedor: string | null;
    gradoHormigon: string | null;
    dosificacion: number | null;
    visacion: number | null;
    visadoPor: string;
    guiaDespacho: number | null;
    patenteCamion: string;
    volumen: number | null;
    horaSalidaPlanta: string;
    horaLlegadaObra: string;
    codigo: string;
    tipoProbetas: string;
    cantidadProbetas: number | null;
    fechaLocal: string;
    horaInicioDescarga: string;
    horaMuestreo: string;
    asentamientoCono: number | null;
    temperaturaHormigon: number | null;
    temperaturaAmbiente: number | null;
    incorporacionAditivo: boolean;
    marcaAditivo: string;
    tipoAditivo: string;
    cantidadAditivo: number | null;
    edadEnsaye: number | null;
    region: string;
}

export default function HormigonFicha() {
    const [nombreContrato, setNombreContrato] = useState("");
    const [proveedor, setProveedor] = useState<string | null>(null);
    const [gradoHormigon, setGradoHormigon] = useState("");
    const [dosificacion, setDosificacion] = useState<number | null>(null);
    const [visacion, setVisacion] = useState<number | null>(null);
    const [visadoPor, setVisadoPor] = useState("");
    const [guiaDespacho, setGuiaDespacho] = useState<number | null>(null);
    const [patenteCamion, setPatenteCamion] = useState("");
    const [volumen, setVolumen] = useState<number | null>(null);
    const [horaSalidaPlanta, setHoraSalidaPlanta] = useState("");
    const [horaLlegadaObra, setHoraLlegadaObra] = useState("");
    const [horaLocal, setHoraLocal] = useState("");
    const [showSnackbar, setShowSnackbar] = useState(false);
    const [hormigonData, setHormigonData] = useState<DataHormigon[]>([]);
    const [muestra, setMuestra] = useState(1);
    const [codigo, setCodigo] = useState("");
    const [tipoProbetas, setTipoProbetas] = useState("");
    const [cantidadProbetas, setCantidadProbetas] = useState(3);
    const [fechaLocal, setFechaLocal] = useState("");
    const [horaInicioDescarga, setHoraInicioDescarga] = useState("");
    const [horaMuestreo, setHoraMuestreo] = useState("");
    const [asentamientoCono, setAsentamientoCono] = useState<number | null>(
        null
    );
    const [temperaturaHormigon, setTemperaturaHormigon] = useState<
        number | null
    >(null);
    const [temperaturaAmbiente, setTemperaturaAmbiente] = useState<
        number | null
    >(null);
    const [incorporacionAditivo, setIncorporacionAditivo] = useState(false);
    const [marcaAditivo, setMarcaAditivo] = useState("");
    const [tipoAditivo, setTipoAditivo] = useState("");
    const [cantidadAditivo, setCantidadAditivo] = useState<number | null>(null);
    const [edadEnsaye, setEdadEnsaye] = useState<number | null>(null);
    const [asentamientoConoError, setAsentamientoConoError] =
        useState<boolean>(false);
    const [rangoCono, setRangoCono] = useState<number[]>([0, 24]);
    const [region, setRegion] = useState("");

    const { fecha, hora } = useFechaYHoraActual();

    useEffect(() => {
        {
            fecha && setFechaLocal(fecha);
        }
        {
            hora && setHoraLocal(hora);
        }
    }, [fecha, hora]);

    useEffect(() => {
        // Cargar los datos del Local Storage al cargar la página
        const hormigonData = localStorage.getItem("hormigonData");
        if (hormigonData) {
            const parsedHormigonData: DataHormigon[] = JSON.parse(hormigonData);
            setHormigonData(parsedHormigonData);
            setMuestra(parsedHormigonData.length + 1);
        }

        // Obtener el laboratorioData del Local Storage si existe
        const laboratorioData = localStorage.getItem("laboratorioData");
        if (laboratorioData) {
            const parsedLaboratorioData: any = JSON.parse(laboratorioData);
            setNombreContrato(parsedLaboratorioData.nombreContrato);
            setRangoCono(parsedLaboratorioData.rangoCono); // Actualiza el rangoCono
            setRegion(parsedLaboratorioData.region); // Actualiza el rangoCono
        }
    }, []);

    const codigoTest = Codigo({
        length: hormigonData.length === 0 ? 1 : hormigonData.length + 1,
        opcion: gradoHormigon && `-${gradoHormigon}`,
    });

    useEffect(() => {
        setCodigo(codigoTest);
    }, [codigoTest]);

    const handleSaveData = () => {
        const newHormigonData: DataHormigon = {
            nombreContrato,
            proveedor,
            gradoHormigon,
            dosificacion,
            visacion,
            visadoPor,
            guiaDespacho,
            patenteCamion,
            volumen,
            horaSalidaPlanta,
            horaLlegadaObra,
            codigo,
            tipoProbetas,
            cantidadProbetas,
            fechaLocal,
            horaInicioDescarga,
            horaMuestreo,
            asentamientoCono,
            temperaturaHormigon,
            temperaturaAmbiente,
            incorporacionAditivo,
            marcaAditivo,
            tipoAditivo,
            cantidadAditivo,
            edadEnsaye,
            region,
            // Remove muestra property since it does not exist in DataHormigon type
        };

        localStorage.setItem(
            "hormigonData",
            JSON.stringify([...hormigonData, newHormigonData])
        );
        setHormigonData((prevData) => [...prevData, newHormigonData]);

        setShowSnackbar(true);
    };
    //
    //
    //
    //
    //
    return (
        <main
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <Typography
                variant="h3"
                fontWeight={900}
                sx={{ position: "relative" }}
            >
                Muestreo hormigón fresco
                {/* <Box > */}
                <MetodoConoAbrams />
                {/* </Box> */}
            </Typography>
            <Typography variant="subtitle2">
                HORMIGONES, MÉTODO PARA EXTRAER MUESTRAS DE HORMIGÓN FRESCO,
                ÍTEM 8.402.6
            </Typography>
            <Grid container spacing={1}>
                <Grid item xs={12} md={12}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Datos
                            </Typography>
                        </CardContent>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                flexWrap: "wrap",
                                p: 1.5,
                                gap: 1,
                            }}
                        >
                            <TextField
                                disabled
                                sx={{ width: "100%" }}
                                fullWidth
                                multiline
                                maxRows={0}
                                id="ontrolled"
                                label="Contrato"
                                value={nombreContrato}
                                color="primary"
                            />
                            <TextField
                                disabled
                                sx={{ flexGrow: 1 }}
                                id="muestra-numero"
                                label="Muestra N°"
                                value={`Muestra N°${
                                    hormigonData.length === 0
                                        ? 1
                                        : hormigonData.length + 1
                                }`}
                            />
                            <TextField
                                disabled
                                sx={{ flexGrow: 1 }}
                                id="codigo"
                                label="Código"
                                value={codigoTest}
                                inputProps={{
                                    style: { textTransform: "uppercase" },
                                }}
                            />
                            <TextField
                                disabled
                                // fullWidth
                                sx={{ flexGrow: 1 }}
                                id="fecha-muestreo"
                                label="Fecha Muestreo"
                                value={fechaLocal}
                            />
                            <TextField
                                disabled
                                // fullWidth
                                sx={{ flexGrow: 1 }}
                                id="hora-actual"
                                label="Hora actual"
                                value={horaLocal}
                            />
                        </Box>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Procedencia de hormigón
                            </Typography>
                        </CardContent>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                flexWrap: "wrap",
                                p: 1.5,
                                gap: 1,
                            }}
                        >
                            <Autocomplete
                                fullWidth
                                sx={{ flexGrow: 1 }}
                                id="proveedor-autocomplete"
                                options={[
                                    "Melon",
                                    "Bitumix",
                                    "Polpaico",
                                    "TecnoHabitat",
                                    "Hormigones Cbb",
                                    "Hormigones BSA",
                                    "Cementos Transex",
                                ]}
                                value={proveedor}
                                onChange={(event, value) => {
                                    setProveedor(value);
                                }}
                                renderInput={(params) => (
                                    <TextField
                                        {...params}
                                        label="Proveedor"
                                        fullWidth
                                    />
                                )}
                            />
                            <FormControl sx={{ minWidth: 140, flexGrow: 1 }}>
                                <InputLabel id="demo-simple-select-label">
                                    Grado H°
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={gradoHormigon}
                                    label="Grado H°"
                                    onChange={(
                                        event: SelectChangeEvent<string>
                                    ) => {
                                        setGradoHormigon(
                                            event.target.value as string
                                        );
                                    }}
                                >
                                    <MenuItem value="G05">G05</MenuItem>
                                    <MenuItem value="G10">G10</MenuItem>
                                    <MenuItem value="G15">G15</MenuItem>
                                    <MenuItem value="G17">G17</MenuItem>
                                    <MenuItem value="G20">G20</MenuItem>
                                    <MenuItem value="G25">G25</MenuItem>
                                    <MenuItem value="G30">G30</MenuItem>
                                    <MenuItem value="G35">G35</MenuItem>
                                    <MenuItem value="G40">G40</MenuItem>
                                </Select>
                            </FormControl>
                            <TextField
                                sx={{ flexGrow: 1 }}
                                id="dosificacion"
                                label="Dosificacion N°"
                                type="number"
                                value={dosificacion}
                                onChange={(event) => {
                                    setDosificacion(Number(event.target.value));
                                }}
                            />
                            <TextField
                                sx={{ flexGrow: 1 }}
                                id="visacion"
                                label="Visacion N°"
                                type="number"
                                value={visacion}
                                onChange={(event) => {
                                    setVisacion(Number(event.target.value));
                                }}
                            />
                            <TextField
                                sx={{ flexGrow: 1 }}
                                id="visado-por"
                                label="Visado por"
                                value={visadoPor}
                                onChange={(event) => {
                                    setVisadoPor(event.target.value);
                                }}
                            />
                            <TextField
                                sx={{ flexGrow: 1 }}
                                id="guia-despacho"
                                label="Guia despacho N°"
                                type="number"
                                value={guiaDespacho}
                                onChange={(event) => {
                                    setGuiaDespacho(Number(event.target.value));
                                }}
                            />
                            <TextField
                                sx={{ flexGrow: 1 }}
                                id="patente-camion"
                                label="Patente Camión"
                                value={patenteCamion}
                                onChange={(event) => {
                                    setPatenteCamion(
                                        event.target.value.toUpperCase()
                                    );
                                }}
                            />
                            <TextField
                                sx={{ flexGrow: 1 }}
                                id="volumen"
                                label="Volumen (m2)"
                                type="number"
                                value={volumen}
                                onChange={(event) => {
                                    setVolumen(Number(event.target.value));
                                }}
                            />
                            <TextField
                                fullWidth
                                sx={{ flexGrow: 1 }}
                                id="hora-salida-planta"
                                label="Hora salida planta"
                                type="time"
                                value={horaSalidaPlanta}
                                onChange={(event) => {
                                    setHoraSalidaPlanta(event.target.value);
                                }}
                            />
                            <TextField
                                fullWidth
                                sx={{ flexGrow: 1 }}
                                id="hora-llegada-obra"
                                label="Hora llegada obra"
                                type="time"
                                value={horaLlegadaObra}
                                onChange={(event) => {
                                    setHoraLlegadaObra(event.target.value);
                                }}
                            />
                        </Box>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Muestreo de hormigón fresco
                            </Typography>
                        </CardContent>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                flexWrap: "wrap",
                                p: 1.5,
                                gap: 1,
                            }}
                        >
                            <FormControl sx={{ minWidth: 140, flexGrow: 1 }}>
                                <InputLabel id="demo-simple-select-label">
                                    Tipo de Probetas
                                </InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={tipoProbetas}
                                    label="Tipo de Probetas"
                                    onChange={(
                                        event: SelectChangeEvent<string>
                                    ) => {
                                        setTipoProbetas(
                                            event.target.value as string
                                        );
                                    }}
                                >
                                    <MenuItem value="Cilindricas">
                                        Cilindricas
                                    </MenuItem>
                                    <MenuItem value="Cúbicas">Cúbicas</MenuItem>
                                    <MenuItem value="Prismáticas">
                                        Prismáticas
                                    </MenuItem>
                                </Select>
                            </FormControl>
                            <TextField
                                sx={{ flexGrow: 1 }}
                                id="cantidad-probetas"
                                label="Cantidad de Probetas"
                                type="number"
                                value={cantidadProbetas}
                                onChange={(event) => {
                                    setCantidadProbetas(
                                        Number(event.target.value)
                                    );
                                }}
                            />

                            <TextField
                                fullWidth
                                sx={{ flexGrow: 1 }}
                                id="hora-inicio-descarga"
                                label="Hora Inicio Descarga"
                                type="time"
                                value={horaInicioDescarga}
                                onChange={(event) => {
                                    setHoraInicioDescarga(event.target.value);
                                }}
                            />
                            <TextField
                                fullWidth
                                sx={{ flexGrow: 1 }}
                                id="hora-muestreo"
                                label="Hora de Muestreo"
                                type="time"
                                value={horaMuestreo}
                                onChange={(event) => {
                                    setHoraMuestreo(event.target.value);
                                }}
                            />
                            <TextField
                                sx={{ flexGrow: 1 }}
                                id="asentamiento-cono"
                                label="Asentamiento de Cono (cm)"
                                type="number"
                                value={asentamientoCono}
                                onChange={(event) => {
                                    const inputValue = Number(
                                        event.target.value
                                    );
                                    setAsentamientoCono(inputValue);
                                    if (
                                        inputValue >= rangoCono[0] &&
                                        inputValue <= rangoCono[1]
                                    ) {
                                        setAsentamientoConoError(false); // Valor válido, sin error
                                    } else {
                                        setAsentamientoConoError(true); // Valor inválido, con error
                                    }
                                }}
                                error={asentamientoConoError} // Indica si hay error en el valor
                                helperText={
                                    asentamientoConoError
                                        ? `Valor fuera de las especificaciones ${rangoCono[0]} y ${rangoCono[1]} cm`
                                        : ""
                                }
                            />
                            <TextField
                                sx={{ flexGrow: 1 }}
                                id="temperatura-hormigon"
                                label="Temperatura del Hormigón (C°)"
                                type="number"
                                value={temperaturaHormigon}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            C°
                                        </InputAdornment>
                                    ),
                                }}
                                onChange={(event) => {
                                    setTemperaturaHormigon(
                                        Number(event.target.value)
                                    );
                                }}
                            />
                            <TextField
                                sx={{ flexGrow: 1 }}
                                id="temperatura-ambiente"
                                label="Temperatura Ambiente (C°)"
                                type="number"
                                value={temperaturaAmbiente}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            C°
                                        </InputAdornment>
                                    ),
                                }}
                                onChange={(event) => {
                                    setTemperaturaAmbiente(
                                        Number(event.target.value)
                                    );
                                }}
                            />
                        </Box>
                    </Card>
                </Grid>
                <Grid item xs={12} md={12}>
                    <Card variant="outlined">
                        <CardContent>
                            <Typography variant="h5" component="div">
                                Incorporación de Aditivo en la Obra
                            </Typography>
                        </CardContent>

                        <CardContent>
                            <ToggleButtonGroup
                                value={incorporacionAditivo ? "si" : "no"}
                                exclusive
                                onChange={(event, value) => {
                                    setIncorporacionAditivo(value === "si");
                                }}
                                aria-label="incorporacion-aditivo"
                            >
                                <ToggleButton
                                    value="no"
                                    aria-label="incorporar-no"
                                >
                                    No
                                </ToggleButton>
                                <ToggleButton
                                    value="si"
                                    aria-label="incorporar-si"
                                >
                                    Si
                                </ToggleButton>
                            </ToggleButtonGroup>
                        </CardContent>
                        {/*  {incorporacionAditivo && ( */}
                        <Collapse in={incorporacionAditivo}>
                            <CardActions>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        flexWrap: "wrap",
                                        p: 1.5,
                                        gap: 1,
                                    }}
                                >
                                    <TextField
                                        sx={{ flexGrow: 1 }}
                                        id="marca-aditivo"
                                        label="Marca"
                                        value={marcaAditivo}
                                        onChange={(event) => {
                                            setMarcaAditivo(event.target.value);
                                        }}
                                    />
                                    <TextField
                                        sx={{ flexGrow: 1 }}
                                        id="tipo-aditivo"
                                        label="Tipo"
                                        value={tipoAditivo}
                                        onChange={(event) => {
                                            setTipoAditivo(event.target.value);
                                        }}
                                    />
                                    <TextField
                                        sx={{ flexGrow: 1 }}
                                        id="cantidad-aditivo"
                                        label="Cantidad (L)"
                                        type="number"
                                        value={cantidadAditivo}
                                        onChange={(event) => {
                                            setCantidadAditivo(
                                                Number(event.target.value)
                                            );
                                        }}
                                    />
                                    <TextField
                                        sx={{ flexGrow: 1 }}
                                        id="edad-ensaye"
                                        label="Edad de Ensaye (días)"
                                        type="number"
                                        value={edadEnsaye}
                                        onChange={(event) => {
                                            setEdadEnsaye(
                                                Number(event.target.value)
                                            );
                                        }}
                                    />
                                </Box>
                            </CardActions>
                        </Collapse>
                        {/*      )} */}
                    </Card>
                </Grid>
            </Grid>

            {/*  */}
            <SimpleSnackbar
                onClick={handleSaveData}
                fullWidth={true}
                message={"¡Ficha terminada!"}
            >
                Terminar ficha
            </SimpleSnackbar>
            {/* Lista de Hormigones */}
            <Box mt={4}>
                <Typography variant="h5" fontWeight={700}>
                    Muestras de Hormigón Fresco:
                </Typography>
                <ul>
                    {[...hormigonData].reverse().map((data, index) => (
                        <li key={index}>
                            Muestra N° {hormigonData.length - index}: Fecha
                            Muestreo: {data.fechaLocal}, Asentamiento Cono:{" "}
                            {data.asentamientoCono}, Grado H°:{" "}
                            {data.gradoHormigon}, Código H°: {data.codigo},
                        </li>
                    ))}
                </ul>
            </Box>
        </main>
    );
}
