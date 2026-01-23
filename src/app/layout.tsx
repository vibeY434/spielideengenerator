import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-nunito",
});

export const metadata: Metadata = {
  title: "Spielgenerator | Kostenlose Spielideen für Kita & Kindergarten",
  description:
    "Finde passende Spielideen für Kindergarten und Kita. Filtere nach Alter, Ort, Dauer und Aktivitätstyp. Kostenlos für Erzieher und Pädagogen.",
  keywords:
    "Spielideen, Kindergarten, Kita, Kinderspiele, Bewegungsspiele, Gruppenspiele, Erzieher, Pädagogik, Spielgenerator",
  authors: [{ name: "Dominik Weyh" }],
  creator: "Dominik Weyh",
  publisher: "spielgenerator.de",
  metadataBase: new URL("https://spielgenerator.de"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Spielgenerator | Kostenlose Spielideen für Kita & Kindergarten",
    description:
      "Finde passende Spielideen für Kindergarten und Kita. Filtere nach Alter, Ort, Dauer und Aktivitätstyp. Kostenlos für Erzieher und Pädagogen.",
    url: "https://spielgenerator.de",
    siteName: "Spielgenerator",
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spielgenerator | Kostenlose Spielideen für Kita & Kindergarten",
    description:
      "Finde passende Spielideen für Kindergarten und Kita. Filtere nach Alter, Ort, Dauer und Aktivitätstyp.",
  },
  robots: {
    index: true,
    follow: true,
  },
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
        <Footer />
      </body>
    </html>
  );
}
