"use client";

import Typography from "@mui/material/Typography";

import MenuIcon from "@mui/icons-material/Menu";
/*  */
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
    Collapse,
} from "@mui/material";
import Link from "next/link";
import SpaceDashboardTwoToneIcon from "@mui/icons-material/SpaceDashboardTwoTone";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { ExpandLess, ExpandMore, PersonAdd } from "@mui/icons-material";
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
import LogoName from "@/components/ui/LogoName";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import InboxIcon from "@mui/icons-material/MoveToInbox";

const drawerWidth = 80;
type Anchor = "top" | "left" | "bottom" | "right";
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
    /* list drawer */
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer =
        (anchor: Anchor, open: boolean) =>
        (event: React.KeyboardEvent | React.MouseEvent) => {
            if (
                event &&
                event.type === "keydown" &&
                ((event as React.KeyboardEvent).key === "Tab" ||
                    (event as React.KeyboardEvent).key === "Shift")
            ) {
                return;
            }

            setState({ ...state, [anchor]: open });
        };
    const handleListItemClick = (path: string) => {
        router.push(path);
    };
    const handleCloseDrawer = (anchor: Anchor) => {
        return () => {
            setState({ ...state, [anchor]: false });
        };
    };

    const handleDrawerItemClick = (anchor: Anchor) => {
        const closeDrawer = handleCloseDrawer(anchor);
        closeDrawer();
    };

    const list = (anchor: Anchor) => (
        <Box
            sx={{
                width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
            }}
            role="presentation"
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {items.map((item, index) => (
                    <React.Fragment key={item.text}>
                        <ListItemButton
                            onClick={() =>
                                handleListItemClick(
                                    index === 0
                                        ? "/Laboratorio"
                                        : `/Laboratorio/${item.text}`
                                )
                            }
                        >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                            {item.subItems.length > 0 ? (
                                state[anchor] ? (
                                    <ExpandLess />
                                ) : (
                                    <ExpandMore />
                                )
                            ) : null}
                        </ListItemButton>
                        {item.subItems.length > 0 && (
                            <Collapse
                                in={state[anchor]}
                                timeout="auto"
                                unmountOnExit
                            >
                                <List component="div" disablePadding>
                                    {item.subItems.map((subItem, subIndex) => (
                                        <ListItemButton
                                            key={subItem.text}
                                            onClick={() =>
                                                handleListItemClick(
                                                    index === 1
                                                        ? "/Laboratorio/Carpeta"
                                                        : `/Laboratorio/Carpeta/${subItem.text}`
                                                )
                                            }
                                            sx={{ pl: 4 }}
                                        >
                                            <ListItemIcon>
                                                {subItem.icon}
                                            </ListItemIcon>
                                            <ListItemText
                                                primary={subItem.text}
                                            />
                                        </ListItemButton>
                                    ))}
                                </List>
                            </Collapse>
                        )}
                    </React.Fragment>
                ))}
            </List>
        </Box>
    );
    /*  */
    /*  */
    /*  */
    /*  */
    /*  */
    /*  */
    return (
        <Box sx={{ display: "flex" }}>
            {/* desktop */}
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
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
                        zIndex: 50,
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
                                        transform:
                                            "translateY(-50%) rotate(45deg)",
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
                {/*  */}

                {/*  */}
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        "& .MuiDrawer-paper": {
                            width: drawerWidth,
                            boxSizing: "border-box",
                        },
                        zIndex: 50,
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
                                        return "/Laboratorio/Carpeta";
                                    } else {
                                        return `/Laboratorio/Carpeta/${subText}`;
                                    }
                                } else if (index === 2) {
                                    if (subText === "Ensayos") {
                                        return "/Laboratorio/Ensayos";
                                    } else {
                                        return `/Laboratorio/Ensayos/${subText}`;
                                    }
                                }
                                return "";
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
                                                            (
                                                                subItem,
                                                                subIndex
                                                            ) => (
                                                                <MenuItem
                                                                    key={
                                                                        subItem.text
                                                                    }
                                                                    component={
                                                                        Link
                                                                    } // Use Link as the LinkComponent
                                                                    href={handleSubItem(
                                                                        subItem.text
                                                                    )}
                                                                >
                                                                    {subIndex ===
                                                                    0
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
                                                component={Link} // Use Link as the LinkComponent
                                                href={
                                                    index === 0
                                                        ? "/Laboratorio"
                                                        : `/Laboratorio/${text}`
                                                }
                                                onClick={() => {
                                                    if (
                                                        index === 0 ||
                                                        subItems.length === 0
                                                    ) {
                                                        // Do nothing, as Link will handle the navigation
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
                                                              theme.palette
                                                                  .primary.main,
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
                                                        justifyContent:
                                                            "center",
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
                                                                alignSelf:
                                                                    "center",
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
            </Box>
            {/* desktop */}
            {/* mobile */}
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <AppBar
                    position="fixed"
                    color="secondary"
                    variant="outlined"
                    sx={{
                        border: "none",
                        zIndex: 50,
                    }}
                >
                    <Toolbar
                        sx={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        {(["left"] as const).map((anchor) => (
                            <React.Fragment key={anchor}>
                                <IconButton
                                    size="large"
                                    edge="start"
                                    color="inherit"
                                    aria-label="menu"
                                    sx={{ mr: 2 }}
                                    onClick={toggleDrawer(anchor, true)}
                                >
                                    <MenuIcon />
                                </IconButton>
                                <SwipeableDrawer
                                    anchor={anchor}
                                    open={state[anchor]}
                                    onClose={toggleDrawer(anchor, false)}
                                    onOpen={toggleDrawer(anchor, true)}
                                >
                                    <Box
                                        role="presentation"
                                        onKeyDown={toggleDrawer(anchor, false)}
                                    >
                                        <List>
                                            {items.map((item, index) => (
                                                <React.Fragment key={item.text}>
                                                    <ListItemButton
                                                        LinkComponent={Link}
                                                        href={
                                                            index === 0
                                                                ? "/Laboratorio"
                                                                : `/Laboratorio/${item.text}`
                                                        }
                                                        onClick={() =>
                                                            handleDrawerItemClick(
                                                                anchor
                                                            )
                                                        }
                                                    >
                                                        <ListItemIcon>
                                                            {item.icon}
                                                        </ListItemIcon>
                                                        <ListItemText
                                                            primary={item.text}
                                                        />
                                                        {item.subItems.length >
                                                        0 ? (
                                                            state[anchor] ? (
                                                                <ExpandLess />
                                                            ) : (
                                                                <ExpandMore />
                                                            )
                                                        ) : null}
                                                    </ListItemButton>
                                                    {item.subItems.length >
                                                        0 && (
                                                        <Collapse
                                                            in={state[anchor]}
                                                            timeout="auto"
                                                            unmountOnExit
                                                        >
                                                            <List
                                                                component="div"
                                                                disablePadding
                                                            >
                                                                {item.subItems.map(
                                                                    (
                                                                        subItem,
                                                                        subIndex
                                                                    ) => (
                                                                        <ListItemButton
                                                                            key={
                                                                                subItem.text
                                                                            }
                                                                            LinkComponent={
                                                                                Link
                                                                            }
                                                                            href={
                                                                                subIndex ===
                                                                                0
                                                                                    ? `/Laboratorio/${item.text}`
                                                                                    : `/Laboratorio/${item.text}/${subItem.text}`
                                                                            }
                                                                            onClick={() =>
                                                                                handleDrawerItemClick(
                                                                                    anchor
                                                                                )
                                                                            }
                                                                            sx={{
                                                                                pl: 4,
                                                                            }}
                                                                        >
                                                                            <ListItemIcon>
                                                                                {
                                                                                    subItem.icon
                                                                                }
                                                                            </ListItemIcon>
                                                                            <ListItemText
                                                                                primary={
                                                                                    subItem.text
                                                                                }
                                                                            />
                                                                        </ListItemButton>
                                                                    )
                                                                )}
                                                            </List>
                                                        </Collapse>
                                                    )}
                                                </React.Fragment>
                                            ))}
                                        </List>
                                    </Box>
                                </SwipeableDrawer>
                            </React.Fragment>
                        ))}

                        <LogoName />
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
                    </Toolbar>
                </AppBar>
                {/*  */}
            </Box>
            {/* mobile */}

            <Box
                // component="main"
                sx={{ flexGrow: 1, bgcolor: "background.default", p: 2 }}
            >
                <Toolbar />
                {children}
            </Box>
        </Box>
    );
}
