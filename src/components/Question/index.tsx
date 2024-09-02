import { useState } from "react";
import "./style.css";

export interface QuestionProps {
  id: number;
  title: string;
  options: string[];
  total: number;
  nextFrame(): void;
  frame: number;
  alternativeCorrect: string;
}

export function Question({
  id,
  title,
  options,
  alternativeCorrect,
  total,
  frame,
  nextFrame,
}: QuestionProps) {
  const [selectedOption, setSelectedOption] = useState<string>();
  const [selectedTrue, setSelectedTrue] = useState<string>();
  
  return (
    <div className="language-programming">
      <h1 className="title">QUIZ DE PROGRAMAÇÃO</h1>

      <div className="quiz">
        <header>
          <p>
            Pergunta {id} de {total}
          </p>

          <h3>{title}</h3>
        </header>

        <div className="quiz-content">
          {options.map((option) => {
            return (
              <div key={option}>
                <button
                  className="qustions"
                  onClick={() => {
                    setSelectedOption(option);
                    if (option === alternativeCorrect) {
                      setSelectedTrue(option);
                    }
                  }}
                >
                  {option}
                </button>
              </div>
            )
          })}
          <div className="next-question">
            {frame !== 0 ? (
              <button className="prev" onClick={nextFrame}>Proxima</button>
            ) : (
              <button className="prev" onClick={nextFrame}>Finalizar Quiz</button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
