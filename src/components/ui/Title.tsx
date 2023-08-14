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
                        backgroundcolor: "primary.main",
                        backgroundImage: `linear-gradient(45deg, #606060 0%, ${color} 100%)`,
                        backgroundSize: "100%",
                        backgroundRepeat: "repeat",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                    variant="h3"
                    fontWeight={"bolder"}
                    // color={color}
                >
                    {title}
                </Typography>
                <Typography
                    gutterBottom
                    marginBottom={"2rem"}
                    variant="h3"
                    fontWeight={"bolder"}
                    sx={{
                        backgroundcolor: "primary.main",
                        backgroundImage: `linear-gradient(45deg, #33c5e5 0%, #0ab4d6 100%)`,
                        backgroundSize: "100%",
                        backgroundRepeat: "repeat",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                    }}
                >
                    {subTitle}
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        backgroundcolor: "primary.main",
                        backgroundImage: `linear-gradient(45deg, #606060 0%, ${color} 100%)`,
                        backgroundSize: "100%",
                        backgroundRepeat: "repeat",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        fontWeight:"bold"
                    }}
                >
                    {parraph}
                </Typography>
            </Box>
        </>
    );
}
