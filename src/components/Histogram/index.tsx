import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { Box } from '@mui/material'
import { Passenger } from '../../types'

interface HistogramProps {
  passengersData: Passenger[]
}

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend)

const Histogram = ({ passengersData }: HistogramProps) => {
  const survivalsByClass: number[] = [0, 0, 0] // Initialize count for each class

  passengersData.forEach((passenger) => {
    if (passenger.survived === 1) {
      survivalsByClass[passenger.pclass - 1]++ // Increment count for the corresponding class
    }
  })

  const data = {
    labels: ['First Class', 'Second Class', 'Third Class'],
    datasets: [
      {
        label: 'Survivals per Class',
        data: survivalsByClass,
        backgroundColor: [
          'rgba(54, 162, 235, 0.5)',
          'rgba(255, 206, 86, 0.5)',
          'rgba(255, 99, 132, 0.5)',
        ],
        borderColor: [
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 99, 132, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Survivals',
        },
      },
    },
  }

  return (
    <Box width="80%">
      <h2>Survivals per Passenger Class</h2>
      <Bar data={data} options={options} />
    </Box>
  )
}

export default Histogram
