import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { IoChevronForward } from "react-icons/io5";

const HomePage = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="pt-32 h-sidebar pl-6 sm:pl-10 lg:pl-48">
        <h1 className="text-md sm:text-2xl lg:text-3xl text-grey">
          Hello my friends, my name is Abdulaziz
        </h1>
        <h1 className="text-grey text-2xl sm:text-4xl md:text-5xl lg:text-6xl my-2 sm:my-6">
          The Full-Stack Web Developer
        </h1>
        <div className="flex mt-6 sm:mt-0 flex-col sm:flex-row sm:items-center">
          <Link to="/contact">
            <button className="cursor-pointer text-lg font-semibold text-white py-4 px-4 bg-grey hover:bg-darkGrey text-center tracking-wider flex items-center border border-gray-400  hover:border-gray-900">
              I need a website
              <IoChevronForward className="ml-7 sm:ml-1 w-5 h-5" />
            </button>
          </Link>
          <Link to="/contact">
            <button className="cursor-pointer text-lg font-semibold tracking-wider text-grey hover:text-darkGrey px-4 py-4 border border-gray-400 hover:border-gray-900 text-center  sm:ml-4 flex items-center mt-4 sm:mt-0">
              I'm looking to hire
              <IoChevronForward className="ml-1 sm:ml-1 w-5 h-5" />
            </button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
