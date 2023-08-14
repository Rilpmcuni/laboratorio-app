"use client";
import React, { useState, useEffect } from "react";
import {
    Typography,
    TextField,
    Button,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    SelectChangeEvent,
    Stack,
    Box,
} from "@mui/material";
import { PDFViewer } from "@react-pdf/renderer";
import InformePdf from "@/components/function/InformePdf";
import { SimpleSnackbar } from "../feedback/SnackBar";

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
    codigoSAFI: number;
    nombreLaboratorista: string;
    claseLicencia: string;
    rol: string;
    region: string;
    banda: string;
}

export default function ConfigLab() {
    const [numeroCarta, setNumeroCarta] = useState(0);
    const [nombreResidente, setNombreResidente] = useState("");
    const [nombreInspector, setNombreInspector] = useState("");
    const [nombreEmpresa, setNombreEmpresa] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedImage, setSelectedImage] = useState<File | null>(null);
    const [logoEmpresa, setLogoEmpresa] = useState<string | null>(null);
    const [nombreContrato, setNombreContrato] = useState("");
    const [numeroInforme, setNumeroInforme] = useState(0);
    const [codigoSAFI, setCodigoSAFI] = useState(0);
    const [nombreLaboratorista, setNombreLaboratorista] = useState("");
    const [claseLicencia, setClaseLicencia] = useState("");
    const [rol, setRol] = useState("");
    const [region, setRegion] = useState("");
    const [banda, setBanda] = useState("");

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
            setCodigoSAFI(parsedData.codigoSAFI);
            setNombreLaboratorista(parsedData.nombreLaboratorista);
            setClaseLicencia(parsedData.claseLicencia);
            setRol(parsedData.rol);
            setRegion(parsedData.region);
            setBanda(parsedData.banda);
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
            codigoSAFI,
            nombreLaboratorista,
            claseLicencia,
            rol,
            region,
            banda,
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
        codigoSAFI,
        nombreLaboratorista,
        claseLicencia,
        rol,
        region,
        banda,
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
        // Generar informe
    };

    const handleRemoveImage = () => {
        setSelectedImage(null);
        setLogoEmpresa(null);
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (event.target.files) {
                    setSelectedImage(event.target.files[0]);
                }
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
            <Typography variant="h3" fontWeight={900}>
                Datos generales del contrato
            </Typography>
            <Typography variant="subtitle1">
                Solo es necesario llenarlos una vez y puedes cambiarlos cuando
                quieras.
            </Typography>
  
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignContent: "center",
                    flexDirection: "row",
                    gap: 2,
                    marginTop: 2,
                }}
            >
                <Stack
                    spacing={{ xs: 1, sm: 2 }}
                    direction="row"
                    useFlexGap
                    flexWrap="wrap"
                    justifyContent={"center"}
                >
                    <TextField
                        sx={{ flexGrow: 1 }}
                        fullWidth
                        id="outlined-controlled"
                        label="Empresa"
                        value={nombreEmpresa}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                            setNombreEmpresa(event.target.value);
                        }}
                    />
                    <TextField
                        sx={{ flexGrow: 1 }}
                        id="outlined-controlled"
                        label="Residente"
                        value={nombreResidente}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                            setNombreResidente(event.target.value);
                        }}
                    />
                    <TextField
                        sx={{ flexGrow: 1 }}
                        id="outlined-controlled"
                        label="Inspector"
                        value={nombreInspector}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                            setNombreInspector(event.target.value);
                        }}
                    />
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
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                            const value = parseInt(event.target.value);
                            setNumeroCarta(value);
                        }}
                    />
                    <TextField
                        sx={{ flexGrow: 1 }}
                        id="outlined-controlled"
                        label="Código SAFI"
                        value={codigoSAFI}
                        type="number"
                        inputProps={{
                            min: 0,
                            step: 1,
                        }}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                            const value = parseInt(event.target.value);
                            setCodigoSAFI(value);
                        }}
                    />
                    <div
                        style={{
                            border: "2px dashed #ccc",
                            borderRadius: "10px",
                            padding: "20px",
                            textAlign: "center",
                            width: "100%",
                            flexGrow: 1,
                        }}
                    >
                        {!logoEmpresa && (
                            <div>
                                <label
                                    htmlFor="myImage"
                                    style={{ cursor: "pointer" }}
                                >
                                    <div style={{ marginBottom: "10px" }}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="50"
                                            height="50"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            style={{ marginRight: "10px" }}
                                        >
                                            <path d="M21 15v4.934a.999.999 0 0 1-.894.993L20 21H4l-.106-.073A1 1 0 0 1 3 20.934V15M21 9V5.066a.999.999 0 0 0-.894-.993L20 4H4l-.106.073A1 1 0 0 0 3 4.066V9M7 14H17M12 9v10" />
                                        </svg>
                                        <span>
                                            Click para subir o arrastra y suelta
                                        </span>
                                    </div>
                                    <span style={{ fontSize: "12px" }}>
                                        Max. peso archivo: 30MB
                                    </span>
                                    <input
                                        type="file"
                                        id="myImage"
                                        name="myImage"
                                        style={{ display: "none" }}
                                        onChange={handleFileChange}
                                    />
                                </label>
                            </div>
                        )}
                        {logoEmpresa && (
                            <div style={{ position: "relative" }}>
                                <img
                                    alt="not found"
                                    width={"250px"}
                                    src={logoEmpresa}
                                    style={{ borderRadius: "10px" }}
                                />
                                <button
                                    onClick={handleRemoveImage}
                                    style={{
                                        position: "absolute",
                                        top: "10px",
                                        right: "10px",
                                        backgroundColor: "transparent",
                                        border: "none",
                                        cursor: "pointer",
                                    }}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M3 6h18M8.62 6L9 3h6l.38 3M5.89 6H18" />
                                        <path d="M2 6h20M12 6v14" />
                                        <path d="M5 6h14M5 20h4v-4h6v4h4v-2H5v2z" />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </div>
                </Stack>
                <Stack
                    spacing={{ xs: 1, sm: 2 }}
                    direction="row"
                    useFlexGap
                    flexWrap="wrap"
                    justifyContent={"center"}
                >
                    <TextField
                        sx={{ flexGrow: 1 }}
                        fullWidth
                        id="outlined-controlled"
                        label="Nombre del Laboratorista"
                        value={nombreLaboratorista}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                            setNombreLaboratorista(event.target.value);
                        }}
                    />
                    <FormControl sx={{ flexGrow: 1 }}>
                        <InputLabel id="demo-simple-select-label">
                            Licencia
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={claseLicencia}
                            label="Licencia"
                            onChange={(event: SelectChangeEvent<string>) => {
                                setClaseLicencia(event.target.value as string);
                            }}
                        >
                            <MenuItem value={1}>Clase C</MenuItem>
                            <MenuItem value={2}>Clase B</MenuItem>
                            <MenuItem value={3}>Clase A</MenuItem>
                        </Select>
                    </FormControl>
                    <TextField
                        sx={{ flexGrow: 1 }}
                        id="outlined-controlled"
                        label="Número de Informe"
                        value={numeroInforme}
                        type="number"
                        inputProps={{
                            min: 0,
                            step: 1,
                        }}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                            const value = parseInt(event.target.value);
                            setNumeroInforme(value);
                        }}
                    />
                    <TextField
                        sx={{ flexGrow: 1 }}
                        id="outlined-controlled"
                        label="Rol"
                        value={rol}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                            setRol(event.target.value);
                        }}
                    />
                    <TextField
                        sx={{ flexGrow: 1 }}
                        fullWidth
                        multiline
                        maxRows={0}
                        id="outlined-controlled"
                        label="Contrato"
                        value={nombreContrato}
                        onChange={(
                            event: React.ChangeEvent<HTMLInputElement>
                        ) => {
                            setNombreContrato(event.target.value);
                        }}
                    />
                    <FormControl sx={{ flexGrow: 1 }}>
                        <InputLabel id="demo-simple-select-label">
                            Región
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={region}
                            label="Región"
                            onChange={(event: SelectChangeEvent<string>) => {
                                setRegion(event.target.value as string);
                            }}
                        >
                            <MenuItem value="Arica">Arica</MenuItem>
                            <MenuItem value="Tarapacá">Tarapacá</MenuItem>
                            <MenuItem value="Antofagasta">Antofagasta</MenuItem>
                            <MenuItem value="Atacama">Atacama</MenuItem>
                            <MenuItem value="Coquimbo">Coquimbo</MenuItem>
                            <MenuItem value="Valparaíso">Valparaíso</MenuItem>
                            <MenuItem value="Metropolitana">
                                Metropolitana
                            </MenuItem>
                            <MenuItem value="O'Higgins">O'Higgins</MenuItem>
                            <MenuItem value="Maule">Maule</MenuItem>
                            <MenuItem value="Ñuble">Ñuble</MenuItem>
                            <MenuItem value="Biobío">Biobío</MenuItem>
                            <MenuItem value="Araucanía">Araucanía</MenuItem>
                            <MenuItem value="Los Ríos">Los Ríos</MenuItem>
                            <MenuItem value="Los Lagos">Los Lagos</MenuItem>
                            <MenuItem value="Aysén">Aysén</MenuItem>
                            <MenuItem value="Magallanes">Magallanes</MenuItem>
                        </Select>
                    </FormControl>
                    <SimpleSnackbar
                        fullWidth={true}
                        message={"Guardado con éxito"}
                    >
                        Guardar Datos
                    </SimpleSnackbar>
                    <FormControl sx={{ flexGrow: 1 }}>
                        <InputLabel id="demo-simple-select-label">
                            Banda Granulométrica
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={banda}
                            label="Banda Granulométrica"
                            onChange={(event: SelectChangeEvent<string>) => {
                                setBanda(event.target.value as string);
                            }}
                        >
                            <MenuItem value="TM-50a">TM-50a</MenuItem>
                            <MenuItem value="TM-50b">TM-50b</MenuItem>
                            <MenuItem value="TM-50c">TM-50c</MenuItem>
                            <MenuItem value="TM-40a">TM-40a</MenuItem>
                            <MenuItem value="TM-40b">TM-40b</MenuItem>
                            <MenuItem value="TM-40c">TM-40c</MenuItem>
                            <MenuItem value="TM-25">TM-25</MenuItem>
                        </Select>
                    </FormControl>
                </Stack>
            </Box>
        </main>
    );
}
