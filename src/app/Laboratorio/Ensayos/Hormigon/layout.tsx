import { Metadata, ResolvingMetadata } from "next";
/*  */

export const metadata: Metadata = {
    title: "Muestreo hormigón fresco - Ensayos | Tamíz.LA",
    description: "Soy el Muestreo hormigón fresco",
};
/*  */
export default function RootHormigon({
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
