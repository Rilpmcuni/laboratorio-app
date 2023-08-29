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
    IconButton,
    Slider,
} from "@mui/material";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import InformePdf from "@/components/function/InformePdf";
import { SimpleSnackbar } from "../feedback/SnackBar";
import BasicTabs from "../ui/BasicTabs";

interface DataLaboratorio {
    numeroCarta: number;
    nombreResidente: string;
    nombreInspector: string;
    nombreEmpresa: string;
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
    rangoCono: number[];
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
    const [rangoCono, setRangoCono] = useState<number[]>([1, 22]);

    const handleRemoveImage = () => {
        setSelectedImage(null);
        setLogoEmpresa(null);
    };
    useEffect(() => {
        // Cargar los datos del Local Storage al cargar la página
        const dataFromLocalStorage = localStorage.getItem("laboratorioData");
        if (dataFromLocalStorage) {
            const parsedData: DataLaboratorio =
                JSON.parse(dataFromLocalStorage);
            // Establecer todos los datos en un solo estado
            setFormData(parsedData);
        }
    }, []);

    const setFormData = (formData: DataLaboratorio) => {
        setNumeroCarta(formData.numeroCarta);
        setNombreResidente(formData.nombreResidente);
        setNombreInspector(formData.nombreInspector);
        setNombreEmpresa(formData.nombreEmpresa);
        setSelectedDate(formData.selectedDate);
        setLogoEmpresa(formData.logoEmpresa);
        setNombreContrato(formData.nombreContrato);
        setNumeroInforme(formData.numeroInforme);
        setCodigoSAFI(formData.codigoSAFI);
        setNombreLaboratorista(formData.nombreLaboratorista);
        setClaseLicencia(formData.claseLicencia);
        setRol(formData.rol);
        setRegion(formData.region);
        setBanda(formData.banda);
        setRangoCono(formData.rangoCono);
    };

    const handleSave = () => {
        // Guardar los datos en el Local Storage
        const laboratorioData: DataLaboratorio = {
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
            rangoCono,
        };
        localStorage.setItem(
            "laboratorioData",
            JSON.stringify(laboratorioData)
        );
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
        <Box className="">
            <Typography variant="h3" fontWeight={900}>
                Datos generales
            </Typography>
            <Typography variant="subtitle1">
                Son datos con los que trabajarás y solo es necesario
                configurarlos una vez o cunado creas necesario.
            </Typography>

            <BasicTabs
                labels={["Laboratorio", "Contrato", "Usuario"]}
                contents={[
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
                                onChange={(
                                    event: SelectChangeEvent<string>
                                ) => {
                                    setClaseLicencia(
                                        event.target.value as string
                                    );
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

                        <FormControl sx={{ flexGrow: 1 }}>
                            <InputLabel id="demo-simple-select-label">
                                Banda Granulométrica
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={banda}
                                label="Banda Granulométrica"
                                onChange={(
                                    event: SelectChangeEvent<string>
                                ) => {
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
                        <Box sx={{ width: "100%", paddingX: 2, paddingY: 1 }}>
                            <Typography
                                id="slider-asentamiento-de-hormigon"
                                gutterBottom
                                color="InactiveCaptionText"
                                sx={{ paddingBottom: "2rem" }}
                            >
                                Asentamiento de Hormigón
                            </Typography>
                            <Slider
                                id="range-slider"
                                value={rangoCono}
                                onChange={(event, newValue) => {
                                    setRangoCono(newValue as number[]);
                                }}
                                valueLabelDisplay="on"
                                valueLabelFormat={(value) => `${value} cm`}
                                min={0}
                                max={24}
                                marks={[
                                    { value: 0, label: "0 cm" },
                                    { value: 6, label: "6 cm" },
                                    { value: 12, label: "12 cm" },
                                    { value: 18, label: "18 cm" },
                                    { value: 24, label: "24 cm" },
                                ]}
                            />
                        </Box>
                    </Stack>,
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
                            multiline
                            maxRows={0}
                            id="outlined-controlled"
                            label="Nombre del Contrato"
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
                                onChange={(
                                    event: SelectChangeEvent<string>
                                ) => {
                                    setRegion(event.target.value as string);
                                }}
                            >
                                <MenuItem value="Arica">Arica</MenuItem>
                                <MenuItem value="Tarapacá">Tarapacá</MenuItem>
                                <MenuItem value="Antofagasta">
                                    Antofagasta
                                </MenuItem>
                                <MenuItem value="Atacama">Atacama</MenuItem>
                                <MenuItem value="Coquimbo">Coquimbo</MenuItem>
                                <MenuItem value="Valparaíso">
                                    Valparaíso
                                </MenuItem>
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
                                <MenuItem value="Magallanes">
                                    Magallanes
                                </MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            sx={{ flexGrow: 1 }}
                            id="outlined-controlled"
                            label="Rol N°"
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
                            id="outlined-controlled"
                            label="Nombre de la Empresa"
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
                            label="Nombre del Residente"
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
                            label="Nombre del Inspector"
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
                                            <AddCircleOutlineOutlinedIcon />
                                            <span>
                                                Click para subir o arrastra y
                                                suelta el Logo
                                            </span>
                                        </div>
                                        <span style={{ fontSize: "12px" }}>
                                            Max. peso archivo: 1MB
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
                                    <IconButton
                                        onClick={handleRemoveImage}
                                        aria-label="delete"
                                        size="large"
                                        sx={{
                                            position: "absolute",
                                            top: "10px",
                                            right: "10px",
                                            ":hover": {
                                                color: "red",
                                            },
                                        }}
                                    >
                                        <DeleteForeverOutlinedIcon />
                                    </IconButton>
                                </div>
                            )}
                        </div>
                    </Stack>,
                    <span>En construcción</span>,
                ]}
            />
            <SimpleSnackbar
                onClick={handleSave}
                fullWidth={true}
                message={"¡Datos actualizados!"}
            >
                Guardar Datos
            </SimpleSnackbar>
        </Box>
    );
}
