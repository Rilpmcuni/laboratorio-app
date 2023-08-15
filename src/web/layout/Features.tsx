"use client";
import Title from "@/components/ui/Title";
import { Box, Stack } from "@mui/material";
import React from "react";
import ToogleFeatures from "./ToogleFeatures";
import Logo from "@/components/ui/Logo";
import Image from "next/image";
import Curse_laptop from "@/assets/web/curse_laptop.png";
import Doc_laptop from "@/assets/web/doc_laptop.png";
import Plataform_laptop from "@/assets/web/plataform_laptop.png";
import Carousel from "./HeroCarousel";
import FeatureCarousel from "./FeatureCarousel";

export default function Features() {
    const [feature, setFeature] = React.useState("0feature");

    const handleFeature = (
        event: React.MouseEvent<HTMLElement>,
        newFeature: string
    ) => {
        setFeature(newFeature);
    };

    function imageSelect(numero: any): any {
        const feature: { [key: string]: any } = {
            "0feature": Doc_laptop,
            "1feature": Curse_laptop,
            "2feature": Plataform_laptop,
        };

        return feature[numero as keyof typeof feature] || "Curse_laptop";
    }
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
                    width: { xs: "100%", md: "auto" },
                }}
            >
                <Box
                    sx={{
                        display: { xs: "none", md: "flex" },
                        alignItems: "center",
                    }}
                >
                    <Image
                        // placeholder="blur"
                        sizes="100vw"
                        style={{
                            width: "100%",
                            height: "fit-content",
                            pointerEvents: "none",
                        }}
                        src={imageSelect(feature)}
                        alt={"TamizLA"}
                    />
                    <ToogleFeatures
                        handleFeature={handleFeature}
                        feature={feature}
                    />
                </Box>

                <Box
                    sx={{
                        display: { xs: "flex", md: "none" },
                        width: "95%",
                        //  height: "14rem",
                        marginX: "0",
                        marginTop: "1.5rem",
                        marginBottom: "0.5rem",
                    }}
                >
                    <FeatureCarousel />
                </Box>
            </Box>
        </Box>
    );
}
