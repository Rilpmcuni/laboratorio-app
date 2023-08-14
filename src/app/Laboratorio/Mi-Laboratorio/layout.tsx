import { Metadata, ResolvingMetadata } from "next";
/*  */

export const metadata: Metadata = {
    title: "Mi Laboratorio",
    description: "Soy el Mi Laboratorio",
};
/*  */
export default function RootMiLaboratorio({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <>
                {children}
            </>
        </>
    );
}
