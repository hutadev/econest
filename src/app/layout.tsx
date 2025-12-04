import { Comp_Header } from "@/components/header/header"
import "./globals.css"

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body>
        <Comp_Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
