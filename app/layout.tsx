import NavBar from "@/components/layout/navbar";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tindo Task",
  description: "Tabs component for task @ Tindo",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn("container", inter.className)}>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
