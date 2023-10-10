import type { Metadata } from "next";
import { Inter } from "next/font/google";

import App from "./app";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sewing House",
  description: "Sewing House is a show-room for dresses and accessories",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      className="dark"
    >
      <body className={inter.className}>
        <App>{children}</App>
      </body>
    </html>
  );
};

export default RootLayout;
