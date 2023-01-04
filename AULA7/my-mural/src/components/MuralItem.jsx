import { Card, CardActions, CardContent, Grid, Typography } from "@mui/material";

export default function MuralItem({text, created_at}) {

    function formatDate(dateString) {
        const date = new Date(dateString);
        return date.toLocaleString();
    }

    return (
        <Grid item xs={12} lg={6}>
            <Card>
                <CardContent>
                    <Typography>{text}</Typography>
                </CardContent>
                <CardActions>
                    <Typography>Em: {formatDate(created_at)}</Typography>
                </CardActions>
            </Card>
        </Grid>
    );
}