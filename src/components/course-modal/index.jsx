import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import axios from 'axios';
import { FormControl, TextField } from '@mui/material';

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

export default function KeepMountedModal({ handleClose, open }) {
    const [form, setForm] = useState({});

    const handleChange = (event) => {
        const { name, value } = event.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const res = await axios.post("http://localhost:8000/course", form);
            handleClose();
        } catch (error) {
            console.log(error);
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
                    <FormControl fullWidth className="flex flex-col gap-3">
                        <TextField
                            fullWidth
                            label="Course Name"
                            id="fullWidth"
                            name="name"
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            label="duration"
                            id="fullWidth"
                            name="duration"
                            onChange={handleChange}
                        />
                        <TextField
                            fullWidth
                            label="price"
                            id="fullWidth"
                            name="price"
                            onChange={handleChange}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleSubmit}
                        >
                            Save
                        </Button>
                    </FormControl>
                </Box>
            </Modal>
        </div>
    );
}
