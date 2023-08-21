import { Metadata, ResolvingMetadata } from "next";
/*  */

export const metadata: Metadata = {
    title: "Informes",
    description: "Soy el Informes",
};
/*  */
export default function RootAuth({
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
