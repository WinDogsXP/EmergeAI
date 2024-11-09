import React from "react";
import {
    Container,
    Typography,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@mui/material";

// Sample data for the table with integer values for priority and urgency
const rows = [
    { id: 1, priority: 1, sex: "Male", age: 32, urgency: 1, medic: "Dr. Smith", status: "In Progress" },
    { id: 2, priority: 2, sex: "Female", age: 27, urgency: 2, medic: "Dr. Lee", status: "Waiting" },
    { id: 3, priority: 3, sex: "Male", age: 45, urgency: 4, medic: "Dr. Johnson", status: "Completed" },
];

// Function to set the urgency color based on urgency level
const getUrgencyColor = (urgency: number) => {
    switch (urgency) {
        case 1:
            return "#FF4C4C"; // Red
        case 2:
            return "#FFE700"; // Yellow
        case 3:
            return "#9EDF9C"; // Green
        case 4:
            return "#4CC9FE";
        default:
            return "grey"; // Default color
    }
};

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

            <br />

            {/* Table */}
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Priority</TableCell>
                            <TableCell>Sex</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell>Urgency</TableCell>
                            <TableCell>Medic</TableCell>
                            <TableCell>Status</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => {
                            const urgencyColor = getUrgencyColor(row.urgency); // Get urgency color
                            return (
                                <TableRow key={row.id}>
                                    <TableCell>{row.priority}</TableCell>
                                    <TableCell>{row.sex}</TableCell>
                                    <TableCell>{row.age}</TableCell>

                                    {/* Urgency cell with centered number and smaller size */}
                                    <TableCell
                                        style={{
                                            backgroundColor: urgencyColor,
                                            color: "white",
                                            fontWeight: "bold",
                                            textAlign: "center", // Center the text
                                            padding: "2px 6px", // Smaller padding for compact size
                                            fontSize: "14px", // Smaller font size
                                            borderRadius: "4px", // Optional: add some radius for rounded corners
                                        }}
                                    >
                                        {row.urgency}
                                    </TableCell>

                                    <TableCell>{row.medic}</TableCell>
                                    <TableCell>{row.status}</TableCell>
                                    <TableCell>
                                        <Button variant="outlined" color="primary" size="small">
                                            Edit
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default ReceptionPage;
