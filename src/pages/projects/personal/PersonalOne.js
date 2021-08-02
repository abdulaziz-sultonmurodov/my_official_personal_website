import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ImageSlides from "react-imageslides";
import { useState } from "react";
import { IoLogoGithub } from "react-icons/io";
import { ImLink } from "react-icons/im";
import homeImg from "../../../images/personal/one/home.png";
import aboutImg from "../../../images/personal/one/about.png";
import contactImg from "../../../images/personal/one/contact.png";
import projectImg from "../../../images/personal/one/projects.png";
import loginImg from "../../../images/personal/one/login.png";
import featureOne from "../../../images/personal/one/featureone.png";
import GoBack from "../../../components/GoBack";

const PortfolioOne = () => {
  const images = [
    homeImg,
    aboutImg,
    projectImg,
    featureOne,
    loginImg,
    contactImg,
  ];

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Header />
      <main className="px-10 pt-24 flex flex-col lg:flex-row  items-center justify-evenly mb-10">
        <ImageSlides
          index={0}
          tapClose={true}
          images={images}
          isOpen={isOpen}
          showPageButton
        />
        <div className="flex">
          <div className=" flex flex-col lg:flex-row justify-center">
            <div className="flex w-full lg:w-3/5 flex-col">
              <GoBack />
              <div
                onClick={() => {
                  if (isOpen === true) {
                    setIsOpen(false);
                  } else if (isOpen === false) {
                    setIsOpen(true);
                  } else {
                    setIsOpen(false);
                  }
                }}
                className="w-full lg:w-3/5"
              >
                <img
                  className="w-full imageDark rounded-2xl object-contain cursor-pointer"
                  src={images[0]}
                  alt="Samples"
                />
                <p className="text-grey text-sm sm:text-base text-center italic mt-1">
                  Double click to view samples and tap anywhere to close it.
                </p>
              </div>
              <div>
                <h1 className="text-darkGrey text-3xl mt-6">Details</h1>
                <div className="mt-4">
                  <p className="text-grey">
                    <span className="text-grey pr-2 font-semibold">Name:</span>
                    AS
                  </p>
                  <p className="text-grey">
                    <span className="text-grey pr-2 font-semibold">
                      Author:
                    </span>
                    Abdulaziz Sultonmurodov
                  </p>
                  <p className="text-grey">
                    <span className="text-grey pr-2 font-semibold">
                      Date established:
                    </span>
                    20 / 04 / 2021
                  </p>
                  <p className="text-grey">
                    <span className="text-grey pr-2 font-semibold">
                      Language:
                    </span>
                    English
                  </p>
                  <p className="text-grey">
                    <span className="text-grey pr-2 font-semibold">
                      Made with:
                    </span>
                    React, Tailwind, Node.js and MongoDB
                  </p>
                  <p className="text-grey">
                    <span className="text-grey pr-2 font-semibold">
                      Status:
                    </span>
                    <span className="text-green-400">In Use</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full mt-14 lg:mt-0 text-grey text-base lg:text-lg  lg:w-2/5">
              <h1 className="text-darkGrey text-3xl mb-4">Description</h1>
              <p className="mb-2">
                This website is the new version of my portfolio website and it
                is now in use.
              </p>
              <p className="mb-2">
                A lot of changes are included in this website and the brand new
                design is made which is totally different from the old Two
              </p>
              <p className="mb-2">
                It includes many features and functionalities which are really
                attractive and well designed.
              </p>
              <div className="flex flex-col sm:flex-row">
                <div>
                  <a
                    className="flex flex-row items-center mt-6 cursor-pointer hover:text-darkGrey"
                    href="https://github.com/abdulaziz-sultonmurodov/my_official_personal_website.git"
                    rel="noreferrer"
                    target="_blank"
                  >
                    <IoLogoGithub className="w-6 h-6 mr-2" />
                    View Code
                  </a>
                </div>
                <a href="/" target="_blank" rel="noreferrer">
                  <p className="flex items-center mt-6 ml-0 sm:ml-10 cursor-pointer hover:text-darkGrey">
                    <ImLink className="w-6 h-6 mr-2" /> Visit Project
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PortfolioOne;
