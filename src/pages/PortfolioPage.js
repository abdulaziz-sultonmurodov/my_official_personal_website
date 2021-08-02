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
import { bgColor, imageTextHover, textColorHover } from "../utils/ColorChange";
// import { IoChevronDownSharp, IoChevronUpSharp } from "react-icons/io5";

const PortfolioPage = () => {
  const [openTab, setOpenTab] = React.useState(1);
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

      <main className="pt-24 px-8 sm:pl-18 lg:pl-24">
        <div className="flex flex-wrap">
          <div className="w-full">
            <ul
              className="flex flex-col mb-0 list-none flex-wrap pt-3 pb-4 sm:flex-row"
              role="tablist"
            >
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs md:text-base font-bold uppercase px-5 py-3 shadow-md rounded block leading-normal " +
                    (openTab === 1
                      ? `text-white ${bgColor}`
                      : `${textColorHover} text-darkGrey bg-white`)
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  <i className="fas fa-space-shuttle text-base mr-1"></i> All
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs md:text-base font-bold uppercase px-5 py-3 shadow-md rounded block leading-normal " +
                    (openTab === 2
                      ? `text-white ${bgColor}`
                      : `${textColorHover} text-darkGrey bg-white`)
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  <i className="fas fa-cog text-base mr-1"></i> Ecommerce
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs md:text-base font-bold uppercase px-5 py-3 shadow-md rounded block leading-normal " +
                    (openTab === 3
                      ? `text-white ${bgColor}`
                      : `${textColorHover} text-darkGrey bg-white`)
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  <i className="fas fa-briefcase text-base mr-1"></i> Portfolio
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
                <a
                  className={
                    "text-xs md:text-base font-bold uppercase px-5 py-3 shadow-md rounded block leading-normal " +
                    (openTab === 4
                      ? `text-white ${bgColor}`
                      : `${textColorHover} text-darkGrey bg-white`)
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(4);
                  }}
                  data-toggle="tab"
                  href="#link4"
                  role="tablist"
                >
                  <i className="fas fa-space-shuttle text-base mr-1"></i>{" "}
                  Education
                </a>
              </li>
            </ul>
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6  rounded">
              <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space">
                  <div
                    className={
                      openTab === 1
                        ? "flex  lg:p-10 sm:flex-row flex-col flex-wrap cursor-pointer w-full justify-start items-start"
                        : "hidden"
                    }
                    id="link1"
                  >
                    {/* All Websites */}
                    <div
                      style={{ zIndex: "1" }}
                      className="flex mb-10 flex-col cursor-pointer justify-center items-center w-full lg:w-1/2"
                    >
                      <Link
                        to="personal-websites-1"
                        className={`${imageTextHover}`}
                      >
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
                      className="flex mb-10 flex-col cursor-pointer justify-center items-center w-full lg:w-1/2"
                    >
                      <Link
                        to="personal-websites-2"
                        className={`${imageTextHover}`}
                      >
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
                      className="flex mb-10 flex-col cursor-pointer justify-center items-center w-full lg:w-1/2"
                    >
                      <Link
                        to="ecommerce-websites-1"
                        className={`${imageTextHover}`}
                      >
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
                    <div
                      style={{ zIndex: "1" }}
                      className="flex mb-10 flex-col cursor-pointer justify-center items-center w-full lg:w-1/2"
                    >
                      <Link
                        to="personal-websites-3"
                        className={`${imageTextHover}`}
                      >
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
                      className="flex mb-10 flex-col cursor-pointer justify-center items-center w-full lg:w-1/2"
                    >
                      <Link
                        to="personal-websites-4"
                        className={`${imageTextHover}`}
                      >
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
                    <div
                      style={{ zIndex: "1" }}
                      className="flex mb-10 flex-col cursor-pointer justify-center items-center w-full lg:w-1/2"
                    >
                      <Link
                        to="education-websites-1"
                        className={`${imageTextHover}`}
                      >
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
                  <div
                    className={
                      openTab === 2
                        ? "flex  lg:p-10 sm:flex-row flex-col flex-wrap cursor-pointer w-full justify-start items-start"
                        : "hidden"
                    }
                    id="link2"
                  >
                    {/* Ecommerce Websites */}
                    <div
                      style={{ zIndex: "1" }}
                      className="flex mb-10 flex-col cursor-pointer justify-center items-center w-full lg:w-1/2"
                    >
                      <Link
                        to="ecommerce-websites-1"
                        className={`${imageTextHover}`}
                      >
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
                  <div
                    className={
                      openTab === 3
                        ? "flex  lg:p-10 sm:flex-row flex-col flex-wrap cursor-pointer w-full justify-start items-start"
                        : "hidden"
                    }
                    id="link3"
                  >
                    <div
                      style={{ zIndex: "1" }}
                      className="flex mb-10 flex-col cursor-pointer justify-center items-center w-full lg:w-1/2"
                    >
                      {/* Portfolio Websites */}
                      <Link
                        to="personal-websites-1"
                        className={`${imageTextHover}`}
                      >
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
                      className="flex mb-10 flex-col cursor-pointer justify-center items-center w-full lg:w-1/2"
                    >
                      <Link
                        to="personal-websites-2"
                        className={`${imageTextHover}`}
                      >
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
                      className="flex mb-10 flex-col cursor-pointer justify-center items-center w-full lg:w-1/2"
                    >
                      <Link
                        to="personal-websites-3"
                        className={`${imageTextHover}`}
                      >
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
                      className="flex mb-10 flex-col cursor-pointer justify-center items-center w-full lg:w-1/2"
                    >
                      <Link
                        to="personal-websites-4"
                        className={`${imageTextHover}`}
                      >
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
                  <div
                    className={
                      openTab === 4
                        ? "flex  lg:p-10 sm:flex-row flex-col flex-wrap cursor-pointer w-full justify-start items-start"
                        : "hidden"
                    }
                    id="link4"
                  >
                    {/* Education Websites */}
                    <div
                      style={{ zIndex: "1" }}
                      className="flex mb-10 flex-col cursor-pointer justify-center items-center w-full lg:w-1/2"
                    >
                      <Link
                        to="education-websites-1"
                        className={`${imageTextHover}`}
                      >
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
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PortfolioPage;
