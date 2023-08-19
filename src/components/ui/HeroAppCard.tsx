import React from "react";
import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardActionArea,
    Box,
    Button,
    Stack,
    Alert,
    AlertTitle,
} from "@mui/material";
import Title from "./Title";

export default function HeroAppCard() {
    return (
        <Box sx={{ borderRadius: "1.5rem" }}>
            <Card
                variant="outlined"
                sx={{
                    position: "relative",
                    overflow: "visible",
                    borderRadius: "1rem",
                    //
                    backgroundcolor: "primary.main",
                    backgroundImage: `linear-gradient(45deg, #171717 0%, #262626 100%)`,
                    backgroundSize: "100%",
                    backgroundRepeat: "repeat",
                }}
            >
                <CardContent>
                    {/* <Stack direction="column" spacing={0}>
                        <Typography
                            variant="h6"
                            component="div"
                            fontWeight={600}
                            sx={{
                                backgroundcolor: "primary.main",
                                backgroundImage: `linear-gradient(45deg, #171717 0%, #606060 100%)`,
                                backgroundSize: "100%",
                                backgroundRepeat: "repeat",
                                backgroundClip: "text",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                fontWeight: "bolder",
                            }}
                        >
                            ¡Hola 👋, Super Laboratorista!
                        </Typography>
                    </Stack>
                    <Typography
                        variant="body2"
                        component="div"
                        fontWeight="bolder"
                    >
                        ¡Bienvenido a la fase beta de Tamíz.LA! Estamos
                        emocionados de tenerte aquí, siendo uno de los primeros
                        en experimentar la magia de nuestra plataforma. Tu
                        pasión y retroalimentación son vitales para hacer de
                        Tamíz.LA algo extraordinario. ¡Vamos a hacer que el
                        laboratorio vial sea más eficiente y emocionante juntos!
                        🚀💡
                    </Typography> */}
                    <Title
                        title={"¡Hola 👋,"}
                        subTitle={" Super Laboratorista!"}
                        parraph={
                            "¡Bienvenido a la fase beta de Tamíz.LA! Estamos emocionados de tenerte aquí, siendo uno de los primeros en experimentar la magia de nuestra plataforma. Tu pasión y retroalimentación son vitales para hacer de Tamíz.LA algo extraordinario. ¡Vamos a hacer que el laboratorio vial sea más eficiente y emocionante juntos! 🚀💡"
                        }
                        color={"#d9d9d9"}
                    />
                    <Stack spacing={1}>
                        <Alert variant="filled" severity="warning">
                            <AlertTitle sx={{ fontweight: "bold" }}>
                                <strong>¡Hey!</strong>
                            </AlertTitle>
                            — ¡Estás explorando nuestra versión Beta de
                            demostración! Recuerda que esta versión no refleja
                            el aspecto final del proyecto.
                        </Alert>
                        <Alert variant="filled" severity="error">
                            <AlertTitle sx={{ fontweight: "bold" }}>
                                <strong>¡Atención!</strong>
                            </AlertTitle>
                            — Si no tienes una invitación especial para ser un
                            tester Beta, te pedimos que cierres la aplicación.
                            De lo contrario, podríamos tener que bloquear tu
                            cuenta indefinidamente.
                            <br />
                            Si estás interesado en obtener una invitación
                            exclusiva, no dudes en enviarnos un mensaje a
                            cualquiera de los datos de contacto que se
                            encuentran a continuación. ¡Gracias por tu
                            comprensión y entusiasmo por ser parte de nuestra
                            emocionante fase Beta! 🌟🚀
                        </Alert>
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    );
}
