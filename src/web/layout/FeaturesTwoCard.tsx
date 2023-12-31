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
                        position: "relative",
                        overflow: "visible",
                        borderRadius:"1rem"
                    }}
                >
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
                            <Typography variant="caption" component="div" >
                                {Features.description}
                            </Typography>
                        </CardContent>
                </Card>
            </Grid>
        </>
    );
}
