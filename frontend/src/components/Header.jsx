import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

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
        <nav className="bg-white h-header flex flex-row justify-around items-center">
          <div className="flex flex-row items-center">
            <Link to="/">
              <h1 className="milkshake text-4xl text-grey hover:text-darkGrey">
                AS
              </h1>
            </Link>
          </div>
          <div>
            <ul className="hidden lg:flex flex-row">
              <Link to="/">
                <li className="ml-10 cursor-pointer text-grey hover:text-darkGrey tracking-wider">
                  Home
                </li>
              </Link>
              <Link to="/about">
                <li className="ml-10 cursor-pointer text-grey hover:text-darkGrey tracking-wider">
                  About
                </li>
              </Link>
              <Link to="/portfolio">
                <li className="ml-10 cursor-pointer text-grey hover:text-darkGrey tracking-wider">
                  Portfolio
                </li>
              </Link>
              <Link to="/courses">
                <li className="ml-10 cursor-pointer text-grey hover:text-darkGrey tracking-wider">
                  Courses
                </li>
              </Link>
              <Link to="/blog">
                <li className="ml-10 cursor-pointer text-grey hover:text-darkGrey tracking-wider">
                  Blog
                </li>
              </Link>
              <Link to="/contact">
                <li className="ml-10 cursor-pointer text-grey hover:text-darkGrey">
                  Contact
                </li>
              </Link>
            </ul>
          </div>

          <div>
            <ul className="hidden lg:flex flex-row">
              <Link to="login">
                <li className="mr-5 cursor-pointer tracking-wider   text-grey hover:text-darkGrey block px-4 py-2 rounded-md text-base font-medium border border-gray-400 hover:border-gray-900 transform hover:scale-95 text-center">
                  Login
                </li>
              </Link>
              <Link to="signup">
                <li className="cursor-pointer text-white block py-2 px-4 rounded-md text-base font-medium bg-grey hover:bg-darkGrey rounded-md transform hover:scale-95 text-center tracking-wider">
                  Signup
                </li>
              </Link>
            </ul>
            <div
              id="burger"
              onClick={openNav}
              className="flex lg:hidden w-6 h-6"
            >
              <GiHamburgerMenu className="w-6 h-6 text-grey hover:text-darkGrey cursor-pointer" />
            </div>
            <div id="cancel" onClick={closeNav} className="hidden w-6 h-6">
              <AiOutlineClose className="w-6 h-6 text-grey hover:text-darkGrey cursor-pointer" />
            </div>
          </div>
        </nav>
        {/* Mobile Menu */}

        <div
          id="burgerList"
          className="hidden h-sidebar border-t border-gray-200 "
        >
          <ul className="px-2 pt-2 pb-3 mt-4 m-auto text-center space-y-1 sm:px-3">
            <Link to="/">
              <li onClick={closeNav} className="text-grey hover:text-darkGrey block px-3 py-2 rounded-md text-base font-medium tracking-wider">
                Home
              </li>
            </Link>
            <Link to="/about">
              <li onClick={closeNav} className="text-grey hover:text-darkGrey block px-3 py-2 rounded-md text-base font-medium tracking-wider">
                About
              </li>
            </Link>
            <Link to="/portfolio">
              <li onClick={closeNav} className="text-grey hover:text-darkGrey block px-3 py-2 rounded-md text-base font-medium tracking-wider">
                Portfolio
              </li>
            </Link>
            <Link to="/courses">
              <li onClick={closeNav} className="text-grey hover:text-darkGrey block px-3 py-2 rounded-md text-base font-medium tracking-wider">
                Courses
              </li>
            </Link>
            <Link to="/blog">
              <li onClick={closeNav} className="text-grey hover:text-darkGrey block px-3 py-2 rounded-md text-base font-medium tracking-wider">
                Blog
              </li>
            </Link>
            <Link to="/contact">
              <li onClick={closeNav} className="text-grey hover:text-darkGrey block px-3 py-2 rounded-md text-base font-medium tracking-wider">
                Contact
              </li>
            </Link>
            <div>
              <Link to="/login">
                <li onClick={closeNav} className="text-grey hover:text-darkGrey block  py-2 rounded-md text-base font-medium border border-gray-400 hover:border-gray-900 transform hover:scale-95 mt-4 text-center tracking-wider">
                  Login
                </li>
              </Link>
              <Link to="/signup">
                <li onClick={closeNav} className="text-white block py-2 rounded-md text-base font-medium bg-grey hover:bg-darkGrey rounded-md mt-4 transform hover:scale-95 text-center tracking-wider">
                  Sign Up
                </li>
              </Link>
            </div>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
