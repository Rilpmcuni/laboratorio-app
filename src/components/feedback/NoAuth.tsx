"use client";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import { Alert, AlertTitle } from "@mui/material";

export default function NoAuth() {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
    const router = useRouter(); // Inicializar el hook useRouter

    const [open, setOpen] = useState(false);

    useEffect(() => {
        const storedOpen = localStorage.getItem("open");
        if (storedOpen === null || storedOpen === "false") {
            setOpen(true);
        }
    }, []);

    const handleClose = () => {
        setOpen(false);
        localStorage.setItem("open", "true"); // Cerrar y guardar en el almacenamiento local
    };

    const handleAgree = () => {
        // setOpen(false);
        // localStorage.setItem("open", "false"); // Cerrar y guardar en el almacenamiento local
        router.push("/Auth/Signout"); // Redirigir después de hacer clic en "Agree"
    };

    return (
        <div>
            <Dialog
                // fullScreen={fullScreen}
                fullScreen
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                // sx={{ backgroundColor: "red" }}
            >
                <DialogTitle
                    sx={{
                        backgroundColor: "secondary.main",
                        color: "secondary.contrastText",
                    }}
                    id="responsive-dialog-title"
                >
                    {"Lea atentamente"}
                </DialogTitle>
                <DialogContent sx={{ backgroundColor: "secondary.main" }}>
                    <DialogContentText>
                        <Alert variant="filled" severity="error">
                            <AlertTitle sx={{ fontweight: "bold" }}>
                                <strong>¡Atención!</strong>
                            </AlertTitle>
                            — Si no tienes una invitación especial para ser un
                            tester Beta, te pedimos que cierres la aplicación.
                            <br />
                            De lo contrario, podríamos tener que bloquear tu
                            cuenta indefinidamente.
                            <br />
                            — Si estás interesado en obtener una invitación
                            exclusiva, no dudes en enviarnos un mensaje a
                            cualquiera de los datos de contacto que se
                            encuentran a continuación.
                            <br />
                            ¡Gracias por tu comprensión y entusiasmo por ser
                            parte de nuestra emocionante fase Beta! 🌟🚀
                        </Alert>
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ backgroundColor: "secondary.main" }}>
                    <Button autoFocus onClick={handleAgree}>
                        Salir
                    </Button>
                    <Button autoFocus onClick={handleClose}>
                        Estoy autorizado
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
