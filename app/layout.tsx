import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import localfont from "next/font/local";

import "./globals.css";
import "./glitch.css";

const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

const anotherDanger = localfont({
  src: "fonts/AnotherDanger.otf",
});

export const metadata: Metadata = {
  title: "Reggie Evans",
  description: "Frontend Developer website for Reggie Evans",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSans.variable} ${anotherDanger.className}} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
