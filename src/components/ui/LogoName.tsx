"use client";
import Image from "next/image";
import React from "react";
import LogoTamizLA from "@/assets/LogoTamizLA.svg";
import { Box, Typography } from "@mui/material";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { Link as LinkMui } from "@mui/material";
import Link from "next/link";
const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    "& .MuiBadge-badge": {
        right: 12,
        top: 46,
        // bottom: 12,
        border: `2px solid ${theme.palette.background.paper}`,
        padding: "0 4px",
        color: theme.palette.primary.main,
    },
}));
export default function LogoName({href}: {href:string}) {
    return (
        <>
            <LinkMui
                component={Link}
                href={href}
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    color: "inherit",
                    textDecoration: "none",
                    gap: "0.5rem",
                }}
            >
                <StyledBadge badgeContent={"beta"} color="secondary">
                    <Image
                        style={{ pointerEvents: "none" }}
                        width={60}
                        src={LogoTamizLA}
                        alt={"TamizLA"}
                    />
                </StyledBadge>
                <Typography
                    sx={{
                       color: "primary.main",
                        // backgroundImage: `linear-gradient(45deg, #0ab4d6 0%, #171717 100%)`,
                        // backgroundImage: `linear-gradient(45deg, #33c5e5 0%, #606060 100%)`,

                        // backgroundSize: "100%",
                        // backgroundRepeat: "repeat",
                        // backgroundClip: "text",
                        // WebkitBackgroundClip: "text",
                        // WebkitTextFillColor: "transparent",
                    }}
                    variant="h6"
                    fontWeight={"bold"}
                >
                    Tamíz.LA
                </Typography>
            </LinkMui>
        </>
    );
}
