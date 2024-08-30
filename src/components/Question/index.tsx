import './style.css'

export function Question() {
  return (
    <div className='language-programming'>
      <h1 className="title">QUIZ DE PROGRAMAÇÃO</h1>

      <div className="quiz">
        <header>
          <p>Pergunta 1 de </p>

          <h3>test</h3>
        </header>

        <div className="quiz-content">
          <button>.</button>
          <button>.</button>
          <button>.</button>
          <button>.</button>

          <div className="next-question">
            <button>Proxima</button>
          </div>
        </div>
      </div>
    </div>
  )
}