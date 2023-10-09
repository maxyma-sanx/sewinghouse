import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";

import { Footer, Header } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sewing House",
  description: "Sewing House is a show-room for dresses and accessories",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-full flex-col">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
