import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Notification from '../../utils/notification';
import wk from '../../images/vk.svg'
import instagram from '../../images/instagram.svg'
import facebook from '../../images/facebook.svg'
import youtube from '../../images/youtube.svg'
import telegram from '../../images/telegram.svg'
import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { signUpValidationSchema } from '../../utils/validation'
import axios from 'axios';

const Index = () => {
    // const [form, setForm] = useState({})
    const navigate = useNavigate() // navigate uzgaruvchi bu yunaltirib yuboradi.
    // input uzgarganda uni qiymatlarini objectga saqlovchi funksiya
    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setForm({ ...form, [name]: value });
    // }

    const initialValues = {
        first_name: "",
        last_name: "",
        phone_number: "",
        email: "",
        password: ""
    }

    // form submit bulganda ishlovchi funksiya
    const handleSubmit = async (values) => {
        console.log(values)

        const res = await axios.post("https://texnoark.ilyosbekdev.uz/auth/user/sign-up", values)
        if (res.status === 201) {
            navigate("/")
        }
        try {

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <>
            <ToastContainer />
            <Formik
                initialValues={initialValues}
                onSubmit={handleSubmit}
                validationSchema={signUpValidationSchema}
                className='w-full max-w-[900px] min-h-[500px] bg-[#c0cdff42] flex flex-col items-center p-[40px] gap-[26px] rounded-[20px] text-[]'
            >
                <Form id='submitForm' className='w-full max-w-[900px] min-h-[500px] bg-[#c0cdff42] flex flex-col items-center p-[40px] gap-[10px] rounded-[20px] text-[]'>
                    <Typography sx={{ color: "#00093C" }} variant="h4" gutterBottom > Sign Up </Typography>
                    <Field
                        name="first_name"
                        type="text"
                        label="First name"
                        variant="outlined"
                        as={TextField}
                        fullwidth
                        helperText={
                            <ErrorMessage
                                name="first_name"
                                component="p"
                                className="text-red-800 text-[16px]"
                            />
                        }
                    />
                    <Field
                        name="last_name"
                        type="text"
                        label="Last name"
                        variant="outlined"
                        as={TextField}
                        fullwidth
                        helperText={
                            <ErrorMessage
                                name="last_name"
                                component="p"
                                className="text-red-800 text-[16px]"
                            />
                        }
                    />
                    <Field
                        name="phone_number"
                        type="text"
                        label="Phone number"
                        variant="outlined"
                        as={TextField}
                        fullwidth
                        helperText={
                            <ErrorMessage
                                name="phone_number"
                                component="p"
                                className="text-red-800 text-[16px]"
                            />
                        }
                    />
                    <Field
                        name="email"
                        type="email"
                        label="Email"
                        variant="outlined"
                        as={TextField}
                        fullwidth
                        helperText={
                            <ErrorMessage
                                name="email"
                                component="p"
                                className="text-red-800 text-[16px]"
                            />
                        }
                    />
                    <Field
                        name="password"
                        type="password"
                        label="password"
                        variant="outlined"
                        as={TextField}
                        fullwidth
                        helperText={
                            <ErrorMessage
                                name="password"
                                component="p"
                                className="text-red-800 text-[16px]"
                            />
                        }
                    />
                    <div className='mt-[30px]'>
                        <Typography sx={{ color: "##000000", fontSize: "14px", marginLeft: "30px" }} variant="p" gutterBottom>  Login using social networks: </Typography>
                        <ul className=' flex items-center gap-[30px] mt-[20px]'>
                            <li className='cursor-pointer'><span><img src={wk} alt="wk" /></span></li>
                            <li className='cursor-pointer'><span><img src={instagram} alt="instagram" /></span></li>
                            <li className='cursor-pointer'><span><img src={facebook} alt="facebook" /></span></li>
                            <li className='cursor-pointer'><span><img src={youtube} alt="youtube" /></span></li>
                            <li className='cursor-pointer'><span><img src={telegram} alt="telegram" /></span></li>
                        </ul>
                    </div>
                    <Button form="submitForm" type='submit' sx={{ backgroundColor: "#F7941D", fontSize: "14px", paddingInline: "50px" }} variant="contained">Tizimga kirish</Button>
                </Form>
            </Formik>
            {/* <form id='submitForm' onSubmit={handleSubmit} className='w-full max-w-[900px] min-h-[500px] bg-[#c0cdff42] flex flex-col items-center p-[40px] gap-[26px] rounded-[20px] text-[]' >
                <Typography sx={{ color: "#00093C" }} variant="h4" gutterBottom > Sign In </Typography>
                <TextField name='username' onChange={handleChange} sx={{ width: "550px" }} id="filled-basic" label="UserName" variant="filled" />
                <TextField name='password' onChange={handleChange} type='password' sx={{ width: "550px" }} id="filled-basic" label="Password" variant="filled" />
                <div className='mt-[30px]'>
                    <Typography sx={{ color: "##000000", fontSize: "14px", marginLeft: "30px" }} variant="p" gutterBottom>  Login using social networks: </Typography>
                    <ul className=' flex items-center gap-[30px] mt-[20px]'>
                        <li className='cursor-pointer'><span><img src={wk} alt="wk" /></span></li>
                        <li className='cursor-pointer'><span><img src={instagram} alt="instagram" /></span></li>
                        <li className='cursor-pointer'><span><img src={facebook} alt="facebook" /></span></li>
                        <li className='cursor-pointer'><span><img src={youtube} alt="youtube" /></span></li>
                        <li className='cursor-pointer'><span><img src={telegram} alt="telegram" /></span></li>
                    </ul>
                </div>
                <Button form="submitForm" type='submit' sx={{ backgroundColor: "#F7941D", fontSize: "14px", paddingInline: "50px" }} variant="contained">Tizimga kirish</Button>
            </form> */}
        </>
    )
}

export default Index