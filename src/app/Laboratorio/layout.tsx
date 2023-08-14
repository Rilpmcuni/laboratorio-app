import LayoutApp from "@/layout/LayoutApp";
import { Metadata, ResolvingMetadata } from "next";
/*  */

export const metadata: Metadata = {
    title: "Laboratorio",
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
            <body>
                <LayoutApp>{children}</LayoutApp>
            </body>
        </>
    );
}
