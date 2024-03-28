import type { Metadata } from "next";
import {Raleway} from "next/font/google";
// import "./styles.css";

const font = Raleway({subsets: ["latin"], weight: "300"});

export const metadata: Metadata = {
  title: "ReaphSoft Security",
  description: "Created by kahlflekzy",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-bs-theme="dark">
      <body className={font.className}>{children}</body>
    </html>
  );
}

