import type { Metadata } from "next";
// import "./styles.css";

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
      <body>{children}</body>
    </html>
  );
}

