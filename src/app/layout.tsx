import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Spielideen-Generator | Kindergarten",
  description:
    "Finde kreative Spielideen für deinen Kindergarten - Bewegung, Basteln, Malen und mehr!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={`${nunito.variable} font-nunito antialiased`}>
        {children}
      </body>
    </html>
  );
}
