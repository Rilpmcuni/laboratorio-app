import { Metadata, ResolvingMetadata } from "next";
/*  */

export const metadata: Metadata = {
    title: "Informes - Laboratorio | Tamíz.LA",
    description: "Soy el Muestreo hormigón fresco",
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
