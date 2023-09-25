import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
    Box,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    Grid,
    IconButton,
    TextField,
    Typography,
    Zoom,
} from "@mui/material";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import HelpIcon from "@mui/icons-material/Help";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import BasicTabs from "@/components/ui/BasicTabs";
import { LineChart } from "@mui/x-charts/LineChart";
import Skeleton from '@mui/material/Skeleton';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function CardModalEnsayos({
    hormigonData,
    isLoading,
}: {
    hormigonData: any;
    isLoading: any;
}) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState<DialogProps["scroll"]>("paper");

    const handleClickOpen = (scrollType: DialogProps["scroll"]) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = React.useRef<HTMLElement>(null);
    useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

    const formatInputDate = (inputDate: string) => {
        const dateParts = inputDate.split("-");
        const day = dateParts[2];
        const month = dateParts[1];
        const year = dateParts[0];
        return `${day}/${month}/${year}`;
    };
    const volumeData = [...hormigonData].map(
        (data, index) => data.asentamientoCono
    );
    const volumeDataIndex = [...hormigonData].map((data, index) => index);
    const xAxisData = Array.from(
        { length: volumeData.length },
        (_, i) => `M-${i + 1}`
    );

    const xAxis = {
        // label: "Distance between home and office (km)",
        scaleType: "band" as const,
        data: xAxisData,
    };
    //
    const uData = volumeData;

    const xLabels = xAxisData;
    return (
        <>
            <Grid item xs={6} sm={3} md={3}>
                <Card
                    onClick={handleClickOpen("paper")}
                    variant="outlined"
                    sx={{
                        backgroundColor: "#d4f6fa",
                    }}
                >
                    <CardActionArea>
                        <CardContent
                            sx={{
                                textAlign: "center",
                                // alignItems:"center"
                            }}
                        >
                            <Typography
                                variant="h4"
                                component="div"
                                color="#003768"
                            >
                                {isLoading ? <Skeleton /> : hormigonData.length}
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{ mb: 1.5 }}
                                color="#00376890"
                            >
                                "Muestras Hormigón"
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
            <Dialog
                fullScreen={fullScreen}
                maxWidth={"lg"}
                TransitionComponent={Zoom}
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">
                    Tomas de muestras de hormigón
                </DialogTitle>
                <DialogContent dividers={scroll === "paper"}>
                    {/* <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >
                        
                    </DialogContentText> */}
                    <LineChart
                        series={[{ data: uData,  }]}
                        xAxis={[{ scaleType: "point", data: xLabels }]}
                        // width={500}
                        height={300}
                    />
                    <Typography variant="h5" fontWeight={700}>
                        Muestras de Hormigón Fresco:
                    </Typography>
                    <Box mt={4}>
                        <Grid
                            container
                            spacing={{ xs: 1, md: 2 }}
                            columns={{ xs: 12, sm: 12, md: 12 }}
                        >
                            {[...hormigonData].reverse().map((data, index) => (
                                <Grid item xs={6} sm={3} md={3} key={index}>
                                    <Card variant="outlined">
                                        <CardContent>
                                            <Typography
                                                sx={{
                                                    fontSize: 14,
                                                }}
                                                color="text.secondary"
                                                gutterBottom
                                            >
                                                Muestra N°{" "}
                                                {hormigonData.length - index}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: 14,
                                                }}
                                                color="text.secondary"
                                                gutterBottom
                                            >
                                                Fecha Muestreo: {data.fechaToma}
                                            </Typography>
                                            <Typography
                                                variant="h5"
                                                component="div"
                                            >
                                                {data.codigo}
                                            </Typography>
                                            <Typography
                                                sx={{ mb: 1.5 }}
                                                color="text.secondary"
                                            >
                                                Asentamiento Cono:{" "}
                                                {data.asentamientoCono}
                                            </Typography>
                                            <Typography variant="body2">
                                                Grado H°: {data.gradoHormigon}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">Ver</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cerrar</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

//
//
//
//
