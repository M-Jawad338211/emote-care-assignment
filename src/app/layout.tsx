import type React from "react";
import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "../providers/providers";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TherapyConnect - Find Your Perfect Therapist",
  description:
    "Connect with licensed mental health professionals who understand your needs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <main className="flex flex-col min-h-screen">
            <Header />
            {children}
            <Footer />
          </main>
        </Providers>
      </body>
    </html>
  );
}
