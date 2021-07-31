import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ImageSlides from "react-imageslides";
import { useState } from "react";
import { IoLogoGithub } from "react-icons/io";
import { ImLink } from "react-icons/im";
import homeImg from "../../../images/personal/four/home.png";
import featureOne from "../../../images/personal/four/featureone.png";
import aboutImg from "../../../images/personal/four/about.png";
import team from "../../../images/personal/four/team.png";
import skills from "../../../images/personal/four/skills.png";
import contactImg from "../../../images/personal/four/contact.png";
import footer from "../../../images/personal/four/footer.png";

const PortfolioFour = () => {
  const images = [
    homeImg,
    featureOne,
    aboutImg,
    team,
    skills,
    contactImg,
    footer,
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
                    Pretty
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
                    25 / 02 / 2021
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
                    HTML, CSS and JavaScript
                  </p>
                  <p className="text-grey">
                    <span className="text-grey pr-2 font-semibold">
                      Status:
                    </span>
                    <span className="text-red-400">Not In Use</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col w-full mt-14 lg:mt-0 text-grey text-base lg:text-lg  lg:w-2/5">
              <h1 className="text-darkGrey text-3xl mb-4">Description</h1>
              <p className="mb-2">
                This personal website is made with uniqe design and it is for
                women or girls who are designers or developers.
              </p>
              <p className="mb-2">
                The main feature is that it has the power of CSS and animations.
                It is very modern and colorful.
              </p>

              <div className="flex flex-col sm:flex-row">
                <a
                  href="https://github.com/abdulaziz-sultonmurodov/pretty.git"
                  rel="noreferrer"
                  target="_blank"
                >
                  <p className="flex items-center mt-6 cursor-pointer hover:text-darkGrey">
                    <IoLogoGithub className="w-6 h-6 mr-2" /> View Code
                  </p>
                </a>
                <a
                  href="https://pretty-portfolio.netlify.app/"
                  rel="noreferrer"
                  target="_blank"
                >
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

export default PortfolioFour;
