"use client";
import Title from "@/components/ui/Title";
import { Box, Button, Grid } from "@mui/material";
import React from "react";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import FeaturesTwoCard from "./FeaturesTwoCard";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import WorkOutlineOutlinedIcon from "@mui/icons-material/WorkOutlineOutlined";
import Link from "next/link";
export default function GetIt() {
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
                position: "relative",
                borderRadius:"1.5rem"
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
                    title={"Entra a Tamíz.LA"}
                    subTitle={"¡Ahora!"}
                    color={"#d9d9d9"}
                    parraph={
                        "Únete a nuestra comunidad de profesionales y descubre todas las herramientas y recursos que necesitas para optimizar tu trabajo en laboratorio."
                    }
                />
            </Box>
            <Box
                sx={{
                    maxWidth: 900,
                    margin: "0 auto",
                    marginTop: "1rem",
                }}
            >
                <Button
                    size="large"
                    variant="outlined"
                    color="primary"
                    LinkComponent={Link}
                    href="/Laboratorio"
                >
                    Crear cuenta
                </Button>
            </Box>
            {/*  */}

            {/* <Box
                // className="animate"
                sx={{
                    border: "2px dashed #0AB4D690",
                    width: 200,
                    height: 200,
                    borderRadius: "999rem",
                    opacity: "0.8",
                    position: "absolute",
                    animation: "spin 100s linear infinite reverse",
                    pointerEvents: "none",
                }}
            ></Box>
            <Box
                // className="animate"
                sx={{
                    border: "2px dashed #0AB4D690",
                    width: 500,
                    height: 500,
                    borderRadius: "999rem",
                    opacity: "0.8",
                    position: "absolute",
                    animation: "spin 50s linear infinite",
                    pointerEvents: "none",
                }}
            ></Box> */}
        </Box>
    );
}
