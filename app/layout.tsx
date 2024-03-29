import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import getUser from "./lib/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "First Next.js App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
  login
}: Readonly<{
  children: React.ReactNode;
  login: React.ReactNode;
}>) {
  const isLoggedIn = getUser();

  return isLoggedIn ? (
    <html lang="kr">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  ): (
    <html lang="kr">
      <body className={inter.className}>
        {login}
      </body>
    </html>
  );
}
