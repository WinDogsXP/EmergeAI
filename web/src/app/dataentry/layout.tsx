import React from "react";
import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";
import { ReactNode } from "react";

interface DataEntryLayoutProps {
    children: ReactNode;
}

const DataEntryLayout: React.FC<DataEntryLayoutProps> = ({ children }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        Patient Entry
                    </Typography>
                </Toolbar>
            </AppBar>
            <Container>
                <Box sx={{ my: 4 }}>{children}</Box>
            </Container>
        </Box>
    );
};

export default DataEntryLayout;
