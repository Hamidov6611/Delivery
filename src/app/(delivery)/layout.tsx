import "./globals.css";
import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import { Navbar, Footer } from "@/components";
const raleway = Raleway({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Доставка",
  description: "Служба доставки",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <Navbar />
        <section>{children}</section>
        <Footer />
      </body>
    </html>
  );
}