import "./titletop.css"
import Link from "next/link"

interface TitletopProps {
  title: string
  text_url: string
  link_url: string
}

export function Titletop({ title, text_url, link_url }: TitletopProps) {
  return (
    <>
      <div className="titletop">
        <p className="title">{title}</p>
        <Link href={link_url}>{text_url}</Link>
      </div>
    </>
  )
}
