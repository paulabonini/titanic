import React, { useState, useEffect, MouseEventHandler } from 'react'
import { StyledAccordionItem, StyledLogo, StyledSideBar } from './styles.ts'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

interface SidebarProps {
  onSelectVisualization: (selectedVisualization: string) => void
}

const Sidebar: React.FC<SidebarProps> = ({ onSelectVisualization }) => {
  const visualizationOptions = ['Raw Table', 'Line Graph', 'Histogram']

  const [selectedVisualization, setSelectedVisualization] = useState<string>(
    visualizationOptions[0]
  )

  const handleVisualizationChange: MouseEventHandler<HTMLSpanElement> = (
    event
  ) => {
    const selectedValue = event.currentTarget.innerText
    setSelectedVisualization(selectedValue)
  }

  useEffect(() => {
    onSelectVisualization(selectedVisualization)
  }, [selectedVisualization, onSelectVisualization])

  return (
    <StyledSideBar>
      <StyledLogo>
        <img src="/logo.png" width="100%" alt="Titanic logo" />
      </StyledLogo>
      <Accordion
        sx={{
          boxShadow: 0,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          Visualization
        </AccordionSummary>
        <AccordionDetails>
          <StyledAccordionItem>
            {visualizationOptions.map((option) => (
              <span key={option} onClick={handleVisualizationChange}>
                {option}
              </span>
            ))}
          </StyledAccordionItem>
        </AccordionDetails>
      </Accordion>
    </StyledSideBar>
  )
}

export default Sidebar
