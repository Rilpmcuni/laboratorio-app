"use client";
import {
    Grid,
    Card,
    CardContent,
    Typography,
    CardActionArea,
    Stack,
} from "@mui/material";

export default function FeaturesTwoCard({ Features }: { Features: any }) {
    return (
        <>
            <Grid item xs={12} sm={4}>
                <Card
                    variant="outlined"
                    sx={{
                        userSelect: "none",
                        position: "relative",
                        overflow: "visible",
                        cursor: "pointer",
                        borderRadius:"1rem"
                    }}
                >
                    <CardActionArea>
                        <CardContent>
                            <Stack direction="column" spacing={0}>
                                <Typography
                                    variant="h6"
                                    component="div"
                                    fontWeight={600}
                                >
                                    {Features.ico}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    component="div"
                                    fontWeight={600}
                                >
                                    {Features.title}
                                </Typography>
                            </Stack>
                            <Typography variant="body2" component="div" color={"gray"}>
                                {Features.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </>
    );
}
