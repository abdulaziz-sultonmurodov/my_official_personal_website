import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import portfolioOne from "../images/personal/one/home.png";
import portfolioTwo from "../images/personal/two/home.png";
import portfolioThree from "../images/personal/three/home.png";
import portfolioFour from "../images/personal/four/home.png";
import educationOne from "../images/education/one/home.png";
import ecommerceOne from "../images/ecommerce/one/home.png";
import { Link } from "react-router-dom";
import { imageTextHover } from "../utils/ColorChange";
// import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";

const PortfolioPage = () => {
  // const openPortfolio = () => {
  //   const portfolioList = document.getElementById("portfolioList");
  //   const arrowDownPortfolio = document.getElementById("arrowDownPortfolio");
  //   const arrowUpPortfolio = document.getElementById("arrowUpPortfolio");
  //   portfolioList.style.display = "flex";
  //   arrowDownPortfolio.style.display = "none";
  //   arrowUpPortfolio.style.display = "flex";
  // };
  // const closePortfolio = () => {
  //   const arrowDownPortfolio = document.getElementById("arrowDownPortfolio");
  //   const portfolioList = document.getElementById("portfolioList");
  //   const arrowUpPortfolio = document.getElementById("arrowUpPortfolio");
  //   portfolioList.style.display = "none";
  //   arrowDownPortfolio.style.display = "flex";
  //   arrowUpPortfolio.style.display = "none";
  // };
  return (
    <>
      <Header />
      <Sidebar />
      {/* <nav style={{ paddingTop: "10vh" }}>
        <div
          style={{ zIndex: "10" }}
          className="flex shadow-xl lg:hidden fixed w-full left-0 justify-end items-center bg-grey"
        >
          <IoChevronDownSharp
            id="arrowDownPortfolio"
            onClick={openPortfolio}
            className="w-6 h-6 my-3 cursor-pointer mr-4 text-white"
          />
          <IoChevronUpSharp
            id="arrowUpPortfolio"
            onClick={closePortfolio}
            className="hidden w-6 h-6 my-3 cursor-pointer mr-4 text-white"
          />
        </div>
        <ul
          style={{ zIndex: "10" }}
          id="portfolioList"
          className="hidden shadow-xl lg:flex flex-col lg:flex-row bg-grey fixed flex-row justify-evenly  items-center text-white text-lg w-full text-center pb-10 lg:pb-0 mt-12 lg:mt-0 flex-wrap"
        >
          <li
            onClick={closePortfolio}
            className="cursor-pointer hover:bg-darkGrey py-2 px-2 w-full sm:w-48 "
          >
            Personal Websites
          </li>
          <li
            onClick={closePortfolio}
            className="cursor-pointer hover:bg-darkGrey py-2 px-2 w-full sm:w-48 "
          >
            Education Websites
          </li>
          <li
            onClick={closePortfolio}
            className="cursor-pointer hover:bg-darkGrey py-2 px-2 w-full sm:w-48 "
          >
            Ecommerce Websites
          </li>
          <li
            onClick={closePortfolio}
            className="cursor-pointer hover:bg-darkGrey py-2 px-2 w-full sm:w-48 "
          >
            Web Applications
          </li>
        </ul>
      </nav> */}
      <main className="pt-24 px-8 sm:pl-18 lg:pl-24">
        <div>
          <h1 className="text-xl sm:text-2xl lg:text-4xl text-darkGrey pb-1 my-6 mb-10 border-b-2 border-darkGrey w-56 lg:w-4/12">
            Personal Websites
          </h1>
          <div className="flex flex-col lg:flex-row justify-between items-center w-full flex-wrap">
            <div
              style={{ zIndex: "1" }}
              className="flex mb-20 lg:mb-10 flex-col cursor-pointer justify-center items-center w-full lg:w-1/2"
            >
              <Link to="personal-websites-1" className={`${imageTextHover}`}>
                <div className=" w-full">
                  <img
                    className="object-contain rounded-lg imageDark w-96"
                    src={portfolioOne}
                    alt="Portfolio"
                  />
                </div>
                <p className="workTitle text-grey text-md sm:text-lg lg:text-xl mt-2  text-center">
                  AS (New Version)
                </p>
              </Link>
            </div>

            <div
              style={{ zIndex: "1" }}
              className="flex mb-20 lg:mb-10 flex-col cursor-pointer justify-center items-center w-full lg:w-1/2"
            >
              <Link to="personal-websites-2" className={`${imageTextHover}`}>
                <div className=" w-full">
                  <img
                    className="object-contain rounded-lg imageDark w-96"
                    src={portfolioTwo}
                    alt="Portfolio"
                  />
                </div>
                <p className="workTitle text-grey text-md sm:text-lg lg:text-xl mt-2  text-center">
                  AS (Old Version)
                </p>
              </Link>
            </div>

            <div
              style={{ zIndex: "1" }}
              className="flex mb-20 lg:mb-10 flex-col cursor-pointer justify-center items-center w-full lg:w-1/2"
            >
              <Link to="personal-websites-3" className={`${imageTextHover}`}>
                <div className=" w-full">
                  <img
                    className="object-contain rounded-lg imageDark w-96"
                    src={portfolioThree}
                    alt="Portfolio"
                  />
                </div>
                <p className="workTitle text-grey text-md sm:text-lg lg:text-xl mt-2  text-center">
                  DarkBio
                </p>
              </Link>
            </div>

            <div
              style={{ zIndex: "1" }}
              className="flex mb-20 lg:mb-10 flex-col cursor-pointer justify-center items-center w-full lg:w-1/2"
            >
              <Link to="personal-websites-4" className={`${imageTextHover}`}>
                <div className=" w-full">
                  <img
                    className="object-contain rounded-lg imageDark w-96"
                    src={portfolioFour}
                    alt="Portfolio"
                  />
                </div>
                <p className="workTitle text-grey text-md sm:text-lg lg:text-xl mt-2  text-center">
                  Pretty
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-xl sm:text-2xl lg:text-4xl text-darkGrey pb-1 my-6 mb-10 border-b-2 border-darkGrey w-56 lg:w-4/12">
            Education Websites
          </h1>
          <div className="flex flex-col lg:flex-row justify-between items-center w-full flex-wrap">
            <div
              style={{ zIndex: "1" }}
              className="flex mb-20 lg:mb-10 flex-col cursor-pointer justify-center items-center w-full lg:w-1/2"
            >
              <Link to="education-websites-1" className={`${imageTextHover}`}>
                <div className=" w-full">
                  <img
                    className="object-contain rounded-lg imageDark w-96"
                    src={educationOne}
                    alt="Portfolio"
                  />
                </div>
                <p className="workTitle text-grey text-md sm:text-lg lg:text-xl mt-2  text-center">
                  Knowledge
                </p>
              </Link>
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-xl sm:text-2xl lg:text-4xl text-darkGrey pb-1 my-6 mb-10 border-b-2 border-darkGrey w-48 w-56 lg:w-4/12">
            Ecommerce Websites
          </h1>
          <div className="flex flex-col lg:flex-row justify-between items-center w-full flex-wrap">
            <div
              style={{ zIndex: "1" }}
              className="flex mb-20 lg:mb-10 flex-col cursor-pointer justify-center items-center w-full lg:w-1/2"
            >
              <Link to="ecommerce-websites-1" className={`${imageTextHover}`}>
                <div className=" w-full">
                  <img
                    className="object-contain rounded-lg imageDark w-96"
                    src={ecommerceOne}
                    alt="Portfolio"
                  />
                </div>
                <p className="workTitle text-grey text-md sm:text-lg lg:text-xl mt-2  text-center">
                  Clothes
                </p>
              </Link>
            </div>
          </div>
        </div>

        {/* <div>
          <h1 className="text-xl sm:text-2xl lg:text-4xl text-darkGrey pb-1 my-6 mb-10 border-b-2 border-darkGrey w-56 lg:w-4/12">
            Web Applications
          </h1>
          <div className="flex flex-col lg:flex-row justify-between items-center w-full flex-wrap">
            <div
              style={{ zIndex: "1" }}
              className="flex mb-20 lg:mb-10 flex-col cursor-pointer justify-center items-center w-full lg:w-1/2"
            >
              <Link to="web-applications-1" className={`${imageTextHover}`}>
                <div className=" w-full">
                  <img
                    className="object-contain rounded-lg imageDark w-96"
                    src={portfolioOne}
                    alt="Portfolio"
                    />
                </div>
                <p className="workTitle text-grey text-md sm:text-lg lg:text-xl mt-2  text-center">
                  Calculator
                </p>
              </Link>
            </div>

            <div
              style={{ zIndex: "1" }}
              className="flex mb-20 lg:mb-10 flex-col cursor-pointer justify-center items-center w-full lg:w-1/2"
            >
              <Link to="web-applications-2" className={`${imageTextHover}`}>
                <div className=" w-full">
                  <img
                    className="object-contain rounded-lg imageDark w-96"
                    src={portfolioOne}
                    alt="Portfolio"
                    />
                </div>
                <p className="workTitle text-grey text-md sm:text-lg lg:text-xl mt-2  text-center">
                  Color Generator
                </p>
              </Link>
            </div>
          </div>
        </div> */}
      </main>
      <Footer />
    </>
  );
};

export default PortfolioPage;
