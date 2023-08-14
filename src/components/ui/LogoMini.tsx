"use client";
import Image from "next/image";
import React from "react";
import LogoMiniTamizLA from "@/assets/LogoMiniTamizLA.svg";
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
export default function LogoMini({
    width,
    grayscale,
    opcacity,
    borderRadius,
    border,
}: {
    width: any;
    grayscale: any;
    opcacity: any;
    borderRadius: any;
    border: any;
}) {
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
                    // filter: "grayscale(100%)",
                }}
            >
                <StyledBadge badgeContent={"beta"} color="secondary">
                    <Image
                        style={{
                            pointerEvents: "none",
                            filter: grayscale,
                            opacity: opcacity,
                            borderRadius: borderRadius,
                            border: border,
                        }}
                        width={width}
                        src={LogoMiniTamizLA}
                        alt={"TamizLA"}
                    />
                </StyledBadge>
            </LinkMui>
        </>
    );
}
