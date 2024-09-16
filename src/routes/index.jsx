import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import App from "../App";
import { Auth, Auth2, AdminLayout, StudentLayout, Teachers, Students, Group, Course, Payments, Attendance, SingleStudent } from '@pages';


const Index = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App />}>
                <Route index element={<Auth />} />
                <Route path="/sign-up" element={<Auth2 />} />
                {/* Admin - layout */}
                <Route path="admin-layout" element={<AdminLayout />}>
                    <Route index element={< Teachers />} />
                    <Route path="student" element={< Students />} />
                    <Route path="student/single-student" element={< SingleStudent />} />
                </Route>
                {/* Student - layout */}
                <Route path="student-layout" element={<StudentLayout />}>
                    <Route index element={< Students />} />
                    <Route path="single-student" element={< SingleStudent />} />
                    <Route path="group" element={< Group />} />
                    <Route path="course" element={< Course />} />
                    <Route path="payments" element={< Payments />} />
                    <Route path="attendance" element={< Attendance />} />
                </Route>
            </Route>
        )
    );
    return <RouterProvider router={router} />
}

export default Index