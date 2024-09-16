import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import { FiEdit } from 'react-icons/fi';
import DeleteIcon from '@mui/icons-material/Delete';
import axios from 'axios';
import { useState } from 'react';
import { CourseModal } from '@components';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const handleDelete = (id) => {
    console.log(id)
    try {
        axios.delete(`http://localhost:8000/course/${id}`)
        window.location.reload()
    } catch (error) {
        console.log(error)
    }
}


export default function CustomizedTables({ data }) {
    const [open, setOpen] = useState(false)
    const [update, setUpdate] = useState({})


    const handleEdit = async (item) => {
        console.log(item)
        setUpdate(item)
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <TableContainer component={Paper}>
            <CourseModal open={open} handleClose={handleClose} update={update} />
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>T/r</StyledTableCell>
                        <StyledTableCell align="center">Course Name</StyledTableCell>
                        <StyledTableCell align="=center">Duration</StyledTableCell>
                        <StyledTableCell align="=center">Price</StyledTableCell>
                        <StyledTableCell align="center">Actions</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, index) => (
                        <StyledTableRow key={index}>
                            <StyledTableCell component="th" scope="row">
                                {index + 1}
                            </StyledTableCell>
                            <StyledTableCell align="center">{row.name}</StyledTableCell>
                            <StyledTableCell align="=center">{row.duration}</StyledTableCell>
                            <StyledTableCell align="center">{row.price}</StyledTableCell>
                            <StyledTableCell align="center">
                                <Button onClick={() => handleDelete(row.id)}
                                    sx={{ marginLeft: '6px', backgroundColor: 'red', color: '#fff', fontWeight: '900', border: 'none' }}
                                    variant="outlined" startIcon={<DeleteIcon />}>
                                    Delete
                                </Button>
                                <Button onClick={() => handleEdit(row)} sx={{ marginLeft: '6px', backgroundColor: 'orange', color: '#fff', fontWeight: '900', border: 'none' }} variant="outlined" startIcon={<FiEdit />}>
                                    Edit
                                </Button>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
