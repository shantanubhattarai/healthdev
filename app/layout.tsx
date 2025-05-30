import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export const metadata: Metadata = {
  title: "Apex Aid Services",
  description: "Care that lifts, Support that Lasts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={"antialiased flex flex-col justify-between min-h-screen"}
      >
        <main>
          <Header />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
