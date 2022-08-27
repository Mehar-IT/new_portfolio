import React from 'react'
import profile from '../assets/profile.jpeg';

export default function About() {
    return (
        <div name='about' className='bg-gray-800 pt-20 text-white '>
            <div className='max-w-[1000px] px-8 mx-auto flex flex-col items-start sm:items-center h-full'>
                <div className='text-4xl ml-3 border-b-4 border-pink-600 font-bold'>
                    About
                </div>
                <div className='grid sm:grid-cols-2 items-center'>
                    <div className='text-4xl sm:text-5xl p-3 sm:text-right'>
                        Hi! I'm Hamza,nice to meet you,please take a look arround
                    </div>
                    <div className='mx-auto sm:mx-10'>
                        <img className='rounded-full w-56 h-56 object-cover' src={profile} alt="profile pic" />
                    </div>
                </div>
            </div>
        </div>
    )
}