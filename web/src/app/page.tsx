import Link from "next/link";
import {
    AppBar,
    Toolbar,
    Typography,
    Container,
    Box,
    Paper,
    List,
    ListItemButton,
    ListItemText,
} from "@mui/material";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Home() {
    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        EmergeAI
                    </Typography>
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </Toolbar>
            </AppBar>
            <Container>
                <Box my={4}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Welcome to EmergeAI
                    </Typography>
                    <Typography variant="body1">
                        This is a sample page content. You can add more
                        components and content here.
                    </Typography>

                    <Paper>
                        <List>
                            <ListItemButton component={Link} href="/dataentry">
                                <ListItemText primary="Data Entry" />
                            </ListItemButton>
                            <ListItemButton component={Link} href="/livestatus">
                                <ListItemText primary="Live Status" />
                            </ListItemButton>
                            <ListItemButton component={Link} href="/reception">
                                <ListItemText primary="Reception" />
                            </ListItemButton>
                        </List>
                    </Paper>
                </Box>
            </Container>
        </>
    );
}
