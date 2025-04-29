import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Вітаємо на платформі "Історичні Події України"</h1>
        <p className="hero-description">
          Тут ви знайдете найважливіші моменти нашої історії, від давніх часів до сьогодення. 
          Досліджуйте, навчайтеся та перевіряйте свої знання разом з нами!
        </p>
        
        <button 
          className="learn-more-btn"
          onClick={() => setShowAbout(!showAbout)}
        >
          {showAbout ? 'Сховати' : 'Дізнатися про платформу'}
        </button>

        {showAbout && (
          <div className="about-platform">
            <h3>Про нашу платформу</h3>
            <p>
              Наш сайт створений для всіх, хто цікавиться історією України. Ми зібрали найважливіші події,
              які сформували нашу державу та націю. Тут ви знайдете:
            </p>
            <ul>
              <li>Хронологічний огляд ключових подій</li>
              <li>Детальні описи історичних моментів</li>
              <li>Цікаві тести для перевірки знань</li>
              <li>Можливість ділитися думками</li>
            </ul>
            <p>
              Приєднуйтесь до нашої спільноти любителів історії!
            </p>
          </div>
        )}
      </div>

      <div className="features-section">
        <div className="feature-card">
          <h2>Хронологія</h2>
          <p>Дослідіть події у часовому порядку</p>
          <Link to="/timeline" className="feature-link">
            Перейти →
          </Link>
        </div>
        
        <div className="feature-card">
          <h2>Історичні події</h2>
          <p>Детальні описи ключових моментів</p>
          <Link to="/events" className="feature-link">
            Перейти →
          </Link>
        </div>
        
        <div className="feature-card">
          <h2>Тестування</h2>
          <p>Перевірте свої знання</p>
          <Link to="/tests" className="feature-link">
            Перейти →
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;