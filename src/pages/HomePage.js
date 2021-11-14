import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";
import HomePageCover from "../images/homepage.svg";
import { bgColorHover, textColorHover } from "../utils/ColorChange";

const HomePage = () => {
  let date = new Date();
  let hours = date.getHours();

  return (
    <>
      <Header />
      <Sidebar />

      <div className="w-96 h-96 sm:hidden pt-24 mb-4 flex flex-row items-center justify-center">
        <img
          className="w-full h-full"
          src={HomePageCover}
          alt="a boy sitting on a table"
        />
      </div>
      <main className="h-full mb-24 sm:mb-0 sm:h-sidebar flex flex-col items-center justify-start sm:justify-center">
        <h1 className="text-md sm:text-xl lg:text-2xl text-grey mb-2">
          {hours < 5
            ? "Good Evening"
            : hours < 12
            ? "Good Morning"
            : hours < 18
            ? "Good Afternoon"
            : hours >= 18
            ? "Good Evening"
            : "Hello"}{" "}
          my friend!
        </h1>
        <h1 className="text-lg sm:text-2xl tracking-wider lg:text-3xl text-darkGrey">
          My name is Abdulaziz
        </h1>
        <h1 className="text-grey text-2xl sm:text-4xl md:text-5xl lg:text-6xl my-2 sm:my-6">
          <span className={`${textColorHover} cursor-pointer`}>T</span>
          <span className={`${textColorHover} cursor-pointer`}>h</span>
          <span className={`${textColorHover} cursor-pointer`}>e</span>{" "}
          <span className={`${textColorHover} cursor-pointer`}>F</span>
          <span className={`${textColorHover} cursor-pointer`}>r</span>
          <span className={`${textColorHover} cursor-pointer`}>o</span>
          <span className={`${textColorHover} cursor-pointer`}>n</span>
          <span className={`${textColorHover} cursor-pointer`}>t</span>
          <span className={`${textColorHover} cursor-pointer`}>e</span>
          <span className={`${textColorHover} cursor-pointer`}>n</span>
          <span className={`${textColorHover} cursor-pointer`}>d</span>{" "}
          <span className={`${textColorHover} cursor-pointer`}>E</span>
          <span className={`${textColorHover} cursor-pointer`}>n</span>
          <span className={`${textColorHover} cursor-pointer`}>g</span>
          <span className={`${textColorHover} cursor-pointer`}>i</span>
          <span className={`${textColorHover} cursor-pointer`}>n</span>
          <span className={`${textColorHover} cursor-pointer`}>e</span>
          <span className={`${textColorHover} cursor-pointer`}>e</span>
          <span className={`${textColorHover} cursor-pointer`}>r</span>
        </h1>
        <div className="flex mt-6 sm:mt-0 flex-col sm:flex-row justify-center sm:items-center">
          <Link
            className={`focus:outline-none cursor-pointer text-lg font-bold text-darkGrey hover:text-white py-4 px-8 text-center flex rounded-lg items-center border-2 border-darkGrey ${bgColorHover}`}
            to="/contact"
          >
            I need a website
            <IoChevronForward className="w-5 h-5" />
          </Link>
          <Link
            className={`focus:outline-none cursor-pointer text-lg font-bold text-darkGrey  px-8 py-4 border-2 border-darkGrey hover:text-white ${bgColorHover}  rounded-lg text-center sm:ml-4 flex items-center mt-4 sm:mt-0`}
            to="/contact"
          >
            I'm looking to hire
            <IoChevronForward className=" w-5 h-5" />
          </Link>
        </div>
      </main>
      <div className="w-96 h-96 hidden -mt-32 sm:flex sm:flex-row items-center justify-center">
        <img
          className="w-full h-full"
          src={HomePageCover}
          alt="a boy sitting on a table"
        />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
