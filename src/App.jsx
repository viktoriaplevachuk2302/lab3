import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Timeline from './pages/Timeline.jsx'
import Events from './pages/Events.jsx'
import Tests from './pages/Tests.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Comments from './pages/Comments.jsx';
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/timeline" element={<Timeline />} />
            <Route path="/events" element={<Events />} />
            <Route path="/tests" element={<Tests />} />
            <Route path="/comments" element={<Comments />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App