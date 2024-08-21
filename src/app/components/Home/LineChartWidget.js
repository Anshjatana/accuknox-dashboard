import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend);

const LineChartWidget = ({ data, title }) => {
  const chartData = {
    labels: data.labels,
    datasets: data.datasets,
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineChartWidget;
