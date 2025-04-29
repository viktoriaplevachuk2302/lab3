import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>Історичні Події України</h1>
        </Link>
        <nav>
          <ul className="nav-links">
            <li><Link to="/timeline">Хронологія</Link></li>
            <li><Link to="/events">Історичні події</Link></li>
            <li><Link to="/tests">Тестування</Link></li>
            <li><Link to="/comments">Відгуки</Link></li>
            <li><Link to="/about">Про нас</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;