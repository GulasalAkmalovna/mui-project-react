import React, { useEffect, useState } from 'react'
import { StudentModal, StudentTable } from '@components'
import axios from 'axios'
import { Button } from '@mui/material'

const Index = () => {
    const [data, setData] = useState([])
    const [course, setCourse] = useState([])
    const [teacher, setTeacher] = useState([])
    const [group, setGroup] = useState([]);
    const [open, setOpen] = useState(false)
    useEffect(() => {
        axios.get("http://localhost:8000/students").then(res => {
            setData(res?.data)
        })
    }, [])
    const handleClose = () => {
        setOpen(false)
    }
    const openModal = async () => {
        await axios.get("http://localhost:8000/course").then(res => {
            setCourse(res?.data)
        });
        await axios.get("http://localhost:8000/teachers").then(res => {
            setTeacher(res?.data)
        });
        await axios.get("http://localhost:8000/groups").then(response => {
            setGroup(response?.data)
        })
        setOpen(true)
    }
    return (
        <>
            <StudentModal open={open} handleClose={handleClose} course={course} group={group} teacher={teacher} />
            <Button sx={{ color: '#fff', fontSize: '16px', fontWeight: '800', border: '1px solid', backgroundColor: '#00093c', marginBottom: '10px' }} onClick={openModal}> +  Add Student</Button >
            <StudentTable data={data} />
        </>
    )
}

export default Index