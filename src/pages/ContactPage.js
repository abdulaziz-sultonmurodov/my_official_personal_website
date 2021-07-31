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
      <main className="flex flex-col justify-center items-center w-full pt-32">
        <h1 className="text-darkGrey text-4xl mb-6">Contact</h1>
        <p className="text-lightGrey tracking-wider leading-9 text-sm sm:text-2xl">
          <span className="text-lightGrey">if</span> (
          <span className="text-primary">Telegram</span>) {"{"}
          <br />
          <span className="ml-6 text-darkGrey font-bold">
            abdulaziz_sultonmurodov;
          </span>
          <br />
          {"};"} <span className="text-lightGrey">else if</span>(
          <span className="text-primary">Instagram</span>) {"{"}
          <br />
          <span className="ml-6 text-darkGrey font-bold">
            abdulaziz_sultonmurodov;
          </span>
          <br />
          {"};"} <span className="text-lightGrey">else if</span> (
          <span className="text-primary">Email</span>) {"{"}
          <br />
          <span className="ml-6 text-darkGrey font-bold">
            abdulazizsultonmurodov.dev@gmail.com;
          </span>
          <br />
          {"};"} <span className="text-lightGrey">else</span> {"{"}
          <br />
          <span className="ml-6 text-darkGrey font-bold">
            Submit the form below;
          </span>
          <br />
          {"};"}
        </p>

        <div className="flex flex-col justify-center mt-20 items-center">
          <div className="flex flex-col">
            <h1 className="uppercase text-lg text-center sm:text-2xl lg:text-3xl text-darkGrey">
              Have some questions?
            </h1>
            <p className="mt-3 tracking-wider text-center text-xs md:text-md flex items-center justify-center text-grey">
              <IoLocationSharp className="mr-2 w-5 h-5 text-darkGrey hover:text-primary cursor-pointer" />
              Uchtepa Region, Tashkent City, Uzbekistan
            </p>
          </div>
          <div className="flex flex-row justify-between mt-10 items-center">
            <div className="hidden lg:flex">
              <RiMailSendLine className="w-80 h-80 text-grey hover:text-primary cursor-pointer" />
            </div>

            <form className="flex flex-col w-64 lg:ml-48">
              <h2 className="text-center">Ask me your questions!</h2>
              <input
                className="bg-gray-300 py-2 px-4 rounded-2xl focus:outline-none focus:ring-2 focus:bg-white focus:ring-black mt-4"
                type="text"
                placeholder="Your Name"
              />
              <input
                className="bg-gray-300 py-2 px-4 rounded-2xl focus:outline-none focus:ring-2 focus:bg-white focus:ring-black mt-4"
                type="email"
                placeholder="Your Email"
              />
              <textarea
                className="bg-gray-300 py-2 px-4 rounded-2xl focus:outline-none focus:ring-2 focus:bg-white  focus:ring-black mt-4"
                cols="30"
                rows="5"
                placeholder="Your Questions..."
              ></textarea>
              <input
                className="mt-4 rounded-2xl bg-darkGrey text-white py-2 w-1/2 mx-auto hover:bg-primary cursor-pointer"
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
