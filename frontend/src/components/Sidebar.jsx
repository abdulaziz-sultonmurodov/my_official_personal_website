import React from 'react'
import { FaLinkedin } from "react-icons/fa"
import { FaTelegramPlane } from "react-icons/fa"
import { IoLogoInstagram } from "react-icons/io"   
import { IoLogoGithub } from "react-icons/io" 
import { IoLogoFacebook } from "react-icons/io" 
import { IoLogoTwitter } from "react-icons/io" 
import { IoLogoYoutube } from "react-icons/io" 
import { HiMail } from "react-icons/hi"


const Sidebar = () => {
    document.onscroll = function() {
        if (window.innerHeight + window.scrollY >= document.body.clientHeight) {
            document.getElementById('sidebar').style.display='none';
        } else if(window.innerHeight + window.scrollY < document.body.clientHeight) {
            document.getElementById('sidebar').style.display='flex';
        }
    }
    return (
        <>
            <aside style={{zIndex: "-10"}}  className="bg-white w-10 h-sidebar hidden lg:flex justify-center items-center fixed">
                <div id="sidebar" className="flex flex-col justify-evenly items-center h-1/2">
                    <a target="_blank" href="https://t.me/abdulaziz_sultonmurodov_channel">
                    <FaTelegramPlane className="h-5 w-5 cursor-pointer text-grey hover:text-darkGrey" />
                    </a>
                    <a target="_blank" href="https://instagram.com/abdulaziz_sultonmurodov">
                    <IoLogoInstagram className="h-5 w-5 cursor-pointer text-grey hover:text-darkGrey" />
                    </a>
                    <a target="_blank" href="#">
                    <IoLogoFacebook className="h-5 w-5 cursor-pointer text-grey hover:text-darkGrey" />
                    </a>
                    <a target="_blank" href="#">
                    <IoLogoTwitter className="h-5 w-5 cursor-pointer text-grey hover:text-darkGrey" />
                    </a>
                    <a target="_blank" href="mailto:abdulazizsultonmurodov.dev@gmail.com">
                    <HiMail className="h-5 w-5 cursor-pointer text-grey hover:text-darkGrey" />
                    </a>
                    <a target="_blank" href="https://github.com/abdulaziz-sultonmurodov">
                    <IoLogoGithub className="h-5 w-5 cursor-pointer text-grey hover:text-darkGrey" />
                    </a>
                    <a target="_blank" href="https://www.youtube.com/channel/UCvxU7y9hQcdvXPcub6F5EPQ">
                    <IoLogoYoutube className="h-5 w-5 cursor-pointer text-grey hover:text-darkGrey" />
                    </a>
                    <a target="_blank" href="https://linkedin.com/in/abdulaziz-sultonmurodov">
                    <FaLinkedin className="h-5 w-5 cursor-pointer text-grey hover:text-darkGrey" />
                    </a>
                </div>   
            </aside> 
        </>
    )
}

export default Sidebar
