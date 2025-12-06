import Link from "next/link"
import { BsArrowUpRight, BsArrowRight } from "react-icons/bs"
import hero from "../../assets/hero.webp"
import Image from "next/image"
import "./herosection.css"

export function Herosection() {
  return (
    <>
      <section className="herosection">
        <div className="box">
          <h1>Designing a Greener Tomorror</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium enim, fugiat asperiores molestias
            possimus unde!
          </p>
          <div className="btn-link">
            <Link href="#" className="StartNow" aria-label="Começar agora">
              Começar agora
              <div className="icon">
                <BsArrowRight />
              </div>
            </Link>
            <Link href="#" className="ReadMore" aria-label="Ler mais">
              Ler mais
            </Link>
          </div>
        </div>

        <div className="box">
          <figure>
            <Image src={hero} alt="Capa" width={400} height={270} fetchPriority="high" priority={true} quality={85} />
          </figure>
          <div className="info">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, aliquam?</p>
            <div className="btn-info">
              <Link className="show" href="#" aria-label="Ver produto">
                Ver produto
              </Link>
              <Link className="icon-section" href="#" aria-label="Ver produto">
                <div className="icon">
                  <BsArrowUpRight />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
