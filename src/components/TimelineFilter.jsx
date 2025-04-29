// src/components/TimelineFilter.jsx
import './TimelineFilter.css'

function TimelineFilter({ periods, activeFilter, onFilterChange }) {
  return (
    <div className="timeline-filter">
      {periods.map(period => (
        <button
          key={period.id}
          className={`filter-btn ${activeFilter === period.id ? 'active' : ''}`}
          onClick={() => onFilterChange(period.id)}
        >
          {period.name}
        </button>
      ))}
    </div>
  )
}

export default TimelineFilter