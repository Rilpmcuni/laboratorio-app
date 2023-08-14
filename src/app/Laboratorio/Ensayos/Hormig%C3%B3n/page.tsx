"use client";
import * as React from "react";
import {
    Typography,
    TextField,
    Autocomplete,
    Box,
    Stack,
    Button,
    Collapse,
} from "@mui/material";
import { SimpleSnackbar } from "@/components/feedback/SnackBar";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import MetodoConoAbrams from "@/components/metodos/MetodoConoAbrams";

interface DataHormigon {
    nombreContrato: string;
    proveedor: string | null;
    gradoHormigon: number;
    codigoHormigon: number;
    dosificacion: number;
    visacion: number;
    visadoPor: string;
    guiaDespacho: number;
    patenteCamion: string;
    volumen: number;
    horaSalidaPlanta: string;
    horaLlegadaObra: string;
    codigo: string;
    tipoProbetas: string;
    cantidadProbetas: number;
    fechaMuestreo: string;
    horaInicioDescarga: string;
    horaMuestreo: string;
    asentamientoCono: number;
    temperaturaHormigon: number;
    temperaturaAmbiente: number;
    incorporacionAditivo: boolean;
    marcaAditivo: string;
    tipoAditivo: string;
    cantidadAditivo: number;
    edadEnsaye: number;
}

