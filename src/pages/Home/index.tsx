import { useState } from "react"
import "./style.css"
import { Question } from "../../components/Question"

// import { Questions } from "../../components/question"

const questionsCss = [
  {
    id: 1, title: "Qual regra altera a cor de um elemento:", options: [
      "color",
      "background-color",
      "font-size",
      "transition"
    ]
  },
  {
    id: 2, title: "A posição que deixa um elemento fixo é a:", options: [
      "static",
      "absolute",
      "fixed",
      "relative"
    ]
  },
  {
    id: 3, title: "Para aumentar a fonte de um elemento usamos o:", options: [
      "font",
      "text-transform",
      "font-size",
      "hover"
    ]
  }
]

export default function Home() {
  const [frame, setFrame] = useState(-500)

  const prevFrame = () => setFrame((prevState) => prevState - 100)
  const nextFrame = () => setFrame((prevState) => prevState + 100)

  return (
    <>
      <main style={{ transform: `translateY(${frame}%)` }}>
        <Question />
        <Question />
        <Question />
        <Question />

        <div className='techs'>
          <header>
            <h1 className="title">QUIZ DE PROGRAMAÇÃO</h1>
            <h2 className="sub-title">Escolha uma categoria</h2>
          </header>

          <div className="content-start">
            <p>Clique no botão abaixo para começar</p>

            <div className="menu-button">
              <button>HTML</button>

              <button onClick={nextFrame}>
                CSS
              </button>

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

            <button onClick={nextFrame}>
              Iniciar
            </button>

            <img src="../../src/assets/imgs/quiz.svg" alt="img do main" />
          </div>
        </div>
      </main>

      <button className="back" onClick={prevFrame}>Voltar</button>
    </>
  )
}