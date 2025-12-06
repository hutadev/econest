import Image from "next/image"
import "./whychoose.css"
import couch from "../../assets/couch.webp"
import Link from "next/link"
import { BsArrowRight } from "react-icons/bs"

export function Whychoose() {
  return (
    <>
      <section className="whychoose">
        <div className="container">
          <div className="intro">
            <p className="title">Porque Escolher EcoNest</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <p className="c-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo nam recusandae optio est illum vero et
            repudiandae laborum nulla repellendus.
          </p>
        </div>

        <div className="container">
          <div className="container-child">
            <div className="box">
              <p className="number">500+</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="box">
              <p className="number">15K+</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
          <div className="container-child">
            <div className="box">
              <p className="number">85%</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
            <div className="box">
              <p className="number">900+</p>
              <p>Lorem ipsum dolor sit amet consectetur.</p>
            </div>
          </div>
        </div>

        <div className="comuda">
          <figure>
            <Image src={couch} alt="Comfortable couch" width={300} height={450} loading="lazy" />
          </figure>

          <div className="detalh">
            <p className="title">Trabalhamos para construir a greener tomorror</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quam enim neque blanditiis, omnis accusamus.
            </p>
            <Link href="#" aria-label="Experimentar">
              Experimentar
              <div className="icon">
                <BsArrowRight />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
