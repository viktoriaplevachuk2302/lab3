import { useState, useEffect } from 'react';
import { questionsData } from '../data/questions';
import './Tests.css';

function Tests() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(() => {
    const shuffled = [...questionsData].sort(() => 0.5 - Math.random());
    setSelectedQuestions(shuffled.slice(0, 15));
  }, []);

  const handleAnswer = (questionId, answer) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < selectedQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmit = () => {
    let correct = 0;
    selectedQuestions.forEach(question => {
      if (answers[question.id] === question.correctAnswer) {
        correct++;
      }
    });
    setScore(correct);
    setQuizCompleted(true);
  };

  if (selectedQuestions.length === 0) return <div className="loading">Завантаження...</div>;

  if (quizCompleted) {
    return (
      <div className="results-container">
        <div className="results-card">
          <h2>Результати тестування</h2>
          <div className="score-circle">
            <span>{score}/{selectedQuestions.length}</span>
          </div>
          <p className="score-message">
            {score === selectedQuestions.length ? 'Вітаємо з ідеальним результатом! 🎉' : 
             score > selectedQuestions.length/2 ? 'Гарний результат! 👍' : 'Спробуйте ще раз! 💪'}
          </p>
          <button 
            className="retry-btn"
            onClick={() => window.location.reload()}
          >
            Пройти ще раз
          </button>
        </div>
      </div>
    );
  }

  const currentQuestion = selectedQuestions[currentQuestionIndex];

  return (
    <div className="quiz-container">
      <div className="progress-bar">
        <div 
          className="progress-fill"
          style={{ width: `${((currentQuestionIndex + 1) / selectedQuestions.length) * 100}%` }}
        ></div>
      </div>

      <div className="question-card">
        <div className="question-header">
          <span className="question-number">Питання {currentQuestionIndex + 1}/{selectedQuestions.length}</span>
        </div>
        
        <h3 className="question-text">{currentQuestion.question}</h3>
        
        <div className="options-container">
          {currentQuestion.type === 'multiple' && (
            currentQuestion.options.map((option, index) => (
              <button
                key={index}
                className={`option-btn ${answers[currentQuestion.id] === option ? 'selected' : ''}`}
                onClick={() => handleAnswer(currentQuestion.id, option)}
              >
                {option}
              </button>
            ))
          )}

          {currentQuestion.type === 'text' && (
            <input
              type="text"
              className="text-answer"
              value={answers[currentQuestion.id] || ''}
              onChange={(e) => handleAnswer(currentQuestion.id, e.target.value)}
              placeholder="Введіть вашу відповідь..."
            />
          )}

          {currentQuestion.type === 'truefalse' && (
            <div className="true-false-btns">
              <button
                className={`tf-btn ${answers[currentQuestion.id] === true ? 'selected' : ''}`}
                onClick={() => handleAnswer(currentQuestion.id, true)}
              >
                Правда
              </button>
              <button
                className={`tf-btn ${answers[currentQuestion.id] === false ? 'selected' : ''}`}
                onClick={() => handleAnswer(currentQuestion.id, false)}
              >
                Неправда
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="navigation-btns">
        <button 
          className="nav-btn prev-btn"
          onClick={handlePrev}
          disabled={currentQuestionIndex === 0}
        >
          ← Назад
        </button>
        
        {currentQuestionIndex < selectedQuestions.length - 1 ? (
          <button className="nav-btn next-btn" onClick={handleNext}>
            Далі →
          </button>
        ) : (
          <button className="nav-btn submit-btn" onClick={handleSubmit}>
            Завершити тест
          </button>
        )}
      </div>
    </div>
  );
}

export default Tests;