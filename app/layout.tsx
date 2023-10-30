import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar";

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
      </body>
    </html>
  );
}
