"use client";
import React from "react";
import { Fab, Stack, IconButton } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import Stop from "@mui/icons-material/Stop";

export default function ReceptionPageClient() {
    const [recording, setRecording] = React.useState(false);

    const handleRecording = () => {
        setRecording(true);
    };

    const handleStopRecording = () => {
        setRecording(false);
    };

    return (
        <Stack
            direction="row"
            justifyContent="space-between"
            sx={{ p: "30px" }}
        >
            <IconButton>
                <MicIcon />
            </IconButton>
            {!recording ? (
                <Fab
                    color="error"
                    size="large"
                    sx={{ transform: "scale(200%)" }}
                    disableRipple
                    onClick={handleRecording}
                >
                    <MicIcon />
                </Fab>
            ) : (
                <Fab
                    color="primary"
                    size="large"
                    sx={{ transform: "scale(200%)" }}
                    disableRipple
                    onClick={handleStopRecording}
                >
                    <Stop />
                </Fab>
            )}
            <IconButton>
                <MicIcon />
            </IconButton>
        </Stack>
    );
}
