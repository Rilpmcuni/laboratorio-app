import * as React from "react";
import { styled } from "@mui/material/styles";

import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Typography } from "@mui/material";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    "& .MuiToggleButtonGroup-grouped": {
        margin: theme.spacing(0.5),
        border: 0,
        "&.Mui-disabled": {
            border: 0,
        },
        "&:not(:first-of-type)": {
            borderRadius: theme.shape.borderRadius,
        },
        "&:first-of-type": {
            borderRadius: theme.shape.borderRadius,
        },
        "&:hover": {
            backgroundColor: theme.palette.text.disabled,
            transition: "ease all 250ms",
        },
    },
}));

export default function ToogleFeatures({
    handleFeature,
    feature,
}: {
    handleFeature: any;
    feature: any;
}) {
    // const [alignment, setAlignment] = React.useState("0feature");

    // const handleAlignment = (
    //     event: React.MouseEvent<HTMLElement>,
    //     newAlignment: string
    // ) => {
    //     setAlignment(newAlignment);
    // };

    const FeaturesList = [
        {
            ico: <DescriptionOutlinedIcon color="primary" />,
            title: "Fórmulas, Informes",
            description:
                "Ofrecemos una amplia variedad de herramientas para laboratoristas, incluyendo fórmulas, seguimiento de ensayos, generación de informes, etc. Características esenciales para la realización de ensayos precisos, rápidos y eficientes.",
        },
        {
            ico: <SchoolOutlinedIcon color="primary" />,
            title: "Cursos E-learning",
            description:
                "La solución tecnológica para laboratoristas que buscan prepararse para los examenes tipo A, B y C. Con características como material de estudio, apoyo, e-learning y más. La plataforma fácil de usar que hace que sea accesible desde cualquier dispositivo.",
        },
        {
            ico: <DevicesRoundedIcon color="primary" />,
            title: "Multiplataforma",
            description:
                "Una aplicación multiplataforma, lo que significa que está disponible en diferentes sistemas operativos y dispositivos, como PC, tabletas y teléfonos móviles. Esto permite que los usuarios accedan a la aplicación en cualquier momento y lugar, lo que los hace más eficientes en su trabajo.",
        },
    ];

    return (
        <>
            <>
                <StyledToggleButtonGroup
                    orientation="vertical"
                    size="large"
                    value={feature}
                    exclusive
                    onChange={handleFeature}
                    aria-label="Feature"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        width: { xs: "auto", md: "30rem" },
                        textTransform: "lowercase",
                    }}
                >
                    {FeaturesList.map((features, index) => (
                        <ToggleButton
                            key={index}
                            color="primary"
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "flex-start",
                            }}
                            value={`${index}feature`}
                            aria-label={`${index}feature`}
                        >
                            {features.ico}
                            <Typography
                                variant="subtitle1"
                                color={"secondary.contrastText"}
                                fontWeight={"bold"}
                                sx={{
                                    textTransform: "lowercase",
                                    textAlign: "start",
                                }}
                            >
                                {features.title}
                            </Typography>
                            <Typography
                                variant="body2"
                                color={"gray"}
                                sx={{
                                    textTransform: "lowercase",
                                    textAlign: "start",
                                }}
                            >
                                {features.description}
                            </Typography>
                        </ToggleButton>
                    ))}
                </StyledToggleButtonGroup>
            </>
        </>
    );
}
