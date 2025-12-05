import { CardBestSellers } from "../cardbestsellers/cardbestsellers"
import { Titletop } from "../titletop/titletop"
import "./bestsellers.css"
import { IoStarOutline, IoStar } from "react-icons/io5"
import novabed from "@/assets/novabed.webp"
import outdoordining from "@/assets/outdoordining.webp"
import glassmirror from "@/assets/glassmirror.webp"
import outdoordiningset from "@/assets/outdoordiningset.webp"
import vintagesofaset from "@/assets/vintagesofaset.webp"
import wooldblanket from "@/assets/wooldblanket.webp"

export function BestSellers() {
  return (
    <>
      <section className="bestsellers">
        <Titletop title="Best Sellers" text_url="Todos Produtos" link_url="#" />

        <div className="columns-3">
          <CardBestSellers
            id="check_1"
            img={novabed}
            title="Nova cama"
            preco="25.000"
            star={<IoStarOutline className="desible" />}
            view={78}
          />
          <CardBestSellers
            id="check_2"
            img={outdoordining}
            title="Kit de mesa de Jantar"
            preco="10.000"
            star={<IoStar />}
            view={102}
          />
          <CardBestSellers
            id="check_3"
            img={glassmirror}
            title="Espelho de quarto"
            preco="2.500"
            star={<IoStar />}
            view={176}
          />
          <CardBestSellers
            id="check_4"
            img={outdoordiningset}
            title="Jogo de mesa de lanche"
            preco="8.999"
            star={<IoStarOutline className="desible" />}
            view={255}
          />
          <CardBestSellers
            id="check_5"
            img={vintagesofaset}
            title="Sofa de vintage"
            preco="7.800"
            star={<IoStarOutline className="desible" />}
            view={296}
          />
          <CardBestSellers
            id="check_6"
            img={wooldblanket}
            title="Armario de madeira"
            preco="4.300"
            star={<IoStar />}
            view={342}
          />
        </div>
      </section>
    </>
  )
}
