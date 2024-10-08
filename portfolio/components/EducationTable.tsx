import * as React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    styled,
    tableCellClasses 
} from '@mui/material/';
const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.primary.dark,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
}));
const StyledTableCellColorWhite = styled(TableCell)(({ theme }) => ({

        color: theme.palette.common.white,
      
}));
const StyledTableCellColorPrimaryDark = styled(TableCell)(({ theme }) => ({

    color: theme.palette.primary.dark,
  
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even)': {
      backgroundColor: theme.palette.common.white,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
function createData(
  name: string,
  course1: string,
  course2: string,
  course3: string,

) {
  return { name, course1, course2, course3 };
}

const rows = [
  createData('Web Development', 'Web Programming Principles','Web Programming Tools and Frameworks', 'Web Programming for Apps and Services'),
  createData('Project Management', 'Requirements Gathering using Object Oriented Models',' Analysis and Design using Object Oriented Models', 'Project Planning and Management'),
  createData('Database Systems', 'Database Services', 'Data Structures and Algorithms', 'Stored Procedures Using Oracles PL/SQL'),
  createData('Object Oriented Programming', 'Object-Oriented Software Development Using C++', 'Open Source Development', 'Open Source Development Project'),
];

export default function EducationTable() {
  return (
    <TableContainer sx={{bgcolor:'primary.main'}} component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <StyledTableRow>
            <StyledTableCell>Seneca College - Computer Programming</StyledTableCell>
            <StyledTableCell colSpan={3} align="center">Relevant Courses</StyledTableCell>

          </StyledTableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,i) => (
            <StyledTableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
            {i%2 === 0?
                <>
                    <StyledTableCellColorWhite component="th" scope="row">{row.name}</StyledTableCellColorWhite>
                    <StyledTableCellColorWhite align="right">{row.course1}</StyledTableCellColorWhite>
                    <StyledTableCellColorWhite align="right">{row.course2}</StyledTableCellColorWhite>
                    <StyledTableCellColorWhite align="right">{row.course3}</StyledTableCellColorWhite>
                </> 
                :
                <>
                    <StyledTableCellColorPrimaryDark component="th" scope="row">{row.name}</StyledTableCellColorPrimaryDark>
                    <StyledTableCellColorPrimaryDark align="right">{row.course1}</StyledTableCellColorPrimaryDark>
                    <StyledTableCellColorPrimaryDark align="right">{row.course2}</StyledTableCellColorPrimaryDark>
                    <StyledTableCellColorPrimaryDark align="right">{row.course3}</StyledTableCellColorPrimaryDark>
                </>

            }

            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}