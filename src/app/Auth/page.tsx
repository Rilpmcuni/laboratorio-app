"use client";
import AuthForm from "@/components/ui/AuthForm";
import Logo from "@/components/ui/Logo";
import LogoName from "@/components/ui/LogoName";
import Rewies from "@/web/layout/Rewies";
import RewiesCard from "@/web/layout/RewiesCard";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import {
    Alert,
    AlertTitle,
    Avatar,
    Box,
    Button,
    Card,
    CardContent,
    Grid,
    Stack,
    Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import Link from "next/link";
import React from "react";
import { redirect, useRouter } from "next/navigation";

interface Job {
    id: number; // Reemplaza esto con el tipo correcto para el id si es diferente
    title: string;
    Job: any;
    user_metadata: any;
    // Agrega otras propiedades que tenga tu objeto Job si las tienes definidas
}
export default function Auth() {
    const supabase = createClientComponentClient();
    const [Jobs, setJobs] = useState<Job[] | null>(null); // Tipo explícito para Jobs

    const router = useRouter();
    // useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
        if (event == "SIGNED_IN") router.push("/Auth/Callback");

        // if (event == "INITIAL_SESSION") {
        //     router.push("/Auth/Callback");
        // }
    });
    // }, []);

    async function getJobs() {
        const {
            data: { user },
        } = await supabase.auth.getUser();
        setJobs(user ? [] : null);
        console.log(user?.user_metadata);
        console.log(user?.email);
        console.log(user?.id);
    }
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                // width: "100%",
                alignItems: "center",
                height: "100vh",
                justifyContent: "space-between",
                backgroundColor: {
                    xs: "primary.main",
                    md: "primary.contrastText",
                },
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
                    gap: 1,
                }}
            >
                <Alert
                    variant="filled"
                    severity="warning"
                    sx={{ width: "26rem" }}
                >
                    <AlertTitle sx={{ fontweight: "bold" }}>
                        <strong>Acceso solo por invitación</strong>
                    </AlertTitle>
                </Alert>
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
                        <Stack
                            direction="row"
                            spacing={0}
                            alignItems={"center"}
                            justifyContent={"space-between"}
                        >
                            <Typography
                                variant="h6"
                                component="div"
                                fontWeight={600}
                                gutterBottom
                            >
                                <LogoName href="/" />
                            </Typography>
                            {/* <Typography
                                variant="body1"
                                component="div"
                                // fontWeight={600}
                                gutterBottom
                                color="secondary.contrastText"
                            >
                                Acceso solo por invitación
                            </Typography> */}
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
                </Box>
            </Box>
        </Box>
    );
}
