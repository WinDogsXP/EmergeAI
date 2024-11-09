import React from "react";
import { Container, Typography, Button } from "@mui/material";

const ReceptionPage: React.FC = () => {
    return (
        <Container>
            <Typography variant="h2" component="h1" gutterBottom>
                Welcome to the Reception
            </Typography>
            <Typography variant="body1" gutterBottom>
                This is the reception page of our application. Feel free to
                explore and get to know more about us.
            </Typography>
            <Button variant="contained" color="primary">
                Learn More
            </Button>
        </Container>
    );
};

export default ReceptionPage;
