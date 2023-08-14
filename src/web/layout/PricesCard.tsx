"use client";
import Link from "next/link";
import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardActionArea,
    Stack,
    Box,
    Button,
    List,
    ListItem,
    ListItemText,
    Divider,
} from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import LogoMini from "@/components/ui/LogoMini";
import VerifiedOutlinedIcon from "@mui/icons-material/VerifiedOutlined";
export default function PricesCard({
    Prices,
    index,
    alignment,
}: {
    Prices: any;
    index: number;
    alignment: any;
}) {
    function gray(numero: number): string {
        const employ: { [key: number]: string } = {
            0: "grayscale(100%)",
            1: "grayscale(100%)",
            2: "grayscale(0%)",
        };

        return employ[numero] || "Error employ";
    }
    function opacity(numero: number): string {
        const employ: { [key: number]: string } = {
            0: "0.5",
            1: "1",
            2: "1",
        };

        return employ[numero] || "Error employ";
    }
    function borderRadius(numero: number): string {
        const employ: { [key: number]: string } = {
            0: "auto",
            1: "auto",
            2: "1rem",
        };

        return employ[numero] || "Error employ";
    }
    function border(numero: number): string {
        const employ: { [key: number]: string } = {
            0: "auto",
            1: "auto",
            2: "3px solid #ffd234",
        };

        return employ[numero] || "Error employ";
    }
    return (
        <>
            <Grid item xs={12} md={4} sm={12}>
                <Card
                    variant="outlined"
                    sx={{
                        position: "relative",
                        overflow: "visible",
                        borderRadius: "1rem",
                        backgroundColor:
                            index === 2 ? "secondary.main" : "auto",
                        // border: index === 2 ? "3px solid #ffd234" : "auto",
                    }}
                >
                    <CardContent>
                        <Stack direction="column" spacing={1}>
                            <Stack
                                direction="row"
                                spacing={1}
                                alignItems={"center"}
                            >
                                <LogoMini
                                    width={50}
                                    grayscale={gray(index)}
                                    opcacity={opacity(index)}
                                    borderRadius={borderRadius(index)}
                                    border={border(index)}
                                />
                                {index === 2 ? (
                                    <Typography
                                        variant="subtitle1"
                                        component="div"
                                        fontWeight={600}
                                        // color={
                                        //     index === 2 ? "secondary.main" : "auto"
                                        // }
                                        sx={{
                                            backgroundcolor: "primary.main",
                                            backgroundImage: `linear-gradient(45deg, #606060 0%, #d9d9d9 100%)`,
                                            backgroundSize: "100%",
                                            backgroundRepeat: "repeat",
                                            backgroundClip: "text",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                        }}
                                    >
                                        {Prices.title}
                                    </Typography>
                                ) : (
                                    <Typography
                                        variant="subtitle1"
                                        component="div"
                                        fontWeight={600}
                                    >
                                        {Prices.title}
                                    </Typography>
                                )}
                            </Stack>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "flex-end",
                                    position: "relative",
                                }}
                            >
                                {index === 2 ? (
                                    <Typography
                                        fontWeight={"bolder"}
                                        variant="h3"
                                        component="div"
                                        // color={
                                        //     index === 2 ? "secondary.main" : "auto"
                                        // }
                                        sx={{
                                            backgroundcolor: "primary.main",
                                            backgroundImage: `linear-gradient(45deg, #ffd234 0%, #d9d9d9 100%)`,
                                            backgroundSize: "100%",
                                            backgroundRepeat: "repeat",
                                            backgroundClip: "text",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                        }}
                                    >
                                        $
                                        {alignment === "Ano"
                                            ? Prices.priceAge
                                            : Prices.priceMonth}
                                    </Typography>
                                ) : (
                                    <Typography
                                        fontWeight={"bolder"}
                                        variant="h3"
                                        component="div"
                                    >
                                        $
                                        {alignment === "Ano"
                                            ? Prices.priceAge
                                            : Prices.priceMonth}
                                    </Typography>
                                )}
                                {index === 2 ? (
                                    <Typography
                                        fontWeight={"bolder"}
                                        variant="h6"
                                        component="div"
                                        // color={
                                        //     index === 2 ? "secondary.main" : "auto"
                                        // }
                                        sx={{
                                            backgroundcolor: "primary.main",
                                            backgroundImage: `linear-gradient(45deg, #606060 0%, #d9d9d9 100%)`,
                                            backgroundSize: "100%",
                                            backgroundRepeat: "repeat",
                                            backgroundClip: "text",
                                            WebkitBackgroundClip: "text",
                                            WebkitTextFillColor: "transparent",
                                        }}
                                    >
                                        {alignment === "Ano" ? "/año" : "/mes"}
                                    </Typography>
                                ) : (
                                    <Typography
                                        fontWeight={"bolder"}
                                        variant="h6"
                                        component="div"
                                    >
                                        {index === 0
                                            ? "/siempre"
                                            : alignment === "Ano"
                                            ? "/año"
                                            : "/mes"}

                                        {/* {alignment === "Ano" ? "/año" : "/mes"} */}
                                    </Typography>
                                )}

                                {index === 0 ? null : alignment === "Ano" ? (
                                    <Typography
                                        sx={{
                                            lineHeight: "1.1rem",
                                            alignSelf: "center",
                                            marginLeft: "0.3rem",
                                        }}
                                        fontStyle={"italic"}
                                        variant="subtitle1"
                                        fontWeight={"bolder"}
                                        color={"primary"}
                                    >
                                        ¡Ahorras $24.000!
                                    </Typography>
                                ) : null}
                            </Box>
                            {index === 2 ? (
                                <Typography
                                    fontWeight={"bolder"}
                                    variant="body2"
                                    component="div"
                                    // color={
                                    //     index === 2 ? "secondary.main" : "auto"
                                    // }
                                    sx={{
                                        backgroundcolor: "primary.main",
                                        backgroundImage: `linear-gradient(45deg, #606060 0%, #d9d9d9 100%)`,
                                        backgroundSize: "100%",
                                        backgroundRepeat: "repeat",
                                        backgroundClip: "text",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                    }}
                                >
                                    {Prices.description}
                                </Typography>
                            ) : (
                                <Typography
                                    color={"gray"}
                                    variant="body2"
                                    component="div"
                                >
                                    {Prices.description}
                                </Typography>
                            )}
                            <Button
                                fullWidth
                                variant="contained"
                                color={index === 2 ? "primary" : "secondary"}
                                LinkComponent={Link}
                                href="/Iniciar"
                                // sx={{
                                //     border: index === 2 ? "3px solid #ffd234" : "auto",
                                // }}
                            >
                                {index === 0 ? "¡GRATIS!" : "Iniciar prueba"}
                            </Button>
                            <List dense>
                                {Prices.features.map(
                                    (feature: any, index: number) => (
                                        <>
                                            <Divider variant="middle" />
                                            <ListItem
                                                disableGutters
                                                key={index}
                                            >
                                                <VerifiedOutlinedIcon
                                                    fontSize="small"
                                                    sx={{
                                                        mr: "0.30rem",
                                                        // mr: 0.5,
                                                        alignSelf: "flex-start",
                                                        marginTop: "0.4rem",
                                                    }}
                                                    color={"primary"}
                                                />
                                                <ListItemText
                                                    sx={{
                                                        color: "gray",
                                                    }}
                                                    primary={feature}
                                                />
                                            </ListItem>
                                        </>
                                    )
                                )}
                            </List>
                        </Stack>
                    </CardContent>
                </Card>
            </Grid>
        </>
    );
}
