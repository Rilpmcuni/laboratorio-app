"use client";
import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardActionArea,
    Stack,
    Box,
} from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

export default function RewiesCard({ Features }: { Features: any }) {
    return (
        <>
            <Grid item xs={12} sm={4}>
                <Card
                    variant="outlined"
                    sx={{
                        position: "relative",
                        overflow: "visible",
                        borderRadius:"1rem"
                    }}
                >
                        <CardContent>
                            <Stack direction="column" spacing={1}>
                                <Stack direction="row" spacing={0}>
                                    {[0, 1, 2, 3, 4].map((star, index) => (
                                        <StarRoundedIcon
                                            key={index}
                                            color="primary"
                                        />
                                    ))}
                                </Stack>
                                <Typography
                                    variant="subtitle1"
                                    component="div"
                                    fontWeight={600}
                                >
                                    {Features.title}
                                </Typography>
                                <Typography color={"gray"} variant="body2" component="div">
                                    {Features.description}
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "row",
                                        alignItems: "center",
                                        gap:"0.5rem"
                                    }}
                                >
                                    {Features.ico}
                                    <Box
                                        sx={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "flex-start",
                                        }}
                                    >
                                        <Typography
                                            variant="body2"
                                            component="div"
                                            fontWeight={600}
                                        >
                                            {Features.name}
                                        </Typography>{" "}
                                        <Typography
                                            variant="caption"
                                            component="div"
                                            // fontWeight={300}
                                            color={"gray"}
                                            
                                        >
                                            {Features.lastName}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Stack>
                        </CardContent>
                </Card>
            </Grid>
        </>
    );
}
