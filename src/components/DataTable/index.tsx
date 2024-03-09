import { useState } from 'react'
import { Passenger } from '../../types'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { TablePagination } from '@mui/material'

interface DataTableProps {
  passengersData: Passenger[]
}

const DataTable = ({ passengersData }: DataTableProps) => {
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(8)

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <TableContainer component={Paper} sx={{ border: 0, boxShadow: 0 }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>PassengerId</TableCell>
            <TableCell>Survived</TableCell>
            <TableCell>Pclass</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Sex</TableCell>
            <TableCell>Age</TableCell>
            <TableCell>SibSp</TableCell>
            <TableCell>Parch</TableCell>
            <TableCell>Ticket</TableCell>
            <TableCell>Fare</TableCell>
            <TableCell>Cabin</TableCell>
            <TableCell>Embarked</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? passengersData.slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage
              )
            : passengersData
          ).map((passenger) => (
            <TableRow
              key={passenger.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {passenger.id}
              </TableCell>
              <TableCell>{passenger.survived === 0 ? 'No' : 'Yes'}</TableCell>
              <TableCell>{passenger.pclass}</TableCell>
              <TableCell>{passenger.name}</TableCell>
              <TableCell>{passenger.sex}</TableCell>
              <TableCell>{passenger.age}</TableCell>
              <TableCell>{passenger.sibSp}</TableCell>
              <TableCell>{passenger.parch}</TableCell>
              <TableCell>{passenger.ticket}</TableCell>
              <TableCell>{passenger.fare}</TableCell>
              <TableCell>{passenger.cabin}</TableCell>
              <TableCell>{passenger.embarked}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[8, 10, 20]}
        component="div"
        count={passengersData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  )
}

export default DataTable
