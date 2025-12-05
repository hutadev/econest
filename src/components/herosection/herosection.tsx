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
            <Link href="#" className="StartNow">
              Começar agora
              <div className="icon">
                <BsArrowRight />
              </div>
            </Link>
            <Link href="#" className="ReadMore">
              Ler mais
            </Link>
          </div>
        </div>

        <div className="box">
          <figure>
            <Image src={hero} alt="Capa" width={400} height={270} fetchPriority="high" />
          </figure>
          <div className="info">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, aliquam?</p>
            <div className="btn-info">
              <Link className="show" href="#">
                Ver produto
              </Link>
              <Link className="icon-section" href="#">
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
