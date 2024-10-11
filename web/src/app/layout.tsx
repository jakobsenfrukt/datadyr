import type { Metadata } from "next";
import PlausibleProvider from "next-plausible";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/css/main.scss';

const baseUrlMetadata = process.env.URL
  ? { metadataBase: new URL(process.env.URL) }
  : {};

export const metadata: Metadata = {
  title: {
    template: "%s | Datadyr",
    default: "Datadyr",
  },
  alternates: {
    canonical: "./",
  },
  description:
    "Datadyr utvikler nettsider og andre digitale produkter i samarbeid med ambisiøse designbyråer.",
  openGraph: {
    siteName: "Datadyr",
    locale: "nb-NO",
    type: "website",
  },
  ...baseUrlMetadata,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ?? "";

  return (
    <html lang="no">
      <PlausibleProvider
        domain={plausibleDomain}
        customDomain={`https://${plausibleDomain}`}
        enabled={plausibleDomain !== ""}
      >
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </PlausibleProvider>
    </html>
  );
}
