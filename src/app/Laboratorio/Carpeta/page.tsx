"use client";
import React, { useState, useEffect } from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import {
    Typography,
    TextField,
    Button,
    Grid,
    Card,
    CardContent,
    CardActions,
    CardActionArea,
    Box,
} from "@mui/material";
import { PDFViewer } from "@react-pdf/renderer";
import InformePdf from "@/components/function/CartaInformePdf";
import Title from "@/components/ui/Title";
import ListInformes from "@/components/function/ListInformes";
import Calendar from "@/components/function/Calendar";
import CardModalEnsayos from "@/components/function/modal/CardModalEnsayos";

interface DataHormigon {
    tipoProbetas: string;
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
    cantidadProbetas: number | null;
    fechaToma: string;
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
    dataArray: any;
}

export default function Carpeta() {
    const [hormigonData, setHormigonData] = useState<DataHormigon[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Cargar los datos del Local Storage al cargar la página
        const hormigonData = localStorage.getItem("hormigonData");
        if (hormigonData) {
            const parsedHormigonData: DataHormigon[] = JSON.parse(hormigonData);
            setHormigonData(parsedHormigonData);
            setIsLoading(false); // Establecer isLoading en false cuando los datos se cargan correctamente
        }
    }, []);

    function convertDateFormat(dateString: string) {
        const [day, month, year] = dateString.split("/");
        return `${year}-${month}-${day}`;
    }

    return (
        <main>
            <Title
                title={"Carpeta"}
                subTitle={"Hasta ahora"}
                parraph={""}
                color={"black"}
            />
            <Grid
                container
                spacing={{ xs: 1, md: 2 }}
                columns={{ xs: 12, sm: 12, md: 12 }}
            >
                <CardModalEnsayos hormigonData={hormigonData} isLoading={isLoading}  />

                {[
                    {
                        cantidad: 25,
                        bgColor: "#d6eefc",
                        textColor: "#012972",
                        materia: "Granulometrías",
                    },
                    // {
                    //     cantidad: hormigonData.length,
                    //     bgColor: "#d4f6fa",
                    //     textColor: "#003768",

                    //     materia: "Muestras Hormigón",
                    // },
                    {
                        cantidad: 2,
                        bgColor: "#fff2d5",
                        textColor: "#7a4100",
                        materia: "Proctor Mod.",
                    },
                    {
                        cantidad: 15,
                        bgColor: "#ffede4",
                        textColor: "#7a0916",
                        materia: "Limite líquido",
                    },
                ].map((data, index) => (
                    <Grid item xs={6} sm={3} md={3} key={index}>
                        <Card
                            variant="outlined"
                            sx={{
                                backgroundColor: data.bgColor,
                            }}
                        >
                            <CardActionArea>
                                <CardContent
                                    sx={{
                                        textAlign: "center",
                                        // alignItems:"center"
                                    }}
                                >
                                    <Typography
                                        variant="h4"
                                        component="div"
                                        color={data.textColor}
                                    >
                                        {data.cantidad}
                                    </Typography>
                                    <Typography
                                        variant="h6"
                                        sx={{ mb: 1.5 }}
                                        color={`${data.textColor}90`}
                                    >
                                        {data.materia}
                                    </Typography>
                                </CardContent>
                                {/* <CardActions>
                                <Button size="small">Ver</Button>
                            </CardActions> */}
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Box
                sx={
                    {
                        // height: "60vh",
                    }
                }
            >
                <Calendar hormigonData={hormigonData} />
            </Box>
            <BarChart
                xAxis={[
                    {
                        id: "barCategories",
                        data: [
                            "Granulometrías 25",
                            `Muestras Hormigón ${hormigonData.length}`,
                            "Proctor Mod. 2",
                            "Limite líquido 15",
                        ],
                        scaleType: "band",
                    },
                ]}
                series={[
                    {
                        data: [25, hormigonData.length, 2, 15],
                    },
                ]}
                height={300}
            />
            <Card
                variant="outlined"
                sx={{
                    borderRadius: "1rem",
                    // overflowX:"scroll"
                    //
                }}
            >
                <CardContent>
                    <Typography variant="h4" component="div">
                        Informes
                    </Typography>
                    <Box
                        sx={{
                            width: { xs: "20rem", md: "auto" },
                        }}
                    >
                        <ListInformes />
                    </Box>
                </CardContent>
            </Card>
        </main>
    );
}
