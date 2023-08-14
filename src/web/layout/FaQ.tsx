"use client";
import Title from "@/components/ui/Title";
import { Box, Stack } from "@mui/material";
import React from "react";
import ToogleFeatures from "./ToogleFeatures";
import Logo from "@/components/ui/Logo";
import AccordionFaQ from "./AccordionFaQ";

export default function FaQ() {
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
                    width: "50%",
                    alignSelf: "flex-start",
                    marginX: "4.5rem",
                }}
            >
                <Title
                    title={"¿Tienes preguntas?"}
                    subTitle={"Tenemos respuestas"}
                    color={"#d9d9d9"}
                    parraph={"Algunas preguntas comunes sobre Tamiz.LA"}
                />
            </Box>
            <Box
                sx={{
                    // display: "flex",
                    // flexDirection: { xs: "column", md: "row" },
                    // alignItems: "center",
                    // justifyContent: "center",
                    // gap: "2.5rem",
                    marginTop: "1.5rem",
                    width: { xs: "95%", md: "80%" },
                }}
            >
                <AccordionFaQ />
            </Box>
        </Box>
    );
}
