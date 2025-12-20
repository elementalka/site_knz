import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: site.name,
  description: site.short,
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: site.name,
    description: site.short,
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <body>
        <Header />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
