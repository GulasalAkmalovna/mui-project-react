import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import { useState } from 'react';
import axios from 'axios';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { studentValidationScheme } from '../../utils/validation';


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

export default function KeepMountedModal({ handleClose, open, course, teacher, group, update }) {


    const initialValues = {
        course: update?.course || '',
        group: update?.group || '',
        name: update?.name || '',
        address: update?.address || '',
        age: update?.age || '',
        phone: update?.phone || '',
        teacher: update?.teacher || ''
    }
    const handleSubmit = async (values) => {
        console.log(update)
        if (!update.id) {
            try {
                const res = await axios.post("http://localhost:8000/students", values)
                window.location.reload()
            } catch (error) {
                console.log(error)
            }
        } else {
            try {
                const res = await axios.put(`http://localhost:8000/students/${update?.id}`, values)
                window.location.reload()
            } catch (error) {
                console.log(error)
            }
        }

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
                    <Formik initialValues={initialValues}
                        validationSchema={studentValidationScheme}
                        onSubmit={handleSubmit}
                        enableReinitialize>
                        <Form className="flex flex-col" >
                            <FormControl>
                                <FormControl fullWidth>
                                    <InputLabel id="course">Course</InputLabel>
                                    <Field
                                        className="mb-[10px]"
                                        name="course"
                                        label="course"
                                        as={Select}
                                    >
                                        {
                                            course?.map((item, index) => {
                                                return <MenuItem value={item.name} key={index}>{item.name}</MenuItem>
                                            })
                                        }
                                    </Field>
                                    <ErrorMessage
                                        name="course"
                                        component="p"
                                        className="text-red-800 text-[16px]"
                                    />
                                </FormControl>
                                <FormControl fullWidth>
                                    <InputLabel id="group" >Groups</InputLabel>
                                    <Field
                                        className="mb-[10px]"
                                        name="group"
                                        label="Group"
                                        as={Select}
                                    >
                                        {
                                            group?.map((item, index) => {
                                                return <MenuItem value={item.name} key={index}>{item.name}</MenuItem>
                                            })
                                        }
                                    </Field>
                                    <ErrorMessage
                                        name="group"
                                        component="p"
                                        className="text-red-800 text-[16px]"
                                    />
                                </FormControl>
                                <Field
                                    name="name"
                                    type="text"
                                    label="Name"
                                    variant="outlined"
                                    as={TextField}
                                    fullWidth
                                    helperText={
                                        <ErrorMessage
                                            name="name"
                                            component="p"
                                            className="text-red-800 text-[16px]"
                                        />
                                    }
                                />
                                <Field
                                    name="address"
                                    type="text"
                                    label="Address"
                                    variant="outlined"
                                    margin="normal"
                                    as={TextField}
                                    fullWidth
                                    helperText={
                                        <ErrorMessage
                                            name="address"
                                            component="p"
                                            className="text-red-800 text-[16px]"
                                        />
                                    }
                                />
                                <Field
                                    name="age"
                                    type="text"
                                    label="Age"
                                    variant="outlined"
                                    margin="normal"
                                    as={TextField}
                                    fullWidth
                                    helperText={
                                        <ErrorMessage
                                            name="age"
                                            component="p"
                                            className="text-red-800 text-[16px]"
                                        />
                                    }
                                />
                                <Field
                                    name="phone"
                                    type="text"
                                    label="Phone"
                                    variant="outlined"
                                    margin="normal"
                                    as={TextField}
                                    fullWidth
                                    helperText={
                                        <ErrorMessage
                                            name="phone"
                                            component="p"
                                            className="text-red-800 text-[16px]"
                                        />
                                    }
                                />
                                <FormControl>
                                    <InputLabel id="course" >Teacher</InputLabel>
                                    <Field
                                        className="mb-[10px]"
                                        name="teacher"
                                        label="teacher"
                                        as={Select}
                                    >
                                        {
                                            teacher?.map((item, index) => {
                                                return <MenuItem value={item.name} key={index}>{item.name}</MenuItem>
                                            })
                                        }
                                    </Field>
                                    <ErrorMessage
                                        name="teacher"
                                        component="p"
                                        className="text-red-800 text-[16px]"
                                    />
                                </FormControl>
                            </FormControl>
                            <Button variant="contained" color="success" type='submit'>Save</Button>
                        </Form>
                    </Formik>

                </Box>
            </Modal>
        </div>
    );
}
