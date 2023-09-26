import { Metadata, ResolvingMetadata } from "next";
/*  */

export const metadata: Metadata = {
    title: "Carpeta | Tamíz.LA",
    description: "Soy el Muestreo hormigón fresco",
};
/*  */
export default function RootCarpeta({
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
