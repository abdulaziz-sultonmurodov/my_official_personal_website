import React from "react";

const Header = () => {
  return (
    <>
      <header>
        <nav className="bg-white h-header flex flex-row justify-between items-center">
          <div>
            <ul className="flex flex-row">
              <li className="ml-10 cursor-pointer text-grey hover:text-darkGrey">Home</li>
              <li className="ml-10 cursor-pointer text-grey hover:text-darkGrey">About</li>
              <li className="ml-10 cursor-pointer text-grey hover:text-darkGrey">Blog</li>
              <li className="ml-10 cursor-pointer text-grey hover:text-darkGrey">Contact</li>
            </ul>
          </div>
          <div>
            <h1 className="milkshake text-4xl mr-20">Abdulaziz Sultonmurodov</h1>
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
