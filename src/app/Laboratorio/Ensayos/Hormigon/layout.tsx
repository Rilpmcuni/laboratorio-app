import { Metadata, ResolvingMetadata } from "next";
/*  */

export const metadata: Metadata = {
    title: "Hormigón - Laboratorio | Tamíz.LA",
    description: "Soy el Hormigón",
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
