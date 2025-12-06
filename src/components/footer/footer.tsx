import Link from "next/link"
import "./footer.css"
import { BsEnvelope, BsTelephone, BsGeoAlt, BsTwitterX } from "react-icons/bs"
import { SlSocialFacebook, SlSocialInstagram } from "react-icons/sl"

export function Footer_Component() {
  const anoActual = new Date().getFullYear()

  return (
    <>
      <footer className="footer">
        <div className="content">
          <div className="box">
            <figure>
              <img src="/logo-white.webp" alt="Logo da EcoNest" width={70} height={70} />
            </figure>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos, dicta esse? Fugiat, vero reiciendis
              neque quos nihil eum tempora officia.
            </p>
          </div>

          <nav className="box">
            <p className="title">Links Rápidos</p>
            <ul>
              <li>
                <Link aria-label="Acessar" href="#">
                  Sobre
                </Link>
              </li>
              <li>
                <Link aria-label="Acessar" href="#">
                  Produtos
                </Link>
              </li>
              <li>
                <Link aria-label="Acessar" href="#">
                  Contactos
                </Link>
              </li>
              <li>
                <Link aria-label="Acessar" href="#">
                  FAQ
                </Link>
              </li>
            </ul>
          </nav>

          <nav className="box">
            <p className="title">Contacto</p>
            <ul>
              <li>
                <Link aria-label="Acessar" href="#">
                  <div className="icon">
                    <BsEnvelope />
                  </div>
                  ola@econest.com
                </Link>
              </li>
              <li>
                <Link aria-label="Acessar" href="#">
                  <div className="icon">
                    <BsTelephone />
                  </div>
                  (258) 123-456-790
                </Link>
              </li>
              <li>
                <Link aria-label="Acessar" href="#">
                  <div className="icon">
                    <BsGeoAlt />
                  </div>
                  123 Mocuba, Zambézia
                </Link>
              </li>
            </ul>
          </nav>

          <nav className="box">
            <p className="title">Nos siga</p>
            <ul className="social-media">
              <li>
                <Link aria-label="Acessar" href="#">
                  <div className="icon">
                    <SlSocialFacebook />
                  </div>
                </Link>
              </li>
              <li>
                <Link aria-label="Acessar" href="#">
                  <div className="icon">
                    <SlSocialInstagram />
                  </div>
                </Link>
              </li>
              <li>
                <Link aria-label="Acessar" href="#">
                  <div className="icon">
                    <BsTwitterX />
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="copy">
          <p>
            &#127275; <span>{anoActual}</span> EcoNest. Todos direitos reservados. Construindo um futuro sustentável.
          </p>
        </div>
      </footer>
    </>
  )
}
