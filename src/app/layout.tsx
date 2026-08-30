import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Praava Legal — The Floating Hero Section",
  description:
    "A single platform to manage every part of your legal work. Track matters, coordinate schedules, manage clients, centralize documents, and handle communication.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} font-sans h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#f6f7fb] dark:bg-[#0a0d18] text-slate-900 dark:text-slate-100 selection:bg-indigo-500 selection:text-white transition-colors duration-500">
        {children}
      </body>
    </html>
  );
}
