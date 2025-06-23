import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import type React from "react";
import "./globals.css";
import ClientLayout from "./layout.client";

const sora = Sora({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shopbook - Simplify Your Business Invoicing",
  description:
    "Create professional invoices, track payments, and manage your business finances with ease.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
     <body suppressHydrationWarning>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
