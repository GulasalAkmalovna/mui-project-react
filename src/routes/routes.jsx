import { GrPaypal } from "react-icons/gr";
import { BiCalendarCheck } from "react-icons/bi";
import { FaLayerGroup } from "react-icons/fa";
import { MdSubtitles } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";


const admin = [
    {
        content: "Teacher",
        path: "/admin-layout",
        icon: <FaChalkboardTeacher />
    },
    {
        content: "Students",
        path: "/admin-layout/student",
        icon: <BsFillPersonFill />
    }
]

const student = [
    {
        content: "Course",
        path: "/student-layout/course",
        icon: <MdSubtitles />
    },
    {
        content: "Group",
        path: "/student-layout/group",
        icon: <FaLayerGroup />
    },
    {
        content: "Payments",
        path: "/student-layout/payments",
        icon: <GrPaypal />
    },
    {
        content: "Attendance",
        path: "/student-layout/attendance",
        icon: <BiCalendarCheck />
    }
]



export { admin, student }