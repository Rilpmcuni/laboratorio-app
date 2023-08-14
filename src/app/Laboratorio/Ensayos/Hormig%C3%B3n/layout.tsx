import { Metadata, ResolvingMetadata } from "next";
/*  */

export const metadata: Metadata = {
    title: "Hormigon",
    description: "Soy el Hormigon",
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
