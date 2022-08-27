import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes, FaGithub, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { AiOutlineArrowUp } from 'react-icons/ai'
import logo from '../assets/hamza.png'
import { Link } from 'react-scroll'

export default function Navbar() {
    const [nav, setNav] = useState(false)

    const handleClick = () => {
        setNav(!nav);
    }
    useEffect(() => {
        window.onscroll = () => {
            if (document.documentElement.scrollTop > 20) {
                mybutton.style.display = "block";
            }
            else {
                mybutton.style.display = "none";
            }
        }

    }, [])

    return (
        <div className='bg-gray-800 w-full text-gray-300 flex justify-between items-center h-16 fixed z-10'>
            <div className="logo">
                <img src={logo} alt="" className='w-44 mx-5' />
            </div>

            {/* for desktop */}
            <ul className='hidden md:flex space-x-14 mx-5 text-lg '>
                <li>
                    <Link to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="about" smooth={true} duration={500} offset={-100}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={700}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to="work" smooth={true} duration={800} offset={70}>
                        Work
                    </Link>
                </li>
                <li>
                    <Link to="feedback" smooth={true} duration={800} offset={70}>
                        Feedback
                    </Link>
                </li>

                <li>
                    <Link to="contact" smooth={true} duration={1000}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* hemburger */}
            <div onClick={handleClick} className="hamburger md:hidden mx-5 z-10 ">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>

            {/* for mobile */}




            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-gray-800 flex flex-col justify-center items-center space-y-10 text-3xl'}>
                <li>
                    <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link onClick={handleClick} to="about" smooth={true} duration={500} offset={-100}>
                        About
                    </Link>
                </li>
                <li>
                    <Link onClick={handleClick} to="skills" smooth={true} duration={700}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link onClick={handleClick} to="work" smooth={true} duration={800} offset={70}>
                        Work
                    </Link>
                </li>
                <li>
                    <Link onClick={handleClick} to="feedback" smooth={true} duration={1000} offset={70}>
                        Feedback
                    </Link>
                </li>
                <li>
                    <Link onClick={handleClick} to="contact" smooth={true} duration={1000}>
                        Contact
                    </Link>
                </li>
            </ul>

            <div className="hidden xl:flex fixed flex-col left-0 top-[35%]  ">
                <ul>
                    <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] p-5  hover:ml-[0px] duration-500 bg-blue-500 '>
                        <a href="https://www.facebook.com/hamzatariquearain1/" target='_blank' className='flex justify-between items-center w-full hover:text-white text'>
                            Facebook <FaFacebook size={27} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] p-5  hover:ml-[0px] duration-500 bg-black '>
                        <a href="https://github.com/Mehar-IT" target='_blank' className='flex justify-between items-center w-full hover:text-white text'>
                            Github <FaGithub size={27} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] p-5  hover:ml-[0px] duration-500 bg-blue-500 '>
                        <a href="https://twitter.com/HamzaTarique" target='_blank' className='flex justify-between items-center w-full hover:text-white text'>
                            Twitter <FaTwitter size={27} />
                        </a>
                    </li>
                    <li className='w-[160px] h-[50px] flex justify-between items-center ml-[-100px] p-5  hover:ml-[0px] duration-500 bg-pink-500 '>
                        <a href="https://www.instagram.com/hamza.arainpak/" target='_blank' className='flex justify-between items-center w-full hover:text-white text'>
                            Instagram <FaInstagram size={27} />
                        </a>
                    </li>
                </ul>

            </div>

            <div id='mybutton' className=' hidden fixed bottom-3 right-5 bg-gray-400   rounded-full p-2 cursor-pointer hover:bg-gradient-to-r from-indigo-500 hover:scale-110'
                onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }} >

                <AiOutlineArrowUp size={30} className='text-gray-800' />
            </div>

        </div>
    )
}
