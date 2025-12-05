import "./cardbestsellers.css"
import { IoHeartOutline, IoHeartSharp, IoStar } from "react-icons/io5"
import { StaticImageData } from "next/image"
import { ReactNode } from "react"

interface CardBestSellersProps {
  img: string | StaticImageData
  title: string
  preco: string
  star: string | ReactNode
  view: string | ReactNode
  id: string
}

export function CardBestSellers({ img, title, preco, star, view, id }: CardBestSellersProps) {
  const imgSrc = typeof img === "string" ? img : img.src

  return (
    <div className="card CardBestSellers">
      <div className="icon-btn">
        <input type="checkbox" id={id} />
        <label htmlFor={id}>
          <div className="icon icon-fit">
            <IoHeartOutline />
          </div>
          <div className="icon icon-fat">
            <IoHeartSharp />
          </div>
        </label>
      </div>

      <figure>
        <img src={imgSrc} alt="Capa" width={200} height={200} loading="lazy" />
      </figure>

      <div className="detalhes">
        <div className="content">
          <p className="title">{title}</p>
          <p className="preco">{preco}Mt</p>
        </div>

        <div className="star-view">
          <div className="star">
            <div className="icon">
              <IoStar />
            </div>
            <div className="icon">
              <IoStar />
            </div>
            <div className="icon">
              <IoStar />
            </div>
            <div className="icon">
              <IoStar />
            </div>
            <div className="icon">{star}</div>
          </div>
          <p className="view">{view} Reviews</p>
        </div>
      </div>
    </div>
  )
}
