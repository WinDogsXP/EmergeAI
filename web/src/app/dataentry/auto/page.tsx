import React from "react";
import { Stack, Typography } from "@mui/material";
import ReceptionPageClient from "./client";

const ReceptionPage: React.FC = () => {
    return (
        <Stack spacing={2}>
            <Typography variant="h4" gutterBottom>
                Automatic Data Entry
            </Typography>

            <ReceptionPageClient />
        </Stack>
    );
};

export default ReceptionPage;
