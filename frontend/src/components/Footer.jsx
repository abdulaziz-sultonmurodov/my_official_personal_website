import React from 'react'
import { FaLinkedin } from "react-icons/fa"
import { FaTelegramPlane } from "react-icons/fa"
import { IoLogoInstagram } from "react-icons/io"   
import { IoLogoGithub } from "react-icons/io" 
import { IoLogoFacebook } from "react-icons/io" 
import { IoLogoTwitter } from "react-icons/io" 
import { IoLogoYoutube } from "react-icons/io" 
import { HiMail } from "react-icons/hi"
import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <>
           <footer className="flex flex-col">
            <div>
              <ul className="flex flex-col sm:flex-row justify-center items-center mt-4">
                <Link to="/"><li className="text-grey hover:text-darkGrey cursor-pointer tracking-wider">Home</li></Link>
                <Link to="/about"><li className="text-grey hover:text-darkGrey cursor-pointer ml-0 sm:ml-10 tracking-wider">About</li></Link>
                <Link to="/portfolio"><li className="text-grey hover:text-darkGrey cursor-pointer ml-0 sm:ml-10 tracking-wider">Portfolio</li></Link>
                <Link to="/courses"><li className="text-grey hover:text-darkGrey cursor-pointer ml-0 sm:ml-10 tracking-wider">Courses</li></Link>
                <Link to="/blog"><li className="text-grey hover:text-darkGrey cursor-pointer ml-0 sm:ml-10 tracking-wider">Blog</li></Link>
                <Link to="/contact"><li className="text-grey hover:text-darkGrey cursor-pointer ml-0 sm:ml-10 tracking-wider">Contact</li></Link>
            </ul>    
            </div> 
            <div className="flex flex-row justify-center items-center mt-4">
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
                <p className="text-grey tracking-widest">&copy; Abdulaziz Sultonmurodov,  2021</p>
            </div>   
           </footer> 
        </>
    )
}

export default Footer
