import "@/styles/globals.css";
import { ReactQueryProvider } from "@/components/react-query-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Toaster } from "sonner";

export const metadata: Metadata = {
	title: "next-template",
	description: "next-template",
	icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<ClerkProvider appearance={{ baseTheme: dark }}>
			<html lang="en" suppressHydrationWarning>
				<body className="h-dvh antialiased">
					<ThemeProvider
						attribute="class"
						defaultTheme="system"
						enableSystem
						disableTransitionOnChange
					>
						<ReactQueryProvider>
							{children}
							<Toaster />
							<Analytics />
							<SpeedInsights />
						</ReactQueryProvider>
					</ThemeProvider>
				</body>
			</html>
		</ClerkProvider>
	);
}
