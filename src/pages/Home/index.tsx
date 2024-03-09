import { useState } from 'react'
import Sidebar from '../../components/SideBar'
import Details from '../Details'
import { Box } from '@mui/material'

const Home = () => {
  const [componentName, setComponentName] = useState<string>('Raw Table')
  return (
    <Box display="flex">
      <Sidebar onSelectVisualization={setComponentName} />
      {componentName && <Details component={componentName} />}
    </Box>
  )
}

export default Home
