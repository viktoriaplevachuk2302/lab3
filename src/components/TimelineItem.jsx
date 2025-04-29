import './TimelineItem.css'

function TimelineItem({ title, image, year, isModern }) {
  return (
    <div className={`timeline-item ${isModern ? 'modern' : ''}`}>
      <img src={image} alt={title} className="timeline-image" />
      <h4>{title}</h4>
      <p>{year}</p>
    </div>
  )
}

export default TimelineItem