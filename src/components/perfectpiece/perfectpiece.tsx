import { CardPerfectPiece } from "../cardperfectpiece/cardperfectpiece"
import { Titletop } from "../titletop/titletop"
import { BsArrowUpRight, BsArrowRight } from "react-icons/bs"
import "./perfectpiece.css"
import living_room from "@/assets/living_room.webp"
import dining_room from "@/assets/dining_room.webp"
import kitchen from "@/assets/kitchen.webp"
import outdoor from "@/assets/outdoor.webp"
import bedroom from "@/assets/bedroom.webp"
import office from "@/assets/office.webp"

export function PerfectPiece() {
  return (
    <>
      <section className="perfectpiece">
        <Titletop title="Encontre Seu Lugar Perfeito de Paz" link_url="#" text_url="Explorar Todas Categorias" />

        <div className="columns-3">
          <CardPerfectPiece img={living_room} text="Sala de estar" icon={<BsArrowUpRight />} url="#" />
          <CardPerfectPiece img={dining_room} text="Sala de jantar" icon={<BsArrowUpRight />} url="#" />
          <CardPerfectPiece img={kitchen} text="Cozinha" icon={<BsArrowUpRight />} url="#" />
          <CardPerfectPiece img={office} text="Escritorio" icon={<BsArrowUpRight />} url="#" />
          <CardPerfectPiece img={bedroom} text="Quarto" icon={<BsArrowUpRight />} url="#" />
          <CardPerfectPiece img={outdoor} text="Quintal" icon={<BsArrowUpRight />} url="#" />
        </div>
      </section>
    </>
  )
}
