import Link from "next/link"
import "./cardperfectpiece.css"
import Image, { StaticImageData } from "next/image"
import { ReactNode } from "react"

interface CardPerfectPieceProps {
  img: string | StaticImageData
  text: string
  url: string
  icon: string | ReactNode
}

export function CardPerfectPiece({ img, text, url, icon }: CardPerfectPieceProps) {
  return (
    <div className="card cardperfectpiece">
      <figure>
        <Image src={img} alt="Sala" width={400} height={250} loading="lazy" />
      </figure>

      <div className="detalhe">
        <p>{text}</p>
        <Link href={url}>{icon}</Link>
      </div>
    </div>
  )
}
