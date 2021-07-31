import React from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../images/logo.png"
import { FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { IoLogoFacebook, IoLogoGithub, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from "react-icons/io";
import { HiMail } from "react-icons/hi";

const Header = () => {
  const openNav = () => {
    const burger = document.getElementById("burger");
    const burgerList = document.getElementById("burgerList");
    const cancel = document.getElementById("cancel");
    burgerList.style.display = "flex";
    cancel.style.display = "flex";
    burger.style.display = "none";
  };
  const closeNav = () => {
    const burger = document.getElementById("burger");
    const burgerList = document.getElementById("burgerList");
    const cancel = document.getElementById("cancel");
    burgerList.style.display = "none";
    cancel.style.display = "none";
    burger.style.display = "flex";
  };
  return (
    
    <>
      <header>
        <nav style={{ zIndex: "10" }} className="bg-white h-header flex flex-row justify-around items-center fixed w-full">
          <div  className="flex flex-row items-center">
            <NavLink to="/">
              {/* <h1 className="milkshake text-4xl text-grey hover:text-primary">
                AS
              </h1> */}<div className="w-16 flex justify-center items-center">
              <img className="w-full" src={logo} alt="logo" />
              </div>
            </NavLink>
          </div>
          <div  className="w-2/5">
            <ul  className="hidden lg:flex flex-row justify-between items-center">
              <NavLink exact activeClassName="navbar-active" to="/">
                <li className="cursor-pointer font-semibold text-grey hover:text-primary tracking-wider">
                  Home
                </li>
              </NavLink>
              <NavLink activeClassName="navbar-active" to="/about">
                <li className="cursor-pointer font-semibold text-grey hover:text-primary tracking-wider">
                  About
                </li>
              </NavLink>
              <NavLink activeClassName="navbar-active" to="/portfolio">
                <li className="cursor-pointer font-semibold text-grey hover:text-primary tracking-wider">
                  Portfolio
                </li>
              </NavLink>
              {/* <NavLink activeClassName="navbar-active" to="/courses">
                <li className="cursor-pointer font-semibold text-grey hover:text-primary tracking-wider">
                  Courses
                </li>
              </NavLink> */}
              {/* <NavLink activeClassName="navbar-active" to="/blog">
                <li className="cursor-pointer font-semibold text-grey hover:text-primary tracking-wider">
                  Blog
                </li>
              </NavLink> */}
              <NavLink activeClassName="navbar-active" to="/contact">
                <li className="cursor-pointer font-semibold text-grey hover:text-primary">
                  Contact
                </li>
              </NavLink>
            </ul>
          </div>

          <div>
            <ul className="hidden lg:flex flex-row items-center">
              <NavLink to="login">
                <li className="mr-5 rounded-lg cursor-pointer font-semibold tracking-wider text-darkGrey hover:text-primary block px-4 py-2 text-base border-2 border-darkGrey hover:border-primary text-center">
                  Login
                </li>
              </NavLink>
              <NavLink to="signup">
                <li className="cursor-pointer font-semibold text-white block py-2 px-4 text-base bg-darkGrey hover:bg-primary rounded-lg border-2 border-darkGrey text-center tracking-wider">
                  Signup
                </li>
              </NavLink>
            </ul>
            <div
              id="burger"
              onClick={openNav}
              className="flex lg:hidden w-6 h-6 mr-4"
            >
              <GiHamburgerMenu className="w-6 h-6 text-grey hover:text-primary cursor-pointer" />
            </div>
            <div id="cancel" onClick={closeNav} className="hidden w-6 h-6 mr-6">
              <AiOutlineClose className="w-6 h-6 text-grey hover:text-primary cursor-pointer" />
            </div>
          </div>
        </nav>
        {/* Mobile Menu */}

        <div
          id="burgerList"
          className="hidden h-screen"
        >
          <ul style={{ zIndex: "10" }} className="px-2 border-b shadow-xl border-gray-300 top-10 bg-white h-screen fixed w-full flex flex-col justify-between pt-2 pb-10 mt-4 m-auto text-center space-y-1 sm:px-3">
            <div>
              <li className="my-2">
            <NavLink className="text-grey hover:text-primary  rounded-md text-base font-semibold tracking-wider" onClick={closeNav} exact activeStyle={{color: "#ff6700"}} to="/">
                Home
            </NavLink>
              </li>
              <li className="my-2">
            <NavLink className="text-grey hover:text-primary  rounded-md text-base font-semibold tracking-wider" onClick={closeNav} activeStyle={{color: "#ff6700"}} to="/about">
                About
            </NavLink>
              </li>
              <li className="my-2">
            <NavLink className="text-grey hover:text-primary  rounded-md text-base font-semibold tracking-wider" onClick={closeNav} activeStyle={{color: "#ff6700"}} to="/portfolio">
                Portfolio
            </NavLink>
              </li>
            {/* <NavLink onClick={closeNav} activeStyle={{color: "#ff6700"}} to="/courses">
              <li className="text-grey hover:text-primary block  rounded-md text-base font-semibold tracking-wider">
                Courses
              </li>
            </NavLink> */}
            {/* <NavLink onClick={closeNav} activeStyle={{color: "#ff6700"}} to="/blog">
              <li className="text-grey hover:text-primary block  rounded-md text-base font-semibold tracking-wider">
                Blog
              </li>
            </NavLink> */}
              <li className="my-2">
            <NavLink className="text-grey hover:text-primary rounded-md text-base font-semibold tracking-wider" onClick={closeNav} activeStyle={{color: "#ff6700"}} to="/contact">
                Contact
            </NavLink>
              </li>
            <div>
          
                <li>
              <NavLink className="text-darkGrey hover:text-primary block w-48 mx-auto py-2  text-base font-semibold border-2 rounded-lg border-darkGrey hover:border-primary mt-4 text-center tracking-wider" onClick={closeNav} to="/login">
                  Login
              </NavLink>
                </li>
                <li>
              <NavLink className="text-white block py-2 w-48 mx-auto text-base font-semibold bg-darkGrey hover:bg-primary rounded-lg mt-4 text-center tracking-wider" onClick={closeNav} to="/signup">
                  Sign Up
              </NavLink>
                </li>
              </div>
              </div>
            <div className="pb-6">
            <div className="flex flex-row justify-center items-center">
                    <a className="mx-2 sm:mx-3" target="_blank" rel="noreferrer" href="https://t.me/abdulaziz_sultonmurodov_channel">
                    <FaTelegramPlane className="h-5 w-5 cursor-pointer text-grey hover:text-primary hover:text-darkGrey" />
                    </a>
                    <a className="mx-2 sm:mx-3" target="_blank" rel="noreferrer" href="https://instagram.com/abdulaziz_sultonmurodov">
                    <IoLogoInstagram className="h-5 w-5 cursor-pointer text-grey hover:text-primary hover:text-darkGrey" />
                    </a>
                    <a className="mx-2 sm:mx-3" target="_blank" rel="noreferrer" href="/">
                    <IoLogoFacebook className="h-5 w-5 cursor-pointer text-grey hover:text-primary hover:text-darkGrey" />
                    </a>
                    <a className="mx-2 sm:mx-3" target="_blank" rel="noreferrer" href="/">
                    <IoLogoTwitter className="h-5 w-5 cursor-pointer text-grey hover:text-primary hover:text-darkGrey" />
                    </a>
                    <a className="mx-2 sm:mx-3" target="_blank" rel="noreferrer" href="https://linkedin.com/in/abdulaziz-sultonmurodov">
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
            </div>  
          </ul>
         
        </div>
      </header>
    </>
  );
};

export default Header;
