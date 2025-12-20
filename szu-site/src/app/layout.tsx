import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingDonateButton from "@/components/FloatingDonateButton";
import SharedSections from "@/components/SharedSections";
import ServiceWorker from "@/components/ServiceWorker";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: site.name,
  description: site.short,
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: site.name,
    description: site.short,
    type: "website"
  },
  themeColor: "#0B1220",
  manifest: "/manifest.json"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="uk">
      <body>
        <Header />
        <main className="relative z-10 min-h-[70vh]">
          {children}
          <SharedSections />
        </main>
        <FloatingDonateButton />
        <ServiceWorker />
        <Footer />
      </body>
    </html>
  );
}
