import React from "react";
import { IoIosSchool } from "react-icons/io";
import { IoFootball, IoPerson } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { textColorHover } from "../utils/ColorChange";
// import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";

const AboutPage = () => {
  let date = new Date();
  let year = date.getFullYear();
  let month = date.getMonth() + 1;

  let birth = new Date("12/22/2001");
  let month_diff = Date.now() - birth.getTime();
  let age_dt = new Date(month_diff);
  let birthYear = age_dt.getUTCFullYear();
  let age = Math.abs(birthYear - 1970);

  // const openAbout = () => {
  //   const aboutList = document.getElementById("aboutList");
  //   const arrowDownAbout = document.getElementById("arrowDownAbout");
  //   const arrowUpAbout = document.getElementById("arrowUpAbout");
  //   aboutList.style.display = "flex";
  //   arrowDownAbout.style.display = "none";
  //   arrowUpAbout.style.display = "flex";
  // };
  // const closeAbout = () => {
  //   const arrowDownAbout = document.getElementById("arrowDownAbout");
  //   const aboutList = document.getElementById("aboutList");
  //   const arrowUpAbout = document.getElementById("arrowUpAbout");
  //   aboutList.style.display = "none";
  //   arrowDownAbout.style.display = "flex";
  //   arrowUpAbout.style.display = "none";
  // };
  return (
    <>
      <Header />
      <Sidebar />
      {/* <nav style={{ paddingTop: "10vh" }}>
        <div className="flex sm:hidden shadow-xl fixed w-full left-0 justify-end items-center bg-grey">
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
          className="hidden shadow-xl sm:flex flex-col sm:flex-row bg-grey fixed flex-row justify-evenly  items-center text-white text-lg w-full text-center pb-10 sm:pb-0 mt-12 sm:mt-0"
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
      </nav> */}
      <main className="flex flex-col justify-center w-full px-6 sm:px-8 md:px-10 lg:px-0 lg:w-1/2 items-center mx-auto py-24">
        <div>
          <h1 className="flex flex-row items-center justify-center text-2xl sm:text-3xl text-darkGrey">
            <IoPerson className={`mr-2 ${textColorHover} cursor-pointer`} /> Bio
          </h1>
          <p className="text-gray-600 text-xl mt-4">
            My full name is Abdulaziz Sultonmurodov Akmalovich and I am {age}. I
            was born and live in Tashkent. I am an easy-going and talkative
            person. I try to solve problems as fast as I can and help people if
            I have opportunity to help them. I like to finish all the work I
            have then, I go and relax. I cannot take a rest until I complete my
            work.
          </p>
        </div>
        <div>
          <h1 className="flex flex-row items-center justify-center text-2xl sm:text-3xl text-darkGrey text-center mt-20">
            <IoIosSchool className={`mr-2 ${textColorHover} cursor-pointer`} />{" "}
            Education
          </h1>
          <p className="text-gray-600 text-xl mt-4">
            I finished studying international school named "Tashkent Ulugbek
            International School" (TUIS). I learned English in my school because
            all subjects were taught in English by foreign teachers. Then I
            graduated The Academic Lyceum of The World Economy and diplomacy
            University in 2017. Afterwards, I entered The Webster University in
            Tashkent in 2019. Now I am a sophomore student majoring in
            Economics.
          </p>
        </div>
        <div>
          <h1 className="flex flex-row items-center justify-center text-2xl sm:text-3xl text-darkGrey text-center mt-20">
            <MdWork className={`mr-2 ${textColorHover} cursor-pointer`} /> Work
          </h1>
          <p className="text-gray-600 text-xl mt-4">
            I have been learning frontend development for {year - 2020}{" "}
            {year - 2020 < 2 ? "year" : "years"} and{" "}
            <span className={month === 12 ? "hidden" : "inline"}>
              {month} {month === 1 ? "month" : "months"} and
            </span>{" "}
            have{" "}
            <span className={year - 2021 === 0 ? "hidden" : "inline"}>
              {year - 2021} {year - 2021 < 2 ? "year" : "years"}{" "}
            </span>{" "}
            <span className={month === 12 ? "hidden" : "inline"}>
              {month} {month === 1 ? "month" : "months"}
            </span>{" "}
            real experience in this field. I also started to have interest in
            backend development and have been learning for 6 months but do not
            have much experience.
          </p>
        </div>
        <div>
          <h1 className="flex flex-row items-center justify-center text-2xl sm:text-3xl text-darkGrey text-center mt-20">
            <IoFootball className={`mr-2 ${textColorHover} cursor-pointer`} />{" "}
            Interests / Hobbies
          </h1>
          <p className="text-gray-600 text-xl mt-4">
            In my spare time, I love learning new languages and know some basics
            in Spanish and Arabic. I really like playing football and tennis. I
            like reading books such as novels or stories and it helps me to
            develop my skills and ideas.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;
