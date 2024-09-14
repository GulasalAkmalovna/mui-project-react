import React from 'react'
import birdImg from '../../images/sign-img.png'
import note from '../../images/note.svg'

const Index = () => {
    return (
        <>
            <div className=' w-full relative max-w-[480px] min-h-[300px]  flex items-center justify-center'>
                <div className=' z-10'>
                    <img src={birdImg} alt="photo" />
                </div>
                <div className='absolute top-[-20px] right-[-60px]'>
                    <img src={note} alt="photo" />
                    <p className='absolute top-[20px] left-[100px] max-w-[190px] text-center text-[16px] text-[#000]'>Sign inor register,if you don't have an account yet</p>
                </div>
            </div>
        </>
    )
}

export default Index