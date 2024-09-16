import { duration } from "@mui/material";
import * as Yup from "yup"
//  ============= SIGN IN ==============
export const signInValidationSchema = Yup.object().shape({
    phone_number: Yup.string().required("Phone number is required"),
    password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/, "Password must be at least 6 characters and contain at least one uppercase and one lowercase letter").required("Password is required")

});

// ============= SIGN UP ================
export const signUpValidationSchema = Yup.object().shape({
    first_name: Yup.string().required(" First name is required"),
    last_name: Yup.string().required(" Last name is required"),
    phone_number: Yup.string().required("Phone number is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/, "Password must be at least 6 characters and contain at least one uppercase and one lowercase letter").required("Password is required")

});

//  ================= TEACHERS =====================
export const teacherValidationScheme = Yup.object().shape({
    name: Yup.string()
        .required('Teacher name is required')
        .min(3, 'Name must be at least 3 characters'),

    course: Yup.string()
        .required('Course selection is required')
});
//  ================ STUDENTS ====================
export const studentValidationScheme = Yup.object().shape({
    course: Yup.string()
        .required('Course selection is required'),
    group: Yup.string()
        .required('Group selection is required'),
    name: Yup.string()
        .required('Name is required')
        .min(3, 'Name must be at least 3 characters'),
    address: Yup.string()
        .required(' Address is required')
        .min(3, 'Address must be at least 3 characters'),
    age: Yup.string()
        .required(' Age is required'),
    phone: Yup.string()
        .required(' Phone is required')
        .min(3, 'Phone number must be at least 3 characters'),
    teacher: Yup.string()
        .required('Teacher selection is required'),
});

//  ===================== COURSE ================

export const courseValidationScheme = Yup.object().shape({
    name: Yup.string().required(" First name is required"),
    duration: Yup.string().required("Duration is required"),
    price: Yup.string().required("Duration is required")
})

// ================= GROUP ===================
export const groupValidationScheme = Yup.object().shape({
    course: Yup.string().required(" Course  is required"),
    name: Yup.string().required("Group Name is required"),
})