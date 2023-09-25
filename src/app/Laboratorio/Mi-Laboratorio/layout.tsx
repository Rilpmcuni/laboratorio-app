import { Metadata, ResolvingMetadata } from "next";
/*  */

export const metadata: Metadata = {
    title: "Mi Laboratorio | Tamíz.LA",
    description: "Soy el laboratorio",
};
/*  */
export default function RootMiLaboratorio({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <>{children}</>
        </>
    );
}
