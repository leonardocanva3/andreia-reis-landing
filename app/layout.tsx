import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://andreiareis.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Andreia Reis | Psicóloga e Neuropsicóloga em Salvador",
    template: "%s | Andreia Reis",
  },
  description:
    "Andreia Reis, Psicóloga e Neuropsicóloga, CRP 03/28018. Psicoterapia para crianças, adolescentes e adultos, avaliação neuropsicológica e acolhimento em saúde mental.",
  applicationName: "Andreia Reis Psicóloga Neuropsicóloga",
  authors: [{ name: "Andreia Reis" }],
  creator: "Andreia Reis",
  publisher: "Andreia Reis",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Andreia Reis",
    "psicóloga em Salvador",
    "neuropsicóloga em Salvador",
    "CRP 03/28018",
    "psicoterapia para crianças",
    "psicoterapia para adolescentes",
    "psicoterapia para adultos",
    "avaliação neuropsicológica",
    "TEA",
    "TDAH",
    "dislexia",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "Andreia Reis Psicóloga Neuropsicóloga",
    title: "Andreia Reis | Psicóloga e Neuropsicóloga",
    description:
      "Psicoterapia para crianças, adolescentes e adultos, avaliação neuropsicológica e acolhimento profissional em saúde mental.",
    images: [
      {
        url: "/images/logo.png",
        width: 1080,
        height: 1080,
        alt: "Logotipo Andreia Reis Psicóloga Neuropsicóloga",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Andreia Reis | Psicóloga e Neuropsicóloga",
    description:
      "CRP 03/28018. Psicoterapia e avaliação neuropsicológica com acolhimento.",
    images: ["/images/logo.png"],
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
    <html lang="pt-BR" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}
