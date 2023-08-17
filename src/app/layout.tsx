import "./globals.css";
import { Lato } from "next/font/google";
import Provider from "./Provider";
import { Link as LinkMui, Typography } from "@mui/material";
import Link from "next/link";

const lato = Lato({
    subsets: ["latin"],
    weight: "400",
});

// import type { Metadata } from "next";
import ThemeRegistry from "./ThemeRegistry";

export const metadata = {
    title: "Tamíz.LA | La solución tecnológica para profesionales laboratoristas",
    description:
        "Tamíz.LA: La solución tecnológica para laboratoristas viales que optimiza el trabajo, impulsa la eficiencia y ofrece herramientas innovadoras para resultados excepcionales en el laboratorio vial.",
    generator: "Tamíz.LA",
    applicationName: "Tamíz.LA",
    referrer: "origin-when-cross-origin",
    keywords: ["Tamíz.LA", "Laboratorio", "Vial"],
    authors: [{ name: "Tamíz.LA" }],
    colorScheme: "light",
    creator: "Tamíz.LA",
    publisher: "Tamíz.LA",
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    openGraph: {
        title: "Tamíz.LA | La solución tecnológica para profesionales laboratoristas",
        description:
            "Tamíz.LA: La solución tecnológica para laboratoristas viales que optimiza el trabajo, impulsa la eficiencia y ofrece herramientas innovadoras para resultados excepcionales en el laboratorio vial.",
        url: "http://tamizla-beta.vercel.app",
        images: "/image.png",
        siteName: "Tamíz.LA",
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
        title: "Tamíz.LA | La solución tecnológica para profesionales laboratoristas",
        description:
            "Tamíz.LA: La solución tecnológica para laboratoristas viales que optimiza el trabajo, impulsa la eficiencia y ofrece herramientas innovadoras para resultados excepcionales en el laboratorio vial.",
        siteId: "1467726470533754880",
        creator: "@Tamíz.LA",
        creatorId: "1467726470533754880",
        images: {
            url: "/image.png",
            alt: "@Tamíz.LA",
        },
    },
    // viewport: {
    //     width: "device-width",
    //     initialScale: 1,
    //     maximumScale: 1,
    // },
    // verification: {
    //     google: "google",
    //     yandex: "yandex",
    //     yahoo: "yahoo",
    //     other: {
    //         me: ["contacto@tamiz.la", "http://tamizla-beta.vercel.app"],
    //     },
    // },
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
                <ThemeRegistry options={{ key: "mui" }}>
                    {children}
                </ThemeRegistry>
            </body>
        </html>
    );
}

// export const metadata = {
//     title: "Tamíz.LA | La solución tecnológica para profesionales laboratoristas",
//     description:
//         "Tamíz.LA: La solución tecnológica para laboratoristas viales que optimiza el trabajo, impulsa la eficiencia y ofrece herramientas innovadoras para resultados excepcionales en el laboratorio vial.",
//     generator: "Tamíz.LA",
//     applicationName: "Tamíz.LA",
//     referrer: "origin-when-cross-origin",
//     keywords: ["Tamíz.LA", "Laboratorio", "Vial"],
//     authors: [{ name: "Tamíz.LA" }],
//     colorScheme: "light",
//     creator: "Tamíz.LA",
//     publisher: "Tamíz.LA",
//     formatDetection: {
//         email: false,
//         address: false,
//         telephone: false,
//     },
//     openGraph: {
//         title: "Tamíz.LA | La solución tecnológica para profesionales laboratoristas",
//         description:
//             "Tamíz.LA: La solución tecnológica para laboratoristas viales que optimiza el trabajo, impulsa la eficiencia y ofrece herramientas innovadoras para resultados excepcionales en el laboratorio vial.",
//         url: "http://tamizla-beta.vercel.app",
//         images: "/image.png",
//         siteName: "Tamíz.LA",
//         locale: "es_CL",
//         type: "website",
//     },
//     robots: {
//         index: false,
//         follow: true,
//         nocache: true,
//         googleBot: {
//             index: true,
//             follow: false,
//             noimageindex: true,
//             "max-video-preview": -1,
//             "max-image-preview": "large",
//             "max-snippet": -1,
//         },
//     },
//     themeColor: "light",
//     twitter: {
//         card: "summary_large_image",
//         title: "Tamíz.LA | La solución tecnológica para profesionales laboratoristas",
//         description:
//             "Tamíz.LA: La solución tecnológica para laboratoristas viales que optimiza el trabajo, impulsa la eficiencia y ofrece herramientas innovadoras para resultados excepcionales en el laboratorio vial.",
//         siteId: "1467726470533754880",
//         creator: "@Tamíz.LA",
//         creatorId: "1467726470533754880",
//         images: {
//             url: "/image.png",
//             alt: "@Tamíz.LA",
//         },
//     },
//     // viewport: {
//     //     width: "device-width",
//     //     initialScale: 1,
//     //     maximumScale: 1,
//     // },
//     // verification: {
//     //     google: "google",
//     //     yandex: "yandex",
//     //     yahoo: "yahoo",
//     //     other: {
//     //         me: ["contacto@tamiz.la", "http://tamizla-beta.vercel.app"],
//     //     },
//     // },
//     category: "technology",
// };
