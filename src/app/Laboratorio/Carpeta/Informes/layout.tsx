import { Metadata, ResolvingMetadata } from "next";
/*  */

export const metadata: Metadata = {
    title: "Informes",
    description: "Soy el Informes",
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
