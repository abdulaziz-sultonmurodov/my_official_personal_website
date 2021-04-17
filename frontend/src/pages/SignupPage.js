import React from "react";
import { NavLink, Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";

const SignupPage = () => {
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
          <h1 className="milkshake text-4xl text-grey ml-4 mt-4 hover:text-darkGrey">
            AS
          </h1>
        </NavLink>

        <main className="flex flex-col justify-center items-center mx-auto">
          <h1 className="text-3xl lg:text-5xl mb-8">Create Account</h1>
          <form className="flex flex-col">
            <div className="flex flex-row items-center justify-center">
              <div className="bg-gray-200 border-r-2 border-gray-500 mt-4 py-3 px-4 flex items-center">
                <FaUser className="w-4 h-4 lg:w-6 lg:h-6 text-grey hover:text-darkGrey cursor-pointer" />
              </div>
              <Input
                className="md:w-96 bg-gray-200 mt-4 py-1 lg:py-2 px-6 lg:px-4 lg:w-96 focus:outline-none "
                placeholder="Your Name"
                type="text"
              />
            </div>
            <div className="flex flex-row items-center justify-center">
              <div className="bg-gray-200 border-r-2 border-gray-500 mt-4 py-3 px-4 flex items-center">
                <HiMail className="w-4 h-4 lg:w-6 lg:h-6 text-grey hover:text-darkGrey cursor-pointer" />
              </div>
              <Input
                className="md:w-96 border-none bg-gray-200 mt-4 px-6 lg:px-4 lg:w-96 focus:outline-none py-1 lg:py-2"
                placeholder="Your Email"
                type="email"
              />
            </div>
            <div className="flex flex-row items-center justify-center mx-8">
              <div className="bg-gray-200 border-r-2 border-gray-500 mt-4 py-4 lg:py-3 px-4 flex items-center">
                <FaLock className="w-4 h-4 lg:w-6 lg:h-6 text-grey hover:text-darkGrey cursor-pointer" />
              </div>

              <Input
                className="md:w-96 border-none bg-gray-200 mt-4  px-4 lg:w-96 focus:outline-none lg:py-0"
                type={values.showPassword ? "text" : "password"}
                onChange={handlePasswordChange("password")}
                placeholder="Your Password"
                value={values.password}
                endAdornment={
                  <IconButton
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {values.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                }
              />
            </div>
            <input
              className="bg-grey mt-8 outline-none uppercase cursor-pointer text-lg font-semibold tracking-wider text-white px-16 py-2 text-center hover:bg-darkGrey hover:text-white lg:w-1/2 mx-auto my-10 rounded-xl"
              value="Sign Up"
              type="submit"
            ></input>
          </form>
        </main>
        <aside className="w-full lg:w-1/3 bg-grey">
          <div className="flex flex-col lg:h-screen justify-center items-center h-96">
            <h2 className="text-3xl lg:text-4xl text-white mt-0 lg:mt-10 lg:mb-4 mb-0">
              Welcome Back My Friend!
            </h2>
            <p className="text-white text-lg lg:text-xl">
              To continue your courses with me please login
            </p>
            <Link to="/login">
              <button className="cursor-pointer text-lg font-semibold tracking-wider text-white px-12 py-2 border-2 border-white hover:border-gray-800 outline-none text-center hover:bg-darkGrey hover:text-white my-10 rounded-xl uppercase focus:outline-none">
                Login
              </button>
            </Link>
          </div>
        </aside>
      </section>
    </>
  );
};

export default SignupPage;
