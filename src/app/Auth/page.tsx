"use client";
import AuthForm from "@/components/ui/AuthForm";
import Logo from "@/components/ui/Logo";
import LogoName from "@/components/ui/LogoName";
import Rewies from "@/web/layout/Rewies";
import RewiesCard from "@/web/layout/RewiesCard";
import {
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    Grid,
    Stack,
    Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";

export default function Auth() {
    const FeaturesCard = [
        {
            ico: <Avatar alt="María" src="/static/images/avatar/1.jpg" />,
            title: "Le doy cinco estrellas",
            name: "María",
            lastName: "Jefa de laboratorio @LEM",
            description:
                "Tamiz LA me ha permitido optimizar mi tiempo y aumentar mi eficiencia en el trabajo. Ahora puedo realizar ensayos y elaborar informes de manera más rápida y fácil.",
        },
    ];
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                // width: "100%",
                alignItems: "center",
                height: "100vh",
                justifyContent: "space-between",
            }}
        >
            <Box
                sx={{
                    width: { xs: "100%", md: "50%" },
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "primary.main",
                    borderTopRightRadius: { xs: "auto", md: "1.5rem" },
                    borderBottomRightRadius: { xs: "auto", md: "1.5rem" },
                }}
            >
                <Card
                    variant="elevation"
                    sx={{
                        position: "relative",
                        overflow: "visible",
                        borderRadius: "1rem",
                        backgroundColor: "secondary.main",
                        width: "26rem",
                        border: "none",
                    }}
                >
                    <CardContent>
                        <Stack direction="column" spacing={0}>
                            <Typography
                                variant="h6"
                                component="div"
                                fontWeight={600}
                                gutterBottom
                            >
                                <LogoName />
                            </Typography>
                        </Stack>
                        <AuthForm />
                    </CardContent>
                </Card>
                <Stack
                    direction={"row"}
                    spacing={1}
                    sx={{
                        marginTop: "1rem",
                        display: {
                            xs: "flex",
                            md: "none",
                        },
                    }}
                >
                    <Button
                        size="small"
                        variant="outlined"
                        color="secondary"
                        LinkComponent={Link}
                        href="/"
                    >
                        Volver al inicio
                    </Button>
                    <Button
                        size="small"
                        variant="contained"
                        color="secondary"
                        LinkComponent={Link}
                        href="/secondary"
                    >
                        Pasar al laboratorio
                    </Button>
                </Stack>
            </Box>
            <Box
                sx={{
                    display: { xs: "none", md: "flex" },
                    width: "50%",
                    height: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Box
                    sx={{
                        position: "relative",
                        overflow: "visible",
                        borderRadius: "1rem",
                        width: "30rem",
                    }}
                >
                    <Typography
                        variant="h3"
                        sx={{ fontStyle: "italic" }}
                        gutterBottom
                    >
                        <blockquote>
                            " A veces quisiera tirar la toalla, ¿Pero luego ¿Con
                            qué me seco?
                        </blockquote>
                    </Typography>
                    <Button
                        size="small"
                        variant="outlined"
                        color="secondary"
                        LinkComponent={Link}
                        href="/"
                        sx={{ display: "flex" }}
                    >
                        Volver al inicio
                    </Button>
                    <Button
                        size="small"
                        variant="outlined"
                        color="primary"
                        LinkComponent={Link}
                        href="/Laboratorio"
                        sx={{ display: "flex" }}
                    >
                        Pasar al laboratorio
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
