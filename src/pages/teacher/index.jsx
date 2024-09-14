import axios from "axios"
import { useEffect, useState } from "react"
import { TeacherTable, TeacherModal } from "@components"
import { Button } from "@mui/material"

const Index = () => {
    const [data, setData] = useState([])
    const [course, setCourse] = useState([])
    const [open, setOpen] = useState(false)
    useEffect(() => {
        axios.get("http://localhost:8000/teachers").then(res => {
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
            <TeacherModal open={open} handleClose={handleClose} course={course} />
            <Button sx={{ color: '#fff', fontSize: '16px', fontWeight: '800', border: '1px solid', backgroundColor: '#00093c', marginBottom: '10px' }} onClick={openModal}> +  Add Teachers</Button >
            <TeacherTable data={data} />
        </>
    )
}

export default Index