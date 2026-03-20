import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "STRIDAPT | Ingeniería de Rendimiento",
  description:
    "La primera prótesis transtibial 2-en-1 adaptativa del mundo — diseñada para la vida diaria y el deporte de élite, personalizada por IA para cada cuerpo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background text-on-background font-body selection:bg-primary-container selection:text-on-primary-container overflow-x-hidden",
          spaceGrotesk.variable,
          inter.variable,
          jetbrainsMono.variable
        )}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
