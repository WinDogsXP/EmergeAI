import type { Metadata } from "next";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "@/theme";
import { Roboto } from "next/font/google";

export const metadata: Metadata = {
    title: "EmergeAI",
    description: "Improving responsiveness of emergency healthcare",
};

const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-roboto",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={roboto.variable}>
                    <AppRouterCacheProvider>
                        <ThemeProvider theme={theme}>
                            <CssBaseline />
                            {children}
                        </ThemeProvider>
                    </AppRouterCacheProvider>
                </body>
            </html>
        </ClerkProvider>
    );
}
