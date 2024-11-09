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

import dynamic from "next/dynamic";


const LeafletMap = dynamic(() => import("../components/LeafletMap/LeafletMap"), { ssr: false });

export default function Home() {
    const links = [
        { href: "/dataentry/auto", text: "Automatic Data Entry" },
        { href: "/livestatus", text: "Live Status" },
        { href: "/reception", text: "Reception" },
    ];

    return (
        <>
            {/* <AppBar position="static">
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
            </AppBar> */}
            <LeafletMap />
        </>
    );
}
