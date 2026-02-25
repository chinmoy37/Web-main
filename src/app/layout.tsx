import type { Metadata } from "next";
import { Inter } from "next/font/google"; // or whatever they use
import "../index.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import Providers from "./providers";

export const metadata: Metadata = {
    title: "radian-core",
    description: "Next.js App",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`antialiased bg-[#050B14] text-white min-h-screen`}>
                <div className="fixed inset-0 z-0 pointer-events-none">
                    <img
                        src="/main-bg.jpg"
                        alt="Abstract Network Background"
                        className="w-full h-full object-cover opacity-35 mix-blend-screen"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050B14]/40 via-[#050B14]/80 to-[#050B14]" />
                </div>

                <div className="relative z-10 flex flex-col min-h-screen">
                    <Providers>
                        <TooltipProvider>
                            {children}
                            <Toaster />
                            <Sonner />
                        </TooltipProvider>
                    </Providers>
                </div>
            </body>
        </html>
    );
}
