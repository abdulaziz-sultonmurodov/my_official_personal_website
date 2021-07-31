import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";
import HomePageCover from "../images/homepage.svg";

const HomePage = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <div className="w-96 h-96 sm:hidden pt-24 mb-4 flex flex-row items-center justify-center w-full">
        <img
          className="w-full h-full"
          src={HomePageCover}
          alt="a boy sitting on a table"
        />
      </div>
      <main className="h-sidebar flex flex-col items-center justify-start sm:justify-center">
        <h1 className="text-md sm:text-2xl lg:text-3xl text-grey">
          Hello my friends, my name is Abdulaziz
        </h1>
        <h1 className="text-grey text-2xl sm:text-4xl md:text-5xl lg:text-6xl my-2 sm:my-6">
          <span className="hover:text-primary cursor-pointer">T</span>
          <span className="hover:text-primary cursor-pointer">h</span>
          <span className="hover:text-primary cursor-pointer">e</span>{" "}
          <span className="hover:text-primary cursor-pointer">F</span>
          <span className="hover:text-primary cursor-pointer">r</span>
          <span className="hover:text-primary cursor-pointer">o</span>
          <span className="hover:text-primary cursor-pointer">n</span>
          <span className="hover:text-primary cursor-pointer">t</span>
          <span className="hover:text-primary cursor-pointer">e</span>
          <span className="hover:text-primary cursor-pointer">n</span>
          <span className="hover:text-primary cursor-pointer">d</span>{" "}
          <span className="hover:text-primary cursor-pointer">E</span>
          <span className="hover:text-primary cursor-pointer">n</span>
          <span className="hover:text-primary cursor-pointer">g</span>
          <span className="hover:text-primary cursor-pointer">i</span>
          <span className="hover:text-primary cursor-pointer">n</span>
          <span className="hover:text-primary cursor-pointer">e</span>
          <span className="hover:text-primary cursor-pointer">e</span>
          <span className="hover:text-primary cursor-pointer">r</span>
        </h1>
        <div className="flex mt-6 sm:mt-0 flex-col sm:flex-row justify-center sm:items-center">
          <Link
            className="focus:outline-none cursor-pointer text-lg font-bold text-darkGrey hover:text-white py-4 px-8 text-center flex rounded-lg items-center border-2 border-darkGrey hover:bg-primary"
            to="/contact"
          >
            I need a website
            <IoChevronForward className="w-5 h-5" />
          </Link>
          <Link
            className="focus:outline-none cursor-pointer text-lg font-bold text-darkGrey  px-8 py-4 border-2 border-darkGrey hover:text-white hover:bg-primary  rounded-lg text-center sm:ml-4 flex items-center mt-4 sm:mt-0"
            to="/contact"
          >
            I'm looking to hire
            <IoChevronForward className=" w-5 h-5" />
          </Link>
        </div>
      </main>
      <div className="w-96 h-96 hidden -mt-32 sm:flex sm:flex-row items-center justify-center w-full">
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
