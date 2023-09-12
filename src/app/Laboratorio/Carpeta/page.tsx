"use client";
import React, { useState, useEffect } from "react";
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

export default function Carpeta() {
    return (
        <main>
            <Title
                title={"Hasta ahora"}
                subTitle={""}
                parraph={""}
                color={"black"}
            />
            <Grid
                container
                spacing={{ xs: 1, md: 2 }}
                columns={{ xs: 12, sm: 12, md: 12 }}
            >
                {[
                    {
                        cantidad: 25,
                        bgColor: "#d6eefc",
                        textColor: "#012972",
                        materia: "Granulometrías",
                    },
                    {
                        cantidad: 15,
                        bgColor: "#d4f6fa",
                        textColor: "#003768",

                        materia: "Muestras Hormigón",
                    },
                    {
                        cantidad: 2,
                        bgColor: "#fff2d5",
                        textColor: "#7a4100",
                        materia: "Proctor Mod.",
                    },
                    {
                        cantidad: 0,
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
                                    <Typography variant="h4" component="div" color={data.textColor}>
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
