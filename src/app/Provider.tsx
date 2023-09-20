"use client";
import * as React from "react";
import { red } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Lato } from "next/font/google";
import {  PT_Sans_Narrow } from "next/font/google";
// import Header from "@/layouts/Header";
// import Top from "@/layouts/Top";
import { Divider } from "@mui/material";
import Link from "next/link";
import NextNProgressClient from "@/components/feedback/NextNProgressClient";
// import Footer from "@/layouts/Footer";

const lato = Lato({
    subsets: ["latin"],
    weight: "400",
});
const pt_sans_narrow = PT_Sans_Narrow({
    subsets: ["latin"],
    weight: "400",
});

const theme = createTheme({
    components: {
        MuiListItem: {
            styleOverrides: {
                root: {
                    borderRadius: 10,
                },
            },
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    borderRadius: 10,
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    borderRadius: 10,
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: "bold",
                    boxShadow: "none",
                    "&:hover": {
                        boxShadow: "none",
                    },
                },
            },
        },
    },
    palette: {
        mode: "light",
        primary: {
            main: "#0AB4D6",
            contrastText: "#d9d9d9",
            // contrastText: "#171717",
        },
        secondary: {
            main: "#171717",
            contrastText: "#d9d9d9",
        },
        text: {
            primary: "#262626",
            secondary: "rgba(38,38,38,0.71)",
            disabled: "rgba(38,38,38,0.4)",
        },
        divider: "#d9d9d9",
    },
    shape: {
        borderRadius: 10,
    },
    spacing: 10,
    typography: {
        fontFamily: pt_sans_narrow.style.fontFamily,
        fontSize: 15,
        fontWeightLight: 400,
        h3: {
            fontFamily: pt_sans_narrow.style.fontFamily,
        },
        h2: {
            fontFamily: pt_sans_narrow.style.fontFamily,
        },
        h1: {
            fontFamily: pt_sans_narrow.style.fontFamily,
        },
    },
});

type Props = {
    children: React.ReactNode;
};

const Provider: React.FC<Props> = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            {/* <NextNProgressClient /> */}
            {/* <div style={{ zIndex: "50", position: "absolute" }}>
                <Link href={"/Inicio"}>Inicio</Link>
                <Link href={"/Laboratorio"}>Laboratorio</Link>
                <Link href={"/"}>nada</Link>
            </div> */}
            {/* <Top /> */}
            {/* <Divider /> */}
            {/* <Header /> */}
            {children}
            {/* <Footer /> */}
        </ThemeProvider>
    );
};
export default Provider;
