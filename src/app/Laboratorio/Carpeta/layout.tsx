import { Metadata, ResolvingMetadata } from "next";
/*  */

export const metadata: Metadata = {
    title: "Carpeta",
    description: "Soy el Carpeta",
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
