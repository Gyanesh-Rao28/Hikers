import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/NavBar/Footer";



export const metadata: Metadata = {
  title: "Hikers",
  description: "Developed by S Gyanesh Rao",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body>
          <NavBar/>
          <main>
            {children}
            <Toaster />
          </main>
          <Footer />
      </body>
    </html>
  );
}
