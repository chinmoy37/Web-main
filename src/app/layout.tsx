import type { Metadata } from "next";
import { Inter } from "next/font/google"; // or whatever they use
import "../index.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import Providers from "./providers";

export const metadata: Metadata = {
    title: "RadianCore | Custom Software, ERP, E‑Commerce, POS & Web Solutions",
    description: "We design and develop tailored software solutions for businesses, including ERP systems, e‑commerce platforms, POS systems, and websites that are scalable, secure, and optimized for growth.",
    keywords: ["Custom Software", "ERP", "E‑Commerce", "POS", "Web Solutions", "RadianCore"],
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "RadianCore",
    "url": "https://web-main-ebon-seven.vercel.app",
    "logo": "https://web-main-ebon-seven.vercel.app/logo.png",
    "sameAs": ["https://www.linkedin.com/company/radiancore"]
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`antialiased bg-[#050B14] text-white min-h-screen`}>
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
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
