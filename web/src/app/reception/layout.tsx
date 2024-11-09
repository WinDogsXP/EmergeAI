import React from "react";
import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";
import { ReactNode } from "react";

interface ReceptionLayoutProps {
    children: ReactNode;
}

const ReceptionLayout: React.FC<ReceptionLayoutProps> = ({ children }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Patient Reception
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container>
                <Box sx={{ my: 2 }}>{children}</Box>
            </Container>
        </Box>
    );
};

export default ReceptionLayout;
