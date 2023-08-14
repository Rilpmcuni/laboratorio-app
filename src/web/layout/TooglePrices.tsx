import * as React from "react";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    "& .MuiToggleButtonGroup-grouped": {
        margin: theme.spacing(0.5),
        border: 0,
        "&.Mui-disabled": {
            border: 0,
        },
        "&.Mui-selected": {
            backgroundColor: "#0AB4D6",
            color: "#fff",
        },
        "&:not(:first-of-type)": {
            borderRadius: theme.shape.borderRadius,
            border: "3px solid #ffd234",
        },
        "&:first-of-type": {
            borderRadius: theme.shape.borderRadius,
        },
        "&:hover": {
            backgroundColor: "theme.palette.text.caption",
            transition: "ease all 250ms",
        },
    },
}));

export default function TooglePrices({
    handleAlignment,
    alignment,
}: {
    handleAlignment: any;
    alignment: any;
}) {
    // const [alignment, setAlignment] = React.useState("Ano");

    // const handleAlignment = (
    //     _event: any,
    //     newAlignment: React.SetStateAction<string> | null
    // ) => {
    //     if (newAlignment !== null) {
    //         setAlignment(newAlignment);
    //     }
    // };

    return (
        <>
            <Paper
                elevation={0}
                sx={{
                    display: "flex",
                    border: (theme) => `0.5px solid ${theme.palette.divider}`,
                    flexWrap: "wrap",
                }}
            >
                <StyledToggleButtonGroup
                    orientation="horizontal"
                    size="small"
                    value={alignment}
                    exclusive
                    onChange={handleAlignment}
                    aria-label="text alignment"
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        // width: { xs: "auto", md: "32rem" },
                        textTransform: "lowercase",
                    }}
                >
                    <ToggleButton
                        color="primary"
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                        }}
                        value={`Mes`}
                        aria-label={`Mes`}
                    >
                        <Typography
                            variant="subtitle1"
                            color={"secondary.contrastText"}
                            fontWeight={"bold"}
                            sx={{
                                textAlign: "start",
                            }}
                        >
                            Mes
                        </Typography>
                    </ToggleButton>
                    <ToggleButton
                        color="primary"
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                        }}
                        value={`Ano`}
                        aria-label={`Ano`}
                    >
                        <Typography
                            variant="subtitle1"
                            color={"secondary.contrastText"}
                            fontWeight={"bold"}
                            sx={{
                                textAlign: "start",
                            }}
                        >
                            Año
                        </Typography>
                    </ToggleButton>
                </StyledToggleButtonGroup>
            </Paper>
        </>
    );
}
