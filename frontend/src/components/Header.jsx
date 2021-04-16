import React from "react";
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <>
      <header>
        <nav className="bg-white h-header flex flex-row justify-around items-center">
        <Link to="/">
        <div className="flex flex-row items-center">
            <h1 className="milkshake text-4xl text-grey">AS</h1>
          </div></Link>
          <div>
            <ul className="flex flex-row">
              <li className="ml-10 cursor-pointer text-grey hover:text-darkGrey">Home</li>
              <li className="ml-10 cursor-pointer text-grey hover:text-darkGrey">About</li>
              <li className="ml-10 cursor-pointer text-grey hover:text-darkGrey">Blog</li>
              <li className="ml-10 cursor-pointer text-grey hover:text-darkGrey">Contact</li>
            </ul>
          </div>

          <div>
            <ul className="flex flex-row">
              <li className="mr-10 cursor-pointer text-grey hover:text-darkGrey">Login</li>
              <li className="mr-10 cursor-pointer text-grey hover:text-darkGrey">Signup</li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
