import Link from "next/link"
import { BsSearch, BsList, BsX, BsPause } from "react-icons/bs"
import "./header.css"

export function Comp_Header() {
  return (
    <>
      <header>
        <Link href="/">
          <figure>
            <img src="/logo-black.webp" alt="Logo" width={60} height={60} />
          </figure>
        </Link>

        <nav className="nav-desk">
          <ul>
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">Produtos</Link>
            </li>
            <li>
              <Link href="#">Sobre</Link>
            </li>
            <li>
              <Link href="#">Contactos</Link>
            </li>
          </ul>
        </nav>

        <div className="btn">
          <button className="btn-check">
            <input type="checkbox" id="ShowSearch" />
            <input className="input-search" type="text" id="ShowSearch" placeholder="Pesquisar..." />
            <label htmlFor="ShowSearch" className="icon">
              <BsSearch className="search" />
              <BsX className="close" />
            </label>
          </button>

          <button className="btn-shop">
            Carinho
            <div className="number">
              <p>0</p>
            </div>
          </button>

          <div className="menu">
            <input type="checkbox" id="ShowHiddenMenu" className="input-menu" />
            <label htmlFor="ShowHiddenMenu" className="ShowHiddenMenu">
              <div className="icon icon-show">
                <BsPause />
              </div>

              <div className="icon icon-hidden">
                <BsX />
              </div>
            </label>

            <div className="menu-mobile">
              <div className="search">
                <input type="text" placeholder="Pesquisar..." />
              </div>

              <nav>
                <ul>
                  <li>
                    <Link href="#">Home</Link>
                  </li>
                  <li>
                    <Link href="#">Produtos</Link>
                  </li>
                  <li>
                    <Link href="#">Sobre</Link>
                  </li>
                  <li>
                    <Link href="#">Contactos</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
