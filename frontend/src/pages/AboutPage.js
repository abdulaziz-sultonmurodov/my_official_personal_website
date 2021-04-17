import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";

const AboutPage = () => {
  const openAbout = () => {
    const aboutList = document.getElementById("aboutList");
    const arrowDownAbout = document.getElementById("arrowDownAbout");
    const arrowUpAbout = document.getElementById("arrowUpAbout");
    aboutList.style.display = "flex";
    arrowDownAbout.style.display = "none";
    arrowUpAbout.style.display = "flex";
  };
  const closeAbout = () => {
    const arrowDownAbout = document.getElementById("arrowDownAbout");
    const aboutList = document.getElementById("aboutList");
    const arrowUpAbout = document.getElementById("arrowUpAbout");
    aboutList.style.display = "none";
    arrowDownAbout.style.display = "flex";
    arrowUpAbout.style.display = "none";
  };
  return (
    <>
      <Header />
      <Sidebar />
      <nav style={{ paddingTop: "10vh" }}>
        <div
          style={{ zIndex: "10" }}
          className="flex sm:hidden fixed w-full left-0 justify-end items-center bg-grey"
        >
          <IoChevronDownSharp
            id="arrowDownAbout"
            onClick={openAbout}
            className="w-6 h-6 my-3 cursor-pointer mr-4 text-white"
          />
          <IoChevronUpSharp
            id="arrowUpAbout"
            onClick={closeAbout}
            className="hidden w-6 h-6 my-3 cursor-pointer mr-4 text-white"
          />
        </div>
        <ul
          id="aboutList"
          className="hidden  sm:flex flex-col sm:flex-row bg-grey fixed flex-row justify-evenly  items-center text-white text-lg w-full text-center pb-10 sm:pb-0 mt-12 sm:mt-0"
        >
          <li
            onClick={closeAbout}
            className="cursor-pointer hover:bg-darkGrey py-2 px-2 w-full sm:w-32 "
          >
            Bio
          </li>
          <li
            onClick={closeAbout}
            className="cursor-pointer hover:bg-darkGrey py-2 px-2 w-full sm:w-32 "
          >
            Education
          </li>
          <li
            onClick={closeAbout}
            className="cursor-pointer hover:bg-darkGrey py-2 px-2 w-full sm:w-32 "
          >
            Work
          </li>
          <li
            onClick={closeAbout}
            className="cursor-pointer hover:bg-darkGrey py-2 px-2 w-full sm:w-32 "
          >
            Interests
          </li>
        </ul>
      </nav>
      <main className="flex flex-col justify-center w-1/2 items-center mx-auto my-20">
        <div>
          <h1 className="text-4xl text-darkGrey text-center">Bio</h1>
          <p className="text-grey text-xl mt-4">
            sad a asd asddsad asd asd asd as asd a sd asdsad asd asd asd sa dsa
            asddasd as dasdas d asd asdadasd asd asd asdsad sa
          </p>
        </div>
        <div>
          <h1 className="text-4xl text-darkGrey text-center mt-20">
            Education
          </h1>
          <p className="text-grey text-xl mt-4">
            sad a asd asddsad asd asd asd as asd a sd asdsad asd asd asd sa dsa
            asddasd as dasdas d asd asdadasd asd asd asdsad sa
          </p>
        </div>
        <div>
          <h1 className="text-4xl text-darkGrey text-center mt-20">Work</h1>
          <p className="text-grey text-xl mt-4">
            sad a asd asddsad asd asd asd as asd a sd asdsad asd asd asd sa dsa
            asddasd as dasdas d asd asdadasd asd asd asdsad sa
          </p>
        </div>
        <div>
          <h1 className="text-4xl text-darkGrey text-center mt-20">
            Interests
          </h1>
          <p className="text-grey text-xl mt-4">
            sad a asd asddsad asd asd asd as asd a sd asdsad asd asd asd sa dsa
            asddasd as dasdas d asd asdadasd asd asd asdsad sa
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
