import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { IoLocationSharp } from "react-icons/io5";
import { RiMailSendLine } from "react-icons/ri";

const ContactPage = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <main className="flex flex-col justify-center items-center w-full pt-36">
        <p className="text-grey tracking-wider leading-9 text-sm sm:text-2xl">
          <span className="text-red-400">if</span> (
          <span className="text-darkGrey">Telegram</span>) {"{"}
          <br />
          <span className="ml-6">abdulaziz_sultonmurodov;</span>
          <br />
          {"};"} <span className="text-red-400">else if</span>(
          <span className="text-darkGrey">Instagram</span>) {"{"}
          <br />
          <span className="ml-6">abdulaziz_sultonmurodov;</span>
          <br />
          {"};"} <span className="text-red-400">else if</span> (
          <span className="text-darkGrey">Email</span>) {"{"}
          <br />
          <span className="ml-6">abdulazizsultonmurodov.dev@gmail.com;</span>
          <br />
          {"};"} <span className="text-red-400">else</span> {"{"}
          <br />
          <span className="ml-6">Submit the form below;</span>
          <br />
          {"};"}
        </p>

        <div className="flex flex-col justify-center mt-20 items-center">
          <div className="flex flex-col">
            <h1 className="uppercase text-lg text-center sm:text-2xl lg:text-3xl text-darkGrey">
              Have some questions?
            </h1>
            <p className="mt-3 tracking-wider text-center text-xs md:text-md flex items-center justify-center text-grey">
              <IoLocationSharp className="mr-2 w-5 h-5 text-grey" />
              Uchtepa Region, Tashkent City, Uzbekistan
            </p>
          </div>
          <div className="flex flex-row justify-between mt-10 items-center">
            <div className="hidden lg:flex">
              <RiMailSendLine className="w-80 h-80 text-grey hover:text-darkGrey cursor-pointer" />
            </div>
            <form className="flex flex-col w-64 lg:ml-48">
              <input
                className="bg-gray-300 py-2 px-4 rounded-2xl focus:outline-none focus:ring-2 focus:bg-white focus:ring-gray-500 mt-4"
                type="text"
                placeholder="Your Name"
              />
              <input
                className="bg-gray-300 py-2 px-4 rounded-2xl focus:outline-none focus:ring-2 focus:bg-white focus:ring-gray-500 mt-4"
                type="email"
                placeholder="Your Email"
              />
              <textarea
                className="bg-gray-300 py-2 px-4 rounded-2xl focus:outline-none focus:ring-2 focus:bg-white  focus:ring-gray-500 mt-4"
                cols="30"
                rows="5"
                placeholder="Your Questions..."
              ></textarea>
              <input
                className="mt-4 rounded-2xl bg-grey text-white py-2 w-1/2 mx-auto hover:bg-darkGrey cursor-pointer"
                type="submit"
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
