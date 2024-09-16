import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { groupValidationScheme } from '../../utils/validation';

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

export default function KeepMountedModal({ handleClose, open, course, update }) {

    const initialValues = {
        course: update?.course || "",
        name: update?.name || ""
    }

    const handleSubmit = async (values) => {
        if (!update.id) {
            try {
                const res = await axios.post("http://localhost:8000/groups", values)
                window.location.reload()
            } catch (error) {
                console.log(error)
            }
        } else {
            try {
                const res = await axios.put(`http://localhost:8000/groups/${update?.id}`, values)
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
                        validationSchema={groupValidationScheme}
                        onSubmit={handleSubmit}
                        enableReinitialize
                    >
                        <Form className='flex flex-col gap-2'>
                            <FormControl fullWidth>
                                <InputLabel id="couse">Course</InputLabel>
                                <Field
                                    name="course"
                                    as={Select}
                                    label="course"
                                >
                                    {course?.map((item, index) => (
                                        <MenuItem value={item.name} key={index}>
                                            {item.name}
                                        </MenuItem>
                                    ))}
                                </Field>
                                <ErrorMessage
                                    name="course"
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
                                margin="normal"
                                helperText={
                                    <ErrorMessage
                                        name="name"
                                        component="p"
                                        className="text-red-800 text-[16px]"
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
