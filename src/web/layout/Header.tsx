"use client";
import * as React from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import { styled } from "@mui/material/styles";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import {
    Avatar,
    Button,
    IconButton,
    Menu,
    MenuList,
    MenuItem,
    Paper,
    Zoom,
    ListItemIcon,
    Typography,
    ListItemText,
} from "@mui/material";
import SpaceDashboardTwoToneIcon from "@mui/icons-material/SpaceDashboardTwoTone";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { PersonAdd } from "@mui/icons-material";
import { Settings } from "@mui/icons-material";
import { Logout } from "@mui/icons-material";
import Logo from "@/../public/assets/img/IconoMiniTamizLA.svg";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { usePathname } from "next/navigation";
import ScienceTwoToneIcon from "@mui/icons-material/ScienceTwoTone";
import FeedTwoToneIcon from "@mui/icons-material/FeedTwoTone";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import FolderTwoToneIcon from "@mui/icons-material/FolderTwoTone";

import { Link as LinkMui, Stack } from "@mui/material";
import Link from "next/link";
import LogoName from "@/components/ui/LogoName";
export default function Header() {
    /*  */
    const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: theme.palette.common.white,
            color: "rgba(0, 0, 0, 0.87)",
            boxShadow: theme.shadows[4],
            fontSize: 11,
            padding: "0",
            margin: "0",
        },
    }));
    /*  */
    return (
        <Stack
            bgcolor={"white"}
            position={"sticky"}
            top={0}
            display={"flex"}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={1}
            paddingX={"1rem"}
            zIndex={50}
            // borderBottom={"solid 1px #d9d9d9"}
        >
            <LogoName />
            <Stack
                sx={{ display: { xs: "none", md: "flex" } }}
                direction="row"
                justifyContent="space-evenly"
                alignItems="center"
                spacing={1}
            >
                <Button
                    size="small"
                    color="secondary"
                    LinkComponent={Link}
                    href="/"
                >
                    Inicio
                </Button>

                {/*  */}
                <LightTooltip
                    TransitionComponent={Zoom}
                    placement="bottom"
                    arrow
                    title={
                        <React.Fragment>
                            <Paper sx={{ width: 320, maxWidth: "100%" }}>
                                <MenuList>
                                    <MenuItem>
                                        <ListItemIcon>
                                            <DevicesRoundedIcon color="primary" />
                                        </ListItemIcon>
                                        <ListItemText>Multiplataforma</ListItemText>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            Device
                                        </Typography>
                                    </MenuItem>
                                    <MenuItem>
                                        <ListItemIcon>
                                            <SchoolOutlinedIcon color="primary" />
                                        </ListItemIcon>
                                        <ListItemText>E-learning</ListItemText>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            Curse
                                        </Typography>
                                    </MenuItem>
                                    <MenuItem>
                                        <ListItemIcon>
                                            <DescriptionOutlinedIcon color="primary" />
                                        </ListItemIcon>
                                        <ListItemText>Ensayos, Informes</ListItemText>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                        >
                                            Data
                                        </Typography>
                                    </MenuItem>
                                </MenuList>
                            </Paper>
                        </React.Fragment>
                    }
                >
                    <Button
                        size="small"
                        color="secondary"
                        LinkComponent={Link}
                        href="/Características"
                        endIcon={
                            <KeyboardArrowDownRoundedIcon color="primary" />
                        }
                    >
                        Características
                    </Button>
                </LightTooltip>
                {/*  */}
                <Button
                    size="small"
                    color="secondary"
                    LinkComponent={Link}
                    href="/E-learning"
                >
                    E-learning
                </Button>
                {/* <Badge color="primary" badgeContent={CountEmpleo}> */}
                <Button
                    size="small"
                    color="secondary"
                    LinkComponent={Link}
                    href="/Precio"
                >
                    Precio
                </Button>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
                <Button
                    size="small"
                    variant="contained"
                    color="primary"
                    LinkComponent={Link}
                    href="/Iniciar"
                >
                    Iniciar sesión
                </Button>
                <Button
                    size="small"
                    variant="outlined"
                    color="secondary"
                    LinkComponent={Link}
                    href="/Crear"
                    sx={{ display: { xs: "none", md: "flex" } }}
                >
                    Crear cuenta
                </Button>
            </Stack>
        </Stack>
    );
}
