import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const OG_IMAGE = { url: "/images/og-image.PNG", width: 1200, height: 630, alt: "Clever Clover Studio" };

export const metadata: Metadata = {
  metadataBase: new URL("https://cleverclover.studio"),
  title: {
    default: "Clever Clover Studio — Creative Production in Phoenix, AZ",
    template: "%s | Clever Clover Studio",
  },
  description:
    "A full-service creative production studio based in Phoenix, Arizona. Video production, audio production, music, and website design — everything we create makes people feel something.",
  keywords: [
    "creative production studio",
    "video production Phoenix",
    "audio production",
    "custom songs",
    "website design",
    "Phoenix Arizona",
  ],
  openGraph: {
    title: "Clever Clover Studio — Creative Production in Phoenix, AZ",
    description:
      "A full-service creative production studio based in Phoenix, Arizona. Video production, audio production, music, and website design — everything we create makes people feel something.",
    url: "/",
    siteName: "Clever Clover Studio",
    images: [OG_IMAGE],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clever Clover Studio — Creative Production in Phoenix, AZ",
    description:
      "A full-service creative production studio based in Phoenix, Arizona. Video production, audio production, music, and website design — everything we create makes people feel something.",
    images: ["/images/og-image.PNG"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-dark text-cream">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
