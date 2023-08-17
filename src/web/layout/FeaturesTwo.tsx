"use client";
import Title from "@/components/ui/Title";
import { Box, Grid } from "@mui/material";
import React from "react";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import FeaturesTwoCard from "./FeaturesTwoCard";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";

export default function FeaturesTwo() {
    const FeaturesCard = [
        {
            ico: <CalculateOutlinedIcon color="primary" />,
            title: "Fórmulas",
            description:
                " Simplifica tus cálculos con nuestras fórmulas automatizadas, ahorrando tiempo y esfuerzo.",
        },
        {
            ico: <SchoolOutlinedIcon color="primary" />,
            title: "Cursos E-learning",
            description:
                "Prepárate para tus exámenes C, B, A de vialidad con nuestros cursos interactivos.",
        },
        {
            ico: <DevicesRoundedIcon color="primary" />,
            title: "Multiplataforma",
            description:
                "Accede desde cualquier lugar: la plataforma multiplataforma de Tamíz.LA",
        },
        {
            ico: <WorkOutlineOutlinedIcon color="primary" />,
            title: "Empleo",
            description:
                "Encuentra trabajo en el campo de obras viales con Tamíz.LA",
        },
        {
            ico: <MenuBookOutlinedIcon color="primary" />,
            title: "Manuales",
            description:
                "Recursos de apoyo y manuales para optimizar tu trabajo.",
        },
        {
            ico: <DescriptionOutlinedIcon color="primary" />,
            title: "Informes",
            description:
                "¿Informes? ¡Listos en un pestañeo! Generen, organicen y exporten sin estrés.",
        },
    ];
    return (
        <Box
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                // minHeight: "30rem",
                // height: "30rem",
                paddingY: "2rem",
                backgroundColor: "white",
                zIndex: 40,
            }}
        >
            <Box
                sx={{
                    width: { xs: "auto", md: "50%" },
                    // alignSelf: "flex-start",
                    marginX: "2.5rem",
                    textAlign: "center",
                }}
            >
                <Title
                    title={"Una herramienta"}
                    subTitle={"indispensable."}
                    color={"#171717"}
                    parraph={
                        "TamizLA ofrece una amplia gama de características que ayudan a los laboratoristas a optimizar su trabajo, mejorar la productividad y obtener resultados de alta calidad. Con sus herramientas de fórmulas, seguimiento de ensayos, informes mensuales y cursos e-learning, todo desde una app multiplataforma y fácil de usar, TamizLA es la solución completa para satisfacer las necesidades de cualquier laboratorista."
                    }
                />
            </Box>
            <Box
                sx={{
                    maxWidth: 900,
                    margin: "0 auto",
                    marginY: "1rem",
                    marginX: "0.5rem",
                }}
            >
                <Grid container spacing={1}>
                    <>
                        {FeaturesCard.map((Features: any, index: any) => (
                            <FeaturesTwoCard key={index} Features={Features} />
                        ))}
                    </>
                </Grid>
            </Box>
        </Box>
    );
}
