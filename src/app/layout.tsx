import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kautsar Faradika Faisal - Portfolio",
  icons: {
    icon: "/favicon.ico",
  },
  description:
    "Professional portfolio of Kautsar Faradika Faisal - Electrical Engineering student specializing in full-stack development, IoT systems, and robotics.",
  keywords:
    "Electrical Engineering, Full Stack Developer, IoT, Robotics, React, Next.js, Portfolio",
  authors: [{ name: "Kautsar Faradika Faisal" }],
  openGraph: {
    title: "Kautsar Faradika Faisal - Portfolio",
    description:
      "Professional portfolio showcasing projects in web development, IoT, and robotics",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
