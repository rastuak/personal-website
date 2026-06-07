import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Inter, Fraunces, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kautsar.exerciseftui.com"),
  title: {
    default: "Kautsar Faradika Faisal — Chips, Code, and Autonomous Systems",
    template: "%s — Kautsar Faradika Faisal",
  },
  description:
    "Electrical Engineering student at Universitas Indonesia designing at the transistor level (IHP 130nm IC layout) and shipping at the application level (full-stack products). 2,900+ users served on Pemira FTUI 2025.",
  keywords: [
    "Electrical Engineering",
    "IC Design",
    "Semiconductor",
    "IHP 130nm",
    "Full Stack Developer",
    "Next.js",
    "Remix",
    "IoT",
    "Robotics",
    "Universitas Indonesia",
    "Kautsar Faradika",
  ],
  authors: [{ name: "Kautsar Faradika Faisal" }],
  creator: "Kautsar Faradika Faisal",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kautsar.exerciseftui.com",
    title: "Kautsar Faradika Faisal — Chips, Code, and Autonomous Systems",
    description:
      "EE student at UI. IC layout at IHP 130nm, full-stack tech lead, KRTI finalist.",
    siteName: "Kautsar Faradika Faisal",
    images: [
      {
        url: "/og/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Kautsar Faradika Faisal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kautsar Faradika Faisal",
    description: "Chips, code, and autonomous systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-paper-900 focus:text-paper-50 focus:px-4 focus:py-2 focus:font-mono focus:text-sm"
        >
          Skip to content
        </a>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
