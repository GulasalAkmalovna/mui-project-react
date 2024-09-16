import { AiFillEye } from "react-icons/ai";
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
import { StudentModal } from "@components";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";



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

const handleDelet = (id) => {
    try {
        axios.delete(`http://localhost:8000/students/${id}`)
        window.location.reload()
    } catch (error) {
        console.log(error)
    }
}



export default function CustomizedTables({ data }) {
    const navigate = useNavigate()
    const [open, setOpen] = useState(false)
    const [course, setCourse] = useState([])
    const [group, setGroup] = useState([])
    const [teacher, setTEacher] = useState([])
    const [update, setUpdate] = useState({})

    const handleEdit = async (item) => {
        console.log(item)
        try {
            const res = await axios.get(`http://localhost:8000/course`)
            setCourse(res?.data)
            console.log(res)
        } catch (error) {
            console.log(error)
        }
        try {
            const res = await axios.get(`http://localhost:8000/groups`)
            setGroup(res?.data)
        } catch (error) {
            console.log(error)
        }
        try {
            const res = await axios.get(`http://localhost:8000/groups`)
            setTEacher(res?.data)
        } catch (error) {
            console.log(error)
        }
        setUpdate(item)
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleSinglePage = (id) => {
        console.log(id)
        navigate("/admin-layout/student/single-student")

    }
    return (
        <TableContainer component={Paper}>
            <StudentModal open={open} handleClose={handleClose} course={course} teacher={teacher} group={group} update={update} />
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>T/r</StyledTableCell>
                        <StyledTableCell align="center">Name</StyledTableCell>
                        <StyledTableCell align="center">Group</StyledTableCell>
                        <StyledTableCell align="center">Teacher</StyledTableCell>
                        <StyledTableCell align="center">Address</StyledTableCell>
                        <StyledTableCell align="center">Phone</StyledTableCell>
                        <StyledTableCell align="center">Actions</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row, index) => (
                        <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {index + 1}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.name}</StyledTableCell>
                            <StyledTableCell align="right">{row.group}</StyledTableCell>
                            <StyledTableCell align="right">{row.teacher}</StyledTableCell>
                            <StyledTableCell align="right">{row.address}</StyledTableCell>
                            <StyledTableCell align="right">{row.phone}</StyledTableCell>
                            <StyledTableCell align="right">
                                <Button onClick={() => handleDelet(row.id)} sx={{ marginLeft: '6px', backgroundColor: 'red', color: '#fff', fontWeight: '900', border: 'none' }} variant="outlined" startIcon={<DeleteIcon />}>
                                    Delete
                                </Button>
                                <Button onClick={() => handleEdit(row)} sx={{ marginLeft: '6px', backgroundColor: 'orange', color: '#fff', fontWeight: '900', border: 'none' }} variant="outlined" startIcon={<FiEdit />}>
                                    Edit
                                </Button>
                                <Button onClick={() => handleSinglePage(row.id)} variant="contained" sx={{ backgroundColor: "purple", fontSize: "22px", marginLeft: "5px" }}> <span ><AiFillEye /></span> </Button>
                            </StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
