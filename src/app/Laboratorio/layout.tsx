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
            <body style={{ margin: 0 }}>
                
                <LayoutApp>{children}</LayoutApp>
            </body>
        </>
    );
}
