import React from 'react'
import { FaLinkedin } from "react-icons/fa"
import { FaTelegramPlane } from "react-icons/fa"
import { IoLogoInstagram } from "react-icons/io"   
import { IoLogoGithub } from "react-icons/io" 
import { IoLogoFacebook } from "react-icons/io" 
import { IoLogoTwitter } from "react-icons/io" 
import { IoLogoYoutube } from "react-icons/io" 
import { HiMail } from "react-icons/hi"
import { NavLink } from "react-router-dom"

const Footer = () => {
    return (
        <>
           <footer className="flex flex-col">
            <div className="w-96 lg:w-2/5 mx-auto mt-48">
              <ul className="flex flex-col sm:flex-row justify-center  sm:justify-between  items-center mt-4">
                <NavLink exact activeClassName="navbar-active" to="/"><li className="text-grey font-semibold hover:text-darkGrey cursor-pointer tracking-wider mt-4">Home</li></NavLink>
                <NavLink activeClassName="navbar-active" to="/about"><li className="mt-4 text-grey font-semibold hover:text-darkGrey cursor-pointer tracking-wider">About</li></NavLink>
                <NavLink activeClassName="navbar-active" to="/portfolio"><li className="mt-4 text-grey font-semibold hover:text-darkGrey cursor-pointer tracking-wider">Portfolio</li></NavLink>
                <NavLink activeClassName="navbar-active" to="/courses"><li className="mt-4 text-grey font-semibold hover:text-darkGrey cursor-pointer tracking-wider">Courses</li></NavLink>
                <NavLink activeClassName="navbar-active" to="/blog"><li className="mt-4 text-grey font-semibold hover:text-darkGrey cursor-pointer tracking-wider">Blog</li></NavLink>
                <NavLink activeClassName="navbar-active" to="/contact"><li className="mt-4  text-grey font-semibold hover:text-darkGrey cursor-pointer tracking-wider">Contact</li></NavLink>
            </ul>    
            </div> 
            <div className="flex flex-row justify-center items-center mt-8 lg:mt-4">
                    <a target="_blank" href="https://t.me/abdulaziz_sultonmurodov_channel">
                    <FaTelegramPlane className="h-5 w-5 cursor-pointer text-grey hover:text-darkGrey" />
                    </a>
                    <a target="_blank" href="https://instagram.com/abdulaziz_sultonmurodov">
                    <IoLogoInstagram className="ml-5 h-5 w-5 cursor-pointer text-grey hover:text-darkGrey" />
                    </a>
                    <a target="_blank" href="#">
                    <IoLogoFacebook className="ml-5 h-5 w-5 cursor-pointer text-grey hover:text-darkGrey" />
                    </a>
                    <a target="_blank" href="#">
                    <IoLogoTwitter className="ml-5 h-5 w-5 cursor-pointer text-grey hover:text-darkGrey" />
                    </a>
                    <a target="_blank" href="https://linkedin.com/in/abdulaziz-sultonmurodov">
                    <HiMail className="ml-5 h-5 w-5 cursor-pointer text-grey hover:text-darkGrey" />
                    </a>
                    <a target="_blank" href="https://github.com/abdulaziz-sultonmurodov">
                    <IoLogoGithub className="ml-5 h-5 w-5 cursor-pointer text-grey hover:text-darkGrey" />
                    </a>
                    <a target="_blank" href="https://www.youtube.com/channel/UCvxU7y9hQcdvXPcub6F5EPQ">
                    <IoLogoYoutube className="ml-5 h-5 w-5 cursor-pointer text-grey hover:text-darkGrey" />
                    </a>
                    <a target="_blank" href="https://linkedin.com/in/abdulaziz-sultonmurodov">
                    <FaLinkedin className="ml-5 h-5 w-5 cursor-pointer text-grey hover:text-darkGrey" />
                    </a>
                </div>   
            <div className="text-center my-4">
                <p className="text-grey tracking-widest ">&copy; Abdulaziz Sultonmurodov,  2021</p>
            </div>   
           </footer> 
        </>
    )
}

export default Footer
