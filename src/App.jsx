import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import Events from './pages/Events';
import Tests from './pages/Tests';
import Comments from './pages/Comments';
import About from './pages/About';
import EventDetail from './pages/EventDetail';
import Progress from './pages/Progress';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/events" element={<Events />} />
          <Route path="/tests" element={<Tests />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/about" element={<About />} />
          <Route path="/event/:id" element={<EventDetail />} />
          <Route path="/progress" element={<Progress />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;