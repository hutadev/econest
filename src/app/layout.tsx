import { Comp_Header } from "@/components/header/header"
import "./globals.css"
import LenisProvider from "@/components/lenisprovider/LenisProvider"
import type { Metadata } from "next"
import { Footer_Component } from "@/components/footer/footer"

export const metadata: Metadata = {
  title: "EcoNest | Design Sustentável para Interiores",
  description:
    "A EcoNest apresenta móveis, artigos para o lar e produtos de estilo de vida desenvolvidos com materiais reciclados ou sustentáveis, oferecendo soluções de design de interiores ecológicas, naturais e funcionais.",
  keywords:
    "design de interiores, decoração sustentável, móveis ecológicos, produtos reciclados, EcoNest, estilo de vida sustentável, decoração natural, arquitectura ecológica",
  authors: [{ name: "Hutauta Developer (HutaDev)" }],
  creator: "Hutauta Developer (HutaDev)",
  publisher: "Hutauta Developer (HutaDev)",
  robots: "index, follow",
  metadataBase: new URL("https://econest-hutadev.vercel.app/"),
  manifest: "/site.webmanifest",

  icons: {
    icon: [
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", rel: "shortcut icon" }
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }]
  },

  openGraph: {
    title: "EcoNest | Design Sustentável para Interiores",
    description:
      "Portefólio digital de produtos ecológicos e design sustentável, com móveis e artigos para o lar feitos a partir de materiais reciclados e naturais.",
    url: "https://econest-hutadev.vercel.app/",
    siteName: "EcoNest",
    type: "website",
    locale: "pt_PT",
    images: [
      {
        url: "/demo.webp",
        width: 1200,
        height: 630,
        alt: "Demonstração visual do design sustentável EcoNest"
      }
    ]
  },

  twitter: {
    card: "summary_large_image",
    title: "EcoNest | Design Sustentável para Interiores",
    description: "Design de interiores ecológico com móveis e produtos feitos de materiais reciclados e sustentáveis.",
    images: ["/demo.webp"]
  },

  appleWebApp: {
    title: "EcoNest"
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>
        <LenisProvider />
        <Comp_Header />
        <main>{children}</main>
        <Footer_Component />
      </body>
    </html>
  )
}
