import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';

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

export default function KeepMountedModal({ handleClose, open, course, teacher, group }) {
    const [form, setForm] = useState({})

    const handleChange = (event) => {
        const { name, value } = event.target
        setForm({ ...form, [name]: value })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(form)
        try {
            const students = await axios.post("http://localhost:8000/students", form)
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
                    <FormControl fullWidth form="student-btn" className="flex flex-col gap-4">
                        <InputLabel id="course">Course</InputLabel>
                        <Select
                            labelId="curse"
                            id="course"
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
                        <InputLabel id="group" className="mt-[70px]">Groups</InputLabel>
                        <Select
                            labelId="group"
                            id="group"
                            name="group"
                            label="group"
                            onChange={handleChange}
                        >
                            {group?.map((item, index) => {
                                return (
                                    <MenuItem key={index} value={item?.name}>
                                        {item?.name}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                        <TextField fullWidth label="Name" name="name" onChange={handleChange} />
                        <TextField fullWidth label="Address" name="address" onChange={handleChange} />
                        <TextField fullWidth label="Age" type='number' name="age" onChange={handleChange} />
                        <TextField fullWidth label="Phone" type='number' name="phone" onChange={handleChange} />
                        <InputLabel id="teacher" className="mt-[430px]">Teacher</InputLabel>
                        <Select
                            labelId="teacher"
                            id="teacher"
                            name="teacher"
                            label="teacher"
                            onChange={handleChange}
                        >

                            {teacher?.map((item, index) => {
                                return (
                                    <MenuItem key={index} value={item?.name}>
                                        {item?.name}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                        <Button variant="contained" color="success" onClick={handleSubmit} id="student-btn">Save</Button>
                    </FormControl>
                </Box>
            </Modal>
        </div>
    );
}
