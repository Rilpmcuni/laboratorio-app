"use client";
import Title from "@/components/ui/Title";
import { Box, Stack } from "@mui/material";
import React from "react";
import ToogleFeatures from "./ToogleFeatures";
import Logo from "@/components/ui/Logo";

export default function Features() {
    return (
        <Box
            sx={{
                width: "100%",
                backgroundColor: "secondary.main",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                // minHeight: "30rem",
                // height: "30rem",
                paddingY: "2rem",
            }}
        >
            <Box
                sx={{
                    width: { xs: "auto", md: "50%" },
                    alignSelf: { xs: "center", md: "flex-start" },
                    marginX: { xs: "1rem", md: "4.5rem" },
                }}
            >
                <Title
                    title={"Funciones en"}
                    subTitle={"Funciones"}
                    color={"#d9d9d9"}
                    parraph={
                        "TamizLA es la solución tecnológica para profesionales laboratoristas que buscan mejorar la eficiencia en su trabajo. Con características como material de estudio, seguimiento de ensayos, informes mensuales y más."
                    }
                />
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    justifyContent: "space-around",
                    // gap: "2.5rem",
                }}
            >
                <Logo width={400} />
                <ToogleFeatures />
            </Box>
        </Box>
    );
}
