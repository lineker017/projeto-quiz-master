import { useState } from "react"
import "./style.css"

export default function Home() {
  const [showTechs, setShowTechs] = useState(false)

  return (
    <main>
      <div className={`techs ${showTechs && 'top-0'}`}>
        <header>
          <h1 className="title">QUIZ DE PROGRAMAÇÃO</h1>
          <h2 className="sub-title">Escolha uma categoria</h2>

          <button onClick={() => setShowTechs(false)}>Voltar</button>
        </header>

        <div className="content-start">
          <p>Clique no botão abaixo para começar</p>

          <div className="menu-button">
            <button>HTML</button>

            <button>CSS</button>

            <button className="last-button">JavaScript</button>
          </div>

          <img src="../../src/assets/imgs/category.svg" alt="" />
        </div>
      </div>

      <div className="content">
        <header>
          <h1 className="title">QUIZ DE PROGRAMAÇÃO</h1>
          <h2 className="sub-title">Seja bem-vindo</h2>
        </header>

        <div className="content-start">
          <p>Clique no botão abaixo para começar</p>

          <button onClick={() => setShowTechs(true)}>
            Iniciar
          </button>

          <img src="../../src/assets/imgs/quiz.svg" alt="img do main" />
        </div>
      </div>
    </main>
  )
}