import "./subscribe.css"

export function Subscribe() {
  return (
    <>
      <section className="subscribe">
        <p className="title">Se Increva na Nossa Newsletter</p>
        <p className="text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, dignissimos cumque numquam minima cum
          libero.
        </p>

        <div className="input-box">
          <input type="text" placeholder="Escreva seu endereço de email" />
          <button aria-label="Se inscrever" type="button">
            Se inscrever
          </button>
        </div>
      </section>
    </>
  )
}
