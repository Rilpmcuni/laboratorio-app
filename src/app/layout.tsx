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
    title: "Fabian Lisantti | Desarrollador Frontend",
    description: "Mi portafolio.",
    generator: "Portafolio",
    applicationName: "Portafolio",
    referrer: "origin-when-cross-origin",
    keywords: ["Portafolio", "Lisantti", "Rilpmcuni"],
    authors: [{ name: "Lisantti" }],
    colorScheme: "light",
    creator: "Fabian Lisantti",
    publisher: "Fabian Lisantti",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: "Fabian Lisantti | Desarrollador Frontend",
        description: "Mi portafolio.",
        url: "http://www.fabian-lisantti.vercel.app",
        images: "/image.png",
        siteName: "Lisantti Fronten",
        locale: "es_CL",
        type: "website",
    },
    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            "max-video-preview": -1,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    themeColor: "light",
    twitter: {
        card: "summary_large_image",
        title: "Fabian Lisantti | Desarrollador Frontend",
        description: "Mi portafolio.",
        siteId: "1467726470533754880",
        creator: "@Rilpmcuni",
        creatorId: "1467726470533754880",
        images: {
            url: "/image.png",
            alt: "@Rilpmcuni",
        },
    },
    viewport: {
        width: "device-width",
        initialScale: 1,
        maximumScale: 1,
    },
    verification: {
        google: "google",
        yandex: "yandex",
        yahoo: "yahoo",
        other: {
            me: [
                "fabian.lisantti@gmail.com",
                "http://www.fabian-lisantti.vercel.app",
            ],
        },
    },
    category: "technology",
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
