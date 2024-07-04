import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Contact from "@/components/Contact/HomeContactSection";
import Services from "@/components/Services";
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
        <Hero />
        {/* {children} */}
        <Services />
        <Contact />
        <Footer />
       
      </body>
    </html>
  );
}
