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
            <div className="w-full sm:w-3/5 lg:w-2/5 mx-auto">
              <ul className="flex flex-col sm:flex-row justify-center  sm:justify-between  items-center mt-4">
                <NavLink exact activeClassName="navbar-active" to="/"><li className="text-grey hover:text-primary font-semibold hover:text-darkGrey cursor-pointer tracking-wider mt-4">Home</li></NavLink>
                <NavLink activeClassName="navbar-active" to="/about"><li className="mt-4 text-grey hover:text-primary font-semibold hover:text-darkGrey cursor-pointer tracking-wider">About</li></NavLink>
                <NavLink activeClassName="navbar-active" to="/portfolio"><li className="mt-4 text-grey hover:text-primary font-semibold hover:text-darkGrey cursor-pointer tracking-wider">Portfolio</li></NavLink>
                {/* <NavLink activeClassName="navbar-active" to="/courses"><li className="mt-4 text-grey hover:text-primary font-semibold hover:text-darkGrey cursor-pointer tracking-wider">Courses</li></NavLink> */}
                {/* <NavLink activeClassName="navbar-active" to="/blog"><li className="mt-4 text-grey hover:text-primary font-semibold hover:text-darkGrey cursor-pointer tracking-wider">Blog</li></NavLink> */}
                <NavLink activeClassName="navbar-active" to="/contact"><li className="mt-4  text-grey hover:text-primary font-semibold hover:text-darkGrey cursor-pointer tracking-wider">Contact</li></NavLink>
            </ul>    
            </div> 
            <div className="flex flex-row justify-center items-center mt-8 lg:mt-4">
                    <a className="mx-2 sm:mx-3" target="_blank" rel="noreferrer" href="https://t.me/abdulaziz_sultonmurodov_channel">
                    <FaTelegramPlane className="h-5 w-5 cursor-pointer text-grey hover:text-primary hover:text-darkGrey" />
                    </a>
                    <a className="mx-2 sm:mx-3" target="_blank" rel="noreferrer" href="https://instagram.com/abdulaziz_sultonmurodov">
                    <IoLogoInstagram className="h-5 w-5 cursor-pointer text-grey hover:text-primary hover:text-darkGrey" />
                    </a>
                    <a className="mx-2 sm:mx-3" target="_blank" rel="noreferrer" href="https://facebook.com/abdulaziz.sultonmurodov.a">
                    <IoLogoFacebook className="h-5 w-5 cursor-pointer text-grey hover:text-primary hover:text-darkGrey" />
                    </a>
                    <a className="mx-2 sm:mx-3" target="_blank" rel="noreferrer" href="https://twitter.com/abdulaziz__s_a">
                    <IoLogoTwitter className="h-5 w-5 cursor-pointer text-grey hover:text-primary hover:text-darkGrey" />
                    </a>
                    <a className="mx-2 sm:mx-3" target="_blank" rel="noreferrer" href="mailto:abdulazizsultonmurodov.dev@gmail.com">
                    <HiMail className="h-5 w-5 cursor-pointer text-grey hover:text-primary hover:text-darkGrey" />
                    </a>
                    <a className="mx-2 sm:mx-3" target="_blank" rel="noreferrer" href="https://github.com/abdulaziz-sultonmurodov">
                    <IoLogoGithub className="h-5 w-5 cursor-pointer text-grey hover:text-primary hover:text-darkGrey" />
                    </a>
                    <a className="mx-2 sm:mx-3" target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCvxU7y9hQcdvXPcub6F5EPQ">
                    <IoLogoYoutube className="h-5 w-5 cursor-pointer text-grey hover:text-primary hover:text-darkGrey" />
                    </a>
                    <a className="mx-2 sm:mx-3" target="_blank" rel="noreferrer" href="https://linkedin.com/in/abdulaziz-sultonmurodov">
                    <FaLinkedin className="h-5 w-5 cursor-pointer text-grey hover:text-primary hover:text-darkGrey" />
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
