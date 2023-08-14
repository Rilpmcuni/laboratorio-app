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
export default function Logo({ width }: { width: any }) {
    return (
        <>
            <LinkMui
                component={Link}
                href={"/"}
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    color: "inherit",
                    textDecoration: "none",
                }}
            >
                <StyledBadge badgeContent={"beta"} color="secondary">
                    <Image
                        style={{ pointerEvents: "none" }}
                        width={width}
                        src={LogoTamizLA}
                        alt={"TamizLA"}
                    />
                </StyledBadge>
            </LinkMui>
        </>
    );
}