export default function HormigonFicha() {
    const [nombreContrato, setNombreContrato] = React.useState("");
    const [proveedor, setProveedor] = React.useState<string | null>(null);
    const [gradoHormigon, setGradoHormigon] = React.useState(0);
    const [codigoHormigon, setCodigoHormigon] = React.useState(0);
    const [dosificacion, setDosificacion] = React.useState(0);
    const [visacion, setVisacion] = React.useState(0);
    const [visadoPor, setVisadoPor] = React.useState("");
    const [guiaDespacho, setGuiaDespacho] = React.useState(0);
    const [patenteCamion, setPatenteCamion] = React.useState("");
    const [volumen, setVolumen] = React.useState(0);
    const [horaSalidaPlanta, setHoraSalidaPlanta] = React.useState("");
    const [horaLlegadaObra, setHoraLlegadaObra] = React.useState("");
    const [horaActual, setHoraActual] = React.useState("");
    const [showSnackbar, setShowSnackbar] = React.useState(false);
    const [hormigonData, setHormigonData] = React.useState<DataHormigon[]>([]);
    const [muestra, setMuestra] = React.useState(1);
    const [codigo, setCodigo] = React.useState("");
    const [tipoProbetas, setTipoProbetas] = React.useState("");
    const [cantidadProbetas, setCantidadProbetas] = React.useState(1);
    const [fechaMuestreo, setFechaMuestreo] = React.useState("");
    const [horaInicioDescarga, setHoraInicioDescarga] = React.useState("");
    const [horaMuestreo, setHoraMuestreo] = React.useState("");
    const [asentamientoCono, setAsentamientoCono] = React.useState(0);
    const [temperaturaHormigon, setTemperaturaHormigon] = React.useState(0);
    const [temperaturaAmbiente, setTemperaturaAmbiente] = React.useState(0);
    const [incorporacionAditivo, setIncorporacionAditivo] =
        React.useState(false);
    const [marcaAditivo, setMarcaAditivo] = React.useState("");
    const [tipoAditivo, setTipoAditivo] = React.useState("");
    const [cantidadAditivo, setCantidadAditivo] = React.useState(0);
    const [edadEnsaye, setEdadEnsaye] = React.useState(0);

    React.useEffect(() => {
        // Cargar los datos del Local Storage al cargar la página
        const hormigonData = localStorage.getItem("hormigonData");
        if (hormigonData) {
            const parsedHormigonData: DataHormigon[] = JSON.parse(hormigonData);
            setHormigonData(parsedHormigonData);
            setMuestra(parsedHormigonData.length + 1);
        }
    }, []);

    React.useEffect(() => {
        // Guardar los datos en el Local Storage cuando cambien
        localStorage.setItem("hormigonData", JSON.stringify(hormigonData));
    }, [hormigonData]);

    React.useEffect(() => {
        // Obtener la hora actual al cargar la página
        const obtenerHoraActual = () => {
            const fechaActual = new Date();
            const hora = fechaActual.getHours().toString().padStart(2, "0");
            const minutos = fechaActual
                .getMinutes()
                .toString()
                .padStart(2, "0");
            const segundos = fechaActual
                .getSeconds()
                .toString()
                .padStart(2, "0");
            setHoraActual(`${hora}:${minutos}:${segundos}`);
        };

        obtenerHoraActual();

        // Actualizar la hora actual cada segundo
        const interval = setInterval(obtenerHoraActual, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    React.useEffect(() => {
        // Obtener el nombre del contrato del componente ConfigLab
        const informeData = localStorage.getItem("informeData");
        let nombreContrato = "";
        if (informeData) {
            const parsedData: DataInforme = JSON.parse(informeData);
            nombreContrato = parsedData.nombreContrato;
        }
        setNombreContrato(nombreContrato);
    }, []);

    const handleSaveData = () => {
        // Generar código aleatorio de 6 caracteres entre letras mayúsculas y números
        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        let generatedCode = "";
        for (let i = 0; i < 6; i++) {
          const randomIndex = Math.floor(Math.random() * characters.length);
          generatedCode += characters[randomIndex];
        }
      
        const newHormigonData: DataHormigon = {
          nombreContrato,
          proveedor,
          gradoHormigon,
          codigoHormigon,
          dosificacion,
          visacion,
          visadoPor,
          guiaDespacho,
          patenteCamion,
          volumen,
          horaSalidaPlanta,
          horaLlegadaObra,
          codigo: generatedCode,
          tipoProbetas,
          cantidadProbetas,
          fechaMuestreo,
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
          muestra: hormigonData.length + 1, // Asignar el número de muestra
        };
      
        setHormigonData((prevData) => [...prevData, newHormigonData]);
        setCodigo(generatedCode);
        setShowSnackbar(true);
      };

    React.useEffect(() => {
        // Obtener la fecha actual al cargar la página
        const obtenerFechaActual = () => {
            const fechaActual = new Date();
            const dia = fechaActual.getDate().toString().padStart(2, "0");
            const mes = (fechaActual.getMonth() + 1)
                .toString()
                .padStart(2, "0");
            const anio = fechaActual.getFullYear().toString();
            setFechaMuestreo(`${dia}/${mes}/${anio}`);
        };

        obtenerFechaActual();
    }, []);

    return (
        <main
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <Typography variant="h3" fontWeight={900} sx={{ position: "relative" }}>
                Muestreo hormigón fresco
                  {/* <Box > */}
                  <MetodoConoAbrams />
                {/* </Box> */}
            </Typography>
            <Typography variant="subtitle2" >
                HORMIGONES, MÉTODO PARA EXTRAER MUESTRAS DE HORMIGÓN FRESCO,
                ÍTEM 8.402.6
              
            </Typography>

            <Stack
                spacing={{ xs: 1, sm: 2 }}
                direction="row"
                useFlexGap
                flexWrap="wrap"
                justifyContent={"center"}
            >
                <Stack
                    spacing={{ xs: 1, sm: 2 }}
                    direction="row"
                    useFlexGap
                    flexWrap="wrap"
                    justifyContent={"center"}
                    width={"100%"}
                >
                    <TextField
                        disabled
                        sx={{ flexGrow: 1 }}
                        fullWidth
                        multiline
                        maxRows={0}
                        id="outlined-controlled"
                        label="Contrato"
                        value={nombreContrato}
                    />
                    <TextField
                        disabled
                        sx={{ flexGrow: 1 }}
                        multiline
                        maxRows={0}
                        id="fecha-muestreo"
                        label="Fecha Muestreo"
                        value={fechaMuestreo}
                    />
                    <TextField
                        disabled
                        sx={{ flexGrow: 1 }}
                        multiline
                        maxRows={0}
                        id="hora-actual"
                        label="Hora actual"
                        value={horaActual}
                    />
                </Stack>
                {/*  */}
                <Stack
                    spacing={{ xs: 1, sm: 2 }}
                    direction="column"
                    useFlexGap
                    flexWrap="wrap"
                    justifyContent={"center"}
                >
                    <Typography variant="subtitle2">
                        Procedencia de hormigón.
                    </Typography>
                    <Stack
                        spacing={{ xs: 1, sm: 2 }}
                        direction="row"
                        useFlexGap
                        flexWrap="wrap"
                        justifyContent={"center"}
                    >
                        <Autocomplete
                            sx={{ flexGrow: 1 }}
                            id="proveedor-autocomplete"
                            options={[
                                "Bitumix",
                                "Melon",
                                "Polpaico",
                                "TecnoHabitat",
                                "Hormigones Cbb",
                                "Hormigones BSA",
                                "Transex",
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
                        <TextField
                            sx={{ flexGrow: 1 }}
                            id="grado-hormigon"
                            label="Grado H°"
                            type="number"
                            value={gradoHormigon}
                            onChange={(event) => {
                                setGradoHormigon(Number(event.target.value));
                            }}
                        />
                        <TextField
                            sx={{ flexGrow: 1 }}
                            id="codigo-hormigon"
                            label="Codigo H°"
                            type="number"
                            value={codigoHormigon}
                            onChange={(event) => {
                                setCodigoHormigon(Number(event.target.value));
                            }}
                        />
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
                            sx={{ flexGrow: 1 }}
                            id="hora-llegada-obra"
                            label="Hora llegada obra"
                            type="time"
                            value={horaLlegadaObra}
                            onChange={(event) => {
                                setHoraLlegadaObra(event.target.value);
                            }}
                        />
                    </Stack>
                </Stack>
                {/*  */}
                <Stack
                    spacing={{ xs: 1, sm: 2 }}
                    direction="column"
                    useFlexGap
                    flexWrap="wrap"
                    justifyContent={"center"}
                >
                    <Typography variant="subtitle2">
                        Muestreo de hormigón fresco.
                    </Typography>
                    <Stack
                        spacing={{ xs: 1, sm: 2 }}
                        direction="row"
                        useFlexGap
                        flexWrap="wrap"
                        justifyContent={"center"}
                    >
                        <TextField
                            disabled
                            sx={{ flexGrow: 1 }}
                            multiline
                            maxRows={0}
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
                            value={codigo}
                            inputProps={{
                                style: { textTransform: "uppercase" },
                            }}
                        />
                        <TextField
                            sx={{ flexGrow: 1 }}
                            id="tipo-probetas"
                            label="Tipo de Probetas"
                            value={tipoProbetas}
                            onChange={(event) => {
                                setTipoProbetas(event.target.value);
                            }}
                        />
                        <TextField
                            sx={{ flexGrow: 1 }}
                            id="cantidad-probetas"
                            label="Cantidad de Probetas"
                            type="number"
                            value={cantidadProbetas}
                            onChange={(event) => {
                                setCantidadProbetas(Number(event.target.value));
                            }}
                        />

                        <TextField
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
                                setAsentamientoCono(Number(event.target.value));
                            }}
                        />
                        <TextField
                            sx={{ flexGrow: 1 }}
                            id="temperatura-hormigon"
                            label="Temperatura del Hormigón (C°)"
                            type="number"
                            value={temperaturaHormigon}
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
                            onChange={(event) => {
                                setTemperaturaAmbiente(
                                    Number(event.target.value)
                                );
                            }}
                        />
                        {/* aditivos */}
                        <Stack
                            spacing={{ xs: 1, sm: 2 }}
                            direction="row"
                            useFlexGap
                            flexWrap="wrap"
                            justifyContent={"center"}
                        >
                            <Typography variant="subtitle2">
                                Incorporación de Aditivo en la Obra
                            </Typography>
                            <ToggleButtonGroup
                                value={incorporacionAditivo ? "si" : "no"}
                                exclusive
                                onChange={(event, value) => {
                                    setIncorporacionAditivo(value === "si");
                                }}
                                aria-label="incorporacion-aditivo"
                            >
                                <ToggleButton
                                    value="si"
                                    aria-label="incorporar-si"
                                >
                                    Si
                                </ToggleButton>
                                <ToggleButton
                                    value="no"
                                    aria-label="incorporar-no"
                                >
                                    No
                                </ToggleButton>
                            </ToggleButtonGroup>
                            {incorporacionAditivo && (
                                <Collapse in={incorporacionAditivo}>
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
                                </Collapse>
                            )}
                        </Stack>
                    </Stack>
                </Stack>
            </Stack>

            <Button variant="contained" onClick={handleSaveData}>
                Terminar ficha
            </Button>
            {/* Lista de Hormigones */}
            <Box mt={4}>
                <Typography variant="h5" fontWeight={700}>
                    Muestras de Hormigón Fresco:
                </Typography>
                <ul>
                    {hormigonData.map((data, index) => (
                        <li key={index}>
                            Muestra N° {index + 1}: Contrato:{" "}
                            {data.nombreContrato}, Proveedor: {data.proveedor},
                            Grado H°: {data.gradoHormigon}, Código H°:{" "}
                            {data.codigoHormigon}, Dosificación N°:{" "}
                            {data.dosificacion}, horaLlegadaObra N°:{" "}
                            {data.horaLlegadaObra}
                        </li>
                    ))}
                </ul>
            </Box>
        </main>
    );
}
