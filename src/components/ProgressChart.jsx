// Впевніться, що компонент має такий базовий код:
import './ProgressChart.css';

function ProgressChart({ score, total }) {
  const percentage = (score / total) * 100;
  
  return (
    <div className="progress-chart">
      <div className="chart" style={{ '--percentage': `${percentage}%` }}>
        <span>{percentage.toFixed(0)}%</span>
      </div>
      <p>Правильних відповідей: {score}/{total}</p>
    </div>
  );
}

export default ProgressChart;