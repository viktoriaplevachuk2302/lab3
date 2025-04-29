// src/pages/EventDetails.jsx
import { useParams } from 'react-router-dom'
import { historicalEvents } from '../data/events'
import './EventDetails.css'

function EventDetails() {
  const { id } = useParams()
  const event = historicalEvents.find(e => e.id === parseInt(id))

  if (!event) {
    return <div>Подію не знайдено</div>
  }

  return (
    <div className="event-details">
      <div className="container">
        <h1>{event.title}</h1>
        <div className="event-meta">
          <span className="event-period">{event.period}</span>
          <span className="event-century">{event.century}</span>
        </div>
        
        <div className="event-content">
          <div className="event-image">
            <img src={event.image} alt={event.title} />
          </div>
          <div className="event-text">
            <p>{event.description}</p>
            <h3>Історичне значення:</h3>
            <p>{event.significance}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventDetails