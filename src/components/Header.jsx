import React from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../images/logo.png"
import { FaLinkedin, FaTelegramPlane } from "react-icons/fa";
import { IoLogoFacebook, IoLogoGithub, IoLogoInstagram, IoLogoTwitter, IoLogoYoutube } from "react-icons/io";
import { HiMail } from "react-icons/hi";
import {bgColorHover, borderColorHover, navColor,  textColorHover} from "../utils/ColorChange";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t, i18n } = useTranslation();
  const language = localStorage.getItem("i18nextLng");

  const languageChange = (event) => {
    i18n.changeLanguage(event.target.value);
  };

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
           <div className="w-16 flex justify-center items-center">
              <img className="w-full" src={logo} alt="logo" />
              </div>
            </NavLink>
          </div>
          <div  className="w-2/5">
            <ul  className="hidden lg:flex flex-row justify-between items-center">
              <NavLink exact activeStyle={{borderBottom: `2px solid ${navColor}`}} to="/">
                <li className={`cursor-pointer font-semibold text-grey ${textColorHover} tracking-wider`}>
                  {t("navbarHome")}
                </li>
              </NavLink>
              <NavLink activeStyle={{borderBottom: `2px solid ${navColor}`}} to="/about">
                <li className={`cursor-pointer font-semibold text-grey ${textColorHover} tracking-wider`}>
                  About
                </li>
              </NavLink>
              <NavLink activeStyle={{borderBottom: `2px solid ${navColor}`}} to="/portfolio">
                <li className={`cursor-pointer font-semibold text-grey ${textColorHover} tracking-wider`}>
                  Portfolio
                </li>
              </NavLink>
              {/* <NavLink activeStyle={{borderBottom: `2px solid ${navColor}`}} to="/courses">
                <li className={`cursor-pointer font-semibold text-grey ${textColorHover} tracking-wider`}>
                  Courses
                </li>
              </NavLink> */}
              {/* <NavLink activeStyle={{borderBottom: `2px solid ${navColor}`}} to="/blog">
                <li className={`cursor-pointer font-semibold text-grey ${textColorHover} tracking-wider`}>
                  Blog
                </li>
              </NavLink> */}
              <NavLink activeStyle={{borderBottom: `2px solid ${navColor}`}} to="/avatar">
                <li className={`cursor-pointer font-semibold text-grey ${textColorHover}`}>
                  Extra
                </li>
              </NavLink>
              <NavLink activeStyle={{borderBottom: `2px solid ${navColor}`}} to="/contact">
                <li className={`cursor-pointer font-semibold text-grey ${textColorHover}`}>
                  Contact
                </li>
              </NavLink>
            </ul>
          </div>

          <div>
            <ul className="hidden lg:flex flex-row items-center">
              <NavLink to="login">
                <li className={`mr-5 rounded-lg cursor-pointer font-semibold tracking-wider text-darkGrey ${textColorHover} block px-4 py-2 text-base border-2 border-darkGrey ${borderColorHover} text-center`}>
                  Login
                </li>
              </NavLink>
              <NavLink to="signup">
                <li className={`cursor-pointer font-semibold text-white block py-2 px-4 text-base bg-darkGrey ${bgColorHover} rounded-lg border-2 border-darkGrey text-center tracking-wider`}>
                  Signup
                </li>
              </NavLink>
            </ul>
            <div
              id="burger"
              onClick={openNav}
              className="flex lg:hidden w-6 h-6 mr-4 transition-all"
            >
              <GiHamburgerMenu className={`w-6 h-6 text-grey ${textColorHover} cursor-pointer`} />
            </div>
            <div id="cancel" onClick={closeNav} className="hidden w-6 h-6 mr-6">
              <AiOutlineClose className={`w-6 h-6 text-grey ${textColorHover} cursor-pointer`} />
            </div>
          </div>
        </nav>
        {/* Mobile Menu */}

        <div
          id="burgerList"
          className="hidden  transition ease-out duration-500"
        >
          <ul style={{ zIndex: "10" }} className=" px-2 border-b shadow-xl border-gray-300 top-10 bg-white h-full fixed w-full flex flex-col justify-between pt-2 pb-10 mt-4 m-auto text-center space-y-1 sm:px-3">
          <h3 className="text-lg leading-6 font-medium text-green-500" id="modal-title">
            
            {language === "uz"
              ? t("languageModalUz")
              : language === "ru"
              ? t("languageModalRu")
              : language === "uzr"
              ? t("languageModalUzr")
              : t("languageModalUzrDefault")}
            </h3>
            <div
              onClick={languageChange}
             
              className=
               "flex flex-col mt-4"
                
              
            >
              <input
                id="uz"
                className="hidden"
                type="radio"
                name="language"
                value="uz"
              />{" "}
              <label
          
                htmlFor="uz"
                className={language === "uz" ? "cursor-pointer bg-primary text-white px-8 py-2 my-1" : "cursor-pointer hover:bg-primary hover:text-white px-8 py-2 my-1"}
              >
                {t("languageUz")}
              </label>
              <input
                id="uzr"
                className="hidden"
                type="radio"
                name="language"
                value="uzr"
              
              />{" "}
              <label
         
                htmlFor="uzr"
                className={language === "uzr" || !language ? "cursor-pointer bg-primary text-white px-8 py-2 my-1" : "cursor-pointer hover:bg-primary hover:text-white px-8 py-2 my-1"}
              >
                {t("languageUzR")}
              </label>
               <input
                id="ru"
                className="hidden"
                type="radio"
                name="language"
                value="ru"
              />{" "}
              <label
              
                htmlFor="ru"
                className={language === "ru" ? "cursor-pointer bg-primary text-white px-8 py-2 my-1" : "cursor-pointer hover:bg-primary hover:text-white px-8 py-2 my-1"}
              >
                {t("languageRu")}
              </label>
            </div>
            <div>
              <li className="my-2">
            <NavLink className={`text-grey ${textColorHover}  rounded-md text-base font-semibold tracking-wider`} onClick={closeNav} exact activeStyle={{color: `${navColor}`}} to="/">
                Home
            </NavLink>
              </li>
              <li className="my-2">
            <NavLink className={`text-grey ${textColorHover}  rounded-md text-base font-semibold tracking-wider`} onClick={closeNav} activeStyle={{color: `${navColor}`}} to="/about">
                About
            </NavLink>
              </li>
              <li className="my-2">
            <NavLink className={`text-grey ${textColorHover}  rounded-md text-base font-semibold tracking-wider`} onClick={closeNav} activeStyle={{color: `${navColor}`}} to="/portfolio">
                Portfolio
            </NavLink>
              </li>
            {/* <NavLink onClick={closeNav} activeStyle={{color: `${navColor}`}} to="/courses">
              <li className="text-grey ${textColorHover} block  rounded-md text-base font-semibold tracking-wider">
                Courses
              </li>
            </NavLink> */}
            {/* <NavLink onClick={closeNav} activeStyle={{color: `${navColor}`}} to="/blog">
              <li className="text-grey ${textColorHover} block  rounded-md text-base font-semibold tracking-wider">
                Blog
              </li>
            </NavLink> */}
               <li className="my-2">
            <NavLink className={`text-grey ${textColorHover} rounded-md text-base font-semibold tracking-wider`} onClick={closeNav} activeStyle={{color: `${navColor}`}} to="/avatar">
                Extra
            </NavLink>
              </li>
              <li className="my-2">
            <NavLink className={`text-grey ${textColorHover} rounded-md text-base font-semibold tracking-wider`} onClick={closeNav} activeStyle={{color: `${navColor}`}} to="/contact">
                Contact
            </NavLink>
              </li>
            <div>
          
                <li>
              <NavLink className={`text-darkGrey ${textColorHover} block w-48 mx-auto py-2  text-base font-semibold border-2 rounded-lg border-darkGrey ${borderColorHover} mt-4 text-center tracking-wider`} onClick={closeNav} to="/login">
                  Login
              </NavLink>
                </li>
                <li>
              <NavLink className={`text-white block py-2 w-48 mx-auto text-base font-semibold bg-darkGrey ${bgColorHover} rounded-lg mt-4 text-center tracking-wider`} onClick={closeNav} to="/signup">
                  Sign Up
              </NavLink>
                </li>
              </div>
            
              </div>
              <div>
              <div className="flex flex-row justify-center items-center">
                    <a className="mx-2 sm:mx-3" target="_blank" rel="noreferrer" href="https://t.me/abdulaziz_sultonmurodov_channel">
                    <FaTelegramPlane className={`h-5 w-5 cursor-pointer text-grey ${textColorHover} hover:text-darkGrey`} />
                    </a>
                    <a className="mx-2 sm:mx-3" target="_blank" rel="noreferrer" href="https://instagram.com/abdulaziz_sultonmurodov">
                    <IoLogoInstagram className={`h-5 w-5 cursor-pointer text-grey ${textColorHover} hover:text-darkGrey`} />
                    </a>
                    <a className="mx-2 sm:mx-3" target="_blank" rel="noreferrer" href="https://facebook.com/abdulaziz.sultonmurodov.a">
                    <IoLogoFacebook className={`h-5 w-5 cursor-pointer text-grey ${textColorHover} hover:text-darkGrey`} />
                    </a>
                    <a className="mx-2 sm:mx-3" target="_blank" rel="noreferrer" href="https://twitter.com/abdulaziz__s_a">
                    <IoLogoTwitter className={`h-5 w-5 cursor-pointer text-grey ${textColorHover} hover:text-darkGrey`} />
                    </a>
                    <a className="mx-2 sm:mx-3" target="_blank" rel="noreferrer" href="mailto:abdulazizsultonmurodov.dev@gmail.com">
                    <HiMail className={`h-5 w-5 cursor-pointer text-grey ${textColorHover} hover:text-darkGrey`} />
                    </a>
                    <a className="mx-2 sm:mx-3" target="_blank" rel="noreferrer" href="https://github.com/abdulaziz-sultonmurodov">
                    <IoLogoGithub className={`h-5 w-5 cursor-pointer text-grey ${textColorHover} hover:text-darkGrey`} />
                    </a>
                    <a className="mx-2 sm:mx-3" target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCvxU7y9hQcdvXPcub6F5EPQ">
                    <IoLogoYoutube className={`h-5 w-5 cursor-pointer text-grey ${textColorHover} hover:text-darkGrey`} />
                    </a>
                    <a className="mx-2 sm:mx-3" target="_blank" rel="noreferrer" href="https://linkedin.com/in/abdulaziz-sultonmurodov">
                    <FaLinkedin className={`h-5 w-5 cursor-pointer text-grey ${textColorHover} hover:text-darkGrey`} />
                    </a>
                </div>   
                <div className="text-center mb-8 mt-4">
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
