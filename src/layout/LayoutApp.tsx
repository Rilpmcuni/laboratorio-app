"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
import { alpha } from "@mui/system";
import { styled } from "@mui/material/styles";
import { useTheme } from "@mui/material/styles";
import {
    Avatar,
    Button,
    IconButton,
    Menu,
    MenuList,
    MenuItem,
    Paper,
    Zoom,
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

const drawerWidth = 80;

export default function LayoutApp({ children }: { children: React.ReactNode }) {
    const theme = useTheme();

    const pathname = usePathname();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const router = useRouter();

    const items = [
        {
            text: "Laboratorio",
            icon: <SpaceDashboardTwoToneIcon />,
            subItems: [],
        },
        {
            text: "Carpeta",
            icon: <FolderTwoToneIcon />,
            subItems: [
                {
                    text: "Carpeta",
                    icon: <MailIcon />,
                },
                {
                    text: "Informes",
                    icon: <MailIcon />,
                },
                {
                    text: "Certificados",
                    icon: <MailIcon />,
                },
            ],
        },
        {
            text: "Ensayos",
            icon: <ScienceTwoToneIcon />,
            subItems: [
                {
                    text: "Ensayos",
                    icon: <ScienceTwoToneIcon />,
                },
                {
                    text: "Granulometría",
                    icon: <ScienceTwoToneIcon />,
                },
                {
                    text: "Hormigón",
                    icon: <ScienceTwoToneIcon />,
                },
            ],
        },
        {
            text: "Manuales",
            icon: <FeedTwoToneIcon />,
            subItems: [],
        },
    ];

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

    return (
        <Box sx={{ display: "flex" }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: `calc(100% - ${drawerWidth}px)`,
                    ml: `${drawerWidth}px`,
                    boxShadow: 0,
                    bgcolor: "Background",
                    justifyContent: "flex-end",
                    padding: 0,
                }}
            >
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        padding: 0,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            textAlign: "center",
                        }}
                    >
                        <Button
                            startIcon={
                                <VerifiedOutlinedIcon
                                    sx={{ color: "yellow" }}
                                />
                            }
                            sx={{
                                minWidth: 100,
                                boxShadow: 0,
                                "&:hover": {
                                    boxShadow: 0,
                                },
                                textTransform: "lowercase",
                            }}
                            variant="outlined"
                        >
                            Actualizate al plan "Laboratorista"
                        </Button>
                        {/* <Button
                            startIcon={
                                <FavoriteBorderRoundedIcon
                                    sx={{ color: "red" }}
                                />
                            }
                            sx={{
                                minWidth: 100,
                                boxShadow: 0,
                                "&:hover": {
                                    boxShadow: 0,
                                },
                                textTransform: "lowercase",
                            }}
                            variant="outlined"
                        >
                            ¡Apóyanos!
                        </Button> */}

                        <Tooltip
                            title="Configurar Perfil"
                            arrow
                            TransitionComponent={Zoom}
                            disableInteractive
                        >
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={
                                    open ? "account-menu" : undefined
                                }
                                aria-haspopup="true"
                                aria-expanded={open ? "true" : undefined}
                            >
                                <Avatar sx={{ width: 32, height: 32 }}>
                                    C
                                </Avatar>
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <Menu
                        TransitionComponent={Zoom}
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                overflow: "visible",
                                filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                                mt: 1.5,
                                "& .MuiAvatar-root": {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                "&:before": {
                                    content: '""',
                                    display: "block",
                                    position: "absolute",
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: "background.paper",
                                    transform: "translateY(-50%) rotate(45deg)",
                                    zIndex: 0,
                                },
                            },
                        }}
                        transformOrigin={{
                            horizontal: "right",
                            vertical: "top",
                        }}
                        anchorOrigin={{
                            horizontal: "right",
                            vertical: "bottom",
                        }}
                    >
                        <MenuItem onClick={handleClose}>
                            <Avatar /> Perfil
                        </MenuItem>
                        <MenuItem
                            onClick={() => {
                                handleClose();
                                router.push("/Laboratorio/Mi-Laboratorio");
                            }}
                        >
                            <Avatar /> Mi Laboratorio
                        </MenuItem>
                        <Divider />
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <PersonAdd fontSize="small" />
                            </ListItemIcon>
                            Añadir otra cuenta
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <Settings fontSize="small" />
                            </ListItemIcon>
                            Configuración
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                            <ListItemIcon>
                                <Logout fontSize="small" />
                            </ListItemIcon>
                            Cerrar sesión
                        </MenuItem>
                    </Menu>
                </Toolbar>
                <Divider />
            </AppBar>

            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                }}
                variant="permanent"
                anchor="left"
                PaperProps={{
                    sx: {
                        borderRight: "1px dashed #d9d9d9",
                    },
                }}
            >
                <Toolbar
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    <Image
                        src={Logo}
                        alt={"Logo"}
                        fill={true}
                        style={{
                            padding: 8,
                        }}
                    />
                </Toolbar>

                <List>
                    {items.map((item, index) => {
                        const { text, icon, subItems } = item;

                        const isActive =
                            (index === 0 && pathname === "/Laboratorio") ||
                            pathname.startsWith(`/Laboratorio/${text}`);

                        const handleSubItem = (subText: string) => {
                            if (index === 1) {
                                if (subText === "Carpeta") {
                                    router.push("/Laboratorio/Carpeta");
                                } else {
                                    router.push(
                                        `/Laboratorio/Carpeta/${subText}`
                                    );
                                }
                            } else if (index === 2) {
                                if (subText === "Ensayos") {
                                    router.push("/Laboratorio/Ensayos");
                                } else {
                                    router.push(
                                        `/Laboratorio/Ensayos/${subText}`
                                    );
                                }
                            }
                        };

                        return (
                            <React.Fragment key={text}>
                                <LightTooltip
                                    TransitionComponent={Zoom}
                                    placement="right"
                                    arrow
                                    title={
                                        <React.Fragment>
                                            <Paper>
                                                <MenuList>
                                                    {subItems.map(
                                                        (subItem, subIndex) => (
                                                            <MenuItem
                                                                key={
                                                                    subItem.text
                                                                }
                                                                onClick={() =>
                                                                    handleSubItem(
                                                                        subItem.text
                                                                    )
                                                                }
                                                            >
                                                                {subIndex === 0
                                                                    ? text
                                                                    : subItem.text}
                                                            </MenuItem>
                                                        )
                                                    )}
                                                </MenuList>
                                            </Paper>
                                        </React.Fragment>
                                    }
                                >
                                    <ListItem disablePadding>
                                        <ListItemButton
                                            onClick={() => {
                                                if (
                                                    index === 0 ||
                                                    subItems.length === 0
                                                ) {
                                                    router.push("/Laboratorio");
                                                } else {
                                                    router.push(
                                                        `/Laboratorio/${text}`
                                                    );
                                                }
                                            }}
                                            sx={{
                                                display: "flex",
                                                flexDirection: "column",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                color: isActive
                                                    ? "primary.main"
                                                    : "",
                                                bgcolor: isActive
                                                    ? alpha(
                                                          theme.palette.primary
                                                              .main,
                                                          0.1
                                                      )
                                                    : "",
                                            }}
                                        >
                                            <ListItemIcon
                                                sx={{
                                                    position: "relative",
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    alignItems: "center",
                                                    justifyContent: "center",
                                                    color: isActive
                                                        ? "primary.main"
                                                        : "",
                                                }}
                                            >
                                                {icon}
                                                {subItems.length > 0 && (
                                                    <KeyboardArrowRightRoundedIcon
                                                        fontSize="small"
                                                        sx={{
                                                            position:
                                                                "absolute",
                                                            top: 0,
                                                            display: "flex",
                                                            bottom: 0,
                                                            right: -4,
                                                            alignItems:
                                                                "center",
                                                            alignSelf: "center",
                                                            justifySelf:
                                                                "center",
                                                        }}
                                                    />
                                                )}
                                            </ListItemIcon>
                                            <ListItemText
                                                primaryTypographyProps={{
                                                    fontSize: 12,
                                                    fontWeight: isActive
                                                        ? 600
                                                        : 400,
                                                }}
                                                primary={text}
                                            />
                                        </ListItemButton>
                                    </ListItem>
                                </LightTooltip>
                            </React.Fragment>
                        );
                    })}
                </List>

                <Divider />
            </Drawer>

            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
}
