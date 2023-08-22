import { Metadata, ResolvingMetadata } from "next";
/*  */

export const metadata = {
    title: "Tamíz.LA",
};
/*  */
export default function RootAuth({ children }: { children: React.ReactNode }) {
    return (
        <>
            <>{children}</>
        </>
    );
}
