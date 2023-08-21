"use client";
import { Box, Button, Stack } from "@mui/material";
import React from "react";
import Logo from "@/components/ui/Logo";
import Link from "next/link";
import Title from "@/components/ui/Title";
import HeroCarousel from "./HeroCarousel";

export default function Hero() {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                justifyContent: "center",
                // minHeight: "30rem",
                height: { xs: "auto", md: "30rem" },
                marginY: { xs: "1.5rem", md: "auto" },
            }}
        >
            <Stack
                direction={"column"}
                spacing={0}
                sx={{
                    width: { xs: "90%", md: "50%" },
                }}
            >
                <Title
                    title={"Bienvenido, a la nueva"}
                    subTitle={"tecnología de Laboratorio."}
                    color={"#171717"}
                    parraph={
                        "TamizLA es la solución tecnológica para profesionales laboratoristas que buscan mejorar la eficiencia en su trabajo. Con características como material de estudio, seguimiento de ensayos, informes mensuales y más."
                    }
                />

                <Stack direction={"row"} spacing={1}>
                    <Button
                        variant="outlined"
                        color="secondary"
                        LinkComponent={Link}
                        href="/Auth"
                    >
                        Crear cuenta
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        LinkComponent={Link}
                        href="/Auth"
                    >
                        Iniciar sesión
                    </Button>
                </Stack>
            </Stack>

            {/* <Logo width={300} /> */}
            {/*  */}
            {/* <Box sx={{ height: "14rem", margin: "0 auto" }}>
                <Carousel />
            </Box> */}
            <Box
                sx={{
                    width: { xs: "100%", md: "40%" },
                    //  height: "14rem",
                    marginX: "0",
                    marginTop: { xs: "1.5rem", md: "0" },
                    marginBottom: { xs: "0.5rem", md: "0" },
                }}
            >
                <HeroCarousel />
            </Box>
        </Box>
    );
}
