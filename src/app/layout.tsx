import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./pbootstrap.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ReaphSoft",
  description: "Created by kahlflekzy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-bs-theme="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
