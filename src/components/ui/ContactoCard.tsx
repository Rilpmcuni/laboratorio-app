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
import Link from "next/link";

export default function ContactoCard() {
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
                    backgroundImage: `linear-gradient(45deg, #0AB4D6 0%, #0AB4D6 100%)`,
                    backgroundSize: "100%",
                    backgroundRepeat: "repeat",
                }}
            >
                <CardContent>
                    <Title
                        title={"Hablémos"}
                        subTitle={""}
                        parraph={
                            "Comentarios, duda o consulta no dudes en llamarnos."
                        }
                        color={"black"}
                    />
                    <Stack spacing={1}>
                        {[
                            {
                                title: "WhatsApp",
                                content: "+56 9 8445 2458",
                                button: "Enviar un mensage",
                                action: "tel: +56 9 8845 6231",
                            },
                            {
                                title: "correo",
                                content: "hola@tamiz.la",
                                button: "Enviar un correo",
                                action: "mailto:hola@tamiz.la",
                            },
                        ].map((item, index) => (
                            <Box
                                key={index}
                                sx={{
                                    borderRadius: "1.5rem",
                                    backgroundColor:
                                        index % 2 === 0
                                            ? "secondary.contrastText"
                                            : "secondary.main",
                                    textAlign: "center",
                                    p: 1,
                                }}
                            >
                                <Typography
                                    variant="h6"
                                    component="div"
                                    fontWeight={600}
                                    color={
                                        index % 2 === 0
                                            ? "secondary.main"
                                            : "secondary.contrastText"
                                    }
                                >
                                    Contáctanos por {item.title}:
                                </Typography>
                                <Typography
                                    variant="h5"
                                    gutterBottom
                                    component="div"
                                    color={
                                        index % 2 === 0
                                            ? "secondary.main"
                                            : "secondary.contrastText"
                                    }
                                    // fontWeight={600}
                                >
                                    {item.content}
                                </Typography>
                                <Button
                                    variant={
                                        index % 2 === 0
                                            ? "contained"
                                            : "outlined"
                                    }
                                    color={
                                        index % 2 === 0
                                            ? "secondary"
                                            : "primary"
                                    }
                                    LinkComponent={Link}
                                    href={item.action}
                                >
                                    {item.button}
                                </Button>
                            </Box>
                        ))}
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    );
}
