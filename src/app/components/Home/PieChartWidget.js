import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChartWidget = ({ data }) => {
  // Destructure data object into separate variables
  const { labels, values, colors, hoverColors } = data;

  // Prepare data for Pie chart
  const chartData = {
    labels: labels || [],
    datasets: [
      {
        data: values || [],
        backgroundColor: colors || [],
        hoverBackgroundColor: hoverColors || [],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'right', // Position the legend at the bottom
        align: 'center',    // Align legend items to the start
        labels: {
          boxWidth: 20,    // Width of the color box
          padding: 10,     // Padding between legend items
          usePointStyle: true,
        },
      },
    },
    layout: {
      padding: {
        bottom: 20, // Add some padding to the bottom
      },
    },
  };

  return (
    <div style={{ width: "50%", display:'flex', justifyContent:'center', alignItems:'center'}}>
      <Pie data={chartData} options={options} />
    </div>
  );
};

export default PieChartWidget;