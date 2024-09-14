import React from 'react'
import { GroupModal, GroupTable } from '../../components'
import { useState, useEffect } from 'react'
import { Button } from '@mui/material'
import axios from 'axios'

const Index = () => {
    const [open, setOpen] = useState(false)
    const [data, setData] = useState([])
    const [course, setCourse] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/groups").then(res => {
            setData(res?.data)
        })
    }, [])

    const handleClose = () => {
        setOpen(false)
    }

    const openModal = async () => {
        await axios.get("http://localhost:8000/course").then(res => {
            setCourse(res?.data)
        })
        setOpen(true)
    }
    return (
        <>
            <GroupModal open={open} handleClose={handleClose} course={course} />
            <Button sx={{ color: '#fff', fontSize: '16px', fontWeight: '800', border: '1px solid', backgroundColor: '#00093c', marginBottom: '10px' }} onClick={openModal}> +  Add Groups</Button >
            <GroupTable data={data} />
        </>
    )
}

export default Index