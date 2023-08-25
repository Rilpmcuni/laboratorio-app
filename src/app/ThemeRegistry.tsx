"use client";
import { Suspense } from "react";
import createCache from "@emotion/cache";
import { useServerInsertedHTML } from "next/navigation";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
// import theme from "/path/to/your/theme";
import { Lato } from "next/font/google";

import { createTheme } from "@mui/material/styles";
import { useState } from "react";
import NextNProgressClient from "@/components/feedback/NextNProgressClient";

import { esES } from "@mui/material/locale";

// import NextNProgressClient from "@/components/function/NextNProgressClient";

const lato = Lato({
    subsets: ["latin"],
    weight: "400",
});

const theme = createTheme(
    {
        components: {
            MuiListItem: {
                styleOverrides: {
                    root: {
                        borderRadius: 10,
                    },
                },
            },
            MuiListItemButton: {
                styleOverrides: {
                    root: {
                        borderRadius: 10,
                    },
                },
            },
            MuiMenuItem: {
                styleOverrides: {
                    root: {
                        borderRadius: 10,
                    },
                },
            },
            MuiButton: {
                styleOverrides: {
                    root: {
                        fontWeight: "bold",
                        boxShadow: "none",
                        "&:hover": {
                            boxShadow: "none",
                        },
                    },
                },
            },
        },
        palette: {
            mode: "light",
            primary: {
                main: "#0AB4D6",
                contrastText: "#fff",
                // contrastText: "#171717",
            },
            secondary: {
                main: "#171717",
                contrastText: "#d9d9d9",
            },
            success: {
                main: "#5bc346",
            },
            error: {
                main: "#ff0035",
            },
            warning: {
                main: "#fbff1f",
            },
            info: {
                main: "#2667FF",
            },
            text: {
                primary: "#262626",
                secondary: "rgba(38,38,38,0.71)",
                disabled: "rgba(38,38,38,0.4)",
            },
            divider: "#d9d9d9",
        },
        shape: {
            borderRadius: 10,
        },
        spacing: 10,
        typography: {
            fontFamily: lato.style.fontFamily,
            fontSize: 15,
            fontWeightLight: 400,
        },
    },
    esES
);

// This implementation is from emotion-js
// https://github.com/emotion-js/emotion/issues/2928#issuecomment-1319747902
export default function ThemeRegistry(props: { options: any; children: any }) {
    const { options, children } = props;

    const [{ cache, flush }] = useState(() => {
        const cache = createCache(options);
        cache.compat = true;
        const prevInsert = cache.insert;
        let inserted: string[] = [];
        cache.insert = (...args) => {
            const serialized = args[1];
            if (cache.inserted[serialized.name] === undefined) {
                inserted.push(serialized.name);
            }
            return prevInsert(...args);
        };
        const flush = () => {
            const prevInserted = inserted;
            inserted = [];
            return prevInserted;
        };
        return { cache, flush };
    });

    useServerInsertedHTML(() => {
        const names = flush();
        if (names.length === 0) {
            return null;
        }
        let styles = "";
        for (const name of names) {
            styles += cache.inserted[name];
        }
        return (
            <style
                key={cache.key}
                data-emotion={`${cache.key} ${names.join(" ")}`}
                dangerouslySetInnerHTML={{
                    __html: styles,
                }}
            />
        );
    });

    return (
        <CacheProvider value={cache}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {/* <Provider> */}
                {/* <NextNProgressClient /> */}

                <NextNProgressClient>{children}</NextNProgressClient>
                {/* </Provider> */}
            </ThemeProvider>
        </CacheProvider>
    );
}
