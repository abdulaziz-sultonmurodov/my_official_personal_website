import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { IoLocationSharp } from "react-icons/io5";
import { RiMailSendLine } from "react-icons/ri";
import { bgColorHover, textColor, textColorHover } from "../utils/ColorChange";

const ContactPage = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="flex flex-col justify-center items-center w-full pt-24">
        <h1 className="text-darkGrey text-3xl sm:text-4xl mb-6">Contact</h1>
        <div className="text-lightGrey tracking-wider leading-9 text-sm sm:text-2xl break-all px-4">
          <span className="text-lightGrey">if</span> (
          <a
            className={`${textColor} cursor-pointer hover:underline`}
            target="_blank"
            rel="noreferrer"
            href="https://t.me/abdulaziz_sultonmurodov_channel"
          >
            Telegram
          </a>
          ) {"{"}
          <br />
          <a
            className={`ml-4 text-darkGrey font-bold cursor-pointer ${textColorHover}`}
            target="_blank"
            rel="noreferrer"
            href="https://t.me/abdulaziz_sultonmurodov_channel"
          >
            abdulaziz_sultonmurodov
          </a>
          <br />
          {"};"} <span className="text-lightGrey">else if</span>(
          <a
            className={`${textColor} cursor-pointer hover:underline`}
            target="_blank"
            rel="noreferrer"
            href="https://instagram.com/abdulaziz_sultonmurodov"
          >
            Instagram
          </a>
          ) {"{"}
          <br />
          <a
            className={`ml-4 text-darkGrey font-bold cursor-pointer ${textColorHover}`}
            target="_blank"
            rel="noreferrer"
            href="https://instagram.com/abdulaziz_sultonmurodov"
          >
            abdulaziz_sultonmurodov
          </a>
          <br />
          {"};"} <span className="text-lightGrey">else if</span> (
          <a
            className={`${textColor} cursor-pointer hover:underline`}
            href="mailto: abdulazizsultonmurodov.dev@gmail.com"
          >
            Email
          </a>
          ) {"{"}
          <br />
          <a
            className={`ml-4 text-darkGrey font-bold cursor-pointer ${textColorHover}`}
            href="mailto: abdulazizsultonmurodov.dev@gmail.com"
          >
            abdulazizsultonmurodov.dev@gmail.com
          </a>
          <br />
          {"};"} <span className="text-lightGrey">else</span> {"{"}
          <br />
          <a
            href="#form"
            className={`ml-4 text-darkGrey font-bold cursor-pointer ${textColorHover}`}
          >
            Submit the form below
          </a>
          <br />
          {"};"}
        </div>

        <div className="flex flex-col justify-center mt-20 items-center mb-10">
          <div className="flex flex-col">
            <h1 className="uppercase text-lg text-center sm:text-2xl lg:text-3xl text-darkGrey">
              Have some questions?
            </h1>
            <p className="mt-3 tracking-wider text-center text-xs md:text-md flex items-center justify-center text-grey">
              <IoLocationSharp
                className={`mr-2 w-5 h-5 text-darkGrey ${textColorHover} cursor-pointer`}
              />
              Uchtepa Region, Tashkent City, Uzbekistan
            </p>
          </div>
          <div className="flex flex-row justify-between mt-10 items-center">
            <div className="hidden lg:flex">
              <RiMailSendLine
                className={`w-80 h-80 text-grey ${textColorHover} cursor-pointer`}
              />
            </div>

            <form
              action="mailto: abdulazizsultonmurodov.dev@gmail.com"
              method="post"
              encType="text/plain"
              id="form"
              className="flex flex-col w-64 lg:ml-48"
            >
              <h2 className="text-center">Ask me your questions!</h2>
              <input
                className="bg-gray-300 py-2 px-4 rounded-2xl focus:outline-none focus:ring-2 focus:bg-white focus:ring-black mt-4"
                type="text"
                placeholder="Your Name"
                name="name"
              />
              <input
                className="bg-gray-300 py-2 px-4 rounded-2xl focus:outline-none focus:ring-2 focus:bg-white focus:ring-black mt-4"
                type="email"
                placeholder="Your Email"
                name="email"
              />
              <textarea
                className="bg-gray-300 py-2 px-4 rounded-2xl focus:outline-none focus:ring-2 focus:bg-white  focus:ring-black mt-4"
                cols="30"
                rows="5"
                name="message"
                placeholder="Your Questions..."
              ></textarea>
              <input
                type="submit"
                className={`mt-4 rounded-2xl bg-darkGrey text-white py-2 w-1/2 mx-auto ${bgColorHover} cursor-pointer`}
                value="Submit"
                name="submit"
              />
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ContactPage;
