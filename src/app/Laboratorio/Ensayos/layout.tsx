import { Metadata, ResolvingMetadata } from "next";
/*  */

export const metadata: Metadata = {
    title: "Ensayos",
    description: "Soy el Ensayos",
};
/*  */
export default function RootEnsayos({
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
