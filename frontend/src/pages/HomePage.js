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
      <main className="pt-32 h-sidebar pl-48">
        <h1 className="text-3xl text-grey">
          Hello my friends, my name is Abdulaziz
        </h1>
        <h1 className="text-grey text-6xl my-6">
          The Full-Stack Web Developer
        </h1>
        <div className="flex flex-row items-center">
          <Link to="contact">
            <button className="cursor-pointer text-lg font-semibold text-white py-4 px-4 bg-grey hover:bg-darkGrey text-center tracking-wider flex items-center border border-gray-400 hover:border-gray-900">
              I need a website
              <IoChevronForward className="ml-1 w-5 h-5" />
            </button>
          </Link>
          <Link to="contact">
            <button className="cursor-pointer text-lg font-semibold tracking-wider text-grey hover:text-darkGrey px-4 py-4 border border-gray-400 hover:border-gray-900 text-center ml-4 flex items-center">
              I'm looking to hire
              <IoChevronForward className="ml-1 w-5 h-5" />
            </button>
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
