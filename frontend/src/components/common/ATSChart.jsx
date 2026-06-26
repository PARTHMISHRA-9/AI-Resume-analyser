import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const ATSChart = ({ data, title }) => {
  const chartData = {
    labels: data.labels,
    datasets: [
      {
        data: data.values,
        backgroundColor: [
          '#0ea5e9',
          '#22c55e',
          '#eab308',
          '#ef4444',
          '#8b5cf6',
        ],
        borderColor: [
          '#0284c7',
          '#16a34a',
          '#ca8a04',
          '#dc2626',
          '#7c3aed',
        ],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          padding: 15,
          font: { size: 12, weight: 500 },
          color: document.documentElement.classList.contains('dark') ? '#9ca3af' : '#6b7280',
        },
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        titleFont: { size: 13 },
        bodyFont: { size: 12 },
      },
    },
  };

  return (
    <div className="bg-white dark:bg-dark-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6">
      {title && <h3 className="text-lg font-bold text-dark-900 dark:text-white mb-6">{title}</h3>}
      <div className="relative h-64">
        <Doughnut data={chartData} options={options} />
      </div>
    </div>
  );
};

export default ATSChart;
