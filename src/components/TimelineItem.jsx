import './TimelineItem.css';

function TimelineItem({ event }) {
  const isModern = event.century === 'XXI';

  return (
    <div className={`timeline-item ${isModern ? 'modern' : ''}`}>
      <div className="timeline-item-image">
        <img src={event.image} alt={event.title} />
      </div>
      <h3>{event.title}</h3>
      <p className="timeline-years">{event.years}</p>
    </div>
  );
}

export default TimelineItem;