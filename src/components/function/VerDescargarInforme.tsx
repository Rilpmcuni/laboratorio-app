import * as React from "react";
import Button from "@mui/material/Button";
import Dialog, { DialogProps } from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { Box, IconButton, Zoom } from "@mui/material";
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded";
import HelpIcon from "@mui/icons-material/Help";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import MarcoInformePdf from "./MarcoInformePdf";
import BasicTabs from "../ui/BasicTabs";

interface Props {
    row: any;
    numeroInforme: number;
}
const VerDescargarInforme: React.FC<Props> = ({ row, numeroInforme }) => {
    const [open, setOpen] = React.useState(false);
    const [scroll, setScroll] = React.useState<DialogProps["scroll"]>("paper");

    const handleClickOpen = (scrollType: DialogProps["scroll"]) => () => {
        setOpen(true);
        setScroll(scrollType);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const descriptionElementRef = React.useRef<HTMLElement>(null);
    React.useEffect(() => {
        if (open) {
            const { current: descriptionElement } = descriptionElementRef;
            if (descriptionElement !== null) {
                descriptionElement.focus();
            }
        }
    }, [open]);

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
                    <BasicTabs
                        labels={["Carta", "Informe", "Test"]}
                        contents={[
                            <MarcoInformePdf
                                row={row}
                                numeroInforme={numeroInforme}
                            />,
                            <span>Hola</span>,
                            <span>Veremos</span>,
                        ]}
                    />
                </DialogContent>
            </Dialog>
        </Box>
    );
};

export default VerDescargarInforme;
