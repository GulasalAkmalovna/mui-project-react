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

export default function KeepMountedModal({ handleClose, open, course }) {
    const [form, setFrom] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFrom({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(form)
        try {
            const res = await axios.post("http://localhost:8000/groups", form)
            handleClose()
        } catch (error) {
            console.log(error)
        }
        window.location.reload()
    };

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
                    <FormControl form="group-btn" fullWidth className="flex flex-col gap-3">
                        <InputLabel id="couse">Course</InputLabel>
                        <Select
                            labelId="course"
                            id="course"
                            name="course"
                            label="Course"
                            onChange={handleChange}
                        >
                            {course?.map((item, index) => {
                                return (
                                    <MenuItem key={index} value={item?.name}>
                                        {item?.name}
                                    </MenuItem>
                                );
                            })}
                        </Select>
                        <TextField
                            fullWidth
                            label="Group Name"
                            id="fullWidth"
                            name="name"
                            onChange={handleChange}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                            id='group-btn'
                        >
                            Save
                        </Button>
                    </FormControl>
                </Box>
            </Modal>
        </div>
    );
}
