import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FaLock } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";
import logo from "../images/logo.png";
import {
  bgColorHover,
  borderColorHover,
  textColorHover,
} from "../utils/ColorChange";

const LoginPage = () => {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  return (
    <>
      <section className="flex flex-col lg:flex-row">
        <NavLink to="/">
          {/* <h1 className="milkshake text-4xl text-grey hover:text-darkGrey">
                AS
              </h1> */}
          <div className="w-16 flex ml-4 mt-4 justify-center items-center">
            <img className="w-full" src={logo} alt="logo" />
          </div>
        </NavLink>

        <main className="flex flex-col justify-center mt-20 lg:mt-0 items-center mx-auto">
          <h1 className="text-3xl lg:text-5xl mb-8">Login To Learn</h1>
          <form className="flex flex-col">
            <div className="flex flex-row items-center justify-center">
              <div className="bg-gray-200 border-r-2 border-gray-500 mt-4 py-3 px-4 flex items-center">
                <label htmlFor="email">
                  <HiMail
                    className={`w-4 h-4 lg:w-6 lg:h-6 text-grey ${textColorHover} cursor-pointer`}
                  />
                </label>
              </div>
              <Input
                id="email"
                className="w-64 sm:w-96 border-none bg-gray-200 mt-4 px-4 lg:px-4 lg:w-96 focus:outline-none py-1 lg:py-2"
                placeholder="Your Email"
                type="email"
              />
            </div>
            <div className="flex flex-row items-center justify-center mx-8">
              <div className="bg-gray-200 border-r-2 border-gray-500 mt-4 py-4 lg:py-3 px-4 flex items-center">
                <label htmlFor="password">
                  <FaLock
                    className={`w-4 h-4 lg:w-6 lg:h-6 text-grey ${textColorHover} cursor-pointer`}
                  />
                </label>
              </div>

              <Input
                id="password"
                className="w-64 sm:w-96 border-none bg-gray-200 mt-4  px-4 lg:w-96 focus:outline-none lg:py-0"
                type={values.showPassword ? "text" : "password"}
                onChange={handlePasswordChange("password")}
                placeholder="Your Password"
                value={values.password}
                endAdornment={
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? (
                      <Visibility className={`${textColorHover}`} />
                    ) : (
                      <VisibilityOff className={`${textColorHover}`} />
                    )}
                  </IconButton>
                }
              />
            </div>
            <input
              className={`bg-grey mt-8 outline-none uppercase cursor-pointer text-lg font-semibold tracking-wider text-white px-16 py-2 text-center ${bgColorHover} hover:text-white lg:w-1/2 mx-auto my-10 rounded-xl`}
              value="Login"
              type="submit"
            ></input>
          </form>
        </main>
        <aside className="w-full lg:w-1/3 bg-grey">
          <div className="flex flex-col lg:h-screen justify-center items-center h-96">
            <h2 className="text-2xl font-semibold lg:text-4xl text-white mt-0 lg:mt-10 lg:mb-4 mb-0">
              Hello, My Friend!
            </h2>
            <p className="text-white text-md text-center lg:text-xl">
              To start learning with me please sign up
            </p>
            <Link to="/signup">
              <button
                className={`cursor-pointer text-lg font-semibold tracking-wider text-white px-12 py-2 border-2 border-white ${borderColorHover} outline-none text-center hover:bg-darkGrey ${textColorHover} my-10 rounded-xl uppercase focus:outline-none`}
              >
                Sign Up
              </button>
            </Link>
          </div>
        </aside>
      </section>
    </>
  );
};

export default LoginPage;
