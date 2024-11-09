"use client";
import React from "react";
import { Fab, Stack, IconButton, Typography, Paper, Box } from "@mui/material";
import MicIcon from "@mui/icons-material/Mic";
import Stop from "@mui/icons-material/Stop";
import AudioRecorder from "./AudioRecorder";
import AutoForm from "./form";
import { entryFormSchema } from "./schema";

export default function ReceptionPageClient() {
    const [recording, setRecording] = React.useState(false);

    const handleRecording = () => {
        setRecording(true);
    };

    const handleStopRecording = () => {
        setRecording(false);
    };

    return (
        <Stack direction={{ sm: "column", md: "row" }} spacing={2}>
            <Stack direction="column" sx={{ flex: 1 }}>
                <Typography variant="h5" align="center">
                    Automatic Data Entry
                </Typography>
                <AudioRecorder></AudioRecorder>
                <Stack
                    direction="row"
                    justifyContent="space-between"
                    sx={{ px: 2, py: 6 }}
                >
                    <IconButton>
                        <MicIcon />
                    </IconButton>
                    {!recording ? (
                        <Fab
                            color="error"
                            size="large"
                            sx={{ transform: "scale(175%)" }}
                            disableRipple
                            onClick={handleRecording}
                        >
                            <MicIcon />
                        </Fab>
                    ) : (
                        <Fab
                            color="primary"
                            size="large"
                            sx={{ transform: "scale(175%)" }}
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
            </Stack>
            <Paper sx={{ flex: 2 }}>
                <Box sx={{ p: 2 }}>
                    <AutoForm schema={entryFormSchema} />
                </Box>
            </Paper>
        </Stack>
    );
}
