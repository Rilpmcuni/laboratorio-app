import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, IconButton, TextField, Zoom } from "@mui/material";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import HelpIcon from "@mui/icons-material/Help";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import MarcoCartaInformePdf from "./MarcoCartaInformePdf";
import BasicTabs from "../ui/BasicTabs";
import MarcoInformePdf from "./MarcoInformePdf";

interface Props {
    row: any;
    numeroInforme: number;
    storedSelectedDate: any;
    storedNumeroCarta: any;
    ensayos:any
}
const VerDescargarInforme: React.FC<Props> = ({
    row,
    numeroInforme,
    storedSelectedDate,
    storedNumeroCarta,
    ensayos
}) => {
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState<DialogProps["scroll"]>("paper");
    const [selectedDate, setSelectedDate] = useState(storedSelectedDate || "");
    const [numeroCarta, setNumeroCarta] = useState(storedNumeroCarta || 0);

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

    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputDate = event.target.value;
        const formattedDate = formatInputDate(inputDate);
        setSelectedDate(formattedDate);
        localStorage.setItem(`selectedDate_${numeroInforme}`, formattedDate);
    };

    const handleNumeroCartaChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const value = parseInt(event.target.value);
        setNumeroCarta(value);
        localStorage.setItem(`numeroCarta_${numeroInforme}`, value.toString());
    };

    const formatInputDate = (inputDate: string) => {
        const dateParts = inputDate.split("-");
        const day = dateParts[2];
        const month = dateParts[1];
        const year = dateParts[0];
        return `${day}/${month}/${year}`;
    };

    return (
        <Box>
            <IconButton
                size="small"
                aria-label="Ver"
                onClick={handleClickOpen("paper")}
            >
                <VisibilityRoundedIcon fontSize="small" />
            </IconButton>
            <Dialog
                fullWidth
                maxWidth={"lg"}
                TransitionComponent={Zoom}
                open={open}
                onClose={handleClose}
                scroll={scroll}
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">
                    Informe N°{numeroInforme} {row.quincena} {row.fechaLocal}
                </DialogTitle>
                <DialogContent dividers={scroll === "paper"}>
                    <DialogContentText
                        id="scroll-dialog-description"
                        ref={descriptionElementRef}
                        tabIndex={-1}
                    >
                        Exporta o descarga el informe
                    </DialogContentText>
                    <div>
                        <TextField
                            sx={{ flexGrow: 1 }}
                            id="outlined-controlled"
                            label="Número Carta"
                            value={numeroCarta}
                            type="number"
                            inputProps={{
                                min: 0,
                                step: 1,
                            }}
                            onChange={handleNumeroCartaChange}
                        />
                        <span>Fecha entrega de Informe</span>
                        <TextField
                            fullWidth
                            sx={{ flexGrow: 1 }}
                            id="hora-inicio-descarga"
                            label="Fecha entrega de Informe"
                            type="date"
                            value={selectedDate}
                            onChange={handleDateChange}
                        />
                        <p>Fecha seleccionada: {selectedDate}</p>
                    </div>
                    <BasicTabs
                        labels={["Carta", "Informe", "Test"]}
                        contents={[
                            <MarcoCartaInformePdf
                                row={row}
                                numeroInforme={numeroInforme}
                                selectedDate={selectedDate}
                                numeroCarta={numeroCarta} // Use the local state value here
                            />,
                            <MarcoInformePdf
                                row={row}
                                numeroInforme={numeroInforme}
                                selectedDate={selectedDate}  
                                ensayos={ensayos}                        />,
                            <span>Veremos</span>,
                        ]}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cerrar</Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default VerDescargarInforme;
//
//
//
//
