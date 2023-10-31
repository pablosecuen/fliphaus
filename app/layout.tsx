import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./layout/footer";

export const metadata: Metadata = {
  title: "FlipHaus",
  description: "Generado con NextJs",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="overflow-x-hidden bg-white">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
