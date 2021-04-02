import React from 'react'
import { FaLinkedin } from "react-icons/fa"
import { FaTelegramPlane } from "react-icons/fa"
import { IoLogoInstagram } from "react-icons/io"   
import { IoLogoGithub } from "react-icons/io" 
import { IoLogoFacebook } from "react-icons/io" 
import { IoLogoTwitter } from "react-icons/io" 
import { IoLogoYoutube } from "react-icons/io" 


const Sidebar = () => {
    return (
        <>
            <aside className="bg-white w-10 h-sidebar flex justify-center items-center">
                <div className="flex flex-col justify-evenly items-center h-1/2">
                    <a target="_blank" href="https://t.me/abdulaziz_sultonmurodov_channel">
                    <FaTelegramPlane className="h-6 w-6 cursor-pointer text-grey hover:text-darkGrey" />
                    </a>
                    <a target="_blank" href="https://instagram.com/abdulaziz_sultonmurodov">
                    <IoLogoInstagram className="h-6 w-6 cursor-pointer text-grey hover:text-darkGrey" />
                    </a>
                    <a target="_blank" href="#">
                    <IoLogoFacebook className="h-6 w-6 cursor-pointer text-grey hover:text-darkGrey" />
                    </a>
                    <a target="_blank" href="#">
                    <IoLogoTwitter className="h-6 w-6 cursor-pointer text-grey hover:text-darkGrey" />
                    </a>
                    <a target="_blank" href="https://github.com/abdulaziz-sultonmurodov">
                    <IoLogoGithub className="h-6 w-6 cursor-pointer text-grey hover:text-darkGrey" />
                    </a>
                    <a target="_blank" href="https://www.youtube.com/channel/UCvxU7y9hQcdvXPcub6F5EPQ">
                    <IoLogoYoutube className="h-6 w-6 cursor-pointer text-grey hover:text-darkGrey" />
                    </a>
                    <a target="_blank" href="#">
                    <FaLinkedin className="h-6 w-6 cursor-pointer text-grey hover:text-darkGrey" />
                    </a>
                </div>   
            </aside> 
        </>
    )
}

export default Sidebar
