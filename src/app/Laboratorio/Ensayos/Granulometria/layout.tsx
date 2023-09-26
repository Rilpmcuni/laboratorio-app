import { Metadata, ResolvingMetadata } from "next";
/*  */

export const metadata: Metadata = {
    title: "Granulometría - Laboratorio | Tamíz.LA",
    description: "Soy el Muestreo hormigón fresco",
};
/*  */
export default function RootGranulometría({
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
