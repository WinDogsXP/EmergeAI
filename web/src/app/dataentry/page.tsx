import { Button, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function DataEntryPage() {
    return (
        <>
            <Typography variant="h4" component="h1" gutterBottom>
                Data Entry
            </Typography>
            <Button
                variant="contained"
                color="primary"
                component={Link}
                href="/new-patient"
            >
                New Patient
            </Button>
        </>
    );
}
