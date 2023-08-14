"use client";
import Title from "@/components/ui/Title";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import React from "react";
import PricesCard from "./PricesCard";
import SubdirectoryArrowLeftRoundedIcon from "@mui/icons-material/SubdirectoryArrowLeftRounded";
import TooglePrices from "./TooglePrices";

export default function Prices() {
    /*  */
    const PricesDataCard = [
        {
            ico: <Avatar alt="María" src="/static/images/avatar/1.jpg" />,
            title: "Ensayista",
            priceMonth: "0",
            priceAge: "0",
            lastName: "Jefa de laboratorio @LEM",
            description:
                "Para ensayistas de laboratorio vial que buscan mejorar su rendimiento.",
            features: [
                <Typography>
                    Generador de fórmulas y ensayos{" "}
                    <span style={{ color: "#0AB4D6", fontWeight: "bold" }}>
                        BÁSICOS
                    </span>{" "}
                    de laboratorio
                </Typography>,
                <Typography>Material de estudio y manuales</Typography>,
            ],
        },
        {
            ico: <Avatar alt="Marco" src="/static/images/avatar/1.jpg" />,
            title: "Laboratorista",
            priceMonth: "6.000",
            priceAge: "48.000",
            lastName: "Inspector de calidad @RyQ",
            description:
                "Para trabajadores de laboratorio que necesitan una solución completa y asequible.",
            features: [
                <Typography>
                    Generador de fórmulas y ensayos{" "}
                    <span style={{ color: "#0AB4D6", fontWeight: "bold" }}>
                        AVANZADOS
                    </span>{" "}
                    de de laboratorio
                </Typography>,
                <Typography>
                    Material de estudio, manuales{" "}
                    <span style={{ color: "#0AB4D6", fontWeight: "bold" }}>
                        ACTUALIZADOS
                    </span>
                </Typography>,
                <Typography>
                    Cursos e-learning para preparación de examen{" "}
                    <span style={{ color: "#0AB4D6", fontWeight: "bold" }}>
                        CLASE "C"
                    </span>
                </Typography>,
            ],
        },
        {
            ico: <Avatar alt="Paola" src="/static/images/avatar/1.jpg" />,
            title: "Jefe de Laboratorio",
            priceMonth: "8.000",
            priceAge: "72.000",
            lastName: "Laboratorista C @Petrus",
            description:
                "Para jefes de laboratorio que necesitan una solución integral y completa.",
            features: [
                <Typography>
                    Generador de{" "}
                    <span style={{ color: "#0AB4D6", fontWeight: "bold" }}>
                        INFORMES
                    </span>{" "}
                    , fórmulas y ensayos{" "}
                    <span style={{ color: "#0AB4D6", fontWeight: "bold" }}>
                        AVANZADOS{" "}
                    </span>
                    de laboratorio
                </Typography>,
                <Typography>
                    Material de estudio, manuales y apoyo{" "}
                    <span style={{ color: "#0AB4D6", fontWeight: "bold" }}>
                        ACTUALIZADOS
                    </span>
                </Typography>,
                <Typography>
                    Cursos e-learning para preparación de examen{" "}
                    <span style={{ color: "#0AB4D6", fontWeight: "bold" }}>
                        CLASE "B y A"
                    </span>
                </Typography>,
                <Typography>
                    Soporte en tiempo relative{" "}
                    <span style={{ color: "#0AB4D6", fontWeight: "bold" }}>
                        24/7
                    </span>
                </Typography>,
            ],
        },
    ];
    /*  */
    /*  */
    /*  */
    const [alignment, setAlignment] = React.useState("Ano");

    const handleAlignment = (
        _event: any,
        newAlignment: React.SetStateAction<string> | null
    ) => {
        if (newAlignment !== null) {
            setAlignment(newAlignment);
        }
    };
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
                    title={"Un plan hecho a"}
                    subTitle={"tu medida"}
                    color={"#171717"}
                    parraph={
                        "Para estudiantes y profesionales de laboratorio que buscan mejorar su rendimiento."
                    }
                />
            </Box>
            <Box sx={{ position: "relative", marginTop: "0.5rem" }}>
                <TooglePrices
                    handleAlignment={handleAlignment}
                    alignment={alignment}
                />
                <Box sx={{ position: "absolute", right: -125, top: 0 }}>
                    <Typography
                        variant="subtitle2"
                        fontWeight={"bolder"}
                        color={
                            alignment === "Ano"
                                ? "primary"
                                : "InactiveCaptionText"
                        }
                    >
                        ¡Ahorras $24.000!
                    </Typography>
                    <SubdirectoryArrowLeftRoundedIcon
                        sx={{
                            color:
                                alignment === "Ano"
                                    ? "#0AB4D6"
                                    : "InactiveCaptionText",
                        }}
                    />
                </Box>
            </Box>
            <Box
                sx={{
                    maxWidth: 1100,
                    margin: "0 auto",
                    marginY: "1rem",
                    marginX: "0.5rem",
                }}
            >
                <Grid
                    container
                    spacing={1}
                    sx={{
                        flexDirection: { xs: "column-reverse", md: "unset" },
                        flexWrap:"wrap"
                    }}
                >
                    <>
                        {PricesDataCard.map((Prices: any, index: any) => (
                            <PricesCard
                                key={index}
                                Prices={Prices}
                                index={index}
                                alignment={alignment}
                            />
                        ))}
                    </>
                </Grid>
            </Box>
        </Box>
    );
}
