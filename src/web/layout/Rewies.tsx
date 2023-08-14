"use client";
import Title from "@/components/ui/Title";
import { Avatar, Box, Grid } from "@mui/material";
import React from "react";
import RewiesCard from "./RewiesCard";

export default function Rewies() {
    const FeaturesCard = [
        {
            ico: <Avatar alt="María" src="/static/images/avatar/1.jpg" />,
            title: "Le doy cinco estrellas",
            name: "María",
            lastName: "Jefa de laboratorio @LEM",
            description:
                "Tamiz LA me ha permitido optimizar mi tiempo y aumentar mi eficiencia en el trabajo. Ahora puedo realizar ensayos y elaborar informes de manera más rápida y fácil.",
        },
        {
            ico: <Avatar alt="Marco" src="/static/images/avatar/1.jpg" />,
            title: "¡Lo amo!",
            name: "Marco",
            lastName: "Inspector de calidad @RyQ",
            description:
                "La sección de e-learning de Tamiz LA me ha ayudado a prepararme mejor para los exámenes de vialidad y mejorar mis conocimientos en el área. ¡Es una herramienta imprescindible para los laboratoristas viales!",
        },
        {
            ico: <Avatar alt="Paola" src="/static/images/avatar/1.jpg" />,
            title: "Necesitas esta app",
            name: "Paola",
            lastName: "Laboratorista C @Petrus",
            description:
                "Con Tamiz LA puedo tener acceso a toda la información que necesito para realizar mis ensayos, desde fórmulas hasta materiales de estudio, todo en una sola plataforma. ¡Realmente ha simplificado mi trabajo!",
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
                    title={"¿Testimonios?"}
                    subTitle={"Tenemos fanáticos locos."}
                    color={"#171717"}
                    parraph={
                        "Los usuarios han expresado su satisfacción con la aplicación y para simplificar y agilizar su trabajo. Los testimonios reflejan la utilidad de la plataforma en la gestión de informes y el acceso a recursos de aprendizaje en línea."
                    }
                />
            </Box>
            <Box
                sx={{
                    maxWidth: 1000,
                    margin: "0 auto",
                    marginY: "1rem",
                    marginX: "0.5rem",
                }}
            >
                <Grid container spacing={1}>
                    <>
                        {FeaturesCard.map((Features: any, index: any) => (
                            <RewiesCard key={index} Features={Features} />
                        ))}
                    </>
                </Grid>
            </Box>
        </Box>
    );
}
