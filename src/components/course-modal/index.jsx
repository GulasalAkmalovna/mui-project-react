import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import axios from 'axios';
import { FormControl, TextField, duration } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { courseValidationScheme } from '../../utils/validation';

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

export default function KeepMountedModal({ handleClose, open, update }) {


    const initialValues = {
        name: update?.name || "",
        duration: update?.name || "",
        price: update?.price || ""
    }

    const handleSubmit = async (values) => {
        if (!update.id) {
            try {
                const res = await axios.post("http://localhost:8000/course", values)
                window.location.reload()
            } catch (error) {
                console.log(error)
            }
        } else {
            try {
                const res = await axios.put(`http://localhost:8000/course/${update?.id}`, values)
                window.location.reload()
            } catch (error) {
                console.log(error)
            }
        }

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
                    <Formik
                        initialValues={initialValues}
                        validationSchema={courseValidationScheme}
                        onSubmit={handleSubmit}
                        enableReinitialize

                    >
                        <Form className='flex flex-col gap-2'>
                            <Field
                                fullWidth
                                label="Course Name"
                                name="name"
                                as={TextField}
                                variant="outlined"
                                helperText={
                                    <ErrorMessage
                                        name='name'
                                        component='p'
                                        className='text-red-500
                                       text-[15px]'
                                    />
                                }
                            />
                            <Field
                                fullWidth
                                label="Duration"
                                name="duration"
                                as={TextField}
                                variant="outlined"
                                helperText={
                                    <ErrorMessage
                                        name='duration'
                                        component='p'
                                        className='text-red-500
                                       text-[15px]'
                                    />
                                }
                            />
                            <Field
                                fullWidth
                                label="Price"
                                name="price"
                                as={TextField}
                                variant="outlined"
                                helperText={
                                    <ErrorMessage
                                        name='price'
                                        component='p'
                                        className='text-red-500
                                       text-[15px]'
                                    />
                                }
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                type='submit'
                            >
                                Save
                            </Button>
                        </Form>
                    </Formik>
                </Box>
            </Modal>
        </div>
    );
}
