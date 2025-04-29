// src/components/EventCard.jsx
import { Link } from 'react-router-dom'
import './EventCard.css'

function EventCard({ event }) {
  return (
    <div className="event-card">
      <div className="event-image-container">
        <img src={event.image} alt={event.title} />
        <span className="event-century">{event.century}</span>
      </div>
      <div className="event-content">
        <h3>{event.title}</h3>
        <p className="event-description">{event.shortDescription}</p>
        <Link to={`/events/${event.id}`} className="btn">
          Детальніше
        </Link>
      </div>
    </div>
  )
}

export default EventCard