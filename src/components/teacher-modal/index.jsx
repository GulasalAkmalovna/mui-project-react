import { AiOutlinePlus } from "react-icons/ai";
import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FormControl, MenuItem, Select, TextField, InputLabel } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function KeepMountedModal({ handleClose, open, course }) {
    const [form, setForm] = useState({})

    const handleChange = (event) => {
        const { name, value } = event.target
        setForm({ ...form, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:8000/teachers", form)
        } catch (error) {
            console.log(error)
        }
        window.location.reload()
    }
    return (
        <div>

            <Modal
                keepMounted
                open={open}
                onClose={handleClose}
                aria-labelledby="keep-mounted-modal-title"
                aria-describedby="keep-mounted-modal-description"
            >
                <Box sx={style}>
                    <FormControl fullWidth form="modal-btn" className="flex flex-col gap-4">
                        <InputLabel id="demo-simple-select-label">Course</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            name="course"
                            label='Course'
                            onChange={handleChange}
                        >
                            {
                                course.map((item, index) => {
                                    return <MenuItem value={item.name} key={index}>{item.name}</MenuItem>
                                })
                            }
                        </Select>
                        <TextField fullWidth label="Name" name="name" onChange={handleChange} />
                        <Button variant="contained" color="success" onClick={handleSubmit} id="modal-btn">Save</Button>
                    </FormControl>
                </Box>
            </Modal>
        </div>
    );
}
