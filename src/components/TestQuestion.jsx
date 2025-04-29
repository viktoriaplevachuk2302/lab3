import { useState } from 'react'
import './TestQuestion.css'

function TestQuestion({ question, options, correctAnswer, type = 'multiple' }) {
  const [selectedAnswer, setSelectedAnswer] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [userAnswer, setUserAnswer] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
    if (type === 'open') {
      setSelectedAnswer(userAnswer)
    }
  }

  const isCorrect = type === 'open' 
    ? userAnswer.toLowerCase() === correctAnswer.toLowerCase()
    : selectedAnswer === correctAnswer

  return (
    <div className="card test-question">
      <h3>{question}</h3>
      <form onSubmit={handleSubmit}>
        {type === 'multiple' ? (
          <div className="options">
            {options.map((option, index) => (
              <div key={index} className="option">
                <input
                  type="radio"
                  id={`option-${index}`}
                  name="answer"
                  value={option}
                  checked={selectedAnswer === option}
                  onChange={() => setSelectedAnswer(option)}
                  disabled={isSubmitted}
                />
                <label htmlFor={`option-${index}`}>{option}</label>
              </div>
            ))}
          </div>
        ) : (
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            disabled={isSubmitted}
            placeholder="Введіть вашу відповідь..."
          />
        )}
        {!isSubmitted ? (
          <button type="submit" className="btn">
            Перевірити
          </button>
        ) : (
          <div className={`feedback ${isCorrect ? 'correct' : 'incorrect'}`}>
            {isCorrect ? '✅ Правильно!' : '❌ Неправильно!'}
            {!isCorrect && <p>Правильна відповідь: {correctAnswer}</p>}
          </div>
        )}
      </form>
    </div>
  )
}

export default TestQuestion