import { Comp_Header } from "@/components/header/header"
import "./globals.css"
import LenisProvider from "@/components/lenisprovider/LenisProvider"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <body>
        <LenisProvider />
        <Comp_Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
