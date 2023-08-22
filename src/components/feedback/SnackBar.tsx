import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Alert } from "@mui/material";

interface Props {
    children: string;
    message: string;
    fullWidth: boolean;
    onClick: any;
}
export const SimpleSnackbar: React.FC<Props> = ({
    children,
    message,
    fullWidth,
    onClick,
}) => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(true);
        onClick();
    };

    const handleClose = (
        event: React.SyntheticEvent | Event,
        reason?: string
    ) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <>
            <Button
                fullWidth={fullWidth}
                sx={{
                    fontWeight: "600",
                    color: "white",
                }}
                variant="contained"
                onClick={handleClick}
            >
                {children}
            </Button>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
                // message={message}
                action={action}
            >
                <Alert
                    onClose={handleClose}
                    severity="success"
                    sx={{ width: "100%" }}
                >
                    {message}
                </Alert>
            </Snackbar>
        </>
    );
};
