import LayoutApp from "@/layout/LayoutApp";
import { Metadata, ResolvingMetadata } from "next";
/*  */

export const metadata: Metadata = {
    title: "Laboratorio | Tamíz.LA",
    description: "Soy el laboratorio",
};
/*  */
export default function RootLaboratorio({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <body
                style={{
                    margin: 0,
                    position: "relative",
                }}
            >
                <div
                    style={{
                        borderTopLeftRadius: "1.5rem",
                        borderTopRightRadius: "1.5rem",
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
                ></div>
                <LayoutApp>{children}</LayoutApp>
            </body>
        </>
    );
}
