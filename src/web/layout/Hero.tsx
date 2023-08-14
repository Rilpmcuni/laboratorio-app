"use client";
import { Box, Button, Stack } from "@mui/material";
import React from "react";
import Logo from "@/components/ui/Logo";
import Link from "next/link";
import Title from "@/components/ui/Title";

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
            }}
        >
            <Stack
                direction={"column"}
                spacing={3}
                sx={{
                    width: { xs: "90%", md: "60%" },
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
                        href="/Crear"
                    >
                        Crear cuenta
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        LinkComponent={Link}
                        href="/Iniciar"
                    >
                        Iniciar sesión
                    </Button>
                </Stack>
            </Stack>

            <Logo width={300} />
        </Box>
    );
}
