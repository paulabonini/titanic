import { Box } from '@mui/material'
import DataTable from '../../components/DataTable'
import Histogram from '../../components/Histogram'
import LineGraph from '../../components/LineGraph'
import { csvData } from '../../database/data'
import { csvToJson } from '../../utils'

type DetailsProps = {
  component: string
}

const Details = ({ component }: DetailsProps) => {
  const passengersData = csvToJson(csvData)

  return (
    <Box padding={4} height="100%" minHeight="100vh" flex={1}>
      {component === 'Raw Table' ? (
        <DataTable passengersData={passengersData} />
      ) : component === 'Line Graph' ? (
        <LineGraph passengersData={passengersData} />
      ) : (
        component === 'Histogram' && (
          <Histogram passengersData={passengersData} />
        )
      )}
    </Box>
  )
}

export default Details
