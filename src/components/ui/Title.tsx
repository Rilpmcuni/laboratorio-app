"use client";
import { Typography, Box } from "@mui/material";
import React from "react";

export default function Title({
    title,
    subTitle,
    parraph,
    color,
}: {
    title: string;
    subTitle: string;
    parraph: string;
    color: string;
}) {
    return (
        <>
            <Box>
                <Typography
                    sx={{
                        color: { color },
                        // backgroundImage: `linear-gradient(45deg, #606060 0%, ${color} 100%)`,
                        // backgroundSize: "100%",
                        // backgroundRepeat: "repeat",
                        // backgroundClip: "text",
                        // WebkitBackgroundClip: "text",
                        // WebkitTextFillColor: "transparent",
                    }}
                    variant="h3"
                    fontWeight={"300"}
                    // color={color}
                >
                    {title}
                </Typography>
                <Typography
                    marginBottom={"2rem"}
                    variant="h3"
                    fontWeight={"bolder"}
                    sx={{
                        color: "#0ab4d6",
                        // backgroundImage: `linear-gradient(45deg, #33c5e5 0%, #0ab4d6 100%)`,
                        // backgroundSize: "100%",
                        // backgroundRepeat: "repeat",
                        // backgroundClip: "text",
                        // WebkitBackgroundClip: "text",
                        // WebkitTextFillColor: "transparent",
                    }}
                >
                    {subTitle}
                </Typography>
                <Typography
                    paragraph
                    variant="body2"
                    sx={{
                        marginTop: "-1.5rem",

                        color: color,
                        // backgroundImage: `linear-gradient(45deg, #606060 0%, ${color} 100%)`,
                        // backgroundSize: "100%",
                        // backgroundRepeat: "repeat",
                        // backgroundClip: "text",
                        // WebkitBackgroundClip: "text",
                        // WebkitTextFillColor: "transparent",
                        // fontWeight: "bold",
                    }}
                >
                    {parraph}
                </Typography>
            </Box>
        </>
    );
}
