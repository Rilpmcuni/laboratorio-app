import "./globals.css";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import Provider from "./Provider";
import { Link as LinkMui, Typography } from "@mui/material";
import Link from "next/link";

const lato = Lato({
    subsets: ["latin"],
    weight: "400",
});

export const metadata = {
    title: "Tamíz.LA | La solución tecnológica para profesionales laboratoristas",
    description:
        "Tamíz.LA: La solución tecnológica para laboratoristas viales que optimiza el trabajo, impulsa la eficiencia y ofrece herramientas innovadoras para resultados excepcionales en el laboratorio vial.",

};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es-cl">
            <body className={lato.className} style={{ margin: 0 }}>
                <Provider>
                    {/* <div
                        style={{
                            borderRadius: "1.5rem",
                            // border: "solid 1px black",
                            position: "fixed",
                            top: 60,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            height: "100vh",
                            width: "100%",
                            // boxShadow: "0px 0px 0px 15px black",
                            boxShadow: "0px 0px 0px 15px #171717",
                            zIndex: 40,
                            pointerEvents: "none",
                        }}
                    ></div> */}
                    {children}
                </Provider>
            </body>
        </html>
    );
}
