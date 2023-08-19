"use client";

import React from "react";

import { Box, Stack, Typography } from "@mui/material";
import { Link as LinkMui } from "@mui/material";
import Link from "next/link";
import WebAssetIcon from "@mui/icons-material/WebAsset";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import RoomRoundedIcon from "@mui/icons-material/RoomRounded";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import LogoName from "@/components/ui/LogoName";

export default function Footer() {
    /* año */
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    /* paginas */
    const PagesList = [
        {
            title: "Inicio",
        },
        {
            title: "Características",
        },
        {
            title: "E-Learning",
        },
        {
            title: "Precio",
        },
    ];
    const CompaniList = [
        {
            title: `Llámanos: +56 9 8845 6231`,
            ico: (
                <PhoneInTalkIcon
                    fontSize="small"
                    sx={{ mr: "0.30rem" }}
                    color={"primary"}
                />
            ),
            link: `tel: +56 9 8845 6231`,
        },
        {
            title: "hola@tamiz.la",
            ico: (
                <EmailRoundedIcon
                    fontSize="small"
                    sx={{ mr: "0.30rem" }}
                    color={"primary"}
                />
            ),
            link: `mailto:hola@tamiz.la`,
        },
        {
            title: "C. Talca 344, Cartagena, Valparaiso, Chile",
            ico: (
                <RoomRoundedIcon
                    fontSize="small"
                    sx={{ mr: "0.30rem" }}
                    color={"primary"}
                />
            ),
            link: "https://goo.gl/maps/jvL2fjRRPueTowym6",
        },
        {
            title: "Lunes - Viernes, 9am - 6pm; Fin de semana cerrado",
            ico: (
                <AccessTimeRoundedIcon
                    fontSize="small"
                    sx={{ mr: "0.30rem" }}
                    color={"primary"}
                />
            ),
            link: "",
        },
    ];
    return (
        <Box
            bgcolor={"#f8f9fa"}
            // color={"white"}
            py={6}
            px={4}
            display={"flex"}
            justifyContent={"space-around"}
            sx={{
                flexDirection: { xs: "column", md: "row" },
                gap: { xs: "4rem", md: "1rem" },
                // borderTopLeftRadius: "1.5rem",
                // borderTopRightRadius: "1.5rem",
            }}
        >
            <Stack
                justifyContent={"start"}
                direction={"column"}
                sx={{
                    width: { xs: "100%", md: "30%" },
                    gap: "1rem",
                }}
            >
                <LogoName />
                <Typography variant="body2" color="InactiveCaptionText">
                Bienvenido, a la nueva tecnología de Laboratorio.
                </Typography>
                <Typography variant="caption" color="InactiveCaptionText">
                    © {currentYear} Tamíz.LA SpA. Todos los derechos reservados.
                </Typography>
            </Stack>
            <Stack
                sx={{
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "start",
                    flexDirection: { xs: "column", md: "row" },
                    gap: "2rem",
                }}
                // spacing={1}
                // direction={"row"}
            >
                <Stack>
                    <Typography variant="body2" fontWeight={"bold"}>Paginas</Typography>
                    <ul
                        style={{
                            listStyleType: "none",
                            listStylePosition: "outside",
                            display: "flex",
                            alignItems: "start",
                            justifyContent: "center",
                            flexDirection: "column",
                            marginLeft: 0,
                            paddingLeft: 0,
                        }}
                    >
                        {PagesList.map(({ title }, index) => (
                            <>
                                <li key={index}>
                                    <LinkMui
                                        component={Link}
                                        href={`/${title}`}
                                        color="inherit"
                                        underline="hover"
                                        sx={{
                                            display: "flex",
                                            alignItems: "start",
                                            justifyContent: "start",
                                            flexDirection: "row",
                                        }}
                                    >
                                        <WebAssetIcon
                                            fontSize="small"
                                            sx={{ mr: "0.30rem" }}
                                            color={"primary"}
                                        />

                                        <Typography variant="caption" color="InactiveCaptionText">
                                            {title}
                                        </Typography>
                                    </LinkMui>
                                </li>
                            </>
                        ))}
                    </ul>
                </Stack>
                <Stack
                    sx={{
                        display: "flex",
                        justifyContent: "start",
                        alignItems: "start",
                    }}
                >
                    <Typography variant="body2" fontWeight={"bold"}>Compañía</Typography>
                    <ul
                        style={{
                            listStyleType: "none",
                            listStylePosition: "outside",
                            display: "flex",
                            alignItems: "start",
                            justifyContent: "center",
                            flexDirection: "column",
                            marginLeft: 0,
                            paddingLeft: 0,
                        }}
                    >
                        {CompaniList.map(({ title, ico, link }, index) => (
                            <>
                                <li key={index}>
                                    <LinkMui
                                        target="_blank"
                                        component={Link}
                                        href={link}
                                        color="inherit"
                                        underline="hover"
                                        sx={{
                                            display: "flex",
                                            alignItems: "start",
                                            justifyContent: "start",
                                            flexDirection: "row",
                                        }}
                                    >
                                        {ico}
                                        <Typography variant="caption" color="InactiveCaptionText">
                                            {title}
                                        </Typography>
                                    </LinkMui>
                                </li>
                            </>
                        ))}
                    </ul>
                </Stack>
            </Stack>
        </Box>
    );
}
