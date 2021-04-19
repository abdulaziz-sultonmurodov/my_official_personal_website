import React from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../images/logo.png"

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
              {/* <h1 className="milkshake text-4xl text-grey hover:text-darkGrey">
                AS
              </h1> */}<div className="w-16 flex justify-center items-center">
              <img className="w-full" src={logo} alt="logo" />
              </div>
            </NavLink>
          </div>
          <div  className="w-2/5">
            <ul  className="hidden lg:flex flex-row justify-between items-center">
              <NavLink exact activeClassName="navbar-active" to="/">
                <li className="cursor-pointer font-semibold text-grey hover:text-darkGrey tracking-wider">
                  Home
                </li>
              </NavLink>
              <NavLink activeClassName="navbar-active" to="/about">
                <li className="cursor-pointer font-semibold text-grey hover:text-darkGrey tracking-wider">
                  About
                </li>
              </NavLink>
              <NavLink activeClassName="navbar-active" to="/portfolio">
                <li className="cursor-pointer font-semibold text-grey hover:text-darkGrey tracking-wider">
                  Portfolio
                </li>
              </NavLink>
              {/* <NavLink activeClassName="navbar-active" to="/courses">
                <li className="cursor-pointer font-semibold text-grey hover:text-darkGrey tracking-wider">
                  Courses
                </li>
              </NavLink> */}
              {/* <NavLink activeClassName="navbar-active" to="/blog">
                <li className="cursor-pointer font-semibold text-grey hover:text-darkGrey tracking-wider">
                  Blog
                </li>
              </NavLink> */}
              <NavLink activeClassName="navbar-active" to="/contact">
                <li className="cursor-pointer font-semibold text-grey hover:text-darkGrey">
                  Contact
                </li>
              </NavLink>
            </ul>
          </div>

          <div>
            <ul className="hidden lg:flex flex-row items-center">
              <NavLink to="login">
                <li className="mr-5 cursor-pointer font-semibold tracking-wider text-grey hover:text-darkGrey block px-4 py-2 text-base border border-gray-400 hover:border-gray-900 transform hover:scale-95 text-center">
                  Login
                </li>
              </NavLink>
              <NavLink to="signup">
                <li className="cursor-pointer font-semibold text-white block py-2 px-4 text-base bg-grey hover:bg-darkGrey transform hover:scale-95 text-center tracking-wider">
                  Signup
                </li>
              </NavLink>
            </ul>
            <div
              id="burger"
              onClick={openNav}
              className="flex lg:hidden w-6 h-6 mr-4"
            >
              <GiHamburgerMenu className="w-6 h-6 text-grey hover:text-darkGrey cursor-pointer" />
            </div>
            <div id="cancel" onClick={closeNav} className="hidden w-6 h-6 mr-6">
              <AiOutlineClose className="w-6 h-6 text-grey hover:text-darkGrey cursor-pointer" />
            </div>
          </div>
        </nav>
        {/* Mobile Menu */}

        <div
          id="burgerList"
          className="hidden h-screen border-t border-gray-200 "
        >
          <ul style={{ zIndex: "10" }} className="px-2 border-b shadow-xl border-gray-300 top-10 bg-white h-screen fixed w-full pt-2 pb-10 mt-4 m-auto text-center space-y-1 sm:px-3">
            <NavLink onClick={closeNav} exact activeClassName="navbar-active" to="/">
              <li  className="text-grey hover:text-darkGrey block px-3 py-2 rounded-md text-base font-semibold tracking-wider">
                Home
              </li>
            </NavLink>
            <NavLink onClick={closeNav} activeClassName="navbar-active" to="/about">
              <li className="text-grey hover:text-darkGrey block px-3 py-2 rounded-md text-base font-semibold tracking-wider">
                About
              </li>
            </NavLink>
            <NavLink onClick={closeNav} activeClassName="navbar-active" to="/portfolio">
              <li className="text-grey hover:text-darkGrey block px-3 py-2 rounded-md text-base font-semibold tracking-wider">
                Portfolio
              </li>
            </NavLink>
            {/* <NavLink onClick={closeNav} activeClassName="navbar-active" to="/courses">
              <li className="text-grey hover:text-darkGrey block px-3 py-2 rounded-md text-base font-semibold tracking-wider">
                Courses
              </li>
            </NavLink> */}
            {/* <NavLink onClick={closeNav} activeClassName="navbar-active" to="/blog">
              <li className="text-grey hover:text-darkGrey block px-3 py-2 rounded-md text-base font-semibold tracking-wider">
                Blog
              </li>
            </NavLink> */}
            <NavLink onClick={closeNav} activeClassName="navbar-active" to="/contact">
              <li className="text-grey hover:text-darkGrey block px-3 py-2 rounded-md text-base font-semibold tracking-wider">
                Contact
              </li>
            </NavLink>
            <div>
              <NavLink onClick={closeNav} to="/login">
                <li className="text-grey hover:text-darkGrey block w-48 mx-auto py-2  text-base font-semibold border border-gray-400 hover:border-gray-900 transform hover:scale-95 mt-4 text-center tracking-wider">
                  Login
                </li>
              </NavLink>
              <NavLink onClick={closeNav} to="/signup">
                <li className="text-white block py-2 w-48 mx-auto text-base font-semibold bg-grey hover:bg-darkGrey mt-4 transform hover:scale-95 text-center tracking-wider">
                  Sign Up
                </li>
              </NavLink>
            </div>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
