import React, { useState } from "react";
import logo from "../assets/MokxLogo.png";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  function onSubmit(e) {
    e.preventDefault();
    if (formData.confirmPassword === formData.password) {
      navigate("/chat");
    } else {
      alert("Password do not match");
    }
  }
  function handleOnChange(event) {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.id]: event.target.value,
    }));
  }
  return (
    <div className="h-screen max-w-[1440px] flex flex-col justify-center items-center">
      <div className="relative h-screen w-[90%] sm:w-[80%] flex flex-col justify-center items-center">
        {/* Back Arrow */}
        <div className="absolute top-[4%] left-0 flex justify-center items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="10"
            viewBox="0 0 14 10"
            fill="none"
            className="w-[1rem] h-[1rem]"
          >
            <path
              d="M5 1L1 5M1 5L5 9M1 5L13 5"
              stroke="#000E08"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        {/*heading  */}
        <div className="flex flex-col w-full mt-10">
          {/* logo */}
          <div className="flex justify-center items-center">
            <img
              src={logo}
              alt=""
              className="w-[4.5rem] h-[4rem] md:w-[5.5rem] md:h-[5rem] lg:w-[6.5rem] lg:h-[6rem]"
            />
          </div>
          {/* heading */}
          <div className="">
            <h1 className="font-[Raleway] text-[1.125rem] lg:text-[1.75rem] not-italic text-[#69235B] font-bold leading-5 text-center">
              Sign Up with{" "}
              <span className="relative before:absolute before:z-[-100] before:top-[60%] before:left-[10%] before:bg-[#FFC746] before:w-[106%] before:h-[40%]">
                Email
              </span>
            </h1>
          </div>
          {/* paragraph */}
          <div className="mt-4 flex justify-center">
            <p className="font-[inter] w-[90%] md:w-[70%] lg:w-[65%] text-[#69235B] text-center text-[0.875rem] md:text-[1rem] lg:text-[1.125rem] font-light leading-5 tracking-[0.00625rem]">
              Enter your details and dive into a realm of ancient wisdom! 💫
            </p>
          </div>
        </div>
        {/* foam */}
        <div className="my-6 w-[90%] md:w-[70%] lg:w-[65%] lg:mt-[1.5rem]">
          <form action="" className="flex flex-col" onSubmit={onSubmit}>
            <div className="mt-6 flex flex-col w-full flex-start">
              <label
                htmlFor="name"
                className="font-[inter] text-[#69235B] font-medium text-left text-[0.875rem] lg:text-[1rem] not-italic leading-4 tracking-[0.00625rem]"
              >
                Your Name
              </label>
              <input
                onChange={handleOnChange}
                value={formData.name}
                id="name"
                required
                type="text"
                className="font-[Poppins] border-b-[0.125rem] border-[#CDD1D0] outline-none pt-[0.75rem] lg:pt-[1rem] pb-[0.5rem] text-[1rem] lg:text-xl"
              />
            </div>
            <div className="mt-6 flex flex-col w-full flex-start">
              <label
                htmlFor="email"
                className="font-[inter] text-[#69235B] font-medium text-left text-[0.875rem] lg:text-[1rem] not-italic leading-4 tracking-[0.00625rem]"
              >
                Your Email
              </label>
              <input
                onChange={handleOnChange}
                value={formData.email}
                id="email"
                required
                type="email"
                className="border-b-[0.125rem] font-[Poppins] border-[#CDD1D0] outline-none pt-[0.75rem] lg:pt-[1rem] pb-[0.5rem] text-[1rem] lg:text-xl"
              />
            </div>
            <div className="mt-6 flex flex-col w-full flex-start">
              <label
                htmlFor="password"
                className="font-[inter] text-[#69235B] font-medium text-left text-[0.875rem] lg:text-[1rem] not-italic leading-4 tracking-[0.00625rem]"
              >
                Password
              </label>
              <input
                onChange={handleOnChange}
                value={formData.password}
                id="password"
                required
                type="password"
                className="border-b-[0.125rem] font-[Poppins] border-[#CDD1D0] outline-none pt-[0.75rem] lg:pt-[1rem] pb-[0.5rem] text-[1rem] lg:text-xl"
              />
            </div>
            <div className="mt-6 flex flex-col w-full flex-start">
              <label
                htmlFor="confirmPassword"
                className="font-[inter] text-[#69235B] font-medium text-left text-[0.875rem] lg:text-[1rem] not-italic leading-4 tracking-[0.00625rem]"
              >
                Confirm Password
              </label>
              <input
                onChange={handleOnChange}
                value={formData.confirmPassword}
                id="confirmPassword"
                required
                type="password"
                className="border-b-[0.125rem] font-[Poppins] border-[#CDD1D0] outline-none pt-[0.75rem] lg:pt-[1rem] pb-[0.5rem] text-[1rem] lg:text-xl"
              />
            </div>
            <div className="mt-[8.5rem] lg:mt-[8rem]">
              <button
                type="submit"
                className="font-[kumbh] w-full rounded-[0.625rem] bg-[#FFC746] text-[1.25rem] text-[#69235B] not-italic font-medium border border-[#FFC746] px-10 py-2"
              >
                Create an account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
