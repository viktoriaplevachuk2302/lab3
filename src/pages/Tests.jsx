import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Tests() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [userInput, setUserInput] = useState('');
  const [questionsPerTest] = useState(15);
  const [totalQuestions] = useState(50);

  const allQuestions = [
    // 1. Заснування Києва (5 питань)
    {
      question: "Як звали легендарну сестру засновників Києва?",
      options: ["Либідь", "Ольга", "Ярослава", "Анна"],
      answer: "Либідь",
      type: "multiple",
      topic: "Заснування Києва"
    },
    {
      question: "Назвіть рік заснування Києва (найпоширеніша версія):",
      answer: "482",
      type: "input",
      topic: "Заснування Києва"
    },
    {
      question: "Київ був заснований як столиця слов'янського племені полян.",
      answer: "Так",
      type: "truefalse",
      topic: "Заснування Києва"
    },
    {
      question: "Яке плем'я жило на території Києва до його заснування?",
      options: ["Поляни", "Древляни", "Сіверяни", "Волиняни"],
      answer: "Поляни",
      type: "multiple",
      topic: "Заснування Києва"
    },
    {
      question: "Хто з братів-засновників Києва дав йому назву?",
      answer: "Кий",
      type: "input",
      topic: "Заснування Києва"
    },

    // 2. Хрещення Русі (5 питань)
    {
      question: "У якому році відбулося Хрещення Русі?",
      options: ["980", "988", "996", "1000"],
      answer: "988",
      type: "multiple",
      topic: "Хрещення Русі"
    },
    {
      question: "Яке ім'я при хрещенні отримав князь Володимир?",
      answer: "Василь",
      type: "input",
      topic: "Хрещення Русі"
    },
    {
      question: "Хрещення Русі відбулося після довгих консультацій з різними релігіями.",
      answer: "Так",
      type: "truefalse",
      topic: "Хрещення Русі"
    },
    {
      question: "З якої країни Русь прийняла християнство?",
      options: ["Візантія", "Рим", "Болгарія", "Німеччина"],
      answer: "Візантія",
      type: "multiple",
      topic: "Хрещення Русі"
    },
    {
      question: "Яку релігію спочатку прийняв Володимир перед християнством?",
      answer: "язичництво",
      type: "input",
      topic: "Хрещення Русі"
    },

    // 3. Битва під Грюнвальдом (4 питання)
    {
      question: "У якому році відбулася битва під Грюнвальдом?",
      answer: "1410",
      type: "input",
      topic: "Битва під Грюнвальдом"
    },
    {
      question: "Скільки українських полків брало участь у битві?",
      options: ["1", "2", "3", "5"],
      answer: "3",
      type: "multiple",
      topic: "Битва під Грюнвальдом"
    },
    {
      question: "Битва під Грюнвальдом відбулася між Тевтонським орденом та об'єднаними силами Польщі та Литви.",
      answer: "Так",
      type: "truefalse",
      topic: "Битва під Грюнвальдом"
    },
    {
      question: "Хто командував українськими полками під Грюнвальдом?",
      answer: "Лугвеній-Симеон Ольгердович",
      type: "input",
      topic: "Битва під Грюнвальдом"
    },

    // 4. Запорізька Січ (4 питання)
    {
      question: "У якому столітті утворилася Запорізька Січ?",
      answer: "XVI",
      type: "input",
      topic: "Запорізька Січ"
    },
    {
      question: "Як називався вищий орган влади на Січі?",
      options: ["Військова Рада", "Гетьманська Рада", "Кошова Рада", "Старшинська Рада"],
      answer: "Військова Рада",
      type: "multiple",
      topic: "Запорізька Січ"
    },
    {
      question: "Запорізька Січ була демократичною республікою.",
      answer: "Так",
      type: "truefalse",
      topic: "Запорізька Січ"
    },
    {
      question: "Назвіть найвідомішу козацьку фортецю:",
      answer: "Хортиця",
      type: "input",
      topic: "Запорізька Січ"
    },

    // 5. Переяславська рада (4 питання)
    {
      question: "У якому році відбулася Переяславська рада?",
      answer: "1654",
      type: "input",
      topic: "Переяславська рада"
    },
    {
      question: "Хто очолював козаків на Переяславській раді?",
      options: ["Іван Мазепа", "Богдан Хмельницький", "Петро Дорошенко", "Пилип Орлик"],
      answer: "Богдан Хмельницький",
      type: "multiple",
      topic: "Переяславська рада"
    },
    {
      question: "Переяславська рада призвела до повної втрати автономії України.",
      answer: "Ні",
      type: "truefalse",
      topic: "Переяславська рада"
    },
    {
      question: "Який документ був ухвалений на Переяславській раді?",
      answer: "Березневі статті",
      type: "input",
      topic: "Переяславська рада"
    },

    // 6. УНР (4 питання)
    {
      question: "У якому році було проголошено УНР?",
      answer: "1918",
      type: "input",
      topic: "УНР"
    },
    {
      question: "Хто очолював Центральну Раду?",
      options: ["Симон Петлюра", "Михайло Грушевський", "Павло Скоропадський", "Володимир Винниченко"],
      answer: "Михайло Грушевський",
      type: "multiple",
      topic: "УНР"
    },
    {
      question: "УНР існувала понад 20 років.",
      answer: "Ні",
      type: "truefalse",
      topic: "УНР"
    },
    {
      question: "Який номер Універсалу проголосив незалежність УНР?",
      answer: "IV",
      type: "input",
      topic: "УНР"
    },

    // 7. Акт Злуки (3 питання)
    {
      question: "У якому році відбувся Акт Злуки?",
      answer: "1919",
      type: "input",
      topic: "Акт Злуки"
    },
    {
      question: "Де відбулося проголошення Акту Злуки?",
      options: ["Київ", "Львів", "Одеса", "Харків"],
      answer: "Київ",
      type: "multiple",
      topic: "Акт Злуки"
    },
    {
      question: "Акт Злуки об'єднав УНР і ЗУНР.",
      answer: "Так",
      type: "truefalse",
      topic: "Акт Злуки"
    },

    // 8. Голодомор (3 питання)
    {
      question: "У які роки відбувся Голодомор?",
      answer: "1932-1933",
      type: "input",
      topic: "Голодомор"
    },
    {
      question: "Голодомор визнано геноцидом українського народу.",
      answer: "Так",
      type: "truefalse",
      topic: "Голодомор"
    },
    {
      question: "Яка країна здійснювала політику Голодомору?",
      answer: "СРСР",
      type: "input",
      topic: "Голодомор"
    },

    // 9. Чорнобиль (3 питання)
    {
      question: "У якому році сталася Чорнобильська катастрофа?",
      answer: "1986",
      type: "input",
      topic: "Чорнобиль"
    },
    {
      question: "Чорнобильська катастрофа сталася через:",
      options: ["Землетрус", "Помилка персоналу", "Військовий вибух", "Теракт"],
      answer: "Помилка персоналу",
      type: "multiple",
      topic: "Чорнобиль"
    },
    {
      question: "Чорнобильська АЕС знаходиться в Україні.",
      answer: "Так",
      type: "truefalse",
      topic: "Чорнобиль"
    },

    // 10. Незалежність України (3 питання)
    {
      question: "У якому році Україна проголосила незалежність?",
      answer: "1991",
      type: "input",
      topic: "Незалежність"
    },
    {
      question: "Якого числа відзначають День Незалежності України?",
      answer: "24 серпня",
      type: "input",
      topic: "Незалежність"
    },
    {
      question: "Першим президентом незалежної України був Леонід Кравчук.",
      answer: "Так",
      type: "truefalse",
      topic: "Незалежність"
    },

    // 11. Помаранчева революція (3 питання)
    {
      question: "У якому році почалася Помаранчева революція?",
      answer: "2004",
      type: "input",
      topic: "Помаранчева революція"
    },
    {
      question: "Хто був основним кандидатом від опозиції?",
      options: ["Віктор Ющенко", "Юлія Тимошенко", "Петро Порошенко", "Олександр Мороз"],
      answer: "Віктор Ющенко",
      type: "multiple",
      topic: "Помаранчева революція"
    },
    {
      question: "Помаранчева революція відбулася через фальсифікації виборів.",
      answer: "Так",
      type: "truefalse",
      topic: "Помаранчева революція"
    },

    // 12. Революція Гідності (3 питання)
    {
      question: "У якому році почалася Революція Гідності?",
      answer: "2013",
      type: "input",
      topic: "Революція Гідності"
    },
    {
      question: "Яку угоду відмовився підписати президент Янукович?",
      answer: "Угоду про асоціацію з ЄС",
      type: "input",
      topic: "Революція Гідності"
    },
    {
      question: "Революція Гідності призвела до втечі Януковича з України.",
      answer: "Так",
      type: "truefalse",
      topic: "Революція Гідності"
    },

    // 13. Війна з Росією (5 питань)
    {
      question: "У якому році Росія анексувала Крим?",
      answer: "2014",
      type: "input",
      topic: "Війна з Росією"
    },
    {
      question: "Як називається місто, де відбулися перші бої війни на Донбасі?",
      options: ["Слов'янськ", "Донецьк", "Маріуполь", "Луганськ"],
      answer: "Слов'янськ",
      type: "multiple",
      topic: "Війна з Росією"
    },
    {
      question: "24 лютого 2022 року Росія розпочала повномасштабне вторгнення в Україну.",
      answer: "Так",
      type: "truefalse",
      topic: "Війна з Росією"
    },
    {
      question: "Як називається операція з оборони Києва у 2022 році?",
      answer: "Операція Ірідій",
      type: "input",
      topic: "Війна з Росією"
    },
    {
      question: "Хто був головнокомандувачем ЗСУ на початку повномасштабної війни?",
      options: ["Валерій Залужний", "Олександр Сирський", "Руслан Хомчак", "Віктор Муженко"],
      answer: "Валерій Залужний",
      type: "multiple",
      topic: "Війна з Росією"
    }
  ];

  useEffect(() => {
    generateNewTest();
  }, []);

  const generateNewTest = () => {
    const shuffledAllQuestions = [...allQuestions].sort(() => Math.random() - 0.5);
    const selectedQuestions = shuffledAllQuestions.slice(0, questionsPerTest);
    setQuestions(selectedQuestions);
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setUserInput('');
  };

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    const current = questions[currentQuestion];
    let isCorrect = false;

    if (current.type === 'input') {
      isCorrect = userInput.trim().toLowerCase() === current.answer.toLowerCase();
    } else {
      isCorrect = answer === current.answer;
    }

    if (isCorrect) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setUserInput('');
      } else {
        setShowResult(true);
      }
    }, 1000);
  };

  const checkInputAnswer = () => {
    if (userInput.trim()) {
      handleAnswer(userInput);
    }
  };

  const renderQuestion = () => {
    const current = questions[currentQuestion];
    
    switch (current.type) {
      case 'multiple':
        return (
          <div className="options">
            {current.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                disabled={selectedAnswer !== null}
                className={`option-btn ${
                  selectedAnswer !== null
                    ? option === current.answer
                      ? 'correct'
                      : selectedAnswer === option
                      ? 'incorrect'
                      : ''
                    : ''
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        );
      
      case 'input':
        return (
          <div className="input-answer">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              disabled={selectedAnswer !== null}
              placeholder="Введіть відповідь..."
            />
            <button 
              onClick={checkInputAnswer}
              disabled={selectedAnswer !== null || !userInput.trim()}
              className="btn"
            >
              Підтвердити
            </button>
          </div>
        );
      
      case 'truefalse':
        return (
          <div className="truefalse-options">
            <button
              onClick={() => handleAnswer('Так')}
              disabled={selectedAnswer !== null}
              className={`option-btn ${
                selectedAnswer !== null
                  ? 'Так' === current.answer
                    ? 'correct'
                    : selectedAnswer === 'Так'
                    ? 'incorrect'
                    : ''
                  : ''
              }`}
            >
              Так
            </button>
            <button
              onClick={() => handleAnswer('Ні')}
              disabled={selectedAnswer !== null}
              className={`option-btn ${
                selectedAnswer !== null
                  ? 'Ні' === current.answer
                    ? 'correct'
                    : selectedAnswer === 'Ні'
                    ? 'incorrect'
                    : ''
                  : ''
              }`}
            >
              Ні
            </button>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="tests-page">
      <div className="container">
        <div className="section-header">
          <h1>Тестування з історії України</h1>
          <p>15 випадкових питань з 50 (тема: історичні події України)</p>
          <div className="center-buttons">
            <Link to="/events" className="btn btn-outline">
              Перейти до подій
            </Link>
            <Link to="/timeline" className="btn btn-outline">
              Перейти до хронології
            </Link>
          </div>
        </div>

        {!showResult && questions.length > 0 ? (
          <div className="test-container">
            <div className="progress">
              Питання {currentQuestion + 1} з {questions.length} ({questions[currentQuestion].topic})
            </div>
            <h3 className="question">{questions[currentQuestion].question}</h3>
            {renderQuestion()}
          </div>
        ) : showResult ? (
          <div className="result-container">
            <h2>Ваш результат: {score} з {questions.length}</h2>
            <p className="result-message">
              {score === questions.length
                ? "Відмінно! Ви справжній знавець історії України!"
                : score > questions.length / 2
                ? "Добре! Але є ще що вивчати."
                : "Потрібно більше уваги приділити історії України."}
            </p>
            <button onClick={generateNewTest} className="btn">
              Новий тест
            </button>
          </div>
        ) : (
          <p>Завантаження тестів...</p>
        )}
      </div>
    </div>
  );
}

export default Tests;