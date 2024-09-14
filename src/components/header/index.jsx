import React from 'react'
import logo from '../../images/logo.svg'
import { NavLink } from 'react-router-dom'

const Index = () => {
    return (
        <header className='w-full min-h-[80px] p-[20px] bg-[#040e45ea] text-white backdrop-blur-[20px] fixed z-[999]  top-0 left-0'>
            <div className='container m-auto flex items-center justify-between'>
                <img src={logo} alt="logotip" />
                <ul className='flex gap-[30px]'>
                    <li>
                        <NavLink>Students</NavLink>
                    </li>
                    <li>
                        <NavLink>Teachers</NavLink>
                    </li>
                    <li>
                        <NavLink>Groups</NavLink>
                    </li>
                    <li>
                        <NavLink>Courses</NavLink>
                    </li>

                </ul>
            </div>
        </header>
    )
}

export default Index