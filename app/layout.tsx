import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
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
      <body className="">
        <Navbar />
    
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
