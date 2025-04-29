// src/pages/Progress.jsx
import { useState, useEffect } from 'react'
import ProgressChart from '../components/ProgressChart'
import './Progress.css'

function Progress() {
  const [progressData, setProgressData] = useState(() => {
    const saved = localStorage.getItem('historyProgress')
    return saved ? JSON.parse(saved) : []
  })

  // Оновлюємо прогрес при зміні
  useEffect(() => {
    localStorage.setItem('historyProgress', JSON.stringify(progressData))
  }, [progressData])

  return (
    <div className="progress-page">
      <div className="container">
        <h1>Ваш прогрес</h1>
        <ProgressChart data={progressData} />
        
        <div className="progress-stats">
          <div className="stat-card">
            <h3>Вивчено подій</h3>
            <p>{progressData.filter(item => item.completed).length}</p>
          </div>
          <div className="stat-card">
            <h3>Пройдено тестів</h3>
            <p>{progressData.filter(item => item.type === 'test').length}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Progress