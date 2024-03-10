import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  title: "Scones & IT",
  description: "Tech support for the everyday person",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
