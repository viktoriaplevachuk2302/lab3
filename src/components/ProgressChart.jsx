// src/components/ProgressChart.jsx
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import './ProgressChart.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

function ProgressChart({ data }) {
  const chartData = {
    labels: ['Події', 'Тести', 'Хронологія'],
    datasets: [
      {
        label: 'Прогрес',
        data: [
          data.filter(item => item.type === 'event').length,
          data.filter(item => item.type === 'test').length,
          data.filter(item => item.type === 'timeline').length
        ],
        backgroundColor: [
          'rgba(109, 76, 65, 0.7)',
          'rgba(141, 110, 99, 0.7)',
          'rgba(215, 204, 200, 0.7)'
        ]
      }
    ]
  }

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        max: 100
      }
    }
  }

  return (
    <div className="progress-chart">
      <Bar data={chartData} options={options} />
    </div>
  )
}

export default ProgressChart