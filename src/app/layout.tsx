import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ReduxRegistry } from "./providers";
import Header from "@/components/header";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Product Listing app",
  description: "Switchive assessment ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxRegistry>
          <Header />
          {/* Embedded content */}
          <>{children}</>
          <Footer />
        </ReduxRegistry>
      </body>
    </html>
  );
}
