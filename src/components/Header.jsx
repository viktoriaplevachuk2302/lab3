import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <h1>Українські історичні події</h1>
          </Link>
          <nav className="nav">
            <Link to="/timeline" className="nav-link">Хронологія</Link>
            <Link to="/events" className="nav-link">Історичні події</Link>
            <Link to="/tests" className="nav-link">Тестування</Link>
            <Link to="/comments" className="nav-link">Коментарі</Link>
            <Link to="/about" className="nav-link">Про платформу</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header