import React from 'react'
import { CourseTable, CourseModal } from '@components'
import { Button } from '@mui/material'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Indez = () => {
    const [open, setOpen] = useState(false)
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/course").then(res => {
            setData(res?.data)
        })
    }, [])

    const handleClose = () => {
        setOpen(false)
    }

    const openModal = () => {
        setOpen(true)
    }
    return (
        <>
            <CourseModal open={open} handleClose={handleClose} />
            <Button sx={{ color: '#fff', fontSize: '16px', fontWeight: '800', border: '1px solid', backgroundColor: '#00093c', marginBottom: '10px' }} onClick={openModal}> +  Add Courses</Button >
            <CourseTable data={data} />
        </>
    )
}

export default Indez