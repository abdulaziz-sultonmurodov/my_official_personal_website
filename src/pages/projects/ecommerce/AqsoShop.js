import React from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
import ImageSlides from "react-imageslides";
import { useState } from "react";
import { IoLogoGithub } from "react-icons/io";
import { ImLink } from "react-icons/im";
import homeImg from "../../../images/ecommerce/AQSO-shop/homeImg.png";
import cartPage from "../../../images/ecommerce/AQSO-shop/cartPage.png";
import dashboard from "../../../images/ecommerce/AQSO-shop/dashboard.png";
import authorsImg from "../../../images/ecommerce/AQSO-shop/authorsImg.png";
import publisherImg from "../../../images/ecommerce/AQSO-shop/publisherImg.png";
import GoBack from "../../../components/GoBack";

const AqsoShop = () => {
  const images = [homeImg, cartPage, dashboard, authorsImg, publisherImg];

  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Header />

      <main className="px-10 pt-24 flex flex-col lg:flex-row mb-10 items-center justify-evenly">
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
                    AQSO Shop
                  </p>
                  <p className="text-grey">
                    <span className="text-grey pr-2 font-semibold">
                      Authors:
                    </span>
                    Abdulaziz Sultonmurodov, Ilhom Ahadov
                  </p>
                  <p className="text-grey">
                    <span className="text-grey pr-2 font-semibold">
                      Date established:
                    </span>
                    01 / 08 / 2021
                  </p>
                  <p className="text-grey">
                    <span className="text-grey pr-2 font-semibold">
                      Language:
                    </span>
                    Uzbek, Uzbek Cryllic, Russian
                  </p>
                  <p className="text-grey">
                    <span className="text-grey pr-2 font-semibold">
                      Made with:
                    </span>
                    React, Tailwind, Nodejs, MongoDB
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
                This is an ecommerce website and provides books. This website
                mainly focus on selling Turkish books.
              </p>
              <p className="mb-2">
                It has many features such as admin panel, user panel and control
                system. It has payment methods and you can order books.
              </p>
              <i className="text-red-500">This repository is private!</i>
              <div className="flex flex-col sm:flex-row">
                {/* <a
                  className="cursor-not-allowed"
                  href="https://github.com/abdulaziz-sultonmurodov/clothesWebsite.git"
                  rel="noreferrer"
                  target="_blank"
                > */}
                <p className="flex items-center mt-6 cursor-not-allowed  hover:text-darkGrey">
                  <IoLogoGithub className="w-6 h-6 mr-2" /> View Code
                </p>
                {/* </a> */}

                <a href="https://aqsoshop.uz" rel="noreferrer" target="_blank">
                  <p className="flex items-center mt-6 ml-0 sm:ml-10 cursor-pointer hover:text-darkGrey">
                    <ImLink className="w-6 h-6 mr-2" /> Visit Project{" "}
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

export default AqsoShop;
