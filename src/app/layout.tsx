import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReduxRegistry } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Product Listing app",
  description: "Generated With NextJs ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxRegistry>{children}</ReduxRegistry>
      </body>
    </html>
  );
}
