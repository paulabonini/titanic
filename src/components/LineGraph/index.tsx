import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { Passenger } from '../../types'

interface LineGraphProps {
  passengersData: Passenger[]
}

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)

const LineGraph = ({ passengersData }: LineGraphProps) => {
  const filteredPassengers = passengersData
    .filter((passenger) => passenger.age !== null && passenger.fare !== null)
    .sort((a, b) => (a.age! > b.age! ? 1 : -1)) // Filtering out null values and sorting by age

  const ages = filteredPassengers.map((passenger) => passenger.age!)

  const fares = filteredPassengers.map((passenger) => passenger.fare)

  const chartData = {
    labels: ages,
    datasets: [
      {
        label: 'Fare',
        data: fares,
        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  }

  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Age',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Fare',
        },
      },
    },
  }

  return (
    <div>
      <h2>Fare vs Age</h2>
      <Line data={chartData} options={options} />
    </div>
  )
}

export default LineGraph
